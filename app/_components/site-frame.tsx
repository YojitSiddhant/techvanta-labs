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

function SocialIcon({ platform }: { platform: "x" | "linkedin" | "instagram" | "facebook" }) {
  if (platform === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__social-icon">
        <path
          d="M18.9 3H21l-6.55 7.49L22.16 21H16.1l-4.75-6.21L5.92 21H3.8l7-8.01L2.4 3h6.22l4.3 5.68L18.9 3Zm-1.07 16.2h1.16L7.77 4.74H6.52L17.83 19.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (platform === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__social-icon">
        <path
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3Zm15.19 9.74c0-3.47-1.85-5.08-4.32-5.08a3.73 3.73 0 0 0-3.36 1.85V8.5H9.38c.05.66 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.03 1.88 2.54V20h3.38v-7.26Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__social-icon">
        <path
          d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__social-icon">
      <path
        d="M13.5 21v-7.2h2.42l.36-2.8H13.5V9.2c0-.81.23-1.36 1.4-1.36h1.5V5.34c-.26-.04-1.14-.1-2.16-.1-2.14 0-3.6 1.31-3.6 3.71v2.05H8.2v2.8h2.44V21h2.86Z"
        fill="currentColor"
      />
    </svg>
  );
}

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

                <div className="site-footer__socials" aria-label="Social links">
                  <a href="#" className="site-footer__social site-footer__social--x" aria-label="X">
                    <SocialIcon platform="x" />
                  </a>
                  <a
                    href="#"
                    className="site-footer__social site-footer__social--linkedin"
                    aria-label="LinkedIn"
                  >
                    <SocialIcon platform="linkedin" />
                  </a>
                  <a
                    href="#"
                    className="site-footer__social site-footer__social--instagram"
                    aria-label="Instagram"
                  >
                    <SocialIcon platform="instagram" />
                  </a>
                  <a
                    href="#"
                    className="site-footer__social site-footer__social--facebook"
                    aria-label="Facebook"
                  >
                    <SocialIcon platform="facebook" />
                  </a>
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
