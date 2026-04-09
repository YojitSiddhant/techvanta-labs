import Link from "next/link";

const aboutHighlights = [
  "Headquartered in Bhopal, serving clients across India",
  "Custom software, websites, mobile apps, ERP, CRM, and LMS platforms",
  "Built for enterprise, government, and financial use cases",
] as const;

const aboutHeroPillars = ["Business Clarity", "Scalable Systems", "Long-Term Value"] as const;

const coreValues = [
  {
    title: "Engineering With Purpose",
    description:
      "Every solution we build starts with the real challenges our clients face, so the outcome is intentional, practical, and measurable.",
  },
  {
    title: "Transparency That Builds Trust",
    description:
      "We keep communication, planning, and delivery clear so clients always understand what is being built and why.",
  },
  {
    title: "Innovation That Stays Practical",
    description:
      "We adopt modern technologies only when they solve a real business problem and strengthen day-to-day operations.",
  },
  {
    title: "Security At The Core",
    description:
      "Security is part of architecture, process, and implementation from the start, not something added later.",
  },
  {
    title: "Client-Centric Always",
    description:
      "From discovery to support, responsiveness, clarity, and long-term partnership remain part of how we work.",
  },
  {
    title: "Quality Without Compromise",
    description:
      "We hold a high bar for reliability, scalability, and maintainability whether the system is simple or highly complex.",
  },
  {
    title: "Growth Through Collaboration",
    description:
      "The strongest solutions come from close collaboration within teams, across stakeholders, and with the people using the system.",
  },
] as const;

const approachItems = [
  {
    title: "Why Choose Us",
    description:
      "We understand that software systems are critical to business growth, so our solutions are designed to remain reliable, scalable, and efficient as organizations expand.",
  },
  {
    title: "What We Do",
    description:
      "We develop custom online software for small and growing companies, and we continue supporting those systems so operations remain smooth after launch.",
  },
  {
    title: "What Makes Us Unique",
    description:
      "Our experience with complex projects gives clients confidence in delivery, budgeting, and execution without unnecessary surprises.",
  },
  {
    title: "How We Do It",
    description:
      "We begin by understanding the business in detail, then move into tailored planning, transparent budgeting, and solution design that fits the organization.",
  },
] as const;

const commitmentPoints = [
  "Quick response with emergency support handled fast by a real person",
  "Business-oriented recommendations tied to clear business value",
  "Plain communication without unnecessary technical jargon",
  "Client satisfaction through dependable support and delivery",
] as const;

export function AboutPageContent() {
  return (
    <div className="about-page" aria-label="About page">
      <section className="about-page__hero">
        <div className="about-page__hero-copy">
          <span className="about-page__eyebrow">About TechVanta Labs</span>
          <h1>
            Technology solutions designed around business clarity, scale, and long-term value.
          </h1>
          <p>
            TechVanta Labs is a forward-thinking technology solutions company based in Bhopal,
            serving clients across India with custom software, mobile applications, modern
            websites, and enterprise-grade digital platforms.
          </p>
          <div className="about-page__hero-pillars">
            {aboutHeroPillars.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="about-page__hero-panel">
          <div className="about-page__visual-card about-page__visual-card--hero">
            <img
              src="/about/about-hero-visual.svg"
              alt="Illustration showing business strategy, systems, analytics, and digital delivery"
              className="about-page__visual-image"
            />
            <div className="about-page__visual-meta">
              <span>Business + Technology</span>
              <strong>Strategy, systems, delivery</strong>
            </div>
          </div>
          {aboutHighlights.map((item) => (
            <article key={item} className="about-page__highlight">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-page__section">
        <div className="about-page__section-heading">
          <span>Who We Are</span>
          <h2>Purpose-built digital systems aligned with how organizations actually operate.</h2>
          <p>
            We start with business context, map the operational challenge, and design systems that
            improve how teams work, decide, and grow.
          </p>
        </div>

        <div className="about-page__overview-grid">
          <div className="about-page__overview-copy">
            <p>
              Our approach is rooted in innovation, technical excellence, and client-centricity.
              We work closely with each organization to understand operational challenges and
              strategic goals, then craft digital solutions that streamline processes, improve
              productivity, and strengthen brand presence.
            </p>
            <p>
              With expertise across corporate enterprises, government domains, and financial
              institutions, we deliver secure, scalable, and industry-specific applications that
              create measurable impact and support long-term growth.
            </p>
            <p>
              Every solution is engineered with precision, creativity, and quality so businesses
              stay future-ready with systems that improve performance today and create
              opportunities for tomorrow.
            </p>
          </div>

          <div className="about-page__visual-card about-page__visual-card--mission">
            <img
              src="/about/mission-vision-visual.svg"
              alt="Illustration representing mission-led growth, planning, and secure digital direction"
              className="about-page__visual-image"
            />
            <div className="about-page__visual-meta">
              <span>Mission + Vision</span>
              <strong>Purpose-led digital growth</strong>
            </div>
          </div>
        </div>

        <div className="about-page__mission-grid">
          <article className="about-page__info-card">
            <span>Mission</span>
            <p>
              To empower businesses and public-sector organizations with intelligent, scalable,
              purpose-built digital solutions that simplify complexity, improve decision-making,
              and accelerate growth.
            </p>
          </article>

          <article className="about-page__info-card">
            <span>Vision</span>
            <p>
              To become a trusted technology partner recognized for helping organizations operate
              smarter, faster, and more efficiently in a digital-first world.
            </p>
          </article>
        </div>
      </section>

      <section className="about-page__section">
        <div className="about-page__section-heading">
          <span>Core Values</span>
          <h2>Principles that shape how TechVanta Labs designs, delivers, and supports.</h2>
          <p>
            These values are the reason our work stays practical, collaborative, and dependable
            long after launch.
          </p>
        </div>

        <div className="about-page__values-grid">
          {coreValues.map((item) => (
            <article key={item.title} className="about-page__value-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-page__section">
        <div className="about-page__section-heading">
          <span>Our Approach</span>
          <h2>Clear thinking, tailored execution, and dependable delivery.</h2>
          <p>
            Every engagement follows a simple path: understand the goal, shape the right system,
            execute cleanly, and support what we build.
          </p>
        </div>

        <div className="about-page__visual-card about-page__visual-card--approach">
          <img
            src="/about/approach-visual.svg"
            alt="Illustration showing a structured delivery process from understanding to support"
            className="about-page__visual-image"
          />
          <div className="about-page__visual-meta">
            <span>Execution Model</span>
            <strong>Understand, design, deliver, support</strong>
          </div>
        </div>

        <div className="about-page__approach-grid">
          {approachItems.map((item) => (
            <article key={item.title} className="about-page__approach-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-page__commitment">
        <div className="about-page__section-heading">
          <span>Client Commitment</span>
          <h2>What TechVanta Labs stands for in every engagement.</h2>
          <p>
            This is the trust layer behind the build: responsive support, clear communication, and
            a delivery style clients can rely on.
          </p>
        </div>

        <div className="about-page__commitment-grid">
          {commitmentPoints.map((point) => (
            <article key={point} className="about-page__commitment-card">
              <span className="about-page__commitment-marker" aria-hidden="true" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div className="page-cta__copy">
          <span>Start A Project</span>
          <h2>Need a technology partner that understands both business and execution?</h2>
          <p>
            Let&apos;s talk through the workflow, challenge, or idea you want to move forward with.
          </p>
        </div>
        <div className="page-cta__actions">
          <Link href="/contact" className="page-cta__button page-cta__button--primary">Contact Us</Link>
          <Link href="/services" className="page-cta__button page-cta__button--secondary">Explore Services</Link>
        </div>
      </section>
    </div>
  );
}
