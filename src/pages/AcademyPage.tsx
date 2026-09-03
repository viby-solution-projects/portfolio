import Reveal from "../components/Reveal";
import Cta from "../components/Cta";

const DOMAINS = [
  "Digital Marketing",
  "E-commerce",
  "Artificial Intelligence",
  "Web Development",
  "Content Creation",
  "Business Development",
  "Sales",
  "Graphic Design",
  "And more...",
];

const WHAT_YOU_GET = [
  {
    title: "Real Project Experience",
    desc: "Work on actual Viby and client projects with real stakes and real outcomes.",
  },
  {
    title: "Portfolio Building",
    desc: "Build tangible, live work you can proudly show to future employers.",
  },
  {
    title: "LinkedIn Optimisation",
    desc: "Learn to present yourself professionally online and attract opportunities.",
  },
  {
    title: "CV Rebuilding",
    desc: "Create a stronger, recruiter-ready, and impact-focused CV.",
  },
  {
    title: "Internship Certificate",
    desc: "Receive official certification validating your internship and program completion.",
  },
  {
    title: "Career Opportunities",
    desc: "Eligible high-performing candidates may get access to full-time job opportunities.",
  },
];

export default function AcademyPage() {
  return (
    <div className="page academy-page">
      {/* Hero */}
      <section className="page-hero">
        <Reveal>
          <p className="overline">
            <span />
            Viby Academy · For People
          </p>
          <h1>
            Learn by doing. <em>Not just by watching.</em>
          </h1>
          <p className="page-hero-summary">
            Viby Academy gives college students and freshers the opportunity to learn
            practical skills, work on real projects and start building their professional
            careers.
          </p>
          <div className="hero-actions">
            <a className="button button-blue" href="#programs">
              Explore Programs <span>↓</span>
            </a>
            <a className="under-link" href="#/contact">
              Apply Now <span>↗</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="section philosophy-section">
        <p className="section-label">[ OUR PHILOSOPHY ]</p>
        <Reveal className="reasons-top">
          <h2>
            Because experience can&rsquo;t be <span>taught from a textbook.</span>
          </h2>
          <div>
            <p>Courses can teach you the basics. Real projects teach you how things actually work.</p>
            <p style={{ marginTop: "16px" }}>
              At Viby Academy, students get the opportunity to work on real Viby and client
              projects, learn from practical situations and build work they can talk about when
              applying for jobs.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Programs */}
      <section className="section programs-section" id="programs">
        <div className="section-heading">
          <p className="section-label">[ PROGRAMS ]</p>
          <h2>
            Structured for <span>real outcomes.</span>
          </h2>
          <p>Choose the program matching your current stage of learning and career growth.</p>
        </div>

        <div className="programs-grid">
          {/* Freshers Program */}
          <Reveal className="program-card program-freshers">
            <div className="program-badge">FOR FRESHERS</div>
            <span className="program-duration">2-Month Unpaid Internship</span>
            <h3>Practical Launchpad</h3>
            <p className="program-summary">
              Designed for freshers looking to gain their first practical real-world experience.
            </p>
            <div className="program-perks">
              <b>You get the opportunity to:</b>
              <ul>
                <li>✓ Work on real projects</li>
                <li>✓ Learn practical skills</li>
                <li>✓ Build your professional portfolio</li>
                <li>✓ Receive an internship certificate</li>
                <li>✓ Optimise your LinkedIn profile</li>
                <li>✓ Rebuild your CV</li>
                <li>✓ Get career guidance</li>
                <li>✓ Explore potential job opportunities</li>
              </ul>
            </div>
            <a className="button button-blue" href="#/contact">
              Apply for Internship <span>→</span>
            </a>
          </Reveal>

          {/* College Students Program */}
          <Reveal delay={1} className="program-card program-college">
            <div className="program-badge">FOR COLLEGE STUDENTS</div>
            <span className="program-duration">3-Month Paid Training + Internship</span>
            <h3>Skill &amp; Build Track</h3>
            <p className="program-summary">
              A structured learning and internship experience designed for college students who
              want to develop practical skills before entering the workforce.
            </p>
            <div className="program-flow-box">
              <b>You learn. You work. You build.</b>
              <p>The program combines structured training with hands-on project experience.</p>
            </div>
            <div className="program-perks">
              <b>Key Highlights:</b>
              <ul>
                <li>✓ Direct mentorship &amp; live training</li>
                <li>✓ Hands-on client and venture assignments</li>
                <li>✓ Real teamwork and agile workflows</li>
                <li>✓ Paid stipend structure during internship</li>
              </ul>
            </div>
            <a className="button button-dark" href="#/contact">
              Explore the Program <span>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Domains */}
      <section className="section domains-section">
        <div className="section-heading">
          <p className="section-label">[ DOMAINS ]</p>
          <h2>
            Choose what you want to <span>build your career in.</span>
          </h2>
          <p>Gain hands-on expertise across modern digital industries.</p>
        </div>

        <div className="domains-grid">
          {DOMAINS.map((domain, i) => (
            <Reveal as="div" key={domain} delay={(i % 3) as 0 | 1 | 2} className="domain-pill-card">
              <span className="domain-index">0{i + 1}</span>
              <b>{domain}</b>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="section what-you-get-section">
        <div className="section-heading">
          <p className="section-label">[ WHAT YOU GET ]</p>
          <h2>
            More than <span>a certificate.</span>
          </h2>
          <p>Tangible proof of work and professional confidence.</p>
        </div>

        <div className="get-grid">
          {WHAT_YOU_GET.map((item, i) => (
            <Reveal as="article" key={item.title} delay={(i % 2) as 0 | 1} className="get-card">
              <span className="get-num">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who Is It For */}
      <section className="section who-academy-section">
        <Reveal className="who-navsari-banner">
          <p className="section-label">[ WHO IS IT FOR? ]</p>
          <h2>
            For students and freshers from <span>Navsari</span> who want to get ahead before their
            first job.
          </h2>
          <p>
            You don&rsquo;t need to know everything. You need curiosity, commitment and the
            willingness to learn.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <Cta
        title="Your first opportunity doesn't have to be your last."
        desc="Start building experience today with real projects, practical skills, and dedicated mentorship."
        buttonText="Apply Now"
        buttonLink="#/contact"
        label="[ START YOUR JOURNEY ]"
      />
    </div>
  );
}
