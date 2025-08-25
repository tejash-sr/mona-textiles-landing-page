import { Link, NavLink } from 'react-router-dom'
import { sareeImages, menImages, getImageByIndex } from '../utils/images'

function CategoryCard({ title, image, to }) {
  return (
    <Link to={to} className="group relative overflow-hidden rounded-3xl shadow-card">
      <img src={image} alt="" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
      <div className="absolute bottom-0 p-6 text-white">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="opacity-80">Explore now →</div>
      </div>
    </Link>
  )
}

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
        <img src={product.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <div>
          <div className="font-medium">{product.title}</div>
          <div className="text-sm text-gray-500">{product.fabric}</div>
        </div>
        <div className="font-semibold">₹{product.price}</div>
      </div>
    </Link>
  )
}

const demoProducts = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: [
    'Banarasi Saree',
    'Kanjivaram Saree',
    'Chiffon Saree',
    'Organza Saree',
    'Embroidered Kurta',
    'Linen Shirt',
    'Silk Kurta',
    'Printed Shirt'
  ][i],
  fabric: [
    'Silk', 'Silk Blend', 'Chiffon', 'Organza', 'Cotton Blend', 'Linen', 'Silk', 'Cotton'
  ][i],
  price: (2999 + i * 350).toLocaleString(),
  image: [
    sareeImages[0], sareeImages[1], sareeImages[4], sareeImages[5],
    menImages[0], menImages[1], menImages[2], menImages[3]
  ][i]
}))

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="relative">
          <img
            src={sareeImages[0]}
            alt=""
            className="h-[72vh] w-full object-cover"
            style={{ filter: 'brightness(1.1) contrast(1.1) saturate(1.15) sharpness(0.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
        </div>
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 ring-2 ring-white/70 overflow-hidden">
                <img src="src\assets\imgs\logo.png" alt="Mona Textiles" className="h-full w-full object-contain p-1.5" />
              </span>
              <div className="text-xl font-semibold tracking-wide drop-shadow">Mona Textiles</div>
            </div>
            <div className="text-sm uppercase tracking-widest opacity-80">Festive 2025</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">Weaves of Heritage, Designs for Today</h1>
            <p className="mt-4 max-w-xl opacity-90">Discover sarees, salwar, menswear and kidswear crafted with love. Exclusive festive offers live now.</p>
            <div className="mt-6 flex gap-3">
              <NavLink to="/collections" className="btn-primary">Shop Collections</NavLink>
              <NavLink to="/offers" className="btn-outline">View Offers</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured Categories</h2>
          <NavLink to="/collections" className="text-sm text-gray-600 hover:text-gray-900">View all →</NavLink>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard title="Sarees" to="/collections?category=sarees" image={sareeImages[2]} />
          <CategoryCard title="Salwar" to="/collections?category=salwar" image={sareeImages[3]} />
          <CategoryCard title="Men's" to="/collections?category=mens" image={menImages[0]} />
          <CategoryCard title="Kids" to="/collections?category=kids" image={menImages[1]} />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold">New Arrivals</h2>
            <NavLink to="/collections?sort=new" className="text-sm text-gray-600 hover:text-gray-900">See more →</NavLink>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {demoProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Festive Sale: Up to 40% Off</h3>
              <p className="mt-1 opacity-90">Sarees, salwar suits and menswear. Limited time only.</p>
            </div>
            <NavLink to="/offers" className="px-6 py-3 rounded-full bg-white text-gray-900 font-medium">Grab Deals</NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center">What our customers say</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <blockquote key={i} className="rounded-2xl bg-white p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-medium">Customer {i}</div>
                    <div className="text-xs text-gray-500">Verified Buyer</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">“Beautiful collection and courteous staff. The saree quality is outstanding.”</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


