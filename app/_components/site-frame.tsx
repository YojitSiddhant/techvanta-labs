"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { href: "/home", label: "Home", icon: "home" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/services", label: "Services", icon: "services" },
  { href: "/products", label: "Products", icon: "products" },
  { href: "/expertise", label: "Expertise", icon: "expertise" },
  { href: "/why-us", label: "Why Choose Us", icon: "why" },
  { href: "/contact", label: "Contact", icon: "contact" },
  { href: "/legal", label: "Legal", icon: "legal" },
] as const;

type SiteFrameProps = {
  children: React.ReactNode;
};

function NavIcon({
  icon,
}: {
  icon: "home" | "about" | "services" | "products" | "expertise" | "why" | "contact" | "legal";
}) {
  if (icon === "home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-nav__icon">
        <path d="M4 10.5 12 4l8 6.5V20h-5.5v-5h-5v5H4v-9.5Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "about") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-nav__icon">
        <path d="M12 4.25A7.75 7.75 0 1 1 4.25 12 7.76 7.76 0 0 1 12 4.25Zm0 3a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Zm-1.1 4.35v5.15h2.2V11.6h-2.2Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "services") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-nav__icon">
        <path d="M5 6.5h14v3H5v-3Zm0 8h14v3H5v-3Zm0-4h9v3H5v-3Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "products") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-nav__icon">
        <path d="M6 5h12v4H6V5Zm0 5.5h5.25V19H6v-8.5Zm6.75 0H18V19h-5.25v-8.5Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "expertise") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-nav__icon">
        <path d="m12 3 2.2 4.45 4.92.72-3.56 3.47.84 4.9L12 14.2 7.6 16.54l.84-4.9L4.88 8.17l4.92-.72L12 3Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "why") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-nav__icon">
        <path d="M12 4.5A7.5 7.5 0 1 1 4.5 12 7.51 7.51 0 0 1 12 4.5Zm0 3a3.1 3.1 0 0 0-3.1 3.1h2.1a1 1 0 1 1 2 0c0 .55-.35.88-1.04 1.42-.96.76-1.56 1.44-1.56 2.73v.3h2.1v-.2c0-.54.24-.83 1.06-1.46.94-.73 1.54-1.52 1.54-2.79A3.1 3.1 0 0 0 12 7.5Zm-1.1 8.85v2.15h2.2v-2.15h-2.2Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "contact") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-nav__icon">
        <path d="M4.5 6.5h15a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16V8a1.5 1.5 0 0 1 1.5-1.5Zm0 2v.26L12 13.4l7.5-4.64V8.5h-15Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-nav__icon">
      <path d="M7 4.75h7.5L19 9.26v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 18.26v-12A1.5 1.5 0 0 1 7.5 4.75Zm7 1.8v3.1h3.1" fill="currentColor" />
    </svg>
  );
}

export function SiteFrame({ children }: SiteFrameProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLandingPage = pathname === "/";
  const showFooter = !isLandingPage;

  function isActive(href: string) {
    if (href === "/home") {
      return pathname === "/home";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <div className="site-shell">
      {!isLandingPage ? (
        <header className="site-header">
          <div className="shell-container site-header__inner">
            <div className="site-header__topbar">
              <Link href="/home" className="brand-mark" aria-label="TechVanta Labs home">
                <span className="brand-mark__name">
                  <span className="brand-mark__typing">TechVanta Labs</span>
                </span>
              </Link>

              <button
                type="button"
                className={`site-nav__toggle${isMenuOpen ? " is-open" : ""}`}
                aria-expanded={isMenuOpen}
                aria-controls="primary-navigation"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            <nav
              id="primary-navigation"
              className={`site-nav${isMenuOpen ? " is-open" : ""}`}
              aria-label="Primary"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav__link${isActive(item.href) ? " is-active" : ""}`}
                  data-active={isActive(item.href) ? "true" : "false"}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <NavIcon icon={item.icon} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </header>
      ) : null}

      <main className="site-main">
        <div className="shell-container page-shell">{children}</div>
      </main>

      {showFooter ? (
        <footer className="site-footer">
          <div className="site-footer__panel">
            <div className="shell-container site-footer__content">
              <div className="site-footer__intro">
                <div className="site-footer__brand-block">
                  <div className="site-footer__logo" aria-hidden="true">
                    TV
                  </div>
                  <div className="site-footer__brand-name">TechVanta Labs</div>
                </div>

                <p className="site-footer__description">
                  Building dependable digital systems through custom software, websites,
                  applications, and growth-focused technology solutions.
                </p>

                <div className="site-footer__trust">
                  <span>Business-first delivery</span>
                  <span>Clear communication</span>
                  <span>Long-term support</span>
                </div>

                <div className="site-footer__actions" aria-label="Footer actions">
                  <a href="mailto:info@techvantalabs.com" className="site-footer__action">
                    Email Us
                  </a>
                  <Link href="/contact" className="site-footer__action">
                    Start A Project
                  </Link>
                  <Link href="/products" className="site-footer__action">
                    View Products
                  </Link>
                </div>

                <a href="#top" className="site-footer__backtop">
                  Back To Top
                </a>
              </div>

              <div className="site-footer__columns">
                <div className="site-footer__column">
                  <h3 className="site-footer__heading">Site Map</h3>
                  <nav className="site-footer__links" aria-label="Footer">
                    {navigationItems.map((item) => (
                      <Link key={item.href} href={item.href} className="site-footer__link">
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="site-footer__column">
                  <h3 className="site-footer__heading">Address</h3>
                  <div className="site-footer__links site-footer__links--address">
                    <span className="site-footer__text">TechVanta Labs Pvt Ltd</span>
                    <span className="site-footer__text">118, Sunder Nagar</span>
                    <span className="site-footer__text">Ashoka Garden, Bhopal</span>
                    <span className="site-footer__text">462023, Madhya Pradesh</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="site-footer__copyright">
              Copyright 2026 TechVanta Labs. All Rights Reserved.
            </div>
          </div>
        </footer>
      ) : null}
    </div>
  );
}
