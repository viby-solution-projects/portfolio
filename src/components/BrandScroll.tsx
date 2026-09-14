import React from "react";
import sagarPerfumeLogo from "../assets/sagarperfume.png";
import kizzoLogo from "../assets/kizzo-logo.png";

export interface BrandItem {
  name: string;
  url: string;
  domain: string;
  logo: React.ReactNode;
}

const BRANDS: BrandItem[] = [
  {
    name: "Kizzo",
    domain: "kizzo.in",
    url: "https://kizzo.in",
    logo: (
      <img
        src={kizzoLogo}
        alt="Kizzo"
        className="brand-strip-img brand-kizzo-img"
        loading="lazy"
        decoding="async"
      />
    ),
  },

  {
    name: "Broker Streets",
    domain: "brokerstreets.com",
    url: "https://brokerstreets.com",
    logo: (
      <svg
        viewBox="0 0 136 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-strip-svg brand-brokerstreets-svg"
        aria-label="Broker Streets"
      >
        <text
          x="0"
          y="17"
          fontFamily="'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="16.5"
          letterSpacing="-0.01em"
        >
          <tspan fill="#1D64C8" fontWeight="400">
            BROKER{" "}
          </tspan>
          <tspan fill="#1D64C8" fontWeight="900">
            STREETS
          </tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Sagar Perfume",
    domain: "sagarperfume.com",
    url: "https://sagarperfume.com",
    logo: (
      <img
        src={sagarPerfumeLogo}
        alt="Sagar Perfume - Feel the Fragrance"
        className="brand-strip-img brand-sagar-img"
        loading="lazy"
        decoding="async"
      />
    ),
  },

  {
    name: "Diamond Finance",
    domain: "diamond-finance-delta.vercel.app",
    url: "https://diamond-finance-delta.vercel.app/",
    logo: (
      <svg
        viewBox="0 0 137 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-strip-svg brand-diamond-svg"
        aria-label="Diamond Finance"
      >
        <rect x="0" y="1" width="20" height="20" rx="5" fill="#0284C7" />
        <path d="M5 7L10 3.5L15 7L10 18.5L5 7Z" fill="#BAE6FD" />
        <path
          d="M5 7H15M10 3.5V18.5M5 7L10 11L15 7"
          stroke="#0284C7"
          strokeWidth="0.8"
        />
        <text
          x="27"
          y="15.5"
          fill="#0F172A"
          fontFamily="'Manrope', -apple-system, BlinkMacSystemFont, sans-serif"
          fontWeight="700"
          fontSize="13.5"
          letterSpacing="-0.01em"
        >
          Diamond Finance
        </text>
      </svg>
    ),
  },
  {
    name: "Bharat Launch",
    domain: "bharat-launch.vercel.app",
    url: "https://bharat-launch.vercel.app/",
    logo: (
      <svg
        viewBox="0 0 114 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-strip-svg brand-bharatlaunch-svg"
        aria-label="Bharat Launch"
      >
        <rect
          x="0"
          y="1"
          width="20"
          height="20"
          rx="5"
          fill="#1E3A2F"
          stroke="#2D5A47"
          strokeWidth="0.9"
        />
        <text
          x="6.5"
          y="15"
          fill="#4ADE80"
          fontFamily="'Manrope', sans-serif"
          fontWeight="800"
          fontSize="12"
        >
          $
        </text>
        <text
          x="27"
          y="15.5"
          fill="#0F172A"
          fontFamily="'Manrope', -apple-system, BlinkMacSystemFont, sans-serif"
          fontWeight="800"
          fontSize="13.5"
          letterSpacing="-0.02em"
        >
          Bharat<tspan fontWeight="400" fill="#475569">Launch</tspan>
        </text>
      </svg>
    ),
  },
];

// Duplicate brands in group so wide screens have ample content density
const GROUP_ITEMS = [...BRANDS, ...BRANDS];

function BrandGroup() {
  return (
    <div className="brand-strip-group">
      {GROUP_ITEMS.map((brand, idx) => (
        <a
          key={`${brand.name}-${idx}`}
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          className="brand-strip-item"
          title={`Visit ${brand.name} (${brand.domain})`}
        >
          <div className="brand-strip-logo-box">{brand.logo}</div>
        </a>
      ))}
    </div>
  );
}

export default function BrandScroll({
  label = "Brands We've Worked With",
  className = "",
  title,
}: {
  label?: string;
  className?: string;
  variant?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}) {
  const displayLabel = title || label;
  return (
    <div
      className={`brand-strip ${className}`}
      aria-label="Brands We Have Worked With"
    >
      <p>{displayLabel}</p>
      <div className="brand-marquee">
        <div className="brand-marquee-track">
          <BrandGroup />
          <BrandGroup />
        </div>
      </div>
    </div>
  );
}
