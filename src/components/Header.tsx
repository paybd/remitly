'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0067cb] text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/assets/mcash.png" alt="Remitly eWallet" width={40} height={40} className="object-contain" />
            <span className="text-lg font-semibold hidden sm:block">Remitly eWallet</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition-colors font-medium">হোম</Link>
            <Link href="#faq" className="hover:text-white transition-colors font-medium">জিজ্ঞাসা</Link>
            <Link href="/about" className="hover:text-white transition-colors font-medium">আমাদের সম্পর্কে</Link>
            <Link href="/contact" className="hover:text-white transition-colors font-medium">যোগাযোগ</Link>
            <Link href="https://github.com/paybd/remitly/releases/download/remitlyeWallet_v7/remitly_ewallet_v7.0.1.apk" className="rounded-lg bg-white text-[#0067cb] px-4 py-2 text-sm font-semibold hover:bg-white/90 transition">ডাউনলোড</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/20">
            <nav className="flex flex-col gap-2 pt-4">
              <Link href="/" onClick={closeMenu} className="px-4 py-2 text-sm text-white/90 hover:bg-white/10 rounded-lg transition-colors font-medium">হোম</Link>
              <Link href="#faq" onClick={closeMenu} className="px-4 py-2 text-sm text-white/90 hover:bg-white/10 rounded-lg transition-colors font-medium">জিজ্ঞাসা</Link>
              <Link href="/about" onClick={closeMenu} className="px-4 py-2 text-sm text-white/90 hover:bg-white/10 rounded-lg transition-colors font-medium">আমাদের সম্পর্কে</Link>
              <Link href="/contact" onClick={closeMenu} className="px-4 py-2 text-sm text-white/90 hover:bg-white/10 rounded-lg transition-colors font-medium">যোগাযোগ</Link>
              <Link href="https://github.com/paybd/remitly/releases/download/remitlyeWallet_v7/remitly_ewallet_v7.0.1.apk" onClick={closeMenu} className="px-4 py-2 text-sm text-center rounded-lg bg-white text-[#0067cb] font-semibold hover:bg-white/90 transition">ডাউনলোড</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
