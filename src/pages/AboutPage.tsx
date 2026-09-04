import Reveal from "../components/Reveal";
import FounderSection from "../components/FounderSection";
import Cta from "../components/Cta";

const VALUES = [
  {
    num: "01",
    title: "Stay Curious",
    desc: "Things change quickly. We keep learning.",
  },
  {
    num: "02",
    title: "Think Practically",
    desc: "Good ideas are only useful when they can be executed.",
  },
  {
    num: "03",
    title: "Start Small",
    desc: "We don't wait for everything to be perfect.",
  },
  {
    num: "04",
    title: "Keep Building",
    desc: "We believe progress comes from action.",
  },
  {
    num: "05",
    title: "Be Honest",
    desc: "We'd rather tell you what you actually need than sell you what you don't.",
  },
];

export default function AboutPage() {
  return (
    <div className="page about-page">
      {/* Hero */}
      <section className="page-hero">
        <Reveal>
          <h1>
            We&rsquo;re building more than a company. <em>We&rsquo;re building an ecosystem.</em>
          </h1>
          <p className="page-hero-summary">
            Viby Solution started in July 2026 with a simple belief: Businesses, people and
            ideas grow better when they have the right support around them.
          </p>
          <div className="ecosystem-tags-row">
            <span className="eco-tag">
              <b>Viby Solution</b> · Helping Businesses
            </span>
            <span className="eco-tag">
              <b>Viby Academy</b> · Developing People
            </span>
            <span className="eco-tag">
              <b>Viby Ventures</b> · Building Ideas
            </span>
          </div>
        </Reveal>
      </section>

      {/* Story */}
      <section className="section story-section">
        <Reveal className="reasons-top">
          <h2>
            It started with a <span>simple question.</span>
          </h2>
          <div className="story-content-body">
            <p className="story-lead">
              Why should technology, marketing, business development and strategy always be
              treated as separate things?
            </p>
            <p>
              For many startups and small businesses, they aren&rsquo;t. A business may need a
              website, but the website needs marketing. Marketing needs a strategy. Strategy
              needs market understanding. And all of it needs to work together.
            </p>
            <p>
              <strong>Viby was created to bring those pieces closer together.</strong>
            </p>
          </div>
        </Reveal>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision-section">
        <div className="mission-vision-grid">
          <Reveal className="mv-card">
            <span className="mv-label">OUR MISSION</span>
            <h3>Make it easier for people to build better businesses.</h3>
            <p>
              We want to help businesses solve real problems, help young talent gain real experience
              and build ideas that can become meaningful businesses.
            </p>
          </Reveal>

          <Reveal delay={1} className="mv-card mv-vision-card">
            <span className="mv-label">OUR VISION</span>
            <h3>Build. Grow. Learn. Repeat.</h3>
            <p>We want Viby to become a place where:</p>
            <ul className="vision-bullets">
              <li>
                <b>Businesses</b> find solutions.
              </li>
              <li>
                <b>People</b> find opportunities.
              </li>
              <li>
                <b>Ideas</b> find a way to become real.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="section-heading">
          <h2>
            Principles that guide <span>how we work.</span>
          </h2>
          <p>Ground rules for every project, partnership, and decision.</p>
        </div>

        <div className="values-grid">
          {VALUES.map((val, i) => (
            <Reveal
              as="article"
              key={val.num}
              delay={(i % 2) as 0 | 1}
              className="value-card"
            >
              <span className="value-num">{val.num}</span>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* CTA */}
      <Cta
        title="Ready to build something together?"
        desc="Let's talk about how Viby can support your business, career, or new venture idea."
        buttonText="Let's Talk"
        buttonLink="#/contact"
      />
    </div>
  );
}
