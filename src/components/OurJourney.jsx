function OurJourney() {
  return (
    <section className="our-journey">
      <div className="our-journey-heading">
        <p className="section-label">OUR JOURNEY</p>

        <h2>
          Experience that led
          <span>to a new beginning.</span>
        </h2>

        <p className="our-journey-description">
          A professional journey across the financial services industry,
          followed by the beginning of a new chapter with Mutual Growth.
        </p>
      </div>

      <div className="journey-timeline">

        {/* Continuous timeline path */}
        <svg
          className="journey-path"
          viewBox="0 0 1000 520"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Main continuous path */}
          <path
            d="
              M 0 0
              H 960
              Q 1000 0 1000 40
              V 170
              Q 1000 210 960 210
              H 40
              Q 0 210 0 250
              V 440
            "
          />
        </svg>

        {/* 01 */}
        <div className="journey-item journey-item-01">
          <span>01</span>
          <h3>IDBI Principal</h3>
        </div>

        {/* 02 */}
        <div className="journey-item journey-item-02">
          <span>02</span>
          <h3>UTI Securities</h3>
        </div>

        {/* 03 */}
        <div className="journey-item journey-item-03">
          <span>03</span>
          <h3>Bajaj Capital</h3>
        </div>

        {/* 04 */}
        <div className="journey-item journey-item-04">
          <span>04</span>
          <h3>JM Mutual Fund</h3>
        </div>

        {/* 07 */}
        <div className="journey-item journey-item-07">
          <span>07</span>
          <h3>ITI MF</h3>
          <p>Assistant Vice President</p>
        </div>

        {/* 06 */}
        <div className="journey-item journey-item-06">
          <span>06</span>
          <h3>Sundaram MF</h3>
        </div>

        {/* 05 */}
        <div className="journey-item journey-item-05">
          <span>05</span>
          <h3>Edelweiss MF</h3>
        </div>

        {/* 08 */}
        <div className="journey-item-final">
          <span>08</span>
          <h3>Mutual Growth</h3>
          <p>Founded in August 2024</p>
        </div>

      </div>
    </section>
  );
}

export default OurJourney;