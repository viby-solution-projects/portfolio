import Reveal from "./Reveal";

export default function Cta({
  title = "Have something you're building?",
  desc = "Let's talk about what you're working on, where you're stuck and what we can build together.",
  buttonText = "Let's Talk",
  buttonLink = "#/contact",
  label = "[ 06 — START A CONVERSATION ]",
}: {
  title?: string;
  desc?: string;
  buttonText?: string;
  buttonLink?: string;
  label?: string;
}) {
  return (
    <section className="cta" id="cta-section">
      <div className="cta-content">
        <Reveal>
          <p className="section-label">{label}</p>
          <h2>
            {title.includes("building?") ? (
              <>
                Have something <span>you&rsquo;re building?</span>
              </>
            ) : (
              <span>{title}</span>
            )}
          </h2>
          <p>{desc}</p>
          <a className="button button-light" href={buttonLink}>
            {buttonText} <span>↗</span>
          </a>
        </Reveal>
      </div>
      <div className="cta-art" aria-hidden="true">
        <span>V</span>
        <i />
        <i />
      </div>
    </section>
  );
}
