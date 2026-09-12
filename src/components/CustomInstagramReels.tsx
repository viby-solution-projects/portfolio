import { useState, useEffect } from "react";

export interface ReelPost {
  id: string;
  code: string;
  link: string;
  image_url: string;
  thumbnail: string;
  pic_src: string;
  video_url: string;
  pic_text: string;
  pic_like_count_formatted: string;
  pic_comment_count_formatted: string;
}

export interface BioInfo {
  username: string;
  full_name?: string;
  profile_picture?: string;
  user_profile?: string;
}

const FALLBACK_POSTS: ReelPost[] = [
  {
    id: "DdJfGfloT0I",
    code: "DdJfGfloT0I",
    link: "https://www.instagram.com/vibysolution/reel/DdJfGfloT0I/",
    image_url: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DdJfGfloT0I-thumbnail.webp?v=1789192636289",
    thumbnail: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DdJfGfloT0I-thumbnail.webp?v=1789192636289",
    pic_src: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DdJfGfloT0I-thumbnail.webp?v=1789192636289",
    video_url: "https://scontent-ord5-2.cdninstagram.com/o1/v/t2/f2/m86/AQM3wSlIyJaYYxmHGLpvptCrLaVfb1awbxN5HrhrA8rtI-LB9M7MhtKRVeqZSbns2wMvK1kSpnxbUsswQXTsKb2S7uFoFp8rgWmCK8g.mp4",
    pic_text: "Creating Fake Campaign for @bravoperfumesofficial | Hope they see our content #marketing #aiimages #gujarat #viral #chatgpt",
    pic_like_count_formatted: "23",
    pic_comment_count_formatted: "0"
  },
  {
    id: "DdGcvfwI1J7",
    code: "DdGcvfwI1J7",
    link: "https://www.instagram.com/vibysolution/reel/DdGcvfwI1J7/",
    image_url: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DdGcvfwI1J7-thumbnail.webp?v=1789192636291",
    thumbnail: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DdGcvfwI1J7-thumbnail.webp?v=1789192636291",
    pic_src: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DdGcvfwI1J7-thumbnail.webp?v=1789192636291",
    video_url: "https://scontent-ord5-2.cdninstagram.com/o1/v/t2/f2/m86/AQPqH1dpLoavL2gTnpUFiO7Ed41K6DZpMBizYRVEydcUcj0NNjGOYoyFSTHXi641tsd1f5MtmvwFVQdQU1Y2KxsZ-GY4iYYPUBaQ4Eo.mp4",
    pic_text: "Inspirational words by Steve Jobs | Apple Event 2026 | 09 September 2026 #navsari #stevejobs #apple #iphone #founder",
    pic_like_count_formatted: "9",
    pic_comment_count_formatted: "0"
  },
  {
    id: "DdBwu1JoBlN",
    code: "DdBwu1JoBlN",
    link: "https://www.instagram.com/vibysolution/reel/DdBwu1JoBlN/",
    image_url: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DdBwu1JoBlN-thumbnail.webp?v=1789192636291",
    thumbnail: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DdBwu1JoBlN-thumbnail.webp?v=1789192636291",
    pic_src: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DdBwu1JoBlN-thumbnail.webp?v=1789192636291",
    video_url: "https://scontent-ord5-1.cdninstagram.com/o1/v/t2/f2/m86/AQNJ06Sokv8W4fUWymKrXKhbibWtdItCZpBaxLrNrskhqvdmWgvTmB6h15jBXQy-3G3io7tUCiy4ewu8DnMU5U1dOfoGbkuJ3UzauZk.mp4",
    pic_text: "Are you looking for an internship at Navsari’s Premium IT (Product Based) Company - Join our team today.",
    pic_like_count_formatted: "79",
    pic_comment_count_formatted: "23"
  },
  {
    id: "DcP92APoBAO",
    code: "DcP92APoBAO",
    link: "https://www.instagram.com/vibysolution/reel/DcP92APoBAO/",
    image_url: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DcP92APoBAO-thumbnail.webp?v=1789192636292",
    thumbnail: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DcP92APoBAO-thumbnail.webp?v=1789192636292",
    pic_src: "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/DcP92APoBAO-thumbnail.webp?v=1789192636292",
    video_url: "https://scontent-ord5-1.cdninstagram.com/o1/v/t2/f2/m86/AQNpqG9oMJuN9YAgwCizwu19rH3Efm1ADyanahN8XrVyzx2hMgjZYoTDJzpEMW1ldjP-GMl2dCy8fTPKC90PLGfNLmEsi-I8hFihm98.mp4",
    pic_text: "Day 0 of building my startup - Central Business Hub, Navsari, Gujarat #navsari #gujarat #startup #navsaricity",
    pic_like_count_formatted: "34",
    pic_comment_count_formatted: "2"
  }
];

export default function CustomInstagramReels() {
  const [reels, setReels] = useState<ReelPost[]>(FALLBACK_POSTS);
  const [bio, setBio] = useState<BioInfo | null>({
    username: "vibysolution",
    full_name: "vibysolution"
  });
  const [selectedReel, setSelectedReel] = useState<ReelPost | null>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchFeed = async () => {
      try {
        const res = await fetch("https://data.accentapi.com/feed/25713135.json");
        if (!res.ok) throw new Error("Feed fetch error");
        const data = await res.json();
        if (isMounted) {
          if (data.posts && Array.isArray(data.posts) && data.posts.length > 0) {
            setReels(data.posts);
          }
          if (data.bio) {
            setBio(data.bio);
          }
        }
      } catch (err) {
        console.warn("Using cached Instagram reels data:", err);
      }
    };

    fetchFeed();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedReel(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="sk-instagram-embed-wrapper">
      {/* Profile Header matching the exact SociableKit layout */}
      <div className="sk-ig-header">
        <div className="sk-ig-profile">
          <div className="sk-ig-avatar">
            {!imgError && (bio?.user_profile || bio?.profile_picture) ? (
              <img
                src={bio?.user_profile || bio?.profile_picture}
                alt={bio?.username || "vibysolution"}
                className="sk-ig-avatar-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="sk-ig-avatar-fallback">Viby</div>
            )}
          </div>
          <div className="sk-ig-names">
            <h3 className="sk-ig-username">{bio?.username || "vibysolution"}</h3>
            <span className="sk-ig-subname">{bio?.full_name || bio?.username || "vibysolution"}</span>
          </div>
        </div>

        <a
          href={`https://www.instagram.com/${bio?.username || "vibysolution"}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="sk-ig-follow-btn"
        >
          {/* Instagram Camera Icon with gradient */}
          <svg
            className="sk-ig-btn-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <defs>
              <linearGradient id="sk-ig-grad-btn" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#sk-ig-grad-btn)" strokeWidth="2" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#sk-ig-grad-btn)" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="url(#sk-ig-grad-btn)" />
          </svg>
          <span>Follow</span>
        </a>
      </div>

      {/* Responsive Grid: 3 columns desktop, 2 columns mobile */}
      <div className="sk-ig-grid">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="sk-ig-card"
            onClick={() => setSelectedReel(reel)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedReel(reel);
              }
            }}
          >
            <img
              src={reel.image_url || reel.thumbnail || reel.pic_src}
              alt={reel.pic_text || "Instagram reel by @vibysolution"}
              className="sk-ig-card-img"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  reel.thumbnail || reel.pic_src;
              }}
            />

            {/* Instagram Camera Icon Top Right */}
            <div className="sk-ig-badge" title="Instagram Reel">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id={`sk-ig-grad-${reel.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" stroke={`url(#sk-ig-grad-${reel.id})`} strokeWidth="2.2" />
                <circle cx="12" cy="12" r="3.6" stroke={`url(#sk-ig-grad-${reel.id})`} strokeWidth="2.2" />
                <circle cx="17.5" cy="6.5" r="1.4" fill={`url(#sk-ig-grad-${reel.id})`} />
              </svg>
            </div>

            {/* Hover Like Counter Overlay Pill (matching Screenshot 2) */}
            <div className="sk-ig-card-overlay">
              <div className="sk-ig-like-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>{reel.pic_like_count_formatted || "0"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered "Load more reels..." Button */}
      <div className="sk-ig-load-more-wrap">
        <a
          href={`https://www.instagram.com/${bio?.username || "vibysolution"}/reels/`}
          target="_blank"
          rel="noopener noreferrer"
          className="sk-ig-load-more-btn"
        >
          Load more reels...
        </a>
      </div>

      {/* Video Lightbox Modal */}
      {selectedReel && (
        <div
          className="sk-ig-modal-backdrop"
          onClick={() => setSelectedReel(null)}
        >
          <div
            className="sk-ig-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sk-ig-modal-close"
              onClick={() => setSelectedReel(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="sk-ig-modal-body">
              <div className="sk-ig-modal-media">
                {selectedReel.video_url ? (
                  <video
                    src={selectedReel.video_url}
                    poster={selectedReel.image_url || selectedReel.thumbnail}
                    controls
                    autoPlay
                    playsInline
                    className="sk-ig-modal-video"
                  />
                ) : (
                  <img
                    src={selectedReel.image_url || selectedReel.thumbnail}
                    alt={selectedReel.pic_text}
                    className="sk-ig-modal-img"
                  />
                )}
              </div>

              <div className="sk-ig-modal-info">
                <div className="sk-ig-modal-author">
                  <div className="sk-ig-avatar small">
                    <div className="sk-ig-avatar-fallback small">Viby</div>
                  </div>
                  <div>
                    <strong>@{bio?.username || "vibysolution"}</strong>
                    <span className="sk-ig-modal-loc">Navsari, Gujarat</span>
                  </div>
                </div>

                <div className="sk-ig-modal-caption">
                  <p>{selectedReel.pic_text}</p>
                </div>

                <div className="sk-ig-modal-foot">
                  <div className="sk-ig-modal-likes">
                    ❤️ {selectedReel.pic_like_count_formatted || "0"} likes
                  </div>
                  <a
                    href={selectedReel.link || `https://www.instagram.com/${bio?.username || "vibysolution"}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sk-ig-modal-link"
                  >
                    View on Instagram →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
