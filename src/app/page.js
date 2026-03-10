import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import KPIBanner from "../components/KPIBanner";
import FeatureCards from "../components/FeatureCards";
import PlatformModules from "../components/PlatformModules";
import ArchitectureFlow from "../components/ArchitectureFlow";
import UseCasesGrid from "../components/UseCasesGrid";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <KPIBanner />
      <FeatureCards />
      <PlatformModules />
      <ArchitectureFlow />
      <UseCasesGrid />
      <Footer />
    </>
  );
}