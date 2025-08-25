import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import s1 from '../assets/imgs/s1.jpg'
import s2 from '../assets/imgs/s2.jpg'
import s3 from '../assets/imgs/s3.jpg'

function Thumb({ src, active, onClick }) {
  return (
    <button onClick={onClick} className={`aspect-square rounded-lg overflow-hidden border ${active ? 'border-gray-900' : 'border-transparent'} hover:border-gray-300`}>
      <img src={src} className="h-full w-full object-cover" />
    </button>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const numericId = Number(id)
  const product = useMemo(() => ({
    id: numericId,
    title: 'Banarasi Silk Saree',
    brand: 'Mona Signature',
    fabric: 'Silk',
    weave: 'Banarasi',
    work: 'Zari',
    colors: ['Red', 'Blue', 'Green'],
    sizes: ['S', 'M', 'L'],
    price: 6999,
    images: [s1, s2, s3],
    offers: ['Festive Offer: 20% off', 'Extra 5% with cards']
  }), [id])

  const [activeIdx, setActiveIdx] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [selColor, setSelColor] = useState(product.colors[0])
  const [selSize, setSelSize] = useState(product.sizes[0])

  function addToWishlist() {
    const existing = JSON.parse(localStorage.getItem('wishlist') || '[]')
    if (!existing.includes(numericId)) {
      const next = [...existing, numericId]
      localStorage.setItem('wishlist', JSON.stringify(next))
    }
    alert('Added to wishlist!')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 relative">
          <img
            src={product.images[activeIdx]}
            className={`h-full w-full object-cover transition-transform duration-300 ${zoom ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setZoom((z) => !z)}
          />
        </div>
        <div className="mt-3 grid grid-cols-5 gap-3">
          {product.images.map((src, i) => (
            <Thumb key={i} src={src} active={i === activeIdx} onClick={() => setActiveIdx(i)} />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <div className="text-sm text-gray-600">{product.brand}</div>
        <div className="mt-2 text-3xl font-bold">₹{product.price.toLocaleString()}</div>

        <ul className="mt-4 text-sm text-gray-700 space-y-1">
          <li>Fabric: {product.fabric}</li>
          <li>Weave: {product.weave}</li>
          <li>Work: {product.work}</li>
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium">Color</div>
            <div className="mt-2 flex gap-2">
              {product.colors.map((c) => (
                <button key={c} onClick={() => setSelColor(c)} className={`px-3 py-1.5 rounded-full border ${selColor === c ? 'border-gray-900' : 'border-gray-300'}`}>{c}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium">Size</div>
            <div className="mt-2 flex gap-2">
              {product.sizes.map((s) => (
                <button key={s} onClick={() => setSelSize(s)} className={`px-3 py-1.5 rounded-full border ${selSize === s ? 'border-gray-900' : 'border-gray-300'}`}>{s}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {product.offers.map((o, i) => (
            <div key={i} className="rounded-xl bg-green-50 text-green-800 border border-green-200 px-4 py-2 text-sm">{o}</div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button className="px-6 py-3 rounded-full bg-gray-900 text-white">Add to Cart</button>
          <button onClick={addToWishlist} className="px-6 py-3 rounded-full border border-gray-300">Add to Wishlist</button>
        </div>
      </div>
    </div>
  )
}