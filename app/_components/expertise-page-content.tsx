import Link from "next/link";

const expertiseHighlights = [
  "Deep capability across intelligence, cloud, security, analytics, and application delivery",
  "Built to help organizations innovate, optimize operations, and scale with clarity",
  "Focused on stronger insights, resilient systems, and future-ready digital capability",
] as const;

const expertisePillars = ["Insight-Driven", "Secure By Design", "Built To Scale"] as const;

const expertiseItems = [
  {
    title: "Business Intelligence",
    description:
      "We transform raw data into meaningful insights through intuitive dashboards, visual analytics, and automated reporting. Our BI solutions help organizations track performance, identify trends, and uncover new growth opportunities.",
  },
  {
    title: "Cloud Computing",
    description:
      "We design and implement secure, scalable cloud environments tailored to operational needs. From migration and deployment to optimization and management, our cloud solutions improve reliability, reduce infrastructure cost, and support seamless expansion.",
  },
  {
    title: "Cyber Security",
    description:
      "We strengthen digital ecosystems with robust security frameworks that protect systems, applications, and data. Our cybersecurity work covers threat prevention, risk assessment, compliance support, and ongoing monitoring for uninterrupted operations.",
  },
  {
    title: "Business Analytics",
    description:
      "We help organizations make smarter decisions through advanced analytics, predictive modeling, and data interpretation. This creates better clarity around customer behavior, operational efficiency, and market direction.",
  },
  {
    title: "App Development",
    description:
      "We build high-quality mobile and web applications tailored to business needs. Whether customer-facing or internal, our apps are designed for usability, performance, and scalability across all devices.",
  },
] as const;

const expertiseCommitments = [
  "Technology choices are aligned with business value, not trend-chasing.",
  "Every capability is shaped to improve operational visibility, resilience, and execution.",
  "Solutions are designed to remain practical for teams that need measurable outcomes, not complexity for its own sake.",
] as const;

export function ExpertisePageContent() {
  return (
    <div className="expertise-page" aria-label="Expertise page">
      <section className="expertise-page__hero">
        <div className="expertise-page__hero-copy">
          <span className="expertise-page__eyebrow">Our Expertise</span>
          <h1>Modern digital capability shaped to help organizations innovate and scale.</h1>
          <p>
            TechVanta Labs brings deep expertise across intelligence, cloud, security, analytics,
            and application development, helping businesses strengthen operations, improve
            decision-making, and build future-ready digital systems.
          </p>
          <div className="expertise-page__hero-pillars">
            {expertisePillars.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="expertise-page__hero-panel">
          <div className="expertise-page__visual-card expertise-page__visual-card--hero">
            <img
              src="/about/about-hero-visual.svg"
              alt="Illustration representing analytics, systems, infrastructure, and secure digital growth"
              className="expertise-page__visual-image"
            />
            <div className="expertise-page__visual-meta">
              <span>Digital Capability</span>
              <strong>Insight, infrastructure, security, delivery</strong>
            </div>
          </div>
          {expertiseHighlights.map((item) => (
            <article key={item} className="expertise-page__highlight">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-page__section">
        <div className="expertise-page__section-heading">
          <span>Capability Areas</span>
          <h2>Five expertise areas that support stronger digital performance and better decisions.</h2>
          <p>
            These capability areas show where our technical depth becomes practical value for
            systems, teams, and decision-makers.
          </p>
        </div>
        <div className="expertise-page__grid">
          {expertiseItems.map((item) => (
            <article key={item.title} className="expertise-page__card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-page__commitment">
        <div className="expertise-page__section-heading">
          <span>How We Apply Expertise</span>
          <h2>Principles that keep technical capability tied to practical business outcomes.</h2>
          <p>
            Expertise matters most when it stays connected to operations, clarity, and measurable
            progress rather than unnecessary complexity.
          </p>
        </div>
        <div className="expertise-page__commitment-grid">
          {expertiseCommitments.map((point) => (
            <article key={point} className="expertise-page__commitment-card">
              <span className="expertise-page__commitment-marker" aria-hidden="true" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div className="page-cta__copy">
          <span>Build With Expertise</span>
          <h2>Need help applying analytics, cloud, security, or product capability to real work?</h2>
          <p>
            We can turn technical capability into a focused roadmap that supports your next stage
            of growth.
          </p>
        </div>
        <div className="page-cta__actions">
          <Link href="/contact" className="page-cta__button page-cta__button--primary">Talk To Us</Link>
          <Link href="/services" className="page-cta__button page-cta__button--secondary">See Services</Link>
        </div>
      </section>
    </div>
  );
}
