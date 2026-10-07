import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionEditorial from './components/CollectionEditorial';
import MaterialFragments from './components/MaterialFragments';
import WorldTravels from './components/WorldTravels';
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
    <div className="min-h-screen bg-[#F9F8F5] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#FAF9F5]">
      
      {/* Ambient Environmental Cursor & Lighting Follower */}
      <EnvironmentalCursor />

      {/* 1. Sticky Minimal Navbar */}
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main>
        {/* 2. Hero Section with Giant Typography + Jewelry Overlap */}
        <Hero
          onExploreClick={handleExploreClick}
          onSelectPiece={handleHeroPieceSelect}
        />

        {/* 3. Section 2: Editorial Product Collection */}
        <CollectionEditorial
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickAdd={handleAddToCart}
        />

        {/* 4. Section 3: Material Fragments Typographic Section */}
        <MaterialFragments
          onSelectMaterial={(mat) => {
            setIsSearchOpen(true);
          }}
        />

        {/* 5. Section 4: The World Behind the Pieces (Travel Archive) */}
        <WorldTravels />

        {/* 6. Section 5: Explore by Collection List Index */}
        <ExploreIndex
          onCategorySelect={(cat) => {
            const elem = document.getElementById('collection');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Section 6: The Story of Cora Hornby */}
        <BrandStory />

        {/* 8. Section 7: Featured Piece Technical Anatomy */}
        <FeaturedPiece
          onSelectPiece={handleMasterpieceSelect}
        />

        {/* 9. Section 8: Newsletter & Private Collections */}
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
