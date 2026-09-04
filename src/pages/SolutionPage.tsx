import Reveal from "../components/Reveal";
import Cta from "../components/Cta";

const SERVICES_DETAILED = [
  {
    num: "01",
    category: "Technology",
    tagline: "Build better digital experiences.",
    desc: "We create practical digital solutions that help businesses operate, sell and grow.",
    items: [
      "Website Development",
      "Shopify & E-commerce",
      "AI Tools & Implementation",
    ],
  },
  {
    num: "02",
    category: "Marketing",
    tagline: "Get discovered. Stay relevant. Grow.",
    desc: "We help businesses build their digital presence and connect with the people who matter.",
    items: [
      "Digital Marketing",
      "SEO",
      "Social Media",
      "Content Creation",
      "Performance Marketing",
      "Email & CRM",
    ],
  },
  {
    num: "03",
    category: "Business Development",
    tagline: "Find opportunities. Create growth.",
    desc: "Growth isn't always about spending more on marketing. Sometimes it's about finding the right market, customer or opportunity.",
    items: ["Lead Generation", "Market Research"],
  },
  {
    num: "04",
    category: "Consulting",
    tagline: "Sometimes, you just need a different perspective.",
    desc: "We work with businesses to understand challenges, evaluate opportunities and create practical strategies.",
    items: [
      "Business Strategy",
      "E-commerce Consulting",
      "Startup Consulting",
      "Technology Consulting",
      "Marketing Consulting",
    ],
  },
];

const APPROACH_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "We learn about your business, goals and the problem you're trying to solve.",
  },
  {
    num: "02",
    title: "Think",
    desc: "We research, analyse and identify the most practical approach.",
  },
  {
    num: "03",
    title: "Build",
    desc: "We turn the plan into something real.",
  },
  {
    num: "04",
    title: "Improve",
    desc: "We measure, learn and make it better.",
  },
];

const AUDIENCE_STAGES = [
  {
    title: "Startups",
    desc: "From validating an idea to building the first version.",
  },
  {
    title: "Small Businesses",
    desc: "Helping traditional and service-based businesses adopt better technology and marketing.",
  },
  {
    title: "D2C Brands",
    desc: "Building and improving digital storefronts, marketing systems and customer journeys.",
  },
  {
    title: "Local Brands",
    desc: "Helping businesses build visibility and reach customers beyond their immediate location.",
  },
  {
    title: "Entrepreneurs",
    desc: "Turning business ideas into something structured, actionable and real.",
  },
];

export default function SolutionPage() {
  return (
    <div className="page solution-page">
      {/* Page Hero */}
      <section className="page-hero">
        <Reveal>
          <h1>
            Solutions for businesses that want to <em>move</em> forward.
          </h1>
          <p className="page-hero-summary">
            We help startups, small businesses, D2C brands, local businesses and
            entrepreneurs solve business problems through technology, marketing,
            business development and consulting.
          </p>
          <div className="hero-actions">
            <a className="button button-blue" href="#/contact">
              Let&rsquo;s Work Together <span>↗</span>
            </a>
            <a className="under-link" href="#services-list">
              View Services <span>↓</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Services Grid */}
      <section className="section" id="services-list">
        <div className="section-heading">
          <h2>
            What we do for <span>businesses.</span>
          </h2>
          <p>Four pillars designed to take your business from problem to practical solution.</p>
        </div>

        <div className="solution-services-grid">
          {SERVICES_DETAILED.map((service, i) => (
            <Reveal
              as="article"
              key={service.num}
              delay={(i % 2) as 0 | 1}
              className="solution-service-card"
            >
              <div className="card-top">
                <span className="card-num">{service.num}</span>
                <span className="card-pill">{service.category}</span>
              </div>
              <h3>{service.tagline}</h3>
              <p>{service.desc}</p>
              <div className="service-items-box">
                <span className="items-heading">Services &amp; Capabilities:</span>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>
                      <i>•</i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="section approach-section">
        <div className="section-heading">
          <h2>
            We keep it <span>simple.</span>
          </h2>
          <p>A clear, proven framework from first conversation to measurable result.</p>
        </div>

        <div className="approach-grid">
          {APPROACH_STEPS.map((step, i) => (
            <Reveal
              as="article"
              key={step.num}
              delay={(i % 2) as 0 | 1}
              className="approach-card"
            >
              <b>{step.num}</b>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section who-stages-section">
        <Reveal className="reasons-top">
          <h2>
            Small enough to understand you. <span>Ambitious enough to think big.</span>
          </h2>
          <p>
            We work with businesses at different stages, tailoring our approach to what actually
            creates momentum for your specific model.
          </p>
        </Reveal>

        <div className="stages-grid">
          {AUDIENCE_STAGES.map((stage, i) => (
            <Reveal
              as="article"
              key={stage.title}
              delay={(i % 2) as 0 | 1}
              className="stage-card"
            >
              <span className="stage-num">0{i + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <Cta
        title="Have a business problem?"
        desc="Tell us what you're working on, where you need support, and how we can help you build momentum."
        buttonText="Tell Us About Your Project"
        buttonLink="#/contact"
        label="[ LET'S CONNECT ]"
      />
    </div>
  );
}
