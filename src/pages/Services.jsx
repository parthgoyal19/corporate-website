import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Goal Based Investing",
    description:
      "Investment planning structured around the goals that matter to you, from building an emergency fund to long-term financial goals.",
    subcategories: [
      "Emergency Fund",
      "Short-Term Goals",
      "Medium-Term Goals",
      "Long-Term Goals",
    ],
  },
  {
    title: "Mutual Fund Distribution",
    description:
      "Access to mutual fund categories aligned with different financial objectives, time horizons and risk considerations.",
    subcategories: [
      {
        title: "Equity",
        children: [
          "Large Cap",
          "Mid Cap",
          "Small Cap",
          "Multi Cap",
        ],
      },
      {
        title: "Debt",
        children: ["Liquid Funds"],
      },
      {
        title: "Hybrid",
      },
    ],
  },
  {
    title: "SIF (Specialised Investment Fund)",
    description:
      "Specialised Investment Fund solutions for eligible investors seeking access to specialised investment strategies.",
  },
  {
    title: "Retirement Planning & Strategy",
    description:
      "Plan ahead for retirement by thinking about your future income needs, retirement goals and long-term financial requirements.",
    subcategories: [
      "Retirement Plans",
      "Annuity Plans",
    ],
  },
  {
    title: "Cashflow & Risk Management",
    description:
      "A broader approach to managing cash flow and protecting the financial foundation supporting your goals.",
    subcategories: [
      {
        title: "Cashflow Planning",
        children: ["Consultation Services"],
      },
      {
        title: "Insurance",
        children: [
          "Life Insurance",
          "Health Insurance",
        ],
      },
    ],
  },
  {
    title: "Unlisted Equities",
    description:
      "Explore opportunities in unlisted equity investments as part of a broader financial strategy, subject to suitability and eligibility.",
  },
  {
    title: "Fixed Income",
    description:
      "Fixed-income solutions designed to form part of a diversified financial plan.",
    subcategories: ["Bonds"],
  },
  {
    title: "Tax Planning",
    description:
      "Bring tax considerations into your broader financial planning and investment decisions.",
    subcategories: [
      "Mutual Funds Tax Savings",
      "Insurance Tax Benefits",
      "Income Tax Filing Services",
    ],
  },
  {
    title: "Estate Planning",
    description:
      "Plan for the orderly transfer and preservation of wealth across generations.",
  },
];

function Services() {
  const [activeService, setActiveService] = useState(0);
  const [openCategory, setOpenCategory] = useState(null);

  const currentService = services[activeService];

  const handleServiceChange = (index) => {
    setActiveService(index);
    setOpenCategory(null);
  };

  return (
    <main className="services-page">

      {/* =====================================================
          SERVICES HERO
          ===================================================== */}

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


      {/* =====================================================
          INTERACTIVE SERVICE NAVIGATOR
          ===================================================== */}

      <section className="services-navigator">

        <div className="services-navigator-visual">

          <div className="services-sticky-visual">

            <p className="section-label">
              FINANCIAL PLANNING
            </p>

            <h2>
              One financial life.
              <span>Many decisions.</span>
            </h2>

            <p className="services-visual-description">
              Your financial needs change across different stages
              of life. Explore the areas where thoughtful planning
              can help bring these decisions together.
            </p>

            <div className="services-visual-path">

              <div className="services-path-item active">
                <span>01</span>
                <strong>UNDERSTAND</strong>
              </div>

              <div className="services-path-line"></div>

              <div className="services-path-item">
                <span>02</span>
                <strong>PLAN</strong>
              </div>

              <div className="services-path-line"></div>

              <div className="services-path-item">
                <span>03</span>
                <strong>PROTECT</strong>
              </div>

              <div className="services-path-line"></div>

              <div className="services-path-item">
                <span>04</span>
                <strong>INVEST</strong>
              </div>

              <div className="services-path-line"></div>

              <div className="services-path-item">
                <span>05</span>
                <strong>PRESERVE</strong>
              </div>

            </div>

            <div className="services-visual-note">
              <span>KEEP MONEY @ WORK</span>
            </div>

          </div>

        </div>


        <div className="services-list">

          <div className="services-list-header">
            <p className="section-label">
              EXPLORE OUR SERVICES
            </p>

            <p>
              Select an area to understand how it fits into your
              broader financial journey.
            </p>
          </div>


          <div className="services-accordion">

            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <div
                  className={`service-item ${
                    isActive ? "active" : ""
                  }`}
                  key={service.title}
                >

                  <button
                    className="service-item-trigger"
                    onClick={() => handleServiceChange(index)}
                  >
                    <div className="service-item-title">
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{service.title}</h3>
                    </div>

                    <div className="service-item-icon">
                      {isActive ? "−" : "+"}
                    </div>
                  </button>


                  <div
                    className={`service-item-content ${
                      isActive ? "open" : ""
                    }`}
                  >

                    <p>
                      {service.description}
                    </p>


                    {service.subcategories && (
                      <div className="service-subcategories">

                        {service.subcategories.map(
                          (subcategory, subIndex) => {

                            const isNested =
                              typeof subcategory === "object";

                            if (!isNested) {
                              return (
                                <div
                                  className="service-subcategory-simple"
                                  key={subcategory}
                                >
                                  <span>
                                    {String(
                                      subIndex + 1
                                    ).padStart(2, "0")}
                                  </span>

                                  <strong>
                                    {subcategory}
                                  </strong>
                                </div>
                              );
                            }

                            const categoryOpen =
                              openCategory ===
                              `${index}-${subIndex}`;

                            return (
                              <div
                                className={`service-nested-category ${
                                  categoryOpen
                                    ? "open"
                                    : ""
                                }`}
                                key={subcategory.title}
                              >

                                <button
                                  className="service-nested-trigger"
                                  onClick={() =>
                                    setOpenCategory(
                                      categoryOpen
                                        ? null
                                        : `${index}-${subIndex}`
                                    )
                                  }
                                >
                                  <span>
                                    {String(
                                      subIndex + 1
                                    ).padStart(2, "0")}
                                  </span>

                                  <strong>
                                    {subcategory.title}
                                  </strong>

                                  <b>
                                    {categoryOpen
                                      ? "−"
                                      : "+"}
                                  </b>
                                </button>


                                {subcategory.children && (
                                  <div className="service-nested-children">

                                    {subcategory.children.map(
                                      (child, childIndex) => (
                                        <div
                                          className="service-nested-child"
                                          key={child}
                                        >
                                          <span>
                                            {String(
                                              childIndex + 1
                                            ).padStart(2, "0")}
                                          </span>

                                          <p>{child}</p>
                                        </div>
                                      )
                                    )}

                                  </div>
                                )}

                              </div>
                            );
                          }
                        )}

                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Services;