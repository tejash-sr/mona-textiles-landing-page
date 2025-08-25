import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './ui/RootLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import CollectionsPage from './pages/CollectionsPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import WishlistPage from './pages/WishlistPage.jsx'
import OffersPage from './pages/OffersPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'collections', element: <CollectionsPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { path: 'offers', element: <OffersPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'careers', element: <CareersPage /> },
      { path: 'contact', element: <ContactPage /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
