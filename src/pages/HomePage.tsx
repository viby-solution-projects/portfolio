import Hero from "../components/Hero";
import NavsariSection from "../components/NavsariSection";
import InstagramReelsSection from "../components/InstagramReelsSection";
import TechStrip from "../components/TechStrip";
import EcosystemSection from "../components/EcosystemSection";
import Services from "../components/Services";
import Reasons from "../components/Reasons";
import Work from "../components/Work";
import AiShowcaseSection from "../components/AiShowcaseSection";
import FounderSection from "../components/FounderSection";
import Cta from "../components/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NavsariSection />
      <InstagramReelsSection />
      <TechStrip />
      <EcosystemSection />
      <Services />
      <Reasons />
      <Work showToggle={false} />
      <AiShowcaseSection />
      <FounderSection />
      <Cta />
    </>
  );
}
