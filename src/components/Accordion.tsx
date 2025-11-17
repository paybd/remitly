"use client";

import { useState, type ReactNode } from "react";

export type AccordionItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
  variant?: "light" | "dark";
};

export default function Accordion({ items, defaultOpenId, variant = "light" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const isDark = variant === "dark";

  return (
    <div
      className={
        `rounded-2xl border ${
          isDark
            ? "divide-white/10 border-white/10 bg-white/5 text-white"
            : "divide-neutral-200 border-neutral-200 bg-white"
        }`
      }
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="px-4 sm:px-6">
            <button
              type="button"
              aria-expanded={isOpen}
              className={`w-full py-4 flex items-center justify-between gap-4 text-left ${isDark ? "text-white" : "text-neutral-900"}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className={`font-medium ${isDark ? "text-white" : "text-neutral-900"}`}>{item.question}</span>
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full transition-transform ${
                  isDark ? "border border-white/30 text-white/80" : "border border-neutral-300 text-neutral-700"
                } ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className={`pb-4 text-sm sm:text-base ${isDark ? "text-white/80" : "text-neutral-700"}`}>{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}


