import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

export default function SearchPage() {
  const q = useQuery()
  const initial = q.get('q') || ''
  const [query, setQuery] = useState(initial)
  const [results, setResults] = useState([])
  const [suggestions, setSuggestions] = useState(['saree', 'kanjivaram', 'banarasi', 'mens kurta'])

  useEffect(() => {
    const handle = setTimeout(() => {
      if (!query.trim()) { setResults([]); return }
      setResults(Array.from({ length: 8 }).map((_, i) => ({
        id: i + 1,
        title: `${query} style ${i + 1}`,
        image: `https://picsum.photos/seed/search${i}/800/1000`,
        price: 2999 + i * 100
      })))
      const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]')
      const next = [query, ...recent.filter((x) => x !== query)].slice(0, 8)
      localStorage.setItem('recentSearches', JSON.stringify(next))
    }, 300)
    return () => clearTimeout(handle)
  }, [query])

  const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold">Search</h1>

      <div className="mt-4">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." className="w-full rounded-full border border-gray-300 px-5 py-3" />
      </div>

      {!query.trim() && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="font-medium mb-2">Suggested</div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button key={s} onClick={() => setQuery(s)} className="px-3 py-1.5 rounded-full border border-gray-300">{s}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium mb-2">Recent</div>
            <div className="flex flex-wrap gap-2">
              {recent.length === 0 ? (
                <div className="text-sm text-gray-500">No recent searches</div>
              ) : recent.map((s) => (
                <button key={s} onClick={() => setQuery(s)} className="px-3 py-1.5 rounded-full border border-gray-300">{s}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {query.trim() && results.length === 0 && (
        <div className="mt-10 text-center text-gray-600">No results found</div>
      )}

      {results.length > 0 && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((r) => (
            <Link key={r.id} to={`/product/${r.id}`} className="group block">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                <img src={r.image} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="font-medium">{r.title}</div>
                <div className="font-semibold">₹{r.price.toLocaleString()}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}


