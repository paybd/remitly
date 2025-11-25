"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Faq from "@/components/Faq";
import Link from "next/link";

// Bubble Component
function FloatingBubble({
  size,
  left,
  top,
  delay,
  duration,
  color = "255,255,255",
  opacity = 0.35,
}: {
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  color?: string;
  opacity?: number;
}) {
  const fillOpacity = Math.min(opacity, 0.55);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left,
        top,
        borderRadius: "50%",
        backgroundColor: `rgba(${color}, ${fillOpacity})`,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        zIndex: 1,
        opacity: 1,
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
    />
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionsRef.current).forEach((key) => {
      const element = sectionsRef.current[key];
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-[#0067cb] text-white pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Floating Bubbles */}
        <FloatingBubble size={120} left="10%" top="20%" delay={0} duration={6} opacity={0.42} />
        <FloatingBubble size={90} left="70%" top="60%" delay={1} duration={8} opacity={0.36} />
        <FloatingBubble size={160} left="48%" top="35%" delay={1.8} duration={9} opacity={0.48} />
        <FloatingBubble size={70} left="85%" top="12%" delay={0.5} duration={10} opacity={0.34} />
        <FloatingBubble size={110} left="22%" top="72%" delay={1.4} duration={11} opacity={0.38} />
        <FloatingBubble size={90} left="60%" top="82%" delay={2.8} duration={7} opacity={0.34} />
        <FloatingBubble size={180} left="32%" top="12%" delay={0.8} duration={12} opacity={0.5} />
        <FloatingBubble size={210} left="78%" top="78%" delay={2.2} duration={14} opacity={0.46} />
        <FloatingBubble size={140} left="5%" top="85%" delay={3.4} duration={9.5} opacity={0.4} />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            {/* Left: Text Content */}
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#1a8bff]/30 blur-3xl -z-10 animate-pulse"></div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-left animate-fade-in-up animation-delay-100">
                প্রবাস থেকে বাংলাদেশে টাকা পাঠান
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 text-left animate-fade-in-up animation-delay-200">
                দ্রুত, নিরাপদ এবং সাশ্রয়ী আন্তর্জাতিক রেমিট্যান্স সেবা। কয়েকটি ক্লিকেই বিশ্বের যেকোনো প্রান্ত থেকে বাংলাদেশে আপনার প্রিয়জনদের কাছে টাকা পাঠান।
              </p>
              <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-300">
                <a
                  href="https://github.com/paybd/remitly/releases/download/remitlyeWallet_v4/remitlyeWallet-v4.apk"
                  className="inline-flex items-center justify-center rounded-lg bg-[#0067cb] border-2 border-white text-white px-8 py-3 text-base font-semibold hover:bg-[#0052a3] transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl w-fit"
                >
                  ডাউনলোড করুন
                </a>
                <div className="mt-2">
                  <Image 
                    src="/assets/certified.png" 
                    alt="Certified" 
                    width={150} 
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="relative mx-auto w-full max-w-[220px] animate-fade-in-up animation-delay-400">
              <div
                className="relative w-full aspect-[9/19] overflow-hidden animate-phone-float"
                style={{ animationDelay: "1.2s", animationDuration: "6.5s" }}
              >
                <Image src="/assets/mockup.png" alt="Remitly eWallet app screenshot" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              ref={(el) => {
                sectionsRef.current.featuresTitle = el;
              }}
              className={`text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 transition-all duration-700 ${
                isVisible.featuresTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              কেন আমাদের বেছে নেবেন
            </h2>
            <p 
              className={`text-lg text-neutral-600 transition-all duration-700 delay-100 ${
                isVisible.featuresTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              রেমিট্যান্স প্রেরণে সেরা অ্যাপ
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div 
              ref={(el) => {
                sectionsRef.current.feature1 = el;
              }}
              className={`text-center p-8 rounded-2xl bg-[#0067cb] text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible.feature1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible.feature1 ? '0ms' : '0ms' }}
            >
              <div className="text-5xl mb-4 animate-bounce-in">💰</div>
              <h3 className="text-xl font-semibold mb-3">বেশি এক্সচেঞ্জ রেট</h3>
              <p className="text-white/90">প্রতিযোগিতামূলক এবং স্বচ্ছ রেট, কোনো গোপন ফি নেই</p>
            </div>

            {/* Feature 2 */}
            <div 
              ref={(el) => {
                sectionsRef.current.feature2 = el;
              }}
              className={`text-center p-8 rounded-2xl bg-[#0067cb] text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible.feature2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible.feature2 ? '150ms' : '0ms' }}
            >
              <div className="text-5xl mb-4 animate-bounce-in">⚡</div>
              <h3 className="text-xl font-semibold mb-3">অটো সার্ভার</h3>
              <p className="text-white/90">ঘন্টার পর ঘন্টা নয়, সেকেন্ডেই টাকা পৌঁছে যায়</p>
            </div>

            {/* Feature 3 */}
            <div 
              ref={(el) => {
                sectionsRef.current.feature3 = el;
              }}
              className={`text-center p-8 rounded-2xl bg-[#0067cb] text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible.feature3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible.feature3 ? '300ms' : '0ms' }}
            >
              <div className="text-5xl mb-4 animate-bounce-in">🔒</div>
              <h3 className="text-xl font-semibold mb-3">নিরাপদ ও নির্ভরযোগ্য</h3>
              <p className="text-white/90">Remitly eWallet আপনার লেনদেন কে নিরাপদ ও রাখতে সর্বদা সচেষ্ট</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reseller Steps Section */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              ref={(el) => {
                sectionsRef.current.stepsTitle = el;
              }}
              className={`text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 transition-all duration-700 ${
                isVisible.stepsTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              কিভাবে রিসেলার হবেন
            </h2>
            <p 
              className={`text-lg text-neutral-600 transition-all duration-700 delay-100 ${
                isVisible.stepsTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              তিনটি সহজ ধাপে রিসেলার হোন
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Step 1 */}
            <div 
              ref={(el) => {
                sectionsRef.current.step1 = el;
              }}
              className={`text-center p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:-translate-y-2 ${
                isVisible.step1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible.step1 ? '0ms' : '0ms' }}
            >
              <div className="w-16 h-16 rounded-full bg-[#0067cb] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                ১
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">অ্যাকাউন্ট খুলুন</h3>
              <p className="text-neutral-600">মাত্র কয়েক মিনিটে আপনার ফোন নাম্বার দিয়ে সাইন আপ করুন</p>
            </div>

            {/* Step 2 */}
            <div 
              ref={(el) => {
                sectionsRef.current.step2 = el;
              }}
              className={`text-center p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:-translate-y-2 ${
                isVisible.step2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible.step2 ? '150ms' : '0ms' }}
            >
              <div className="w-16 h-16 rounded-full bg-[#0067cb] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                ২
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">তথ্য ভেরিফাই করুন</h3>
              <p className="text-neutral-600">আপনার দেওয়া তথ্য ও ছবি ভেরিফাই করুন</p>
            </div>

            {/* Step 3 */}
            <div 
              ref={(el) => {
                sectionsRef.current.step3 = el;
              }}
              className={`text-center p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:-translate-y-2 ${
                isVisible.step3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible.step3 ? '300ms' : '0ms' }}
            >
              <div className="w-16 h-16 rounded-full bg-[#0067cb] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                ৩
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">রেমিট্যান্স এক্সচেঞ্জ করুন</h3>
              <p className="text-neutral-600">পেমেন্ট পদ্ধতি বেছে নিয়ে ডিপোজিট করুন</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-[#0067cb] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            ref={(el) => {
              sectionsRef.current.cta = el;
            }}
            className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            শুরু করতে প্রস্তুত?
          </h2>
          <p 
            className={`text-lg text-white/90 mb-8 transition-all duration-700 delay-100 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            হাজারো সন্তুষ্ট রিসেলারের সাথে যোগ দিন
          </p>
          <a
            href="https://github.com/paybd/remitly/releases/download/remitlyeWallet_v4/remitlyeWallet-v4.apk"
            className={`inline-flex items-center justify-center rounded-lg bg-white text-[#0067cb] px-8 py-3 text-base font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible.cta ? '200ms' : '0ms' }}
          >
            ডাউনলোড করুন
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 
            ref={(el) => {
              sectionsRef.current.faq = el;
            }}
            className={`text-3xl sm:text-4xl font-bold text-neutral-900 mb-8 text-center transition-all duration-700 ${
              isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            জিজ্ঞাসা
          </h2>
          <div className="max-w-3xl mx-auto">
            <Faq />
          </div>
        </div>
      </section>
    </div>
  );
}
