import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Core UI Chrome
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import EnvironmentalCursor from './components/EnvironmentalCursor';

// Data Layer
import { PRODUCTS } from './data/coraData';

// Route Pages
import HomePage from './pages/HomePage';
import TravelHubPage from './pages/TravelHubPage';
import CountryDetailPage from './pages/CountryDetailPage';
import CollectionsHubPage from './pages/CollectionsHubPage';
import CollectionDetailPage from './pages/CollectionDetailPage';
import ShopHubPage from './pages/ShopHubPage';
import ShopCategoryPage from './pages/ShopCategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomersPage from './pages/CustomersPage';
import AboutPage from './pages/AboutPage';
import PackagingShippingPage from './pages/PackagingShippingPage';
import GuaranteesPage from './pages/GuaranteesPage';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([
    PRODUCTS[0] // preloaded with 1 authentic piece for instant tactile feel
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Responsive Dark Mode State with persistence & system preference detection
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
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('cora_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('cora_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${isDark ? 'dark bg-[#0A0909] text-[#FAF9F5]' : 'bg-[#FAF9F5] text-[#111111]'} font-sans selection:bg-[#111111] selection:text-[#FAF9F5] dark:selection:bg-[#FAF9F5] dark:selection:text-[#111111] transition-colors duration-500`}>
        
        {/* Scroll Restorer on Route Change */}
        <ScrollToTop />

        {/* Ambient Environmental Cursor & Lighting Follower */}
        <EnvironmentalCursor />

        {/* Sticky Minimal Navbar */}
        <Navbar
          cartCount={cartItems.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />

        {/* Multi-Page Routes */}
        <main className="min-h-screen">
          <Routes>
            {/* 1. Home / Landing Editorial Spread */}
            <Route 
              path="/" 
              element={
                <HomePage 
                  onQuickAdd={handleAddToCart} 
                  onSelectProduct={(p) => setSelectedProduct(p)} 
                />
              } 
            />

            {/* 2. Travel Inspiration Archive (8 Countries) */}
            <Route 
              path="/travel" 
              element={<TravelHubPage />} 
            />
            <Route 
              path="/travel/:countryId" 
              element={
                <CountryDetailPage 
                  onQuickAdd={handleAddToCart} 
                  onSelectProduct={(p) => setSelectedProduct(p)} 
                />
              } 
            />

            {/* 3. Curated Collections (5 Signature Lines) */}
            <Route 
              path="/collections" 
              element={<CollectionsHubPage />} 
            />
            <Route 
              path="/collections/:collectionSlug" 
              element={
                <CollectionDetailPage 
                  onQuickAdd={handleAddToCart} 
                  onSelectProduct={(p) => setSelectedProduct(p)} 
                />
              } 
            />

            {/* 4. Shop by Product Taxonomy & PDP */}
            <Route 
              path="/shop" 
              element={
                <ShopHubPage 
                  onQuickAdd={handleAddToCart} 
                  onSelectProduct={(p) => setSelectedProduct(p)} 
                />
              } 
            />
            <Route 
              path="/shop/:categorySlug" 
              element={
                <ShopCategoryPage 
                  onQuickAdd={handleAddToCart} 
                  onSelectProduct={(p) => setSelectedProduct(p)} 
                />
              } 
            />
            <Route 
              path="/product/:productId" 
              element={
                <ProductDetailPage 
                  onQuickAdd={handleAddToCart} 
                />
              } 
            />

            {/* 5. Cora's Customers (Asymmetrical Masonry & Etsy Reviews) */}
            <Route 
              path="/customers" 
              element={<CustomersPage />} 
            />

            {/* 6. Brand & Support Pages */}
            <Route 
              path="/story" 
              element={<AboutPage />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/packaging-and-shipping" 
              element={<PackagingShippingPage />} 
            />
            <Route 
              path="/packaging" 
              element={<PackagingShippingPage />} 
            />
            <Route 
              path="/guarantees" 
              element={<GuaranteesPage />} 
            />

            {/* Fallback to Home */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onQuickAdd={handleAddToCart} 
                  onSelectProduct={(p) => setSelectedProduct(p)} 
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer with Oversized Bottom Signature Wordmark */}
        <Footer />

        {/* Quick-View Product Modal */}
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />

        {/* Studio Cart Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemoveItem={handleRemoveFromCart}
          onClearCart={() => setCartItems([])}
        />

        {/* Omnipresent Archival Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

      </div>
    </BrowserRouter>
  );
}
