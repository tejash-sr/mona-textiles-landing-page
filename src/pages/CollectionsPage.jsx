import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getImageByIndex } from '../utils/images'

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

const allProducts = Array.from({ length: 120 }).map((_, i) => ({
  id: i + 1,
  title: ['Banarasi Saree', 'Kanjivaram Saree', 'Embroidered Kurta', 'Linen Shirt'][i % 4] + ' #' + (i + 1),
  category: ['sarees', 'salwar', 'mens', 'kids'][i % 4],
  fabric: ['Silk', 'Silk Blend', 'Cotton', 'Linen'][i % 4],
  weave: ['Banarasi', 'Kanjivaram', 'Handloom', 'Powerloom'][i % 4],
  work: ['Zari', 'Embroidery', 'Print', 'Plain'][i % 4],
  color: ['Red', 'Blue', 'Green', 'Gold'][i % 4],
  size: ['S', 'M', 'L', 'XL'][i % 4],
  availability: i % 7 !== 0,
  popularity: Math.random(),
  price: 1999 + (i % 20) * 200,
  image: getImageByIndex(i)
}))

export default function CollectionsPage() {
  const q = useQuery()
  const [filters, setFilters] = useState({
    priceMax: Number(q.get('priceMax')) || 30000,
    color: q.get('color') || 'any',
    fabric: q.get('fabric') || 'any',
    weave: q.get('weave') || 'any',
    work: q.get('work') || 'any',
    size: q.get('size') || 'any',
    availability: q.get('availability') || 'any'
  })
  const [sort, setSort] = useState(q.get('sort') || 'popularity')
  const [items, setItems] = useState(24)
  const loadMoreRef = useRef(null)

  const filtered = useMemo(() => {
    let list = allProducts
    const cat = q.get('category')
    if (cat) list = list.filter((p) => p.category === cat)
    list = list.filter((p) => p.price <= filters.priceMax)
    if (filters.color !== 'any') list = list.filter((p) => p.color === filters.color)
    if (filters.fabric !== 'any') list = list.filter((p) => p.fabric === filters.fabric)
    if (filters.weave !== 'any') list = list.filter((p) => p.weave === filters.weave)
    if (filters.work !== 'any') list = list.filter((p) => p.work === filters.work)
    if (filters.size !== 'any') list = list.filter((p) => p.size === filters.size)
    if (filters.availability !== 'any') list = list.filter((p) => p.availability)
    const sortKey = {
      popularity: (a, b) => b.popularity - a.popularity,
      new: (a, b) => b.id - a.id,
      priceAsc: (a, b) => a.price - b.price,
      priceDesc: (a, b) => b.price - a.price
    }[sort]
    return [...list].sort(sortKey)
  }, [filters, sort, q])

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setItems((n) => Math.min(n + 24, filtered.length))
      }
    })
    if (loadMoreRef.current) io.observe(loadMoreRef.current)
    return () => io.disconnect()
  }, [filtered.length])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Collections</h1>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full border border-gray-300 px-4 py-2">
          <option value="popularity">Sort: Popularity</option>
          <option value="new">Sort: New</option>
          <option value="priceAsc">Sort: Price Low to High</option>
          <option value="priceDesc">Sort: Price High to Low</option>
        </select>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Filters */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="rounded-2xl border border-gray-200 p-4">
            <div className="font-medium mb-2">Price</div>
            <input type="range" min="0" max="30000" step="100" value={filters.priceMax} onChange={(e) => setFilters({ ...filters, priceMax: Number(e.target.value) })} className="w-full" />
            <div className="text-sm text-gray-600 mt-1">Up to ₹{filters.priceMax.toLocaleString()}</div>
          </div>

          {[
            ['Color', 'color', ['any', 'Red', 'Blue', 'Green', 'Gold']],
            ['Fabric', 'fabric', ['any', 'Silk', 'Silk Blend', 'Cotton', 'Linen']],
            ['Weave', 'weave', ['any', 'Banarasi', 'Kanjivaram', 'Handloom', 'Powerloom']],
            ['Work', 'work', ['any', 'Zari', 'Embroidery', 'Print', 'Plain']],
            ['Size', 'size', ['any', 'S', 'M', 'L', 'XL']],
            ['Availability', 'availability', ['any', 'In stock']]
          ].map(([label, key, values]) => (
            <div key={key} className="rounded-2xl border border-gray-200 p-4">
              <div className="font-medium mb-2">{label}</div>
              <select value={filters[key]} onChange={(e) => setFilters({ ...filters, [key]: e.target.value })} className="w-full rounded-full border border-gray-300 px-3 py-2">
                {values.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          ))}
        </aside>

        {/* Grid */}
        <section className="lg:col-span-9">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {filtered.slice(0, items).map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                  <img src={p.image} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-3">
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-gray-500">{p.fabric} • {p.weave}</div>
                  <div className="font-semibold">₹{p.price.toLocaleString()}</div>
                </div>
              </Link>
            ))}
          </div>
          <div ref={loadMoreRef} className="h-10" />
          {items < filtered.length && (
            <div className="text-center text-sm text-gray-600">Loading more...</div>
          )}
        </section>
      </div>
    </div>
  )
}


