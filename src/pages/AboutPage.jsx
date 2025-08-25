export default function AboutPage() {
  const timeline = [
    { year: '1985', text: 'Founded as a small saree boutique.' },
    { year: '1998', text: 'Expanded to menswear and kidswear.' },
    { year: '2010', text: 'Launched signature handloom line.' },
    { year: '2023', text: 'Awarded for sustainable practices.' }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold">About Us</h1>
      <p className="mt-3 text-gray-700">Mona Textiles is a celebration of Indian craftsmanship. From handloom silks to contemporary casuals, our collections blend heritage with modern design, made responsibly and thoughtfully.</p>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6">
          <div className="font-medium mb-2">Craftsmanship</div>
          <p className="text-gray-700">We collaborate with artisans across Banaras, Kanchipuram and more, honoring techniques like zari, embroidery and hand weaving.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <div className="font-medium mb-2">Sustainability</div>
          <p className="text-gray-700">Natural fibers, low-impact dyes and fair production. Packaging is recycled and recyclable.</p>
        </div>
      </section>

      <section className="mt-12">
        <div className="font-medium mb-3">Awards</div>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Best Regional Ethnic Brand 2023</li>
          <li>Craft Revival Award 2022</li>
        </ul>
      </section>

      <section className="mt-12">
        <div className="font-medium mb-3">Our Journey</div>
        <div className="relative pl-10">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
          <ul className="space-y-7">
            {timeline.map((t) => (
              <li key={t.year} className="relative pl-3 pt-1">
                <span className="absolute left-2 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gray-900 ring-4 ring-white" />
                <div className="text-sm text-gray-500 mb-1 pl-2">{t.year}</div>
                <div className="font-medium leading-relaxed pl-2">{t.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}


