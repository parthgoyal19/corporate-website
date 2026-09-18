function FeaturedServices() {
    return (
        <section className="featured-services">
            <div className="featured-services-heading">
                <div>
                    <p className="section-label">FEATURED SERVICES</p>

                    <h2>
                        Financial solutions
                        <span>built around you.</span>
                    </h2>
                </div>

                <div className="featured-services-intro">
                    <span className="featured-services-intro-label">
                        A CONNECTED APPROACH
                    </span>

                    <p>
                        From investing and protection to long-term financial planning,
                        our services are designed to work together around your financial
                        needs and goals.
                    </p>
                </div>
            </div>

            <div className="featured-services-list">
                <div className="featured-service">
                    <span className="featured-service-number">01</span>

                    <div className="featured-service-content">
                        <h3>Goal Based Investing</h3>

                        <p>
                            Plan your investments around what you want your money
                            to achieve — from immediate needs to long-term goals.
                        </p>
                    </div>

                    <span className="featured-service-arrow">↗</span>
                </div>

                <div className="featured-service">
                    <span className="featured-service-number">02</span>

                    <div className="featured-service-content">
                        <h3>Mutual Fund Distribution</h3>

                        <p>
                            Access investment solutions across equity, debt and
                            hybrid categories as part of a structured investment approach.
                        </p>
                    </div>

                    <span className="featured-service-arrow">↗</span>
                </div>

                <div className="featured-service">
                    <span className="featured-service-number">03</span>

                    <div className="featured-service-content">
                        <h3>SIF</h3>

                        <p>
                            Explore Specialised Investment Funds as part of a
                            broader investment strategy where appropriate.
                        </p>
                    </div>

                    <span className="featured-service-arrow">↗</span>
                </div>
            </div>

            <div className="featured-services-footer">
                <a href="/services">Explore all services →</a>
            </div>
        </section>
    );
}

export default FeaturedServices;