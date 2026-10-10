import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import EnvironmentalCursor from './components/EnvironmentalCursor';
import PageTransition from './components/PageTransition';

// Dedicated Luxury SPA Pages
import HomePage from './pages/HomePage';
import TravelsHubPage from './pages/TravelsHubPage';
import TravelCountryPage from './pages/TravelCountryPage';
import CollectionsHubPage from './pages/CollectionsHubPage';
import CollectionDetailPage from './pages/CollectionDetailPage';
import ShopAllPage from './pages/ShopAllPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomersPage from './pages/CustomersPage';
import StoryPage from './pages/StoryPage';
import ShippingPackagingPage from './pages/ShippingPackagingPage';
import GuaranteesPage from './pages/GuaranteesPage';

import { PRODUCTS } from './data/coraData';

export default function App() {
  const location = useLocation();

  // Cart State (Preloaded with 1 authentic piece)
  const [cartItems, setCartItems] = useState([
    PRODUCTS[0]
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Responsive Dark Mode State with strict hex theming
  // Light: #f8f4e7 (bg), #4e342e (text/border), #cc5500 (accent)
  // Dark:  #000000 (bg), #ffffff (text/border), #2c3480 (accent)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cora_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDark) {
      root.classList.add('dark');
      body.classList.add('dark');
      localStorage.setItem('cora_theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('cora_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#000000] text-[#ffffff]' : 'bg-[#f8f4e7] text-[#4e342e]'} font-sans selection:bg-[#cc5500] dark:selection:bg-[#2c3480] selection:text-white transition-colors duration-400`}>
      
      {/* Ambient Luxury Environmental Cursor & Follower */}
      <EnvironmentalCursor />

      {/* 1. Global Sticky Minimal Navbar */}
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* 2. Fluid SPA Page Transition Wrapper (0.8s exit/enter + staggered typography & clip-path reveal) */}
      <main className="min-h-screen">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            {/* Landing / Home Page */}
            <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
            
            {/* Travel Inspiration Hub & 8 Country Lookbooks */}
            <Route path="/travels" element={<TravelsHubPage />} />
            <Route path="/travels/:countryId" element={<TravelCountryPage onAddToCart={handleAddToCart} />} />

            {/* Curated Collections Hub & 5 Floating Minimalist Grids */}
            <Route path="/collections" element={<CollectionsHubPage />} />
            <Route path="/collections/:collectionSlug" element={<CollectionDetailPage onAddToCart={handleAddToCart} />} />

            {/* Complete Shop All Catalog */}
            <Route path="/shop" element={<ShopAllPage onAddToCart={handleAddToCart} />} />

            {/* Individual Product Page with Sticky Purchasing Zone */}
            <Route path="/product/:productId" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />

            {/* Cora's Customers (Masonry Gallery & Etsy Quotes) */}
            <Route path="/customers" element={<CustomersPage />} />

            {/* Dedicated Brand & Support Pages */}
            <Route path="/story" element={<StoryPage />} />
            <Route path="/shipping" element={<ShippingPackagingPage />} />
            <Route path="/guarantees" element={<GuaranteesPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageTransition>
      </main>

      {/* 3. Global Luxury Signature Footer */}
      <Footer />

      {/* 4. Global Interactive Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCartItems([])}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

    </div>
  );
}
