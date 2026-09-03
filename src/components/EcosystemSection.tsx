import Reveal from "./Reveal";

const DIVISIONS = [
  {
    num: "01",
    name: "Viby Solution",
    tagline: "For businesses.",
    desc: "Technology, marketing, business development and consulting to help businesses build, grow and operate better.",
    link: "#/solution",
    cta: "Explore Solution →",
  },
  {
    num: "02",
    name: "Viby Academy",
    tagline: "For people.",
    desc: "Practical training and internship opportunities designed to help students and freshers gain experience by working on real projects.",
    link: "#/academy",
    cta: "Explore Academy →",
  },
  {
    num: "03",
    name: "Viby Ventures",
    tagline: "For ideas.",
    desc: "Our venture-building arm focused on identifying problems, creating solutions, validating ideas and building businesses of our own.",
    link: "#/ventures",
    cta: "Explore Ventures →",
  },
];

export default function EcosystemSection() {
  return (
    <section className="section ecosystem-section" id="ecosystem">
      <div className="section-heading">
        <div>
          <p className="section-label">[ 01 — THE VIBY ECOSYSTEM ]</p>
          <h2>
            One company.
            <br />
            <span>Three ways to create impact.</span>
          </h2>
        </div>
        <p>A company built around three ideas: Solve. Learn. Build.</p>
      </div>

      <div className="ecosystem-grid">
        {DIVISIONS.map((div, i) => (
          <Reveal
            as="article"
            key={div.num}
            delay={(i % 3) as 0 | 1 | 2}
            className="ecosystem-card"
          >
            <div className="card-top">
              <span className="card-num">{div.num}</span>
              <span className="card-pill">{div.tagline}</span>
            </div>
            <h3>{div.name}</h3>
            <p>{div.desc}</p>
            <a href={div.link} className="card-action">
              {div.cta}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
