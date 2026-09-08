import Reveal from "./Reveal";
import ProductEditingGallery from "./ProductEditingGallery";

export default function AiShowcaseSection() {
  return (
    <section className="section ai-showcase-section" id="ai-showcase">
      <Reveal>
        <div className="section-heading work-heading">
          <div>
            <span className="subsection-badge">[ COMMERCIAL VISUALS ]</span>
            <h2>
              AI Generated Imagery.
              <br />
              <span>Commercial Product Showcase.</span>
            </h2>
            <p className="pt-4">
              A curated showcase of high-end AI product imagery, luxury product renders, and hyper-realistic commercial visuals.
            </p>
          </div>
        </div>
      </Reveal>

      <ProductEditingGallery />
    </section>
  );
}
