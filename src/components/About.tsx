import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section intro" id="about">
      <Reveal className="intro-layout">
        <h2>
          A technology partner, <span>not just another agency.</span>
        </h2>
        <div>
          <p>
            Viby Solution helps businesses and startups turn ideas into powerful digital products.
            We bring the strategic clarity, thoughtful design, and reliable engineering needed to
            make good ideas useful.
          </p>
          <a className="under-link blue" href="#contact">
            Work with us <span>↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
