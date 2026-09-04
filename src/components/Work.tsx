import Reveal from "./Reveal";
import { cn } from "../utils/cn";
import brokerstreetsImg from "../assets/brokerstreets.png";
import kizzoImg from "../assets/kizzo.png";
import diamondFinanceImg from "../assets/diamondfinance.png";
import bharatLaunchImg from "../assets/bharatlaunch.png";

type Project = {
  name: string;
  category: string;
  desc: string;
  url: string;
  fullUrl: string;
  tags: string[];
  featured?: boolean;
  image: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    name: "Broker Streets",
    category: "Business / Technology",
    desc: "A digital platform and business ecosystem built around the brokerage industry.",
    url: "brokerstreets.com",
    fullUrl: "https://brokerstreets.com",
    tags: ["Brokerage Tech", "Digital Platform", "Ecosystem"],
    featured: true,
    image: brokerstreetsImg,
    alt: "Broker Streets - Gujarat's Trusted Marketplace for Agricultural & NA Land",
  },
  {
    name: "Kizzo",
    category: "E-commerce / Technology / Marketing",
    desc: "Working across e-commerce, digital presence, marketing and technology for a consumer brand.",
    url: "kizzo.in",
    fullUrl: "https://kizzo.in",
    tags: ["Shopify & E-commerce", "Digital Marketing", "Brand Growth"],
    featured: true,
    image: kizzoImg,
    alt: "Kizzo - E-commerce Brand & Premium Fragrances",
  },
  {
    name: "Diamond Finance",
    category: "FinTech / Web Application",
    desc: "A comprehensive financial intelligence and transaction ledger platform engineered for diamond brokers and gemstone enterprises.",
    url: "diamond-finance-delta.vercel.app",
    fullUrl: "https://diamond-finance-delta.vercel.app/",
    tags: ["FinTech Platform", "Transaction Ledger", "Broker Dashboard"],
    featured: true,
    image: diamondFinanceImg,
    alt: "Diamond Finance - Financial Intelligence & Brokerage Management Dashboard",
  },
  {
    name: "Bharat Launch",
    category: "Venture Ecosystem / Directory",
    desc: "The definitive directory and ecosystem intelligence platform tracking 500+ tech-forward Indian startups and venture funding.",
    url: "bharat-launch.vercel.app",
    fullUrl: "https://bharat-launch.vercel.app/",
    tags: ["Startup Directory", "Ecosystem Platform", "Funding Radar"],
    featured: true,
    image: bharatLaunchImg,
    alt: "Bharat Launch - The Definitive Pulse of India's Startup Ecosystem",
  },
];

function LiveBrowser({ project }: { project: Project }) {
  return (
    <div className="browser browser-live">
      <div className="browser-bar">
        <span className="browser-dots">
          <i className="dot-red" />
          <i className="dot-yellow" />
          <i className="dot-green" />
        </span>
        <div className="browser-address">
          <svg
            className="lock-icon"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>{project.url}</span>
        </div>
        <a
          href={project.fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="browser-visit-btn"
          title={`Open ${project.url} in new tab`}
        >
          <span className="live-pulse" />
          <span className="live-text">Live</span>
          <span className="arrow">↗</span>
        </a>
      </div>
      <a
        href={project.fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="browser-screen"
        aria-label={`Visit ${project.name} website at ${project.url}`}
      >
        <img
          src={project.image}
          alt={project.alt}
          className="browser-screen-img"
          loading="lazy"
        />
        <div className="browser-screen-overlay">
          <span className="overlay-badge">
            <span>Explore {project.url}</span>
            <span className="badge-arrow">↗</span>
          </span>
        </div>
      </a>
    </div>
  );
}

export default function Work({ showAll = false }: { showAll?: boolean }) {
  return (
    <section className="section work" id="work">
      <div className="section-heading work-heading">
        <div>
          <h2>
            Ideas are easy.
            <br />
            <span>Execution is the work.</span>
          </h2>
          <p>
            We&rsquo;ve worked on projects across technology, e-commerce, marketing and business
            development.
          </p>
        </div>
      </div>

      <div className="projects-grid-2x2">
        {PROJECTS.map((project, i) => (
          <Reveal
            as="article"
            key={project.name}
            delay={(i % 2) as 0 | 1}
            className={cn("project", "project-featured")}
          >
            <LiveBrowser project={project} />
            <div className="project-info">
              <div>
                <div className="project-meta-line">
                  <span className="project-cat">{project.category}</span>
                  <span className="project-status">Live Project</span>
                </div>
                <p>{project.name}</p>
                <span>{project.desc}</span>
              </div>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                href={project.fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} at ${project.url}`}
                title={`Open ${project.url}`}
              >
                ↗
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      {showAll && (
        <Reveal className="future-projects-card">
          <span className="future-tag">FUTURE PROJECTS</span>
          <h3>More coming soon.</h3>
          <p>
            We&rsquo;re constantly working on new client projects and internal ventures. Some will
            make it here. Some will become something much bigger.
          </p>
        </Reveal>
      )}

      {!showAll && (
        <div className="section-footer-action">
          <a className="button button-blue" href="#/work">
            View Our Work <span>→</span>
          </a>
        </div>
      )}
    </section>
  );
}
