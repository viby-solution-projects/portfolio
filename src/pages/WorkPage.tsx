import Reveal from "../components/Reveal";
import Work from "../components/Work";
import Cta from "../components/Cta";

export default function WorkPage() {
  return (
    <div className="page work-page">
      {/* Hero */}
      <section className="page-hero">
        <Reveal>
          <h1>
            Things we&rsquo;ve been <em>building.</em>
          </h1>
          <p className="page-hero-summary">
            A selection of projects across technology, e-commerce, marketing and business
            development.
          </p>
        </Reveal>
      </section>

      {/* Projects List with Future Projects enabled */}
      <Work showAll />

      {/* CTA */}
      <Cta
        title="Have a project in mind?"
        desc="Let's build your next digital platform, e-commerce experience, or marketing engine."
        buttonText="Start a Project"
        buttonLink="#/contact"
        label="[ LET'S BUILD ]"
      />
    </div>
  );
}
