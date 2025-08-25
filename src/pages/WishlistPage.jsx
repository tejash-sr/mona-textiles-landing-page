import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function WishlistPage() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const params = useMemo(() => new URLSearchParams(search), [search])
  const [items, setItems] = useState(() => {
    const qs = params.get('items')
    if (qs) return qs.split(',').map((s) => Number(s)).filter(Boolean)
    return JSON.parse(localStorage.getItem('wishlist') || '[]')
  })

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items))
  }, [items])

  function share() {
    const url = new URL(window.location.href)
    url.searchParams.set('items', items.join(','))
    navigator.clipboard.writeText(url.toString())
    alert('Wishlist link copied!')
  }

  const products = items.map((id) => ({
    id,
    title: `Wishlist Item ${id}`,
    price: 2999 + id * 100,
    image: `https://picsum.photos/seed/w${id}/800/1000`
  }))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Wishlist</h1>
        <div className="flex gap-2">
          <button onClick={share} className="px-4 py-2 rounded-full border">Share</button>
          <button onClick={() => setItems([])} className="px-4 py-2 rounded-full border">Clear</button>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="mt-10 text-center text-gray-600">Your wishlist is empty.</div>
      ) : (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group">
              <Link to={`/product/${p.id}`}>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                  <img src={p.image} className="h-full w-full object-cover" />
                </div>
              </Link>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="font-medium">{p.title}</div>
                <div className="font-semibold">₹{p.price.toLocaleString()}</div>
              </div>
              <div className="mt-2 flex gap-2">
                <button onClick={() => setItems((x) => x.filter((id) => id !== p.id))} className="px-3 py-1.5 rounded-full border">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


