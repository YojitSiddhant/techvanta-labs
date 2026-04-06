const contactHighlights = [
  "Reach TechVanta Labs directly for project discussions, support questions, or service inquiries.",
  "Communication stays transparent, business-focused, and responsive from the first conversation onward.",
  "We stand beside clients throughout their digital transformation journey with dedicated support.",
] as const;

const contactPillars = ["Responsive Support", "Clear Communication", "Business-Focused Guidance"] as const;

const contactCards = [
  {
    label: "Email",
    value: "info@techvantalabs.com",
    detail: "Primary contact for service discussions, support, and business inquiries.",
    image: "/hero/platforms-bg.svg",
    imageLabel: "Inbox Channel",
    imageTitle: "Fast digital communication for active client conversations",
  },
  {
    label: "Address",
    value: "118, Sunder Nagar, Ashoka Garden, Bhopal, 462023, (M.P.)",
    detail: "TechVanta Labs Pvt Ltd, based in Bhopal and serving clients across India.",
    image: "/hero/location-bg.svg",
    imageLabel: "Office Location",
    imageTitle: "A grounded delivery base with national service reach",
  },
  {
    label: "Support Promise",
    value: "Quick response with a real person",
    detail: "Urgent issues are handled with prompt attention and practical remote support wherever possible.",
    image: "/hero/delivery-bg.svg",
    imageLabel: "Service Response",
    imageTitle: "Dependable follow-through from inquiry to execution",
  },
] as const;

const contactClosing = [
  "At TechVanta Labs, we are committed to empowering businesses with intelligent, scalable, and user-focused digital solutions.",
  "From custom software and mobile applications to modern websites and digital marketing, every solution is driven by a deep understanding of business goals.",
  "Backed by transparent communication, dedicated support, and a client-first approach, we stand beside you at every step of your digital transformation journey.",
] as const;

export function ContactPageContent() {
  return (
    <div className="contact-page" aria-label="Contact page">
      <section className="contact-page__hero">
        <div className="contact-page__hero-copy">
          <span className="contact-page__eyebrow">Contact Us</span>
          <h1>Start a conversation with TechVanta Labs.</h1>
          <p>
            Whether you need custom software, a digital product, technical support, or a long-term
            technology partner, TechVanta Labs is available to discuss the right next step for your
            business.
          </p>
          <div className="contact-page__hero-pillars">
            {contactPillars.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <article className="contact-page__hero-support">
            <div className="contact-page__hero-support-media">
              <img
                src="/hero/location-bg.svg"
                alt="Illustration representing location, communication, and support availability"
                className="contact-page__hero-support-image"
              />
            </div>
            <div className="contact-page__hero-support-copy">
              <span>Support Reach</span>
              <strong>Bhopal-based delivery with fast digital response across India.</strong>
              <p>
                Project conversations, service queries, and support coordination stay direct,
                practical, and easy to move forward from the first interaction.
              </p>
            </div>
          </article>
        </div>

        <div className="contact-page__hero-panel">
          <div className="contact-page__visual-card contact-page__visual-card--hero">
            <img
              src="/about/about-hero-visual.svg"
              alt="Illustration showing business communication and digital solution planning"
              className="contact-page__visual-image"
            />
            <div className="contact-page__visual-meta">
              <span>Get In Touch</span>
              <strong>Discuss, plan, and move forward</strong>
            </div>
          </div>
          {contactHighlights.map((item) => (
            <article key={item} className="contact-page__highlight">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-page__section">
        <div className="contact-page__section-heading">
          <span>Reach Us</span>
          <h2>Direct contact details for support, project discussions, and business inquiries.</h2>
        </div>
        <div className="contact-page__grid">
          {contactCards.map((item) => (
            <article key={item.label} className="contact-page__card contact-page__card--visual">
              <div className="contact-page__card-media">
                <img src={item.image} alt={item.imageTitle} className="contact-page__card-image" />
                <div className="contact-page__card-media-meta">
                  <span>{item.imageLabel}</span>
                  <strong>{item.imageTitle}</strong>
                </div>
              </div>
              <div className="contact-page__card-body">
                <span>{item.label}</span>
                <h3>{item.value}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-page__closing">
        <div className="contact-page__section-heading">
          <span>TechVanta Labs</span>
          <h2>Building technology that grows with your business.</h2>
        </div>
        <div className="contact-page__closing-grid">
          {contactClosing.map((point) => (
            <article key={point} className="contact-page__closing-card">
              <span className="contact-page__closing-marker" aria-hidden="true" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
