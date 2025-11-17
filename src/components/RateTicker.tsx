"use client";

import { useEffect, useMemo, useState, useRef } from "react";

type ApiRate = {
  country: string;
  currency: string;
  baseRate: number | null;
  adjustment: number;
  companyRate: number;
};

export default function RateTicker() {
  const [rates, setRates] = useState<ApiRate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(22);
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchRates() {
      setHasError(false);
      setIsLoading(true);
      try {
        const response = await fetch("/api/rates", { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch rates");
        const data = (await response.json()) as ApiRate[];
        if (isMounted) {
          setRates(data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
        console.error("Failed to load rates", error);
      }
    }

    fetchRates();
    const interval = setInterval(fetchRates, 1000 * 60 * 5); // refresh every 5 minutes

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Calculate responsive animation duration based on screen width
  useEffect(() => {
    function calculateDuration() {
      if (!containerRef.current || !tickerRef.current || !rates.length) return;

      // Wait for DOM to be fully rendered and measured
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (!containerRef.current || !tickerRef.current || !rates.length) return;

          const containerWidth = containerRef.current.offsetWidth;
          const fullTickerWidth = tickerRef.current.scrollWidth;
          const oneSetWidth = fullTickerWidth / 3; // One complete set of 8 currencies
          
          // Calculate duration to ensure ALL 8 currencies scroll through viewport
          // Animation moves -50% which equals oneSetWidth (all 8 currencies)
          // We need to calculate how long it takes for all 8 to scroll through
          let duration;
          
          if (containerWidth < 640) {
            // Mobile: Ensure all 8 currencies scroll through viewport
            // Calculate average width per currency item
            const avgItemWidth = oneSetWidth / 8;
            // How many items are visible in viewport at once
            const visibleItems = Math.floor(containerWidth / avgItemWidth) || 1;
            // Items that need to scroll through: total 8 minus initially visible
            // Add 1 to ensure the last item fully scrolls through viewport
            const itemsToScrollThrough = Math.max(1, 8 - visibleItems + 1);
            // Calculate duration: each item needs time to scroll through viewport
            // Speed: pixels per second - adjust for mobile readability
            const pixelsPerSecond = 60;
            // Duration = (number of items to scroll * avg item width) / speed
            // This ensures all items scroll through before loop restarts
            duration = (itemsToScrollThrough * avgItemWidth) / pixelsPerSecond;
            // Minimum duration: ensure at least 1 second per currency for visibility
            const minDuration = 8 * 1.2; // 9.6 seconds minimum for 8 currencies
            duration = Math.max(minDuration, duration);
          } else if (containerWidth < 1024) {
            // Tablet: Similar logic, faster speed
            const avgItemWidth = oneSetWidth / 8;
            const visibleItems = Math.floor(containerWidth / avgItemWidth) || 2;
            const itemsToScrollThrough = Math.max(1, 8 - visibleItems + 1);
            const pixelsPerSecond = 80;
            duration = (itemsToScrollThrough * avgItemWidth) / pixelsPerSecond;
            duration = Math.max(10, duration);
          } else {
            // Desktop: Faster since more items visible
            const avgItemWidth = oneSetWidth / 8;
            const visibleItems = Math.floor(containerWidth / avgItemWidth) || 3;
            const itemsToScrollThrough = Math.max(1, 8 - visibleItems + 1);
            const pixelsPerSecond = 100;
            duration = (itemsToScrollThrough * avgItemWidth) / pixelsPerSecond;
            duration = Math.max(10, duration);
          }
          
          setAnimationDuration(duration);
        }, 200);
      });
    }

    // Initial calculation with delay to ensure DOM is ready
    const timeoutId = setTimeout(calculateDuration, 300);

    // Recalculate on window resize and when rates change
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(calculateDuration, 150);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    if (tickerRef.current) {
      resizeObserver.observe(tickerRef.current);
    }

    window.addEventListener("resize", () => {
      setTimeout(calculateDuration, 150);
    });

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateDuration);
    };
  }, [rates]);

  const tickerItems = useMemo(() => {
    if (!rates?.length) return [] as ApiRate[];
    return [...rates, ...rates, ...rates];
  }, [rates]);

  return (
    <div className="bg-[#003d7a] text-white text-sm border-b border-white/10 relative z-30">
      <div className="mx-auto max-w-7xl flex items-center gap-3 px-4 sm:px-6 lg:px-8 py-2 overflow-hidden min-h-[36px]">
        <span className="shrink-0 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] bg-white/10 px-2 py-1 rounded-full">
          আজকের রেট
        </span>
        <div ref={containerRef} className="relative flex-1 overflow-hidden">
          {isLoading ? (
            <span className="text-white/70">লাইভ রেট লোড হচ্ছে...</span>
          ) : hasError ? (
            <span className="text-red-200">রেট আপডেট করা যাচ্ছে না, কিছুক্ষণ পর আবার চেষ্টা করুন।</span>
          ) : (
            <div
              ref={tickerRef}
              className="flex gap-3 sm:gap-5 md:gap-7 whitespace-nowrap"
              style={{ animation: `ticker ${animationDuration}s linear infinite` }}
            >
              {tickerItems.map((rate, index) => (
                <span key={`${rate.currency}-${index}`} className="flex items-center gap-1 sm:gap-2 text-white/90 shrink-0">
                  <span className="font-semibold text-white text-xs sm:text-sm">{rate.country}</span>
                  <span className="text-white/60 text-xs sm:text-sm">({rate.currency})</span>
                  {rate.baseRate ? (
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <span className="text-white/60 line-through text-xs sm:text-sm">{rate.baseRate.toFixed(2)}</span>
                      <span className="font-semibold text-[#80bfff] text-xs sm:text-sm">{rate.companyRate.toFixed(2)}</span>
                    </span>
                  ) : (
                    <span className="font-semibold text-[#9febc4] text-xs sm:text-sm">{rate.companyRate.toFixed(2)}</span>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

