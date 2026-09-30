import { Link } from "react-router-dom";
import heroFinanceImage from "../assets/a_clean_professional_warm_toned_business_finance.png";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-label">FINANCIAL CLARITY</p>

                <h1>
                    <span className="hero-main-title">KEEP MONEY</span>
                    <span className="hero-accent-title">@ WORK</span>
                </h1>

                <p className="hero-description">
                    Build your financial journey with clarity, discipline
                    and a long-term approach to wealth.
                </p>

                <div className="hero-buttons">
                    <Link to="/contact" className="hero-primary-button">
                        Start Your Journey →
                    </Link>

                    <Link to="/services" className="hero-secondary-button">
                        Explore Services
                    </Link>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-image-wrapper">
                    <div className="hero-image-frame">
                        <img
                            src={heroFinanceImage}
                            alt="Financial planning and investment discussion"
                            className="hero-finance-image"
                        />
                    </div>

                    <div className="hero-floating-card hero-floating-card-bottom">
                        <span>LONG-TERM THINKING</span>
                        <strong>Build With Purpose</strong>
                    </div>

                    <div className="hero-journey-overlay" aria-label="Financial journey">
                        <div className="journey-step">
                            <p>UNDERSTAND</p>
                        </div>

                        <div className="journey-arrow">↓</div>

                        <div className="journey-step">
                            <p>PLAN</p>
                        </div>

                        <div className="journey-arrow">↓</div>

                        <div className="journey-step">
                            <p>PROTECT</p>
                        </div>

                        <div className="journey-arrow">↓</div>

                        <div className="journey-step">
                            <p>INVEST</p>
                        </div>

                        <div className="journey-arrow">↓</div>

                        <div className="journey-step">
                            <p>GROW</p>
                        </div>

                        <div className="journey-arrow">↓</div>

                        <div className="journey-step">
                            <p>PRESERVE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;