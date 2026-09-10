import { lazy, Suspense } from "react";
import { useRoute } from "./utils/useRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Eagerly load primary HomePage so initial render is instantaneous with zero footer flash
import HomePage from "./pages/HomePage";

// Lazy-loaded secondary pages on demand
const SolutionPage = lazy(() => import("./pages/SolutionPage"));
const AcademyPage = lazy(() => import("./pages/AcademyPage"));
const VenturesPage = lazy(() => import("./pages/VenturesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

export default function App() {
  const { route } = useRoute();

  const renderCurrentPage = () => {
    switch (route) {
      case "/solution":
        return <SolutionPage />;
      case "/academy":
        return <AcademyPage />;
      case "/ventures":
        return <VenturesPage />;
      case "/about":
        return <AboutPage />;
      case "/work":
        return <WorkPage />;
      case "/contact":
        return <ContactPage />;
      case "/":
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header currentRoute={route} />
      <main id="main-content" tabIndex={-1} style={{ minHeight: "calc(100vh - 78px)" }}>
        <Suspense fallback={<div style={{ minHeight: "calc(100vh - 78px)" }} />}>
          {renderCurrentPage()}
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
