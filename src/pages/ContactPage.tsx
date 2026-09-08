import { useState } from "react";
import Reveal from "../components/Reveal";

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSca9y9YLdtGQqdCIPYLieQAvKtYibNAW5B7BqtdIU-31gRjzw/viewform?embedded=true";
const GOOGLE_FORM_DIRECT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSca9y9YLdtGQqdCIPYLieQAvKtYibNAW5B7BqtdIU-31gRjzw/viewform";

export default function ContactPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="page contact-page">
      {/* Hero */}
      <section className="page-hero">
        <Reveal>
          <h1>
            Let&rsquo;s build <em>something.</em>
          </h1>
          <div className="contact-hero-bulletins">
            <p>Have a business you&rsquo;re trying to grow?</p>
            <p>Need help with technology or marketing?</p>
            <p>Have a project in mind?</p>
            <p>Or simply want to talk?</p>
            <b>Reach out.</b>
          </div>
        </Reveal>
      </section>

      {/* Main Contact Grid: Channels & Location vs Contact Form */}
      <section className="section contact-main-section">
        <div className="contact-layout-grid">
          {/* Left Column: Direct channels and physical location */}
          <Reveal className="contact-info-column">
            <div className="info-block">
              <span className="contact-badge">GET IN TOUCH</span>

              {/* Email */}
              <div className="contact-item">
                <b>Email</b>
                <a
                  href="mailto:vibysolution@gmail.com"
                  className="contact-link"
                >
                  vibysolution@gmail.com <span>↗</span>
                </a>
                <p>For business enquiries, partnerships and general questions.</p>
              </div>

              {/* Instagram */}
              <div className="contact-item">
                <b>Instagram</b>
                <a
                  href="https://instagram.com/VibySolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @VibySolution <span>↗</span>
                </a>
                <p>Follow us for what we&rsquo;re building, learning and working on.</p>
              </div>

              {/* LinkedIn */}
              <div className="contact-item">
                <b>LinkedIn</b>
                <a
                  href="https://www.linkedin.com/in/het-chag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Viby Solution / Het Chag <span>↗</span>
                </a>
                <p>Company updates, projects and opportunities.</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="location-card">
              <span className="contact-badge">LOCATION</span>
              <h3>Viby Solution</h3>
              <address>
                138, Central Business Hub
                <br />
                Opposite Mahendra Brothers
                <br />
                Jamalpore, Navsari
                <br />
                Gujarat, India
              </address>
              <div className="location-pin-indicator">
                <span className="pulse" />
                Navsari, Gujarat · Headquarters
              </div>
            </div>
            <iframe
              title="Viby Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.392263581632!2d72.94266407471179!3d20.92781329123917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f701651b0cc9%3A0x9bf3898f65da0b60!2scentral%20business%20hub%2C%20140%2C%20Gandevi%20Rd%2C%20opp.%20Mahendra%20brother%E2%80%99s%2C%20Vimal%20Park%2C%20Majur%20Mahajan%20Society%2C%20Jamalpore%2C%20Navsari%2C%20Chhapra%20Part%2C%20Gujarat%20396427!5e1!3m2!1sen!2sin!4v1788846703199!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "8px", marginTop: "16px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </Reveal>

          {/* Right Column: Embedded Google Form */}
          <Reveal delay={1} className="contact-form-column">
            <div className="form-card google-form-card">
              <div className="google-form-header">
                <span className="form-label">START A CONVERSATION</span>
                <h3>Inquiry &amp; Project Form</h3>
                <p>
                  Fill out the form below with your requirements and we&rsquo;ll get back to you promptly.
                </p>
              </div>

              <div className="google-form-wrapper">
                {!iframeLoaded && (
                  <div className="google-form-loading" aria-live="polite">
                    <div className="loading-spinner" />
                    <span>Loading inquiry form...</span>
                  </div>
                )}
                <iframe
                  src={GOOGLE_FORM_EMBED_URL}
                  title="Viby Solution Inquiry Form"
                  className="google-form-iframe"
                  width="100%"
                  height="780"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  onLoad={() => setIframeLoaded(true)}
                >
                  Loading form…
                </iframe>
              </div>

              <div className="google-form-footer">
                <span>Trouble viewing or submitting the form?</span>
                <a
                  href={GOOGLE_FORM_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-form-external-link"
                >
                  Open in Google Forms <span>↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
