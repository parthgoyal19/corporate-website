import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <p className="section-label">OUR SERVICES</p>

          <h1>
            Financial planning,
            <span>built around your life.</span>
          </h1>

          <p className="services-hero-description">
            From managing today's finances to planning for tomorrow,
            Mutual Growth brings different aspects of financial
            planning together through a structured and long-term
            approach.
          </p>

          <Link to="/contact" className="services-hero-button">
            Start a Conversation →
          </Link>
        </div>

        <div className="services-hero-visual">
          <div className="services-hero-core">
            <span>YOUR</span>
            <strong>FINANCIAL LIFE</strong>
          </div>

          <div className="services-floating-card services-card-plan">
            <span>01</span>
            <strong>PLAN</strong>
          </div>

          <div className="services-floating-card services-card-protect">
            <span>02</span>
            <strong>PROTECT</strong>
          </div>

          <div className="services-floating-card services-card-invest">
            <span>03</span>
            <strong>INVEST</strong>
          </div>

          <div className="services-floating-card services-card-grow">
            <span>04</span>
            <strong>GROW</strong>
          </div>

          <div className="services-floating-card services-card-preserve">
            <span>05</span>
            <strong>PRESERVE</strong>
          </div>

          <div className="services-hero-ring"></div>
        </div>
      </section>
    </main>
  );
}

export default Services;