import Reveal from "../components/Reveal";
import Cta from "../components/Cta";

const VENTURE_STEPS = [
  {
    num: "01",
    title: "Identify",
    desc: "Find interesting problems, industry gaps and real consumer opportunities.",
  },
  {
    num: "02",
    title: "Validate",
    desc: "Talk to users, research market dynamics, and aggressively test assumptions.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Create focused products, services, or lean business models around validated opportunities.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Put them into the real world to get real feedback and user traction.",
  },
  {
    num: "05",
    title: "Scale",
    desc: "Double down with technology, capital, and marketing on ideas that show genuine potential.",
  },
];

export default function VenturesPage() {
  return (
    <div className="page ventures-page">
      {/* Hero */}
      <section className="page-hero">
        <Reveal>
          <p className="overline">
            <span />
            Viby Ventures · For Ideas
          </p>
          <h1>
            We don&rsquo;t just work on businesses. <em>We build them too.</em>
          </h1>
          <p className="page-hero-summary">
            Viby Ventures is our internal venture-building arm where we identify problems,
            explore opportunities and build products and businesses of our own.
          </p>
          <div className="hero-actions">
            <a className="button button-blue" href="#what-we-do">
              Explore Our Ventures <span>↓</span>
            </a>
            <a className="under-link" href="#/contact">
              Pitch an Idea <span>↗</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* What We Do */}
      <section className="section" id="what-we-do">
        <div className="section-heading">
          <p className="section-label">[ WHAT WE DO ]</p>
          <h2>
            From problem to <span>possibility.</span>
          </h2>
          <p>We look for problems worth solving. Then we execute systematically.</p>
        </div>

        <div className="ventures-track">
          {VENTURE_STEPS.map((step, i) => (
            <Reveal
              as="article"
              key={step.num}
              delay={(i % 2) as 0 | 1}
              className="venture-step-card"
            >
              <b>{step.num}</b>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="section ventures-approach-section">
        <p className="section-label">[ OUR APPROACH ]</p>
        <Reveal className="reasons-top">
          <h2>
            Think like a startup. <span>Build like a business.</span>
          </h2>
          <div>
            <p>
              We don&rsquo;t want to build products just because we can. We want to build things
              people actually need.
            </p>
            <p style={{ marginTop: "16px" }}>
              That means starting small, testing quickly, learning from the market and improving
              along the way.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Philosophy Card */}
      <section className="section ideas-philosophy-section">
        <Reveal className="philosophy-manifesto-card">
          <div className="manifesto-pill">HONEST VENTURE PHILOSOPHY</div>
          <h2>
            Some ideas stay ideas. <span>That&rsquo;s okay.</span>
          </h2>
          <p>
            The goal isn&rsquo;t to make every idea successful.
            <br />
            <strong>The goal is to discover the ideas worth pursuing.</strong>
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <Cta
        title="Have an idea worth exploring?"
        desc="We'd love to hear it. Whether you're an entrepreneur, collaborator, or looking for a venture partner, reach out."
        buttonText="Get in Touch"
        buttonLink="#/contact"
        label="[ VENTURE COLLABORATION ]"
      />
    </div>
  );
}
