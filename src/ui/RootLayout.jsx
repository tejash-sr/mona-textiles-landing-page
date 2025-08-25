import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../assets/imgs/logo.png';
function classNames(...args) {
  return args.filter(Boolean).join(' ')
}

export default function RootLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setQuery(params.get('q') || '')
  }, [location.search])

  function onSubmit(e) {
    e.preventDefault()
    const value = query.trim()
    if (!value) return
    const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]')
    const next = [value, ...recent.filter((x) => x !== value)].slice(0, 8)
    localStorage.setItem('recentSearches', JSON.stringify(next))
    navigate(`/search?q=${encodeURIComponent(value)}`)
  }

  return (
    <div className="min-h-full flex flex-col">
      <header className="z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full overflow-hidden bg-gray-200">
              <img src={logo} alt="Mona Textiles" className="h-full w-full object-contain p-1" onError={(e) => { e.currentTarget.src = 'https://dummyimage.com/80x80/111/fff.png&text=M'; }} />
            </span>
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-wide">Mona Textiles</div>
              <div className="text-xs text-black">VANNAGALIN VARNAJALAM</div>
            </div>
          </NavLink>

          <nav className="ml-6 hidden md:flex items-center gap-4 text-sm">
            {[
              ['Collections', '/collections'],
              ['Offers', '/offers'],
              ['About', '/about'],
              ['Careers', '/careers'],
              ['Contact', '/contact']
            ].map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  classNames(
                    'px-3 py-2 rounded-full hover:bg-gray-100 transition',
                    isActive && 'bg-gray-900 text-white hover:bg-gray-900'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <form onSubmit={onSubmit} className="ml-auto flex-1 max-w-md hidden md:block">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sarees, salwar, menswear..."
                className="w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 px-5 py-2.5"
              />
              <button type="submit" className="absolute right-1.5 top-1.5 px-4 py-1.5 rounded-full bg-gray-900 text-white text-sm hover:-translate-y-0.5 hover:shadow-md">
                Search
              </button>
            </div>
          </form>

          <div className="ml-4 flex items-center gap-2">
            <NavLink to="/wishlist" className="px-3 py-2 rounded-full hover:bg-gray-100">Wishlist</NavLink>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gradient-to-b from-rose-50 via-fuchsia-50/60 to-indigo-50">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold mb-3">Shop</div>
            <ul className="space-y-2 text-gray-600">
              <li><NavLink to="/collections?category=sarees">Sarees</NavLink></li>
              <li><NavLink to="/collections?category=salwar">Salwar</NavLink></li>
              <li><NavLink to="/collections?category=mens">Men's</NavLink></li>
              <li><NavLink to="/collections?category=kids">Kids</NavLink></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-gray-600">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/careers">Careers</NavLink></li>
              <li><NavLink to="/offers">Offers & Events</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Support</div>
            <ul className="space-y-2 text-gray-600">
              <li><NavLink to="/contact#faq">FAQ</NavLink></li>
              <li><NavLink to="/contact#returns">Returns & Exchange</NavLink></li>
              <li><a href="#">WhatsApp: +91 96003 04706</a></li>
              <li><a href="#">Address : Mettur Road, Near Check Post, Kolathur, Mettur TK, Salem – 636301</a></li>
              <li><a href="#">monatextiles2015@gmail.com</a></li>
              <li><a href="#">GST No: 33BNDPM6142A1ZK</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Newsletter</div>
            <p className="text-gray-600 mb-3">Get style stories and exclusive offers.</p>
            <div className="flex gap-2">
              <input className="flex-1 rounded-full border border-gray-300 px-4 py-2.5" placeholder="Email address" />
              <button className="px-4 py-2.5 rounded-full bg-gray-900 text-white">Join</button>
            </div>
          </div>
        </div>
        <div className="py-6 text-center">
          <div className="mb-3 text-lg font-bold text-green-700 bg-green-50 py-2 rounded-full">
            🌾 Save Farmers! Save Farming! 🌾
          </div>
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} Mona Textiles. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}


