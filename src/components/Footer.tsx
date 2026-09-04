import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Logo light />
          <p className="footer-tagline">Build. Grow. Learn.</p>
          <p className="footer-subtext">
            A company working across businesses, people and ideas.
          </p>
        </div>

        <div className="footer-divisions">
          <div className="division-col">
            <a href="#/solution" className="div-title">
              Viby Solution
            </a>
            <small>Technology · Marketing · Business Development · Consulting</small>
          </div>
          <div className="division-col">
            <a href="#/academy" className="div-title">
              Viby Academy
            </a>
            <small>Training · Internships · Career Development</small>
          </div>
          <div className="division-col">
            <a href="#/ventures" className="div-title">
              Viby Ventures
            </a>
            <small>Startups · Products · New Ideas</small>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <b>Company</b>
          <a href="#/about">About</a>
          <a href="#/work">Work</a>
          <a href="#/contact">Contact</a>
        </div>
        <div>
          <b>Explore</b>
          <a href="#/solution">Solution</a>
          <a href="#/academy">Academy</a>
          <a href="#/ventures">Ventures</a>
        </div>
        <div>
          <b>Connect</b>
          <a href="mailto:vibysolution@gmail.com">
            vibysolution@gmail.com ↗
          </a>
          <a
            href="https://www.linkedin.com/in/het-chag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://instagram.com/VibySolution"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram (@VibySolution) ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Viby Solution. All rights reserved.</span>
        <a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
