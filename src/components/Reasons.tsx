import Reveal from "./Reveal";

const PROCESS_STEPS = [
  { num: "01", title: "Understand", desc: "Start with the real problem and understand the business context." },
  { num: "02", title: "Plan", desc: "Determine what actually makes sense for your exact stage and market." },
  { num: "03", title: "Build", desc: "Execute with high precision across tech, marketing, or strategy." },
  { num: "04", title: "Launch", desc: "Deploy to real customers with measured feedback loops." },
  { num: "05", title: "Improve", desc: "Iterate continuously to drive sustainable, long-term business growth." },
];

const AUDIENCES = [
  "Startups",
  "Small businesses",
  "D2C brands",
  "Local brands",
  "Entrepreneurs",
  "Service-based businesses",
  "New business ideas",
];

export default function Reasons() {
  return (
    <section className="section reasons" id="why-viby">
      <Reveal className="reasons-top">
        <h2>
          We don&rsquo;t believe in <span>one-size-fits-all solutions.</span>
        </h2>
        <div>
          <p>
            Every business is different. A local business doesn&rsquo;t have the same problems as a
            D2C brand. A startup doesn&rsquo;t need the same approach as an established company.
          </p>
          <p style={{ marginTop: "16px" }}>
            We start with the problem, understand the business and then figure out what actually
            makes sense.
          </p>
        </div>
      </Reveal>

      {/* Process Flow */}
      <div className="why-process-track">
        {PROCESS_STEPS.map((step, i) => (
          <Reveal as="article" key={step.num} delay={(i % 2) as 0 | 1} className="why-step-card">
            <b>{step.num}</b>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </Reveal>
        ))}
      </div>

      {/* Who We Work With */}
      <Reveal className="who-we-work-with">
        <div className="who-header">
          <span className="who-tag">WHO WE WORK WITH</span>
          <h3>Built for businesses that are building.</h3>
          <p>
            Whether you&rsquo;re starting from scratch or trying to improve what already exists, we
            can help turn the next step into something actionable.
          </p>
        </div>
        <div className="audience-pills">
          {AUDIENCES.map((item) => (
            <span key={item} className="audience-pill">
              <i>✓</i> {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
