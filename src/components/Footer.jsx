function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <h3>Mutual Growth</h3>

          <p className="footer-tagline">
            Keep Money @ Work
          </p>

          <p className="footer-description">
            Financial clarity, disciplined planning and a
            long-term approach to building wealth.
          </p>
        </div>


        <div className="footer-column">
          <h4>QUICK LINKS</h4>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/journey">Our Journey</a>
          <a href="/contact">Contact</a>
        </div>


        <div className="footer-column footer-contact">
          <h4>CONTACT</h4>

          <p>
            108 Gold Arcade,<br />
            New Palasia,<br />
            Indore (M.P.) - 452001
          </p>

          <a href="tel:+919244286976">
            +91 9244286976
          </a>

          <a href="mailto:path2mutualgrowth@gmail.com">
            path2mutualgrowth@gmail.com
          </a>
        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Mutual Growth. All rights reserved.
        </p>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;