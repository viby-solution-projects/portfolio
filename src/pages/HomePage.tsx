import Hero from "../components/Hero";
import TechStrip from "../components/TechStrip";
import EcosystemSection from "../components/EcosystemSection";
import Services from "../components/Services";
import Reasons from "../components/Reasons";
import Work from "../components/Work";
import FounderSection from "../components/FounderSection";
import Cta from "../components/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStrip />
      <EcosystemSection />
      <Services />
      <Reasons />
      <Work />
      <FounderSection />
      <Cta />
    </>
  );
}
