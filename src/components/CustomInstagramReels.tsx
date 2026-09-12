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
  profile_picture: string;
  user_profile: string;
  biography: string;
  followers_count: string;
  posts_count: string;
}

/**
 * Custom fast-loading Instagram Reels component that directly reads
 * from the SociableKit feed JSON API (embed-id: 25713135).
 * Kept here for future reimplementation if needed.
 */
export default function CustomInstagramReels() {
  const [reels, setReels] = useState<ReelPost[]>([]);
  const [bio, setBio] = useState<BioInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedReel, setSelectedReel] = useState<ReelPost | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchFeed = async () => {
      try {
        const res = await fetch(
          "https://data.accentapi.com/feed/25713135.json"
        );
        if (!res.ok) throw new Error("Feed fetch error");
        const data = await res.json();
        if (isMounted) {
          if (data.posts && Array.isArray(data.posts)) {
            setReels(data.posts);
          }
          if (data.bio) {
            setBio(data.bio);
          }
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to load Instagram reels feed:", err);
        if (isMounted) setLoading(false);
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
    <div className="navsari-reels-showcase">
      {/* Header / Profile Strip */}
      <div className="reels-profile-header">
        <div className="reels-profile-left">
          <div className="reels-avatar-wrap">
            <img
              src={
                bio?.user_profile ||
                bio?.profile_picture ||
                "https://images.sociablekit.com/sources/instagram-reels/vibysolution/profile.webp"
              }
              alt="@vibysolution"
              className="reels-avatar-img"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://data-image.sociablekit.com/sources/instagram-reels/vibysolution/profile.webp";
              }}
            />
            <span className="reels-live-pulse" />
          </div>
          <div className="reels-profile-info">
            <div className="reels-name-row">
              <h3>@{bio?.username || "vibysolution"}</h3>
              <span className="reels-verified-badge" title="Verified Brand">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </span>
            </div>
            <p className="reels-bio-snippet">
              AI · Marketing · Ecommerce · Building from Navsari
            </p>
          </div>
        </div>

        <div className="reels-profile-actions">
          <a
            href={`https://www.instagram.com/${bio?.username || "vibysolution"}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="reels-follow-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>

      {/* Responsive Reels Grid (4 cols desktop, 2 cols tablet/mobile) */}
      <div className="reels-grid-layout">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="reel-card-skeleton">
              <div className="reel-skeleton-thumb" />
            </div>
          ))
        ) : reels.length > 0 ? (
          reels.slice(0, 4).map((reel) => (
            <div
              key={reel.id}
              className="reel-card"
              onClick={() => setSelectedReel(reel)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedReel(reel);
                }
              }}
            >
              <div className="reel-thumb-wrap">
                <img
                  src={reel.image_url || reel.thumbnail || reel.pic_src}
                  alt={reel.pic_text || "Viby Solution Reel"}
                  className="reel-thumb-img"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      reel.thumbnail || reel.pic_src;
                  }}
                />
                <div className="reel-gradient-overlay" />

                <div className="reel-play-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="reel-stats-overlay">
                  <div className="reel-stat-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>{reel.pic_like_count_formatted || "0"}</span>
                  </div>
                  {reel.pic_comment_count_formatted && (
                    <div className="reel-stat-pill">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                      </svg>
                      <span>{reel.pic_comment_count_formatted}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="reel-card-caption">
                <p>{reel.pic_text || "Watch reel by @vibysolution"}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="reels-fallback-msg">
            <p>Reels temporarily unavailable. Visit @vibysolution on Instagram.</p>
          </div>
        )}
      </div>

      {/* Interactive Reel Video Modal */}
      {selectedReel && (
        <div
          className="reel-modal-backdrop"
          onClick={() => setSelectedReel(null)}
        >
          <div
            className="reel-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="reel-modal-close"
              onClick={() => setSelectedReel(null)}
              aria-label="Close reel player"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="reel-modal-layout">
              <div className="reel-modal-video-box">
                {selectedReel.video_url ? (
                  <video
                    src={selectedReel.video_url}
                    poster={selectedReel.image_url || selectedReel.thumbnail}
                    controls
                    autoPlay
                    playsInline
                    className="reel-modal-video"
                  />
                ) : (
                  <img
                    src={selectedReel.image_url || selectedReel.thumbnail}
                    alt={selectedReel.pic_text}
                    className="reel-modal-poster"
                  />
                )}
              </div>

              <div className="reel-modal-details">
                <div className="reel-modal-author">
                  <img
                    src={
                      bio?.user_profile ||
                      bio?.profile_picture ||
                      "https://images.sociablekit.com/sources/instagram-reels/vibysolution/profile.webp"
                    }
                    alt="@vibysolution"
                    className="reel-modal-avatar"
                  />
                  <div>
                    <strong>@{bio?.username || "vibysolution"}</strong>
                    <span>Navsari, Gujarat</span>
                  </div>
                </div>

                <div className="reel-modal-caption-box">
                  <p>{selectedReel.pic_text}</p>
                </div>

                <div className="reel-modal-footer">
                  <div className="reel-modal-counts">
                    <span>❤️ {selectedReel.pic_like_count_formatted || "0"} likes</span>
                    <span>💬 {selectedReel.pic_comment_count_formatted || "0"} comments</span>
                  </div>
                  <a
                    href={selectedReel.link || "https://www.instagram.com/vibysolution/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reel-modal-ig-link"
                  >
                    Watch on Instagram →
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
