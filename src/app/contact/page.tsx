export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">যোগাযোগ করুন</h1>
          <p className="text-lg text-neutral-600">আমাদের সাথে যোগাযোগ করতে চাইলে নিচের তথ্য ব্যবহার করুন</p>
        </div>

        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">ইমেইল</h3>
              <a href="mailto:contact@remitlyewallet.com" className="text-[#0067cb] hover:underline">
                contact@remitlyewallet.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">অফিস</h3>
          
              <p className="text-neutral-600 mt-1">Remitly eWallet Inc.<br />125 Liberty Street, Suite 400<br />New York, NY 10006, USA</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">সাপোর্ট</h3>
              <p className="text-neutral-600">২৪/৭ কাস্টমার সাপোর্ট</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

