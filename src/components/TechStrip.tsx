const CAPABILITIES = [
  "Website Development",
  "Shopify & E-commerce",
  "AI Tools & Implementation",
  "Digital Marketing",
  "SEO & Performance",
  "Social Media & Content",
  "Lead Generation",
  "Market Research",
  "Business Strategy",
  "Startup Consulting",
  "Viby Academy",
  "Viby Ventures",
];

function Group() {
  return (
    <div className="marquee-group">
      {CAPABILITIES.map((item, i) => (
        <span key={`${item}-${i}`}>
          <i>•</i> {item}
        </span>
      ))}
    </div>
  );
}

export default function TechStrip() {
  return (
    <div className="tech-strip" aria-label="Core Capabilities and Focus Areas">
      <p>Capabilities &amp; Ecosystem</p>
      <div className="marquee">
        <div className="marquee-track">
          <Group />
          <Group />
        </div>
      </div>
    </div>
  );
}
