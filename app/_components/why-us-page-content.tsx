import Link from "next/link";

const whyHighlights = [
  "Fast response and real-person support when urgent issues need immediate attention",
  "Business-oriented recommendations grounded in practical business value",
  "Clear communication, dependable delivery, and a client-first working style",
] as const;

const whyPillars = ["Transparent Delivery", "Business-First Thinking", "Support That Responds"] as const;

const differentiators = [
  {
    title: "Why Choose Us",
    description:
      "We understand that software systems are critical to business growth, so our solutions are designed to remain reliable, scalable, and efficient as organizations expand.",
    image: "/hero/delivery-bg.svg",
  },
  {
    title: "What We Do",
    description:
      "We develop custom online software for small and growing companies, tailoring every solution to specific requirements and continuing with ongoing technical support after delivery.",
    image: "/services/custom-software-bg.svg",
  },
  {
    title: "Explore TechVanta Labs",
    description:
      "Our team consists exclusively of experienced professionals who stay current with the latest technologies, ensuring every project benefits from modern practice, current training, and dependable technical depth.",
    image: "/hero/platforms-bg.svg",
  },
  {
    title: "What Makes Us Unique",
    description:
      "We have extensive experience managing complex projects, giving clients confidence in disciplined execution, dependable delivery, and budget clarity without surprises.",
    image: "/about/mission-vision-visual.svg",
  },
  {
    title: "How We Work",
    description:
      "Our process begins with understanding the business in depth, then moves into tailored design, clear budgeting, and transparent planning that stays aligned throughout delivery.",
    image: "/about/approach-visual.svg",
  },
] as const;

const commitmentPoints = [
  "Quick response: emergency support within one hour, handled by a real person with remote resolution wherever possible.",
  "Business-oriented solutions: every recommendation is tied to clear business benefits instead of unnecessary complexity.",
  "Clear communication: issues are explained in plain English or Hindi so clients always know what is happening.",
  "Satisfaction guarantee: our objective is dependable service, low friction, and complete client confidence.",
] as const;

export function WhyUsPageContent() {
  return (
    <div className="why-page" aria-label="Why choose us page">
      <section className="why-page__hero">
        <div className="why-page__hero-copy">
          <span className="why-page__eyebrow">Why Choose Us</span>
          <h1>Dependable delivery, practical guidance, and support that stays close to your business.</h1>
          <p>
            TechVanta Labs works with a business-first mindset, combining experienced execution,
            transparent planning, and responsive support so clients can move forward with clarity
            instead of uncertainty.
          </p>
          <div className="why-page__hero-pillars">
            {whyPillars.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="why-page__hero-panel">
          <div className="why-page__visual-card why-page__visual-card--hero">
            <img
              src="/about/approach-visual.svg"
              alt="Illustration showing a structured and transparent delivery approach"
              className="why-page__visual-image"
            />
            <div className="why-page__visual-meta">
              <span>Client Confidence</span>
              <strong>Understand, plan, deliver, support</strong>
            </div>
          </div>
          {whyHighlights.map((item) => (
            <article key={item} className="why-page__highlight">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-page__section">
        <div className="why-page__section-heading">
          <span>Why Clients Trust Us</span>
          <h2>Clear reasons organizations choose TechVanta Labs over generic development support.</h2>
          <p>
            The difference is not just technical ability. It is the combination of thinking,
            communication, execution, and support clients feel throughout the engagement.
          </p>
        </div>
        <div className="why-page__grid">
          {differentiators.map((item) => (
            <article key={item.title} className="why-page__card">
              <div className="why-page__card-media">
                <img src={item.image} alt={`${item.title} visual`} className="why-page__card-image" />
              </div>
              <div className="why-page__card-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-page__commitment">
        <div className="why-page__section-heading">
          <span>Client Commitment</span>
          <h2>What TechVanta Labs stands for when clients rely on us day after day.</h2>
          <p>
            These commitments turn trust into something visible: faster response, clearer updates,
            and lower-friction collaboration.
          </p>
        </div>
        <div className="why-page__commitment-grid">
          {commitmentPoints.map((point) => (
            <article key={point} className="why-page__commitment-card">
              <span className="why-page__commitment-marker" aria-hidden="true" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div className="page-cta__copy">
          <span>Work With Confidence</span>
          <h2>Looking for a team that brings clarity, responsiveness, and dependable execution?</h2>
          <p>
            We&apos;re ready to help you scope the work and move from uncertainty to a practical plan.
          </p>
        </div>
        <div className="page-cta__actions">
          <Link href="/contact" className="page-cta__button page-cta__button--primary">Start The Conversation</Link>
          <Link href="/about" className="page-cta__button page-cta__button--secondary">Learn More About Us</Link>
        </div>
      </section>
    </div>
  );
}
