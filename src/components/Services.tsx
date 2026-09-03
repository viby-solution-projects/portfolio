import Reveal from "./Reveal";

const CAPABILITIES = [
  {
    num: "01",
    title: "Technology",
    desc: "Websites, e-commerce and AI-powered solutions designed around real business needs.",
    tags: "Websites · Shopify · AI Tools",
    link: "#/solution",
  },
  {
    num: "02",
    title: "Marketing",
    desc: "Digital marketing, SEO, social media, content, performance marketing and email/CRM.",
    tags: "SEO · Social Media · Content · Performance",
    link: "#/solution",
  },
  {
    num: "03",
    title: "Business Development",
    desc: "Finding opportunities, understanding markets and creating better ways to reach customers.",
    tags: "Lead Gen · Market Research · Growth",
    link: "#/solution",
  },
  {
    num: "04",
    title: "Consulting",
    desc: "Practical thinking across business strategy, startups, e-commerce, technology and marketing.",
    tags: "Strategy · Startups · Tech Consulting",
    link: "#/solution",
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading">
        <p className="section-label">[ 02 — WHAT WE DO ]</p>
        <h2>
          From ideas <span>to execution.</span>
        </h2>
        <p>
          Good ideas are everywhere. What matters is knowing what to build, how to market it,
          how to reach the right people and how to keep improving it. That&rsquo;s where we come in.
        </p>
      </div>

      <div className="service-grid service-grid-4">
        {CAPABILITIES.map((service, i) => (
          <Reveal
            as="article"
            key={service.num}
            delay={(i % 2) as 0 | 1}
            className="service-card"
          >
            <span className="num">{service.num}</span>
            <a href={service.link} className="go" aria-label={`Explore ${service.title} services`}>
              ↗
            </a>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <small>{service.tags}</small>
          </Reveal>
        ))}
      </div>

      <div className="section-footer-action">
        <a className="button button-blue" href="#/solution">
          Explore Our Services <span>→</span>
        </a>
      </div>
    </section>
  );
}
