import { useState, type FormEvent } from "react";
import Reveal from "../components/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Viby Solution (For Businesses)",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page contact-page">
      {/* Hero */}
      <section className="page-hero">
        <Reveal>
          <p className="overline">
            <span />
            Contact &amp; Inquiries · Navsari / Global
          </p>
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
                <div className="email-pill">
                  <span>[Your Viby email]</span>
                  <small className="placeholder-tag">Configurable placeholder</small>
                </div>
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
          </Reveal>

          {/* Right Column: Interactive Form */}
          <Reveal delay={1} className="contact-form-column">
            <div className="form-card">
              <span className="form-label">START A CONVERSATION</span>
              <h3>Send a message</h3>
              <p>
                Fill in the details below and we&rsquo;ll get back to you promptly.
              </p>

              {submitted ? (
                <div className="form-success-message">
                  <div className="success-icon">✓</div>
                  <h4>Thank you!</h4>
                  <p>
                    Your message has been recorded. We will review your inquiry and reach back out
                    shortly.
                  </p>
                  <button
                    type="button"
                    className="button button-blue"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        category: "Viby Solution (For Businesses)",
                        message: "",
                      });
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Inquiry Area</label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                    >
                      <option value="Viby Solution (For Businesses)">
                        Viby Solution (For Businesses — Tech / Marketing / Growth)
                      </option>
                      <option value="Viby Academy (For Students & Freshers)">
                        Viby Academy (Internships &amp; Training)
                      </option>
                      <option value="Viby Ventures (For Ideas & Startups)">
                        Viby Ventures (Ideas, Products &amp; Ventures)
                      </option>
                      <option value="General Conversation">
                        General Conversation / Partnerships
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">How can we help? *</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell us about what you're building, what problems you're trying to solve, or what you'd like to learn..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button type="submit" className="button button-blue form-submit-btn">
                    Send Message <span>↗</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
