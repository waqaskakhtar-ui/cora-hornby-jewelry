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
import { PRODUCTS, FEATURED_MASTERPIECE } from './data/coraData';

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
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    const elem = document.getElementById('collection');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroPieceSelect = (piece) => {
    // Map hero piece to product modal
    const matched = PRODUCTS.find((p) => p.name.includes(piece.name) || piece.name.includes(p.name)) || {
      id: piece.id,
      name: piece.name,
      category: piece.category,
      material: piece.material,
      price: piece.price,
      origin: piece.origin,
      description: `Signature work by Cora Hornby. ${piece.annotation}. Produced in Cape Elizabeth, Maine.`,
      image: piece.mainImage,
      altImage: piece.supportingImage1,
      modelImage: piece.supportingImage2
    };
    setSelectedProduct(matched);
  };

  const handleMasterpieceSelect = () => {
    setSelectedProduct({
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
    <div className={`min-h-screen ${isDark ? 'dark bg-[#0C0A09] text-[#FAF8F2]' : 'bg-[#FAF8F2] text-[#12100E]'} font-sans selection:bg-[#C5A869] selection:text-[#0C0A09] transition-colors duration-700`}>
      
      {/* Ambient Environmental Cursor & Lighting Follower */}
      <EnvironmentalCursor />

      {/* 1. Sticky Minimal Navbar */}
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main>
        {/* 2. Hero Section with Giant Typography + Jewelry Overlap */}
        <Hero
          onExploreClick={handleExploreClick}
          onSelectPiece={handleHeroPieceSelect}
        />

        {/* 3. Section 2: Travel Inspiration Archive (8 Countries & 3 Pairs Each) */}
        <TravelInspirationSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickAdd={handleAddToCart}
        />

        {/* 4. Section 3: Curated Collections (5 Official Lines) */}
        <CollectionEditorial
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickAdd={handleAddToCart}
        />

        {/* 5. Section 4: Material Fragments Typographic Section */}
        <MaterialFragments
          onSelectMaterial={(mat) => {
            setIsSearchOpen(true);
          }}
        />

        {/* 6. Section 5: 3-Way Taxonomy Browsing Index */}
        <ExploreIndex
          onCategorySelect={(cat) => {
            const elem = document.getElementById('collection');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectCountry={(countryId) => {
            const elem = document.getElementById('travels');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Section 6: Cora's Customers (Real Etsy Reviews & Photos) */}
        <CustomerStories />

        {/* 8. Section 7: Studio Assurances (Packaging, Shipping, Guarantees) */}
        <StudioAssurances />

        {/* 9. Section 8: The Story of Cora Hornby */}
        <BrandStory />

        {/* 10. Section 9: Featured Piece Technical Anatomy */}
        <FeaturedPiece
          onSelectPiece={handleMasterpieceSelect}
        />

        {/* 11. Section 10: Newsletter & Private Collections */}
        <Newsletter />
      </main>

      {/* 10. Section 9: Footer with Oversized Bottom Signature Wordmark */}
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
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

    </div>
  );
}
