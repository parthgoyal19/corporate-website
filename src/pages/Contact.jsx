function Contact() {
  return (
    <main className="contact-page">

      {/* Contact Hero */}
      <section className="contact-hero">

        <div className="contact-hero-content">
          <p className="section-label">LET'S START WITH CLARITY</p>

          <h1>
            A conversation can be
            <span>the first step.</span>
          </h1>

          <p className="contact-hero-description">
            Whether you're planning for a goal, protecting what matters,
            or thinking about your long-term financial future, we're here
            to understand where you are today.
          </p>
        </div>

        <div className="contact-hero-visual">

          <div className="contact-orbit contact-orbit-one"></div>
          <div className="contact-orbit contact-orbit-two"></div>
          <div className="contact-orbit contact-orbit-three"></div>

          <div className="contact-hero-center">
            <span>KEEP MONEY</span>
            <strong>@ WORK</strong>
          </div>

          <div className="contact-floating-card contact-card-one">
            <span>01</span>
            <strong>UNDERSTAND</strong>
          </div>

          <div className="contact-floating-card contact-card-two">
            <span>02</span>
            <strong>PLAN</strong>
          </div>

          <div className="contact-floating-card contact-card-three">
            <span>03</span>
            <strong>GROW</strong>
          </div>

        </div>

      </section>
      {/* Contact Details & Form */}
      <section className="contact-details">

        <div className="contact-details-intro">

          <div className="contact-details-heading">
            <p className="section-label">CONNECT WITH US</p>

            <h2>
              Let's understand
              <span>where you are today.</span>
            </h2>

            <p>
              Every financial journey starts from a different place.
              Tell us a little about what you're planning, and let's
              begin with a conversation.
            </p>
          </div>

          <div className="contact-information">

            <div className="contact-information-item">
              <span>VISIT US</span>
              <p>
                108 Gold Arcade,<br />
                New Palasia,<br />
                Indore (M.P.) - 452001
              </p>
            </div>

            <div className="contact-information-item">
              <span>CALL US</span>
              <a href="tel:+919244286976">
                +91 9244286976
              </a>
            </div>

            <div className="contact-information-item">
              <span>EMAIL US</span>
              <a href="mailto:path2mutualgrowth@gmail.com">
                path2mutualgrowth@gmail.com
              </a>
            </div>

            <div className="contact-information-item">
              <span>WORKING HOURS</span>
              <p>
                Monday – Saturday<br />
                10:00 AM – 7:00 PM
              </p>
            </div>

          </div>

          <div className="contact-details-note">
            <span>KEEP MONEY</span>
            <strong>@ WORK</strong>
          </div>

        </div>

        <div className="contact-form-wrapper">

          <div className="contact-form-heading">
            <span>START A CONVERSATION</span>
            <h3>Tell us how we can help.</h3>
          </div>

          <form className="contact-form">

            <div className="contact-form-row">

              <div className="contact-form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            <div className="contact-form-row">

              <div className="contact-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="interest">I'm interested in</label>

                <select id="interest" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="financial-planning">
                    Financial Planning
                  </option>
                  <option value="goal-based-investing">
                    Goal Based Investing
                  </option>
                  <option value="mutual-funds">
                    Mutual Fund Distribution
                  </option>
                  <option value="sif">
                    SIF
                  </option>
                  <option value="retirement">
                    Retirement Planning
                  </option>
                  <option value="insurance">
                    Insurance
                  </option>
                  <option value="tax-planning">
                    Tax Planning
                  </option>
                  <option value="estate-planning">
                    Estate Planning
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>

              </div>

            </div>

            <div className="contact-form-group contact-form-message">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell us a little about what you'd like to discuss..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-form-button"
            >
              Send Enquiry →
            </button>

          </form>

        </div>

      </section>
      {/* Location */}
      <section className="contact-location">

        <div className="contact-location-content">
          <p className="section-label">FIND US</p>

          <h2>
            Let's meet
            <span>in Indore.</span>
          </h2>

          <p>
            Our office is located in New Palasia, Indore.
            If you'd like to meet and discuss your financial journey,
            we'd be happy to have a conversation.
          </p>

          <div className="contact-location-address">
            <strong>Mutual Growth</strong>
            <p>
              108 Gold Arcade,<br />
              New Palasia,<br />
              Indore (M.P.) - 452001
            </p>
          </div>

          <div className="contact-location-hours">
            <span>WORKING HOURS</span>
            <strong>Monday – Saturday · 10:00 AM – 7:00 PM</strong>
          </div>
        </div>

        <div className="contact-location-visual">

          <div className="location-grid"></div>

          <div className="location-ring location-ring-one"></div>
          <div className="location-ring location-ring-two"></div>

          <div className="location-pin">
            <span></span>
          </div>

          <div className="location-card">
            <span>INDORE</span>
            <strong>NEW PALASIA</strong>
          </div>

          <div className="location-coordinate">
            MUTUAL GROWTH
          </div>

        </div>

      </section>

      {/* Closing CTA */}
      <section className="contact-closing">

        <div className="contact-closing-content">
          <p className="section-label">YOUR NEXT STEP</p>

          <h2>
            Start with clarity.
            <span>Build with purpose.</span>
          </h2>

          <p>
            Your financial journey doesn't need to begin with all
            the answers. It can begin with the right conversation.
          </p>

          <a
            href="mailto:path2mutualgrowth@gmail.com"
            className="contact-closing-button"
          >
            Start a Conversation →
          </a>
        </div>

        <div className="contact-closing-mark">
          <span>KEEP MONEY</span>
          <strong>@ WORK</strong>
        </div>

      </section>

    </main>
  );
}

export default Contact;