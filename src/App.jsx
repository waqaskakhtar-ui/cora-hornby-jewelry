import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionEditorial from './components/CollectionEditorial';
import MaterialFragments from './components/MaterialFragments';
import TravelInspirationSection from './components/TravelInspirationSection';
import CustomerStories from './components/CustomerStories';
import StudioAssurances from './components/StudioAssurances';
import ExploreIndex from './components/ExploreIndex';
import BrandStory from './components/BrandStory';
import FeaturedPiece from './components/FeaturedPiece';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import EnvironmentalCursor from './components/EnvironmentalCursor';

// High-Gloss Luxury Inner Pages
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CraftsmanshipPage from './pages/CraftsmanshipPage';
import TravelLookbookPage from './pages/TravelLookbookPage';
import CollectionsPage from './pages/CollectionsPage';
import PackagingGuaranteesPage from './pages/PackagingGuaranteesPage';

import { initSmoothScroll } from './utils/smoothScroll';
import { PRODUCTS, FEATURED_MASTERPIECE } from './data/coraData';

export default function App() {
  // Navigation View State: 'home' | 'shop' | 'product' | 'craftsmanship' | 'travels' | 'collections' | 'assurances'
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([
    PRODUCTS[0] // Preloaded with 1 authentic handcrafted piece
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize Lenis smooth scroll on mount
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  // Hash-based zero-latency SPA view routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash || hash === 'home') {
        setCurrentView('home');
      } else if (hash === 'shop' || hash === 'index' || hash === 'archive') {
        setCurrentView('shop');
      } else if (hash === 'craftsmanship' || hash === 'story' || hash === 'bench') {
        setCurrentView('craftsmanship');
      } else if (hash === 'travels' || hash === 'lookbook') {
        setCurrentView('travels');
      } else if (hash === 'collections' || hash === 'collection') {
        setCurrentView('collections');
      } else if (hash === 'assurances' || hash === 'guarantees' || hash === 'shipping') {
        setCurrentView('assurances');
      } else if (hash.startsWith('product/')) {
        const productId = hash.replace('product/', '');
        const found = PRODUCTS.find((p) => p.id === productId || p.name.toLowerCase().includes(productId.toLowerCase()));
        if (found) {
          setSelectedProduct(found);
          setCurrentView('product');
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view, product = null) => {
    setCurrentView(view);
    if (product) setSelectedProduct(product);
    window.location.hash = view === 'product' && product ? `product/${product.id}` : view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Responsive Dark/Ivory Mode State with persistence & system preference detection
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
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    navigateTo('product', product);
  };

  const handleHeroPieceSelect = (piece) => {
    const matched = PRODUCTS.find((p) => p.name.includes(piece.name) || piece.name.includes(p.name)) || {
      id: piece.id || 'hero-zebra-jasper',
      name: piece.name,
      category: piece.category,
      material: piece.material,
      price: piece.price,
      origin: piece.origin,
      description: piece.description,
      image: piece.image || '/hero-zebra-jasper-3d.png',
      altImage: PRODUCTS[0].altImage,
      modelImage: PRODUCTS[0].modelImage
    };
    handleSelectProduct(matched);
  };

  const handleMasterpieceSelect = () => {
    handleSelectProduct({
      id: 'cleo-masterpiece',
      name: FEATURED_MASTERPIECE.name,
      category: 'Masterpiece · Edition of One',
      material: 'Cold-forged hammered brass, precision pierced geometry',
      price: FEATURED_MASTERPIECE.price,
      origin: 'Cape Elizabeth, Maine Studio',
      description: 'The Cleo Architectural Pendant explores tension between negative space and solid hammered metal. Individually cold-worked on an antique anvil.',
      image: FEATURED_MASTERPIECE.mainImage,
      altImage: PRODUCTS[0].altImage,
      modelImage: PRODUCTS[0].modelImage
    });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#0A0A0A] text-[#FAF9F5]' : 'bg-[#F9F8F5] text-[#111111]'} font-sans selection:bg-[#111111] selection:text-[#FAF9F5] transition-colors duration-300`}>
      
      {/* Ambient Environmental Cursor & Lighting Follower */}
      <EnvironmentalCursor />

      {/* 1. The Floating Dock Navbar */}
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {/* Main View Router */}
      <main>
        {currentView === 'home' && (
          <>
            {/* Hero Section with 3D Centerpiece, Monumental Typography & Interactive Filter Bar */}
            <Hero
              onExploreClick={() => navigateTo('travels')}
              onSelectPiece={handleHeroPieceSelect}
              onNavigate={navigateTo}
            />

            {/* Section 2: Travel Inspiration Archive (8 Countries) */}
            <TravelInspirationSection
              onSelectProduct={handleSelectProduct}
              onQuickAdd={handleAddToCart}
            />

            {/* Section 3: Curated Collections (5 Official Lines) */}
            <CollectionEditorial
              onSelectProduct={handleSelectProduct}
              onQuickAdd={handleAddToCart}
            />

            {/* Section 4: Material Fragments Typographic Section */}
            <MaterialFragments
              onSelectMaterial={() => setIsSearchOpen(true)}
            />

            {/* Section 5: 3-Way Taxonomy Browsing Index */}
            <ExploreIndex
              onCategorySelect={() => navigateTo('shop')}
              onSelectCountry={() => navigateTo('travels')}
            />

            {/* Section 6: Cora's Customers (Real Etsy Reviews & Photos) */}
            <CustomerStories />

            {/* Section 7: Studio Assurances (Packaging, Shipping, Guarantees) */}
            <StudioAssurances />

            {/* Section 8: The Story of Cora Hornby */}
            <BrandStory />

            {/* Section 9: Featured Piece Technical Anatomy */}
            <FeaturedPiece
              onSelectPiece={handleMasterpieceSelect}
            />

            {/* Section 10: Newsletter & Private Collections */}
            <Newsletter />
          </>
        )}

        {/* View: Product Listing Page (Masonry Archive) */}
        {currentView === 'shop' && (
          <ProductListingPage
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {/* View: Product Detail Page (Split Screen Vertical Scroll with Sticky Macro Zoom) */}
        {currentView === 'product' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => navigateTo('shop')}
            onAddToCart={handleAddToCart}
            onSelectRelated={handleSelectProduct}
          />
        )}

        {/* View: The Alchemist's Bench (Craftsmanship Inner Page with Horizontal GSAP Scroll) */}
        {currentView === 'craftsmanship' && (
          <CraftsmanshipPage
            onBack={() => navigateTo('home')}
            onExploreShop={() => navigateTo('shop')}
          />
        )}

        {/* View: The World Lookbook (8 Destinations & Curved Leader Lines) */}
        {currentView === 'travels' && (
          <TravelLookbookPage
            onBack={() => navigateTo('home')}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {/* View: Curated Collections (5 Official Lines) */}
        {currentView === 'collections' && (
          <CollectionsPage
            onBack={() => navigateTo('home')}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {/* View: Studio Assurances (Packaging, Shipping, Guarantees) */}
        {currentView === 'assurances' && (
          <PackagingGuaranteesPage
            onBack={() => navigateTo('home')}
            onExploreShop={() => navigateTo('shop')}
          />
        )}
      </main>

      {/* Oversized Signature Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

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
        onSelectProduct={handleSelectProduct}
      />

    </div>
  );
}

