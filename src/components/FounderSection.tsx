import Reveal from "./Reveal";

export default function FounderSection() {
  return (
    <section className="section founder-section" id="founder">
      <div className="section-heading">
        <p className="section-label">[ 05 — FOUNDER ]</p>
        <h2>
          Built by <span>Het Chag.</span>
        </h2>
        <p>Founder, Viby Solution</p>
      </div>

      <Reveal className="founder-card-layout">
        <div className="founder-visual">
          <div className="founder-avatar-badge">
            <span className="founder-initials">HC</span>
            <div className="founder-verified">
              <span className="pulse" /> Active · July 2026
            </div>
          </div>
          <div className="founder-meta">
            <b>Het Chag</b>
            <small>Founder, Viby Solution</small>
            <span>Navsari, Gujarat, India</span>
          </div>
        </div>

        <div className="founder-bio">
          <p className="founder-quote">
            &ldquo;Businesses don&rsquo;t always need more people telling them what to do. They
            need people who can understand the problem and help get the work done.&rdquo;
          </p>
          <p>
            Viby Solution was founded by Het Chag in July 2026. He works across technology,
            marketing, e-commerce, business development and startups, with a focus on turning ideas
            into practical solutions.
          </p>
          <p>
            Today, Viby brings together a small team working across technology, marketing, business
            development and new ventures.
          </p>
          <div className="founder-actions">
            <a
              className="button button-dark"
              href="https://www.linkedin.com/in/het-chag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with Het on LinkedIn <span>↗</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
