import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function CareersPage() {
  const roles = [
    { title: 'Store Manager', location: 'Chennai', type: 'Full-time' },
    { title: 'Fashion Designer', location: 'Bengaluru', type: 'Full-time' },
    { title: 'E-commerce Executive', location: 'Remote', type: 'Contract' }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between">
    <h1 className="text-3xl font-semibold">Careers</h1>
    <a 
      href="/application-form.pdf" 
      download="Mona_Textiles_Application_Form.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl"
    >
      📄 Download Application Form
    </a>
    </div>

      <section className="mt-6 space-y-4">
        {roles.map((r) => (
          <div key={r.title} className="rounded-2xl border p-6">
            <div className="font-semibold">{r.title}</div>
            <div className="text-sm text-gray-600">{r.location} • {r.type}</div>
            <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required placeholder="Full name" className="rounded-lg border px-3 py-2" />
              <input required placeholder="Email" type="email" className="rounded-lg border px-3 py-2" />
              <input required placeholder="Phone" className="rounded-lg border px-3 py-2" />
              <input required placeholder="Resume (mock upload)" type="file" className="rounded-lg border px-3 py-2" />
              <textarea placeholder="Cover letter" className="rounded-lg border px-3 py-2 sm:col-span-2" rows={4} />
              <div className="sm:col-span-2">
                <button type="submit" onClick={(e) => { e.preventDefault(); alert('Application submitted (mock).') }} className="px-6 py-3 rounded-full bg-gray-900 text-white">Apply</button>
              </div>
            </form>
          </div>
        ))}
      </section>

      <div className="mt-8 text-sm text-gray-600">HR Contact: hr@monatextiles.com • +91 90000 56789</div>
      
      
    </div>
  )
}


