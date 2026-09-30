import { Link } from "react-router-dom";

function ExperienceTrust() {
  return (
    <section className="experience-trust">
      <div className="experience-trust-content">
        <p className="section-label">EXPERIENCE & TRUST</p>

        <h2>
          Experience that
          <span>shapes perspective.</span>
        </h2>

        <p className="experience-trust-description">
          Mutual Growth is built on the belief that financial planning
          should be approached with perspective, discipline and a
          long-term view.
        </p>

        <p className="experience-trust-description">
          Behind this approach is Mr. Shailesh Goyal, whose journey
          across the financial services industry spans more than
          25 years.
        </p>

        <div className="experience-trust-stat">
          <strong>25+</strong>

          <div>
            <span>YEARS</span>
            <p>Across the financial services industry</p>
          </div>
        </div>
      </div>

      <div className="experience-trust-profile">
        <div className="experience-trust-profile-accent"></div>

        <div className="experience-trust-profile-top">
          <span>FOUNDER</span>
          <span>EST. AUGUST 2024</span>
        </div>

        <h3>Mr. Shailesh Goyal</h3>

        <p className="experience-trust-profile-lead">
          A professional journey shaped across multiple financial
          institutions, bringing experience into the next chapter —
          Mutual Growth.
        </p>

        <div className="experience-trust-career">
          <span>CAREER JOURNEY</span>

          <div className="experience-trust-career-path">
            <span>IDBI Principal</span>
            <i>→</i>
            <span>UTI Securities</span>
            <i>→</i>
            <span>Bajaj Capital</span>
            <i>→</i>
            <span>JM Mutual Fund</span>
            <i>→</i>
            <span>Edelweiss MF</span>
            <i>→</i>
            <span>Sundaram MF</span>
            <i>→</i>
            <span>ITI MF</span>
          </div>
        </div>

        <div className="experience-trust-profile-bottom">
          <p>
            At ITI MF, he served as Assistant Vice President before
            beginning the journey that led to Mutual Growth.
          </p>

          <Link to="/journey">
            Explore his journey <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTrust;