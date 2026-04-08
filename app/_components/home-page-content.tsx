import Link from "next/link";
import { HomeHeroSlider } from "./home-hero-slider";

type ServiceItem = {
  title: string;
  modifier: string;
};

type ExpertiseItem = {
  title: string;
  description: string;
};

type SpotlightItem = {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
};

type Differentiator = {
  title: string;
  description: string;
};

type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  accent: string;
  themeClassName: string;
  preview: {
    kind: "portrait" | "product" | "browser" | "form";
    image?: string;
    alt?: string;
    badge?: string;
    caption?: string;
  };
  meta: string[];
};

const serviceItems: ServiceItem[] = [
  { title: "Custom Software Development", modifier: "home-page__service-card--software" },
  { title: "Website Development", modifier: "home-page__service-card--website" },
  { title: "Mobile App Development", modifier: "home-page__service-card--mobile" },
  { title: "Creative & Branding Services", modifier: "home-page__service-card--branding" },
  { title: "Digital Marketing", modifier: "home-page__service-card--marketing" },
];

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Business Intelligence",
    description:
      "Dashboards, visual analytics, and reporting systems that turn raw data into decisions.",
  },
  {
    title: "Cloud Computing",
    description:
      "Scalable cloud environments, migration support, and performance-focused infrastructure design.",
  },
  {
    title: "Cyber Security",
    description:
      "Security-first architecture, risk reduction, compliance support, and continuous protection.",
  },
  {
    title: "Business Analytics",
    description:
      "Predictive insights and operational analysis that help organizations plan with clarity.",
  },
  {
    title: "App Development",
    description:
      "High-performance mobile and web applications built for usability, speed, and growth.",
  },
];

const values = [
  "Engineering with purpose",
  "Transparency that builds trust",
  "Innovation that stays practical",
  "Security at the core",
  "Client-centric always",
  "Quality without compromise",
  "Growth through collaboration",
] as const;

const spotlightItems: SpotlightItem[] = [
  {
    title: "MeDio",
    subtitle: "Medicine Inventory Monitoring System",
    description:
      "A pharmacy-focused platform for stock control, billing, returns, and performance reporting.",
    points: [
      "Efficient drug stock tracking and movement control",
      "Seamless sale processing with receipts and balances",
      "Daily and monthly sales analytics for business oversight",
    ],
  },
  {
    title: "FinEdge",
    subtitle: "Financial Services Lead Management System",
    description:
      "A unified CRM for insurance and investment lead capture, assignment, follow-up, and reporting.",
    points: [
      "Centralized lead intake with full client details",
      "Automated assignment and callback tracking",
      "Real-time dashboards with audit-ready reporting",
    ],
  },
  {
    title: "Civica Core",
    subtitle: "Integrated Government ERP System",
    description:
      "A modular ERP designed to digitize public administration and citizen-service operations.",
    points: [
      "Unified HR, finance, legal, procurement, RTI, and file tracking",
      "Role-based workflows, audit trails, and secure data handling",
      "Real-time dashboards and inter-department coordination",
    ],
  },
];

const differentiators: Differentiator[] = [
  {
    title: "Experienced & Dedicated Team",
    description:
      "Our professionals continuously update their skills so every project reflects current technology and strong execution.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We build around your requirements instead of forcing generic systems into your workflow.",
  },
  {
    title: "Scalable & Reliable Delivery",
    description:
      "Complex projects are planned with practical budgets, clear milestones, and dependable delivery.",
  },
  {
    title: "Client-Centric Support",
    description:
      "Fast response, clear communication, and long-term support stay part of the relationship after launch.",
  },
];

const heroSlides: HeroSlide[] = [
  {
    id: "intro",
    eyebrow: "TechVanta Labs",
    title: "Digital systems built to feel clear, fast, and ready to scale.",
    description:
      "Custom software, websites, mobile apps, and enterprise platforms shaped around business goals, clean execution, and long-term reliability.",
    primaryCta: {
      label: "Our Works",
      href: "/products",
    },
    secondaryCta: {
      label: "Contact",
      href: "/contact",
    },
    accent: "linear-gradient(90deg, #3d83df 0%, #6b44d9 100%)",
    themeClassName: "hero-slider--intro",
    preview: {
      kind: "portrait",
      image: "/slider/finedge-visual.svg",
      alt: "TechVanta Labs featured product illustration",
      badge: "Reliable Delivery",
      caption: "Business-first builds for web, mobile, and internal platforms.",
    },
    meta: ["Custom software delivery", "Responsive across devices", "Built for business growth"],
  },
  {
    id: "product",
    eyebrow: "Product Systems",
    title: "Business platforms that organize operations with less friction.",
    description:
      "From CRM and lead workflows to inventory control and reporting, we design software that gives teams one place to work with confidence.",
    primaryCta: {
      label: "Next Project",
      href: "/products",
    },
    secondaryCta: {
      label: "More",
      href: "/services",
    },
    accent: "linear-gradient(90deg, #ff9d00 0%, #f04f24 100%)",
    themeClassName: "hero-slider--product",
    preview: {
      kind: "product",
      image: "/slider/medio-visual.svg",
      alt: "Medicine inventory monitoring product visual",
      badge: "MeDio",
      caption: "Inventory, billing, returns, and analytics in one operating view.",
    },
    meta: ["ERP and CRM workflows", "Dashboard-led visibility", "Process automation"],
  },
  {
    id: "web",
    eyebrow: "Web Experiences",
    title: "Modern web experiences with bold visuals and cleaner conversion flow.",
    description:
      "Landing pages, company sites, portals, and digital products are built to perform on desktop, tablet, and mobile without losing clarity.",
    primaryCta: {
      label: "Next Project",
      href: "/services",
    },
    secondaryCta: {
      label: "More",
      href: "/about",
    },
    accent: "linear-gradient(90deg, #16c7a2 0%, #19b8c5 100%)",
    themeClassName: "hero-slider--web",
    preview: {
      kind: "browser",
      image: "/slider/civica-visual.svg",
      alt: "Government ERP dashboard visual in browser frame",
      badge: "Web Experience",
      caption: "Clean visual systems with stronger readability and conversion flow.",
    },
    meta: ["Responsive UI systems", "Performance-first layouts", "Brand-led visual direction"],
  },
  {
    id: "contact",
    eyebrow: "Start A Project",
    title: "Share the idea, workflow, or problem. We will help shape the right build.",
    description:
      "Whether you need a website, mobile app, ERP, CRM, or a full custom software rollout, we keep the conversation practical and execution-focused.",
    primaryCta: {
      label: "Direct Mail",
      href: "/contact",
    },
    secondaryCta: {
      label: "Why Us",
      href: "/why-us",
    },
    accent: "linear-gradient(90deg, #33a6e4 0%, #2157c6 100%)",
    themeClassName: "hero-slider--contact",
    preview: {
      kind: "form",
    },
    meta: ["Fast response", "Clear scoping", "Long-term support"],
  },
];

export function HomePageContent() {
  const heroMetrics = [
    { label: "Built For", value: "Business, Government, Finance", modifier: "home-page__metric--built-for" },
    { label: "Core Platforms", value: "ERP, CRM, LMS, Web, Mobile", modifier: "home-page__metric--platforms" },
    { label: "Delivery Focus", value: "Secure, scalable, future-ready", modifier: "home-page__metric--delivery" },
    { label: "Location", value: "Bhopal, serving clients across India", modifier: "home-page__metric--location" },
  ];

  return (
    <section className="home-page" aria-label="Home page">
      <HomeHeroSlider slides={heroSlides} />

      <div className="home-page__hero">
        <div className="home-page__hero-copy">
          <span className="home-page__eyebrow">Technology You Can Trust. Technology You Control.</span>
          <h1>Future-ready digital systems built for growth, speed, and reliability.</h1>
          <p>
            TechVanta Labs delivers custom software, ERP, CRM, LMS, websites, mobile apps, and
            digital growth solutions designed to transform how businesses operate and scale.
          </p>
          <div className="home-page__hero-actions">
            <Link href="/services" className="home-page__button home-page__button--primary">Explore Services</Link>
            <Link href="/contact" className="home-page__button home-page__button--secondary">Start A Project</Link>
          </div>
        </div>

        <div className="home-page__hero-panel">
          <div className="home-page__hero-grid">
            {heroMetrics.map((item) => (
              <article key={item.label} className={`home-page__metric ${item.modifier}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>

      <section className="home-page__section home-page__section--about">
        <div className="home-page__section-heading">
          <span>About Us</span>
          <h2>Purpose-built technology that fits your business, not the other way around.</h2>
        </div>
        <div className="home-page__about-grid">
          <div className="home-page__about-copy">
            <p>
              TechVanta Labs is a fast-growing technology solutions company based in Bhopal,
              helping organizations across India improve efficiency, strengthen digital presence,
              and accelerate growth with intelligent, tailored systems.
            </p>
            <p>
              We design and develop custom software, modern websites, mobile apps, and
              enterprise-grade platforms that align closely with business objectives and solve real
              operational challenges.
            </p>
          </div>
          <div className="home-page__mission-grid">
            <article className="home-page__info-card">
              <span>Mission</span>
              <p>
                To empower businesses and public-sector organizations with intelligent, scalable,
                purpose-built digital solutions that simplify complexity and create measurable impact.
              </p>
            </article>
            <article className="home-page__info-card">
              <span>Vision</span>
              <p>
                To become a trusted technology partner for organizations that want to operate
                smarter, faster, and more efficiently in a digital-first world.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-page__section home-page__section--services">
        <div className="home-page__section-heading">
          <span>What We Provide</span>
          <h2>Business-first services with practical execution.</h2>
        </div>
        <div className="home-page__services-layout">
          <div className="home-page__services-copy">
            <p>
              We do more than build websites or applications. Every engagement is planned around
              business value, operational clarity, and long-term maintainability.
            </p>
            <ul className="home-page__bullet-list">
              <li>Business-oriented recommendations instead of generic technology choices</li>
              <li>Transparent planning, realistic timelines, and clear communication</li>
              <li>Ongoing technical support after delivery</li>
            </ul>
          </div>
          <div className="home-page__services-grid">
            {serviceItems.map((item) => (
              <article key={item.title} className={`home-page__service-card ${item.modifier}`}>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-page__section">
        <div className="home-page__section-heading">
          <span>Product Spotlight</span>
          <h2>Three solutions that show how TechVanta Labs builds for real-world operations.</h2>
        </div>
        <div className="home-page__spotlight-grid">
          {spotlightItems.map((item) => (
            <article key={item.title} className="home-page__spotlight-card">
              <div className="home-page__spotlight-top">
                <span>{item.title}</span>
                <h3>{item.subtitle}</h3>
              </div>
              <p>{item.description}</p>
              <ul className="home-page__bullet-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="home-page__section">
        <div className="home-page__section-heading">
          <span>Our Expertise</span>
          <h2>Deep capability across the technologies modern organizations rely on.</h2>
        </div>
        <div className="home-page__expertise-grid">
          {expertiseItems.map((item) => (
            <article key={item.title} className="home-page__expertise-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-page__section">
        <div className="home-page__section-heading">
          <span>What Makes Us Stand Out</span>
          <h2>Reliable delivery shaped by experience, transparency, and collaboration.</h2>
        </div>
        <div className="home-page__why-grid">
          {differentiators.map((item) => (
            <article key={item.title} className="home-page__why-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="home-page__values-strip">
          {values.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </section>

      <section className="home-page__cta">
        <div>
          <span>TechVanta Labs</span>
          <h2>Building technology that grows with your business.</h2>
          <p>
            From custom software and mobile applications to modern websites and digital marketing,
            we stand beside you throughout your digital transformation journey.
          </p>
        </div>
        <div className="home-page__cta-actions">
          <Link href="/contact" className="home-page__button home-page__button--primary">Contact Us</Link>
          <Link href="/products" className="home-page__button home-page__button--secondary">View Products</Link>
        </div>
      </section>
    </section>
  );
}
