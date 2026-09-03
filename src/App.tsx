import { useRoute } from "./utils/useRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import SolutionPage from "./pages/SolutionPage";
import AcademyPage from "./pages/AcademyPage";
import VenturesPage from "./pages/VenturesPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

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
      <main id="main-content" tabIndex={-1}>
        {renderCurrentPage()}
      </main>
      <Footer />
    </>
  );
}
