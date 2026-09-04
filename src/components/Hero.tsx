import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <Reveal>
          <h1>
            Building what businesses need to <em>move</em> forward.
          </h1>
          <p className="hero-summary">
            We work with startups, small businesses, D2C brands and entrepreneurs to
            build better businesses through technology, marketing, business development
            and strategic thinking.
          </p>
          <div className="hero-actions">
            <a className="button button-blue" href="#/contact">
              Work With Us <span>↗</span>
            </a>
            <a className="under-link" href="#ecosystem">
              Explore Viby <span>↓</span>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={1} className="hero-visual-wrap">
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-grid" />
          <div className="blue-haze" />
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="code-card">
            <div className="code-head">
              <span />
              <span />
              <span />
              <b>viby.config.ts</b>
            </div>
            <code>
              <i>const</i> ecosystem = <strong>createViby</strong>({"{"}
              <br />
              {"\u00A0\u00A0"}solution: <u>"business"</u>,
              <br />
              {"\u00A0\u00A0"}academy: <u>"people"</u>,
              <br />
              {"\u00A0\u00A0"}ventures: <u>"ideas"</u>
              <br />
              {"}"});
            </code>
          </div>
          <div className="dashboard-card">
            <div className="dash-top">
              <b>Viby / Ecosystem</b>
              <span>•••</span>
            </div>
            <div className="chart">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="dash-stats">
              <span>
                <b>3 Arms</b>
                <small>Ecosystem</small>
              </span>
              <span>
                <b>100%</b>
                <small>Execution</small>
              </span>
            </div>
          </div>
          <div className="floating-pill">
            <span className="pulse" />
            Systems online
          </div>
          <div className="visual-label">
            SOLVE · LEARN
            <br />× BUILD
          </div>
        </div>
      </Reveal>

      <div className="hero-bottom">
        <span>Scroll to explore</span>
        <i />
        <span>Viby Ecosystem · July 2026</span>
      </div>
    </section>
  );
}
