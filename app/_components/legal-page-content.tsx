const legalHighlights = [
  "Clear terms, privacy commitments, and liability boundaries for using TechVanta Labs services.",
  "Cancellation and refund conditions are defined around the realities of software, consulting, and digital delivery.",
  "Formal service engagements are governed by proposals, contracts, or master service agreements.",
] as const;

const legalPillars = ["Terms & Conditions", "Privacy & Data Protection", "Cancellation & Refund"] as const;

const termsSections = [
  {
    title: "Terms Overview",
    image: "/about/mission-vision-visual.svg",
    imageLabel: "Legal Foundation",
    imageTitle: "Rules for access, use, and agreement across TechVanta Labs services",
    body: [
      "These Terms & Conditions govern access to and use of the TechVanta Labs website, associated platforms, applications, products, and services.",
      "By accessing, browsing, or using the service, users acknowledge that they have read, understood, and agree to be legally bound by these terms.",
      "If a user does not agree, use of the service should be discontinued immediately.",
    ],
  },
  {
    title: "Ownership & Permitted Use",
    image: "/hero/platforms-bg.svg",
    imageLabel: "Protected Assets",
    imageTitle: "Intellectual property, responsible use, and service integrity protections",
    body: [
      "All software, text, graphics, images, video, trademarks, logos, and related materials are the exclusive property of TechVanta Labs or its licensors and are protected by applicable intellectual property laws.",
      "Users may not copy, reproduce, modify, distribute, display, alter proprietary notices, or use company trademarks without prior written authorization.",
      "The service must be used only for lawful and legitimate purposes, without unauthorized access attempts, automated scraping, or harmful code transmission.",
    ],
  },
  {
    title: "No Offer or Professional Advice",
    image: "/services/website-bg.svg",
    imageLabel: "Service Boundaries",
    imageTitle: "Informational website content is not a contract, offer, or advisory engagement",
    body: [
      "Information on the website is provided for general informational purposes only and does not constitute a professional recommendation.",
      "Nothing displayed on the service should be interpreted as a contractual offer or solicitation to purchase any product or service.",
      "All service engagements require a formal proposal, contract, or Master Service Agreement.",
    ],
  },
  {
    title: "Disclaimers & Liability",
    image: "/hero/delivery-bg.svg",
    imageLabel: "Risk Boundaries",
    imageTitle: "Service disclaimers, warranty limits, and liability boundaries",
    body: [
      "The service is provided on an as-is and as-available basis without warranties that it will be uninterrupted, secure, error-free, or fully up to date.",
      "To the fullest extent permitted by law, TechVanta Labs disclaims implied warranties including merchantability, fitness for a particular purpose, and non-infringement.",
      "Our total liability is limited to the amount paid for the service, if any, and broad categories of indirect or consequential damages are excluded.",
    ],
  },
  {
    title: "Updates, Third Parties & Jurisdiction",
    image: "/about/approach-visual.svg",
    imageLabel: "Policy Evolution",
    imageTitle: "Changing terms, external platforms, termination, and governing law structure",
    body: [
      "TechVanta Labs may revise service content or terms at any time without prior notice, and continued use constitutes acceptance of updated terms.",
      "Third-party links may be provided for convenience, but the company does not control or endorse those external platforms and is not responsible for their practices.",
      "Access may be suspended or terminated for unlawful use or policy breaches, and disputes are governed by the laws of India under the courts of Bhopal, Madhya Pradesh.",
    ],
  },
] as const;

const privacySections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect information users provide directly, including name, email address, phone number, organization details, inquiry submissions, and communications shared through email, chat, or contact forms.",
      "We may also collect technical and usage details such as IP address, browser type, operating system, device data, visited pages, time spent, clicks, referring URLs, and search terms.",
      "Cookies and similar technologies may be used to improve experience, track preferences, and personalize content, but not to store sensitive personal information.",
    ],
  },
  {
    title: "How Information Is Used",
    body: [
      "Collected data may be used to respond to inquiries, support requests, and service needs.",
      "We also use information to improve functionality, personalize content, send product or service communications, support research and business insights, and strengthen security or fraud prevention.",
      "TechVanta Labs does not sell, rent, or trade personal information with third-party marketing organizations.",
    ],
  },
  {
    title: "Sharing, Security & Retention",
    body: [
      "Personal data may be shared only with trusted providers supporting hosting, analytics, or security activities, when required by law, or with user consent where applicable.",
      "We implement encryption, role-based access, audits, monitoring, secure infrastructure, and confidentiality controls, though no digital system can be guaranteed completely secure.",
      "Personal data is retained only as long as necessary for operational, contractual, legal, regulatory, or security purposes, then securely deleted or anonymized.",
    ],
  },
  {
    title: "User Rights & Policy Updates",
    body: [
      "Depending on applicable law, users may have rights to request access, correction, deletion where legally permissible, consent withdrawal, or restrictions on certain processing activities.",
      "Users may opt out of marketing emails through the unsubscribe link provided in communications.",
      "TechVanta Labs may update its Privacy Policy at any time, and continued use after updates indicates acceptance of the revised policy.",
    ],
  },
] as const;

const refundPolicyPoints = [
  "Cancellation requests must be submitted in writing to info@techvantalabs.com and are reviewed by the support team.",
  "Cancellations are considered only within 24 hours of purchase if execution or project initiation has not yet begun.",
  "Once a service has been assigned to the execution or technical team, or the project has commenced, cancellation requests are generally not accepted.",
  "Products or services purchased under special pricing, promotional campaigns, seasonal offers, corporate discounts, or limited-time deals are not eligible for cancellation.",
  "Express, urgent, same-day technical services and consulting sessions are non-cancellable.",
  "If a cancellation request is approved within the permitted window after work has started, payments remain non-refundable but may be credited towards future services for up to 90 days.",
  "Refunds are not provided for custom software, ERP or CRM work, mobile or web development, UI or UX design, cloud work, analytics, consulting, AMC or support contracts, digital marketing, SEO, or third-party tool setup services.",
  "For digital marketing and SEO engagements, no ranking, traffic, or sales guarantees are provided, and payments are non-refundable once the next cycle proceeds.",
  "If a delivered product appears not to match documented requirements, clients must notify TechVanta Labs within 12 hours so clarifications, revisions, corrections, or additional support can be evaluated.",
  "Refunds are not granted for subjective dissatisfaction, requirement changes, client-caused delays, or shifts in business priorities after delivery has progressed.",
] as const;

const policySafeguards = [
  {
    title: "Third-Party Dependencies",
    detail:
      "TechVanta Labs is not responsible for delays, deficiencies, or failures caused by hosting providers, domain registrars, external APIs, content partners, infrastructure vendors, or third-party software tools. Client-requested coordination with third parties is billable at standard consulting or support rates.",
  },
  {
    title: "Client-Initiated Termination",
    detail:
      "If a client terminates a project midway, refunds are not issued for completed milestones or ongoing work. Completed deliverables are provided after settlement of outstanding invoices, and additional effort up to termination remains billable.",
  },
  {
    title: "Company-Initiated Termination",
    detail:
      "TechVanta Labs may suspend or terminate services if required inputs or approvals are withheld, payment terms are violated, delays are repeated, or misconduct or ethical breaches occur. In such cases, payments already made are not refunded and additional charges may apply for completed work.",
  },
  {
    title: "Chargebacks & Disputes",
    detail:
      "Initiating a chargeback without prior discussion is treated as a policy violation. TechVanta Labs may suspend services, withhold source code or deliverables, and pursue legal recovery of outstanding dues and penalties.",
  },
] as const;

const legalContact = [
  "TechVanta Labs Pvt Ltd",
  "Email: info@techvantalabs.com",
  "Address: 118, Sunder Nagar, Ashoka Garden, Bhopal, 462023, (M.P.)",
] as const;

export function LegalPageContent() {
  return (
    <div className="legal-page" aria-label="Legal page">
      <section className="legal-page__hero">
        <div className="legal-page__hero-copy">
          <span className="legal-page__eyebrow">Legal</span>
          <h1>Terms, privacy, and policy details presented with clarity.</h1>
          <p>
            This page summarizes the core legal and policy information from TechVanta Labs,
            including terms of use, privacy and data protection language, and cancellation and
            refund conditions.
          </p>
          <div className="legal-page__hero-pillars">
            {legalPillars.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <article className="legal-page__hero-support">
            <div className="legal-page__hero-support-media">
              <img
                src="/about/approach-visual.svg"
                alt="Illustration representing policy structure, compliance, and legal safeguards"
                className="legal-page__hero-support-image"
              />
            </div>
            <div className="legal-page__hero-support-copy">
              <span>Policy Snapshot</span>
              <strong>Structured legal guidance that clarifies access, responsibility, and service boundaries.</strong>
              <p>
                The legal framework is presented to make core terms, privacy language, and refund
                expectations easier to review before any formal engagement.
              </p>
            </div>
          </article>
        </div>

        <div className="legal-page__hero-panel">
          <div className="legal-page__visual-card legal-page__visual-card--hero">
            <img
              src="/about/mission-vision-visual.svg"
              alt="Illustration representing trust, structure, and compliance"
              className="legal-page__visual-image"
            />
            <div className="legal-page__visual-meta">
              <span>Policy Framework</span>
              <strong>Rights, responsibilities, and clarity</strong>
            </div>
          </div>
          {legalHighlights.map((item) => (
            <article key={item} className="legal-page__highlight">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="legal-page__section">
        <div className="legal-page__section-heading">
          <span>Terms & Conditions</span>
          <h2>Core legal points governing access to TechVanta Labs websites, services, and platforms.</h2>
        </div>
        <div className="legal-page__grid">
          {termsSections.map((section) => (
            <article key={section.title} className="legal-page__card legal-page__card--visual">
              <div className="legal-page__card-media">
                <img src={section.image} alt={section.imageTitle} className="legal-page__card-image" />
                <div className="legal-page__card-media-meta">
                  <span>{section.imageLabel}</span>
                  <strong>{section.imageTitle}</strong>
                </div>
              </div>
              <div className="legal-page__card-body">
                <h3>{section.title}</h3>
                {section.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="legal-page__section">
        <div className="legal-page__section-heading">
          <span>Privacy & Data Protection</span>
          <h2>How information is collected, used, protected, retained, and managed.</h2>
        </div>
        <div className="legal-page__grid">
          {privacySections.map((section) => (
            <article key={section.title} className="legal-page__card">
              <h3>{section.title}</h3>
              {section.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="legal-page__section legal-page__section--policy">
        <div className="legal-page__section-heading">
          <span>Cancellation & Refund Policy</span>
          <h2>Important conditions for cancellation requests, delivery disputes, and refund eligibility.</h2>
        </div>
        <div className="legal-page__policy-list">
          {refundPolicyPoints.map((point) => (
            <article key={point} className="legal-page__policy-item">
              <span className="legal-page__policy-marker" aria-hidden="true" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="legal-page__section">
        <div className="legal-page__section-heading">
          <span>Policy Safeguards</span>
          <h2>Additional clauses that govern third parties, project termination, and payment disputes.</h2>
        </div>
        <div className="legal-page__grid">
          {policySafeguards.map((item) => (
            <article key={item.title} className="legal-page__card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="legal-page__contact">
        <div className="legal-page__section-heading">
          <span>Policy Contact</span>
          <h2>For cancellation, refund, legal, or privacy policy inquiries, contact TechVanta Labs directly.</h2>
        </div>
        <div className="legal-page__contact-grid">
          {legalContact.map((line) => (
            <article key={line} className="legal-page__contact-card">
              <span className="legal-page__contact-marker" aria-hidden="true" />
              <p>{line}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
