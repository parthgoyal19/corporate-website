import { Link } from "react-router-dom";
function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-cta-content">
        <p className="section-label">START THE CONVERSATION</p>

        <h2>
          Your financial journey
          <span>starts with clarity.</span>
        </h2>

        <p className="contact-cta-description">
          Whether you are planning your next goal, reviewing your
          investments or thinking about the future, let's start with
          understanding where you are today.
        </p>

        <div className="contact-cta-buttons">
          <Link to="/contact" className="contact-cta-primary">
            Start a Conversation →
          </Link>

          <Link to="/services" className="contact-cta-secondary">
            Explore Services
          </Link>
        </div>
      </div>

      <div className="contact-cta-mark">
        <span>KEEP MONEY</span>
        <strong>@ WORK</strong>
      </div>
    </section>
  );
}

export default ContactCTA;