import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0067cb_0%,#0052a3_50%,#003d7a_100%)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">আমাদের সম্পর্কে</h1>
            <p className="mt-4 text-lg text-white/85 max-w-xl">
              Remitly eWallet তৈরি হয়েছে সাশ্রয়ী, দ্রুত এবং নির্ভরযোগ্য আন্তর্জাতিক পেমেন্টের প্রতিশ্রুতি নিয়ে।
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/15">
                <div className="text-2xl font-semibold">৫ লক্ষ+</div>
                <div className="text-xs text-white/80">ইউজার</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/15">
                <div className="text-2xl font-semibold">৮০০০+</div>
                <div className="text-xs text-white/80">রিসেলার এজেন্ট</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/15">
                <div className="text-2xl font-semibold">২০+</div>
                <div className="text-xs text-white/80">দেশ</div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <Image src="/assets/mockup.png" alt="Remitly eWallet app" width={400} height={800} className="object-contain" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">আমাদের মিশন</h2>
            <p className="mt-3 text-neutral-700">
              সারা বিশ্বের মানুষের জন্য অর্থ পাঠানোকে আরও সহজ ও সাশ্রয়ী করা—এটাই আমাদের মিশন। আমরা বিশ্বাস করি অর্থপ্রবাহের বাধা কমালে মানুষের সম্ভাবনা বাড়ে।
            </p>
          </div>
          <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">আমাদের মূল্যবোধ</h2>
            <ul className="mt-3 space-y-2 text-neutral-700 list-disc pl-5">
              <li>গ্রাহক-প্রথম সিদ্ধান্ত</li>
              <li>স্বচ্ছতা ও আস্থা</li>
              <li>নিরাপত্তা ও কমপ্লায়েন্স</li>
              <li>দ্রুততা ও নির্ভুলতা</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-neutral-50 shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">আমাদের গল্প</h2>
            <p className="mt-3 text-neutral-700">
              আফ্রিকা, ইউরোপ ও এশিয়ায় বিস্তৃত টিম নিয়ে Remitly eWallet আজ বৈধ, দ্রুত এবং সাশ্রয়ী পেমেন্টের জন্য একটি বিশ্বস্ত প্ল্যাটফর্ম। আমরা সেরা রেট, চমৎকার সাপোর্ট এবং স্মার্ট টেকনোলজির সমন্বয়ে আপনাকে সেরা অভিজ্ঞতা দেওয়ার চেষ্টা করি।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


