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
                    <a href="/contact" className="hero-primary-button">
                        Start Your Journey →
                    </a>

                    <a href="/services" className="hero-secondary-button">
                        Explore Services
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-visual-card">
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
        </section>
    );
}

export default Hero;