export default function OffersPage() {
  const events = [
    { title: 'Bridal Week', date: 'Oct 10-15', branch: 'Main Showroom', desc: 'Couture sarees and lehengas showcase.' },
    { title: 'Festive Fashion Show', date: 'Nov 02', branch: 'City Centre', desc: 'Live ramps and styling tips.' }
  ]
  const coupons = [
    { code: 'FESTIVE20', desc: '20% off on sarees', expiry: 'Oct 30' },
    { code: 'WELCOMEMT', desc: '₹500 off over ₹3999', expiry: 'Dec 31' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold">Offers & Events</h1>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6">
          <div className="font-medium mb-3">Seasonal Offers</div>
          <div className="space-y-3">
            {coupons.map((c) => (
              <div key={c.code} className="rounded-xl bg-gray-50 p-4 border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{c.code}</div>
                    <div className="text-sm text-gray-600">{c.desc}</div>
                  </div>
                  <div className="text-xs text-gray-500">Valid till {c.expiry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border p-6">
          <div className="font-medium mb-3">In-store Events</div>
          <div className="space-y-3">
            {events.map((e) => (
              <div key={e.title} className="rounded-xl bg-gray-50 p-4 border">
                <div className="font-semibold">{e.title}</div>
                <div className="text-sm text-gray-600">{e.desc}</div>
                <div className="mt-1 text-xs text-gray-500">{e.date} • {e.branch}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


