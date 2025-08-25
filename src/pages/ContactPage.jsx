import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold">Contact & Support</h1>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="rounded-2xl border p-6" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <div className="font-medium mb-3">Contact Form</div>
          <div className="grid grid-cols-1 gap-3">
            <input required placeholder="Name" className="rounded-lg border px-3 py-2" />
            <input required type="email" placeholder="Email" className="rounded-lg border px-3 py-2" />
            <input placeholder="Phone" className="rounded-lg border px-3 py-2" />
            <textarea required placeholder="Message" rows={4} className="rounded-lg border px-3 py-2" />
            <button className="px-6 py-3 rounded-full bg-gray-900 text-white">Send</button>
            {sent && <div className="text-green-700 text-sm">Thanks! We’ll get back soon.</div>}
          </div>
        </form>

        <div className="rounded-2xl border p-6">
          <div className="font-medium mb-3">Support</div>
          <ul className="text-gray-700 space-y-2">
            <li>WhatsApp: +91 90000 12345</li>
            <li>Phone: 044-123456</li>
            <li>Email: help@monatextiles.com</li>
          </ul>

          <div id="faq" className="mt-6">
            <div className="font-medium mb-2">FAQ</div>
            <details className="rounded-lg border p-3 mb-2">
              <summary className="cursor-pointer">Shipping times</summary>
              <div className="text-sm text-gray-600 mt-2">Orders ship in 2-4 days.</div>
            </details>
            <details className="rounded-lg border p-3 mb-2">
              <summary className="cursor-pointer">Customization</summary>
              <div className="text-sm text-gray-600 mt-2">Blouse stitching available at select branches.</div>
            </details>
          </div>

          <div id="returns" className="mt-6">
            <div className="font-medium mb-2">Returns & Exchange Policy</div>
            <p className="text-sm text-gray-600">7-day easy returns on unused items with tags. Exchange available in-store.</p>
          </div>
        </div>
      </section>
    </div>
  )
}


