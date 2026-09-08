import { useState, useEffect, useCallback } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

// Official showcase product images
import img1 from "../assets/products/1.png";
import img2 from "../assets/products/2.png";
import img3 from "../assets/products/3.png";
import img4 from "../assets/products/4.png";
import img5 from "../assets/products/5.png";
import img6 from "../assets/products/6.png";
import img7 from "../assets/products/7.png";
import img8 from "../assets/products/8.png";
import img9 from "../assets/products/9.png";
import img10 from "../assets/products/10.png";
import img11 from "../assets/products/11.png";
import img12 from "../assets/products/12.png";
import img13 from "../assets/products/13.png";
import img14 from "../assets/products/14.png";
import img15 from "../assets/products/15.png";
import img16 from "../assets/products/16.png";
import img17 from "../assets/products/17.png";
import img18 from "../assets/products/18.png";
import img19 from "../assets/products/19.png";
import img20 from "../assets/products/20.png";
import img21 from "../assets/products/21.png";
import img22 from "../assets/products/22.png";
import img23 from "../assets/products/23.png";
import img24 from "../assets/products/24.png";
import img25 from "../assets/products/25.png";
import img26 from "../assets/products/26.png";
import img27 from "../assets/products/27.png";
import img29 from "../assets/products/29.png";
import img30 from "../assets/products/30.png";
import img31 from "../assets/products/31.png";
import img32 from "../assets/products/32.png";

export type PhotoGalleryItem = {
  id: string;
  title: string;
  brand: string;
  category: string;
  categoryKey: "perfumes" | "wallets" | "belts";
  image: string;
  alt: string;
};

// Artfully curated and interwoven list across Perfumes, Wallets, and Belts
export const GALLERY_ITEMS: PhotoGalleryItem[] = [
  {
    id: "brut-classic-wallet",
    title: "BRUT Leather Wallet - Quiet Luxury Tabletop",
    brand: "BRUT Leather",
    category: "Wallets",
    categoryKey: "wallets",
    image: img12,
    alt: "BRUT brown leather wallet with sunglasses and luxury watch",
  },
  {
    id: "sagar-trio-smoke",
    title: "Sagar Perfume Trio - Vivah, R-Full & Rose",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img1,
    alt: "Sagar Perfume Trio bottles on pedestal with ambient smoke",
  },
  {
    id: "tommy-hilfiger-ribbed-belt",
    title: "Tommy Hilfiger Ribbed Texture Leather Belt",
    brand: "Tommy Hilfiger",
    category: "Belts",
    categoryKey: "belts",
    image: img24,
    alt: "Tommy Hilfiger ribbed black leather belt with gunmetal buckle",
  },
  {
    id: "sagar-java-oud-arch",
    title: "Sagar Perfume - Java Luxury Oud Gold Arch",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img5,
    alt: "Java Luxury Oud perfume bottle framed by golden classical arches",
  },
  {
    id: "hazzard-navy-pocket",
    title: "HAZZARD Navy Leather Wallet - Pocket Carry",
    brand: "HAZZARD",
    category: "Wallets",
    categoryKey: "wallets",
    image: img18,
    alt: "Man in tailored navy suit slipping HAZZARD wallet into pocket",
  },
  {
    id: "sagar-night-london",
    title: "Sagar Perfume - Night In London Beach Edition",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img2,
    alt: "Sagar Perfume Night In London on seaside stone table with fresh orange",
  },
  {
    id: "camel-leather-belt",
    title: "Camel Genuine Leather Belt - Denim Classic",
    brand: "Camel Active",
    category: "Belts",
    categoryKey: "belts",
    image: img22,
    alt: "Dark brown textured leather belt on white denim and chambray shirt",
  },
  {
    id: "sagar-black-london",
    title: "Sagar Perfume - Just Black London Chessboard",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img10,
    alt: "Just Black London Eau De Parfum on monochrome designer chessboard",
  },
  {
    id: "hazzard-green-pedestal",
    title: "HAZZARD Green Leather Wallet - Sculpture Display",
    brand: "HAZZARD",
    category: "Wallets",
    categoryKey: "wallets",
    image: img20,
    alt: "Forest green HAZZARD leather wallet on modernist architectural pedestal",
  },
  {
    id: "sagar-java-model-editorial",
    title: "Sagar Perfume - Java Positive Vibes Model Portrait",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img31,
    alt: "High-fashion model posing with Sagar Java Positive Vibes perfume bottle",
  },
  {
    id: "louis-philippe-studio-belt",
    title: "Louis Philippe Leather Belt - Studio Laydown",
    brand: "Louis Philippe",
    category: "Belts",
    categoryKey: "belts",
    image: img25,
    alt: "Louis Philippe embossed leather belt on clean white studio surface",
  },
  {
    id: "sagar-musk-chocolate",
    title: "Sagar Perfume - Musk Chocolate Edition",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img3,
    alt: "Sagar Musk Chocolate perfume bottle with melting chocolate splash",
  },
  {
    id: "vintage-car-wallet",
    title: "Heritage Leather Wallet - Mercedes 280 SL",
    brand: "Heritage Leather",
    category: "Wallets",
    categoryKey: "wallets",
    image: img17,
    alt: "Brown leather snap wallet on classic vintage Mercedes 280 SL trunk",
  },
  {
    id: "sagar-love-drops",
    title: "Sagar Perfume - Love Drops Coastal Edit",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img6,
    alt: "Sagar Love Drops perfume on sunlit beach towel with seashells",
  },
  {
    id: "louis-philippe-linen-belt",
    title: "Louis Philippe Leather Belt - Italian Linen",
    brand: "Louis Philippe",
    category: "Belts",
    categoryKey: "belts",
    image: img23,
    alt: "Louis Philippe brown leather belt styled with relaxed linen tailoring",
  },
  {
    id: "sagar-java-oud-dew",
    title: "Sagar Perfume - Java Luxury Oud Dewdrop",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img15,
    alt: "Java Luxury Oud with water droplets, palm leaves, and botanical spices",
  },
  {
    id: "hazzard-green-unboxing",
    title: "HAZZARD Green Leather Wallet - Unboxing Edition",
    brand: "HAZZARD",
    category: "Wallets",
    categoryKey: "wallets",
    image: img26,
    alt: "HAZZARD green wallet inside premium branded presentation box",
  },
  {
    id: "sagar-java-positive",
    title: "Sagar Perfume - Java Positive Vibes Editorial",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img7,
    alt: "Sagar Java Positive Vibes bottle on editorial magazine spread",
  },
  {
    id: "brut-textured-macro",
    title: "BRUT Leathercraft - Macro Grain Texture",
    brand: "BRUT Leather",
    category: "Wallets",
    categoryKey: "wallets",
    image: img13,
    alt: "Macro detail of BRUT embossed genuine full-grain leather wallet",
  },
  {
    id: "sagar-elixir-glass",
    title: "Sagar Perfume - Elixir Chilled Glass Feature",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img29,
    alt: "Full glass presentation of Sagar Elixir with blackberries and ice",
  },
  {
    id: "travel-passport-wallet",
    title: "Executive Leather Wallet - Airport Lounge",
    brand: "Executive Travel",
    category: "Wallets",
    categoryKey: "wallets",
    image: img21,
    alt: "Burgundy leather wallet with passport and aviator glasses in VIP lounge",
  },
  {
    id: "sagar-jack-black",
    title: "Sagar Perfume - Jack Black Classic",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img4,
    alt: "Jack Black Classic Eau De Parfum resting on luxury plush fur",
  },
  {
    id: "hazzard-green-snap",
    title: "HAZZARD Green Leather - Brass Clasp Macro",
    brand: "HAZZARD",
    category: "Wallets",
    categoryKey: "wallets",
    image: img19,
    alt: "Macro detail of forest green leather wallet and antique brass snap",
  },
  {
    id: "sagar-trio-sand",
    title: "Sagar Perfume Trio - Sand Dune Edition",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img8,
    alt: "Sagar Perfume Trio on golden sand dune with blue sky",
  },
  {
    id: "tan-leather-suit-wallet",
    title: "Tan Leather Compact Wallet - City Lifestyle",
    brand: "Urban Craft",
    category: "Wallets",
    categoryKey: "wallets",
    image: img27,
    alt: "Gentleman in beige blazer holding tan leather button wallet",
  },
  {
    id: "sagar-java-oud-purple",
    title: "Sagar Perfume - Java Oud Royal Purple",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img14,
    alt: "Java Oud luxury purple flacon on aged timber with agarwood chips",
  },
  {
    id: "sagar-tag-me",
    title: "Sagar Perfume - Tag Me Pour Homme",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img9,
    alt: "Tag Me Pour Homme perfume on rustic sand and driftwood",
  },
  {
    id: "sagar-aqua-freshener",
    title: "Sagar Perfume - Aqua Air Freshener Poolside",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img16,
    alt: "Aqua Air Freshener spray bottle in crystal clear sunlit pool water",
  },
  {
    id: "sagar-jack-black-rope",
    title: "Sagar Perfume - Jack Black Suspended Ropes",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img30,
    alt: "Jack Black Classic perfume flacon suspended in braided ropes",
  },
  {
    id: "sagar-nafizza-flatlay",
    title: "Sagar Perfume - Nafizza Handbag Flatlay",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img11,
    alt: "Nafizza perfume flatlay with luxury sage handbag and gold watch",
  },
  {
    id: "sagar-kaivi-kiwi",
    title: "Sagar Perfume - Sagar Kaivi Kiwi Fresh Deodorant",
    brand: "Sagar Perfume",
    category: "Perfumes",
    categoryKey: "perfumes",
    image: img32,
    alt: "Sagar Kaivi metallic green deodorant can in basket with fresh kiwi fruits",
  },
];

// Strictly the 3 requested categories
export const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "wallets", label: "Wallets" },
  { key: "belts", label: "Belts" },
  { key: "perfumes", label: "Perfumes" },
] as const;

export default function ProductEditingGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.categoryKey === activeFilter);

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedItemIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const handlePrevItem = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) =>
      prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : 0
    );
  }, [selectedItemIndex, filteredItems.length]);

  const handleNextItem = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) =>
      prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : 0
    );
  }, [selectedItemIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrevItem();
      if (e.key === "ArrowRight") handleNextItem();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, handleCloseLightbox, handlePrevItem, handleNextItem]);

  return (
    <div className="photo-editing-section" id="photo-editing">
      {/* Category Filter Pills (Scrollable on X-axis) */}
      <Reveal className="product-filter-container">
        <div className="product-filter-bar" role="tablist" aria-label="Filter photo gallery">
          {CATEGORIES.map((cat) => {
            const count =
              cat.key === "all"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((item) => item.categoryKey === cat.key).length;
            const isActive = activeFilter === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveFilter(cat.key);
                  setSelectedItemIndex(null);
                }}
                className={cn("product-filter-btn", isActive && "active")}
              >
                <span>{cat.label}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Pure Image Photo Gallery Grid — strictly images with no cropping */}
      <div className="photo-gallery-grid">
        {filteredItems.map((item, index) => (
          <Reveal
            as="div"
            key={item.id}
            delay={(index % 3) as 0 | 1 | 2}
            className="photo-gallery-item"
            onClick={() => handleOpenLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpenLightbox(index);
              }
            }}
            aria-label={`View photo ${item.title}`}
          >
            <div className="photo-gallery-img-wrapper">
              <img
                src={item.image}
                alt={item.alt}
                className="photo-gallery-img"
                loading="lazy"
              />
            </div>
          </Reveal>
        ))}
      </div>

      {/* Clean Fullscreen Photo Lightbox Modal */}
      {selectedItem !== null && (
        <div
          className="photo-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div className="photo-lightbox-backdrop" onClick={handleCloseLightbox} />

          <div className="photo-lightbox-wrap">
            {/* Top Toolbar */}
            <div className="photo-lightbox-topbar">
              <div className="photo-lightbox-info">
                <span className="photo-lightbox-counter">
                  {selectedItemIndex! + 1} / {filteredItems.length}
                </span>
                <span className="photo-lightbox-title">{selectedItem.title}</span>
              </div>
              <button
                type="button"
                className="photo-lightbox-close"
                onClick={handleCloseLightbox}
                aria-label="Close photo preview"
                title="Close (Esc)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Stage / Image Canvas */}
            <div className="photo-lightbox-stage">
              <img
                src={selectedItem.image}
                alt={selectedItem.alt}
                className="photo-lightbox-img"
              />

              {/* Navigation Arrows */}
              <button
                type="button"
                className="photo-nav-btn prev-btn"
                onClick={handlePrevItem}
                aria-label="Previous photo"
                title="Previous photo (Left Arrow)"
              >
                ‹
              </button>
              <button
                type="button"
                className="photo-nav-btn next-btn"
                onClick={handleNextItem}
                aria-label="Next photo"
                title="Next photo (Right Arrow)"
              >
                ›
              </button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="photo-lightbox-bottombar">
              <div className="photo-shortcuts">
                <span>Navigate with</span> <kbd>←</kbd> <kbd>→</kbd> • <kbd>ESC</kbd> <span>to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
