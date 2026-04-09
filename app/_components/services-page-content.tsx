import Link from "next/link";

const serviceHighlights = [
  "Custom software, websites, mobile apps, branding, and digital marketing under one delivery model",
  "Solutions shaped around business goals, operational clarity, and long-term scalability",
  "Transparent planning, expert execution, and ongoing technical support after launch",
] as const;

const servicePillars = ["Business-Aligned Delivery", "Practical Innovation", "Support That Stays"] as const;

const approachItems = [
  {
    title: "Why Choose Us",
    description:
      "We understand that software systems are critical to business growth, so every solution is built to remain reliable, scalable, and efficient as your organization expands.",
  },
  {
    title: "What We Do",
    description:
      "We develop custom online software for small and growing companies, tailoring each build to specific business requirements and continuing with ongoing technical support after delivery.",
  },
  {
    title: "Explore TechVanta Labs",
    description:
      "Our experienced professionals stay current with evolving technologies, ensuring every project benefits from modern practices, informed execution, and dependable technical depth.",
  },
  {
    title: "What Makes Us Unique",
    description:
      "We have extensive experience handling complex projects, which gives clients confidence in predictable delivery, disciplined execution, and budget clarity.",
  },
  {
    title: "How We Do It",
    description:
      "Our process begins with a deep understanding of business needs, followed by solution design, development, budgeting, and planning that remain clear from start to finish.",
  },
] as const;

const serviceItems = [
  {
    title: "Custom Software Development",
    label: "Systems",
    description:
      "Bespoke web and internal systems shaped around workflows, reporting, and business growth.",
    image: "/services/custom-software-bg.svg",
  },
  {
    title: "Website Development",
    label: "Experience",
    description:
      "Modern websites with stronger usability, clearer structure, and a sharper digital presence.",
    image: "/services/website-bg.svg",
  },
  {
    title: "Mobile App Development",
    label: "Mobile",
    description:
      "Practical mobile apps for customer journeys and internal teams, built for daily use.",
    image: "/services/mobile-bg.svg",
  },
  {
    title: "Creative & Branding Services",
    label: "Brand",
    description:
      "Brand identity support across digital and physical touchpoints so presentation stays consistent.",
    image: "/services/branding-bg.svg",
  },
  {
    title: "Digital Marketing",
    label: "Growth",
    description:
      "Lead-focused marketing support that helps convert attention into practical business growth.",
    image: "/services/marketing-bg.svg",
  },
] as const;

const supportPoints = [
  "Quick response with emergency support handled by a real person within one hour",
  "Business-oriented recommendations tied to practical business outcomes",
  "Clear communication in plain English or Hindi without unnecessary jargon",
  "A satisfaction-first mindset focused on dependable service and long-term partnership",
] as const;

export function ServicesPageContent() {
  return (
    <div className="services-page" aria-label="Services page">
      <section className="services-page__hero">
        <div className="services-page__hero-copy">
          <span className="services-page__eyebrow">What We Provide</span>
          <h1>Services designed to solve real business problems and support long-term growth.</h1>
          <p>
            TechVanta Labs delivers software, websites, mobile apps, branding, and digital
            marketing through one business-focused delivery model built for clarity and results.
          </p>
          <div className="services-page__hero-pillars">
            {servicePillars.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="services-page__hero-panel">
          <div className="services-page__hero-visual services-page__service-card">
            <div className="services-page__service-media" style={{ backgroundImage: 'url("/services/custom-software-bg.svg")' }} />
            <div className="services-page__visual-meta">
              <span>TechVanta Labs Services</span>
              <strong>Strategy, builds, support, growth</strong>
            </div>
          </div>

          {serviceHighlights.map((item) => (
            <article key={item} className="services-page__highlight">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page__section">
        <div className="services-page__section-heading">
          <span>Service Portfolio</span>
          <h2>Five core service areas built to strengthen operations, presence, and growth.</h2>
          <p>
            This is where capability becomes concrete: the systems, experiences, and growth work
            we deliver most often for clients.
          </p>
        </div>
        <div className="services-page__services-grid">
          {serviceItems.map((item, index) => (
            <article key={item.title} className="services-page__service-card">
              <div className="services-page__service-media" style={{ backgroundImage: `url("${item.image}")` }} />
              <div className="services-page__service-content">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <strong>{index === 0 ? "Best for operations-heavy builds" : "Built around practical delivery"}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page__support">
        <div className="services-page__section-heading services-page__support-heading">
          <span>Our Approach</span>
          <h2>How delivery stays clear from planning through long-term support.</h2>
          <p>
            After capability comes process. We keep planning transparent, execution disciplined,
            and support close enough to stay useful.
          </p>
        </div>
        <div className="services-page__approach-grid">
          {approachItems.map((item) => (
            <article key={item.title} className="services-page__approach-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page__support">
        <div className="services-page__section-heading services-page__support-heading">
          <span>Client Commitment</span>
          <h2>Support principles that stay active long after the build is complete.</h2>
          <p>
            This is the trust layer clients feel after launch: responsiveness, clarity, and
            follow-through that stays practical.
          </p>
        </div>
        <div className="services-page__support-grid">
          {supportPoints.map((point) => (
            <article key={point} className="services-page__support-card">
              <span className="services-page__support-marker" aria-hidden="true" />
              <div className="services-page__support-copy">
                <p>{point}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div className="page-cta__copy">
          <span>Next Step</span>
          <h2>Have a project, workflow, or business problem that needs the right build?</h2>
          <p>
            We can help shape scope, identify the right service mix, and move toward execution.
          </p>
        </div>
        <div className="page-cta__actions">
          <Link href="/contact" className="page-cta__button page-cta__button--primary">Discuss Your Project</Link>
          <Link href="/products" className="page-cta__button page-cta__button--secondary">View Products</Link>
        </div>
      </section>
    </div>
  );
}
