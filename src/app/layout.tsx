import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import RateTicker from "@/components/RateTicker";
import localFont from "next/font/local";
import "./globals.css";

const banglaFont = localFont({
  src: [
    { path: "../../public/fonts/uni_bangla_regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/uni_bangla_semibold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/uni_bangla_bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Remitly eWallet — প্রবাস থেকে বাংলাদেশে টাকা পাঠান",
  description: "দ্রুত, সাশ্রয়ী ও নিরাপদ রেমিট্যান্স সেবা।",
  icons: {
    icon: "/assets/mcash.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${banglaFont.className} antialiased bg-white text-neutral-900`}>
        <Header />
        <div className="h-16 md:h-[72px]" aria-hidden="true" />
        <RateTicker />
        <main className="">{children}</main>
        <a
          href="https://wa.me/+17313186845"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp এ আমাদের সাথে কথা বলুন"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-transform"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </a>
        <footer className="bg-neutral-50 text-neutral-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Logo & Description */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <Image src="/assets/mcash.png" alt="Remitly eWallet" width={40} height={40} className="object-contain" />
                </div>
                <p className="text-sm text-neutral-600">দ্রুত এবং নিরাপদ রেমিট্যান্স এক্সচেঞ্জ সার্ভিস।</p>
              </div>

              {/* Menu */}
              <div>
                <h3 className="font-semibold mb-4 text-neutral-900">মেনু</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li><Link href="/" className="hover:text-[#0067cb] transition-colors">হোম</Link></li>
                  <li><Link href="#faq" className="hover:text-[#0067cb] transition-colors">জিজ্ঞাসা</Link></li>
                  <li><Link href="/about" className="hover:text-[#0067cb] transition-colors">আমাদের সম্পর্কে</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold mb-4 text-neutral-900">যোগাযোগ</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li><Link href="/contact" className="hover:text-[#0067cb] transition-colors">যোগাযোগ করুন</Link></li>
                  <li><Link href="https://github.com/paybd/remitly/releases/download/remitlyewallet/remitly-ewallet.apk" className="hover:text-[#0067cb] transition-colors">ডাউনলোড</Link></li>
                </ul>
                <div className="mt-4 text-sm text-neutral-600">
                  <address className="not-italic">
                    <p>1111 3rd Ave, Suite 2100</p>
                    <p>Seattle, WA 98101</p>
                    <p>United States</p>
                  </address>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold mb-4 text-neutral-900">আইনি</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li><Link href="/privacy" className="hover:text-[#0067cb] transition-colors">গোপনীয়তা নীতি</Link></li>
                  <li><Link href="/terms" className="hover:text-[#0067cb] transition-colors">সেবার শর্তাবলী</Link></li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-neutral-200 pt-8">
              <p className="text-center text-sm text-neutral-600">
                © 2025 Remitly eWallet। সর্বস্বত্ব সংরক্ষিত।
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
