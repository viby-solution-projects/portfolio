import Reveal from "./Reveal";
import navsariBanner from "../assets/navsari/navsari-banner.png";

export default function NavsariSection() {
  return (
    <section className="navsari-section" id="city">
      <div className="navsari-container">
        {/* Section Header */}
        <Reveal>
          <div className="navsari-header">
            <div className="navsari-badge-wrap">
              <span className="live-dot" />
              <span className="navsari-badge">
                ROOTED IN NAVSARI, GUJARAT · CRAFTING GLOBALLY
              </span>
            </div>
            <h2>
              Proudly Born &amp; Built in the <em>Twin City</em> of South Gujarat.
            </h2>
            <p className="navsari-lead">
              From the historic soil that gave India visionaries like{" "}
              <strong>Jamsetji Tata</strong> and <strong>Dadabhai Naoroji</strong>{" "}
              to the iconic sands of <strong>Dandi</strong>, Navsari is where our
              passion meets relentless execution. We engineer high-performance
              digital products and scalable businesses right from our headquarters
              at <strong>Central Business Hub, Jamalpore</strong>.
            </p>
          </div>
        </Reveal>

        {/* Quick Highlights Strip */}
        <Reveal delay={1}>
          <div className="navsari-pills">
            <div className="navsari-pill">
              <span className="pill-icon">🏛️</span>
              <div>
                <strong>Pioneer Heritage</strong>
                <span>Cradle of Indian industry &amp; enterprise</span>
              </div>
            </div>
            <div className="navsari-pill">
              <span className="pill-icon">📍</span>
              <div>
                <strong>Viby Headquarters</strong>
                <span>1st Floor, Central Business Hub, Jamalpore</span>
              </div>
            </div>
            <div className="navsari-pill">
              <span className="pill-icon">🌏</span>
              <div>
                <strong>Global Reach</strong>
                <span>South Gujarat grit, worldwide digital execution</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Panoramic City Banner */}
        <Reveal delay={2}>
          <div className="navsari-banner-card">
            <div className="navsari-banner-img-wrap">
              <img
                src={navsariBanner}
                alt="Navsari - The City of Opportunities, Our City Our Pride"
                className="navsari-banner-img"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
