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
    description:
      "We build bespoke web and desktop solutions aligned with your business goals, helping startups and growing enterprises manage operations efficiently and scale with confidence.",
    image: "/services/custom-software-bg.svg",
  },
  {
    title: "Website Development",
    description:
      "We create modern, responsive websites tailored to your brand, with a strong focus on usability, performance, and a polished digital presence that reflects your identity.",
    image: "/services/website-bg.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "From customer-facing products to internal business tools, we deliver practical mobile applications built for usability, business value, and long-term maintainability.",
    image: "/services/mobile-bg.svg",
  },
  {
    title: "Creative & Branding Services",
    description:
      "We support brand identity across digital and physical touchpoints through graphic design, promotional materials, and outdoor branding that keeps presentation consistent and professional.",
    image: "/services/branding-bg.svg",
  },
  {
    title: "Digital Marketing",
    description:
      "We combine social media strategy, e-commerce support, and lead-focused digital marketing to expand reach, attract new customers, and convert attention into growth.",
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
            TechVanta Labs delivers software design, development, website creation, mobile
            applications, branding, and digital marketing as a unified business-focused service
            offering built to generate value, clarity, and results.
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
          <span>Our Approach</span>
          <h2>Clear thinking, experienced execution, and delivery structured around your business.</h2>
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

      <section className="services-page__section">
        <div className="services-page__section-heading">
          <span>Service Portfolio</span>
          <h2>Five core service areas built to strengthen operations, presence, and growth.</h2>
        </div>
        <div className="services-page__services-grid">
          {serviceItems.map((item) => (
            <article key={item.title} className="services-page__service-card">
              <div className="services-page__service-media" style={{ backgroundImage: `url("${item.image}")` }} />
              <div className="services-page__service-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page__support">
        <div className="services-page__section-heading services-page__support-heading">
          <span>Client Commitment</span>
          <h2>Support principles that stay active long after the build is complete.</h2>
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
    </div>
  );
}
