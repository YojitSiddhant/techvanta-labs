const productHighlights = [
  "Three product-ready systems built around pharmacy, financial-services, and government workflows",
  "Feature sets grounded in operational efficiency, visibility, and day-to-day execution",
  "Scalable architecture designed for dependable adoption and long-term business value",
] as const;

const productPillars = ["Operational Clarity", "Scalable Delivery", "Industry-Specific Systems"] as const;

const products = [
  {
    name: "MeDio",
    subtitle: "Medicine Inventory Monitoring System",
    description:
      "MeDio streamlines inventory management for pharmacies and medicine stores with faster billing, stronger stock control, and better daily oversight.",
    summary:
      "Inventory control becomes streamlined and less error-prone, enabling better business oversight and decision-making.",
    image: "/slider/medio-visual.svg",
    points: [
      "Efficient drug stock management with clear inventory and movement tracking",
      "Seamless sale processing, including customer billing and balance tracking",
      "Sales return handling with receipt generation",
      "Daily and monthly sales analytics for performance monitoring",
    ],
  },
  {
    name: "FinEdge",
    subtitle: "Financial Services Lead Management System",
    description:
      "FinEdge is a unified CRM for insurance and investment workflows that centralizes lead capture, assignment, follow-up, and reporting to improve coordination and conversion.",
    summary:
      "The system enhances operational efficiency, strengthens customer engagement, and provides a reliable foundation for tele-calling and lead lifecycle management.",
    image: "/slider/finedge-visual.svg",
    points: [
      "Centralized lead intake with complete client and product details",
      "Automated assignment based on expertise and workflow rules",
      "Full follow-up history with callbacks and status updates",
      "Dashboards and quick search for real-time visibility",
      "Secure, scalable reporting with audit trails",
    ],
  },
  {
    name: "Civica Core",
    subtitle: "Integrated Government ERP System",
    description:
      "Civica Core digitizes administrative and citizen-service operations for government departments through one platform that improves coordination, transparency, and workflow control.",
    summary:
      "The ERP modernizes governance, strengthens accountability, and supports efficient, transparent, technology-driven public administration.",
    image: "/slider/civica-visual.svg",
    points: [
      "Centralized HR, Finance, Procurement, Legal, File Tracking, RTI, and core functions",
      "Automated workflows with role-based access, audit trails, and secure data handling",
      "Real-time dashboards and reporting for faster decision-making",
      "Seamless inter-departmental data exchange to reduce duplication and manual work",
      "Scalable modular architecture aligned with government IT standards and compliance needs",
    ],
  },
] as const;

const productCommitments = [
  "Products are designed around real operational use cases, not abstract feature lists.",
  "Every system emphasizes secure workflows, practical adoption, and maintainable delivery.",
  "Implementation thinking stays close to business outcomes, reporting visibility, and long-term scalability.",
] as const;

export function ProductsPageContent() {
  return (
    <div className="products-page" aria-label="Products page">
      <section className="products-page__hero">
        <div className="products-page__hero-copy">
          <span className="products-page__eyebrow">Product Spotlight</span>
          <h1>Built products that solve real operational challenges across key industries.</h1>
          <p>
            TechVanta Labs develops focused digital products for pharmacies, financial services,
            and government operations, combining workflow efficiency, reporting visibility, and
            dependable system design in one delivery model.
          </p>
          <div className="products-page__hero-pillars">
            {productPillars.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="products-page__hero-panel">
          <div className="products-page__visual-card products-page__visual-card--hero">
            <img
              src="/slider/civica-visual.svg"
              alt="Illustration representing digital product systems across multiple industries"
              className="products-page__visual-image"
            />
            <div className="products-page__visual-meta">
              <span>TechVanta Products</span>
              <strong>Focused systems for real-world operations</strong>
            </div>
          </div>
          {productHighlights.map((item) => (
            <article key={item} className="products-page__highlight">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="products-page__section">
        <div className="products-page__section-heading">
          <span>Featured Products</span>
          <h2>Three systems that show how TechVanta Labs builds around operational reality.</h2>
        </div>
        <div className="products-page__spotlight-grid">
          {products.map((product) => (
            <article key={product.name} className="products-page__spotlight-card">
              <div className="products-page__spotlight-media">
                <img src={product.image} alt={`${product.name} product illustration`} className="products-page__spotlight-image" />
              </div>
              <div className="products-page__spotlight-content">
                <div className="products-page__spotlight-top">
                  <span>{product.name}</span>
                  <h3>{product.subtitle}</h3>
                </div>
                <p>{product.description}</p>
                <ul className="products-page__bullet-list">
                  {product.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="products-page__spotlight-summary">{product.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="products-page__commitment">
        <div className="products-page__section-heading">
          <span>Product Principles</span>
          <h2>What stays consistent across every system we turn into a working product.</h2>
        </div>
        <div className="products-page__commitment-grid">
          {productCommitments.map((point) => (
            <article key={point} className="products-page__commitment-card">
              <span className="products-page__commitment-marker" aria-hidden="true" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
