"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";

type Slide = {
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

type HomeHeroSliderProps = {
  slides: Slide[];
};

export function HomeHeroSlider({ slides }: HomeHeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const slideCount = slides.length;

  const showSlide = (index: number) => {
    setActiveIndex((index + slideCount) % slideCount);
  };

  const goToNextSlide = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % slideCount);
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToNextSlide();
    }, 4200);

    return () => window.clearInterval(timer);
  }, [goToNextSlide]);

  return (
    <section className={`hero-slider ${activeSlide.themeClassName}`} aria-label="Featured company highlights">
      <article className="hero-slider__slide" data-theme={activeSlide.id}>
        <div
          className="hero-slider__backdrop"
          aria-hidden="true"
        >
          <div className="hero-slider__glow hero-slider__glow--primary" />
          <div className="hero-slider__glow hero-slider__glow--secondary" />
          <div className="hero-slider__grid" />
        </div>

        <div className="hero-slider__content">
          <div key={activeSlide.id} className="hero-slider__copy">
            <span className="hero-slider__eyebrow">{activeSlide.eyebrow}</span>
            <h2>{activeSlide.title}</h2>
            <p>{activeSlide.description}</p>
            <div className="hero-slider__actions">
              <Link
                href={activeSlide.primaryCta.href}
                className="hero-slider__button hero-slider__button--primary"
              >
                {activeSlide.primaryCta.label}
              </Link>
              <Link
                href={activeSlide.secondaryCta.href}
                className="hero-slider__button hero-slider__button--secondary"
              >
                {activeSlide.secondaryCta.label}
              </Link>
            </div>
            <div className="hero-slider__support">
              {activeSlide.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-slider__visual" aria-hidden="true">
            {activeSlide.preview.kind !== "form" && activeSlide.preview.image ? (
              <div className="hero-slider__visual-panel">
                <div
                  className="hero-slider__visual-art"
                  style={{ backgroundImage: `url("${activeSlide.preview.image}")` }}
                />
                <div className="hero-slider__visual-overlay">
                  <span>{activeSlide.preview.badge}</span>
                  <strong>{activeSlide.preview.caption}</strong>
                </div>
              </div>
            ) : null}

            {activeSlide.preview.kind === "form" ? (
              <div className="hero-slider__contact-card">
                <label className="hero-slider__contact-field">
                  <span>Email</span>
                  <input type="email" placeholder="Enter your email" />
                </label>
                <label className="hero-slider__contact-field hero-slider__contact-field--large">
                  <span>Message</span>
                  <textarea placeholder="Tell us about your project" rows={6} />
                </label>
                <button type="button" className="hero-slider__contact-submit">
                  Send Request
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </article>

      <div className="hero-slider__nav">
        <button
          type="button"
          className="hero-slider__arrow"
          onClick={() => showSlide(activeIndex - 1)}
          aria-label="Show previous slide"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>
        <button
          type="button"
          className="hero-slider__arrow"
          onClick={() => showSlide(activeIndex + 1)}
          aria-label="Show next slide"
        >
          <span aria-hidden="true">&#8250;</span>
        </button>
      </div>

      <div className="hero-slider__dots" aria-label="Slider navigation">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-slider__dot${activeIndex === index ? " is-active" : ""}`}
            onClick={() => showSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      <div className="hero-slider__progress" aria-hidden="true">
        <div className="hero-slider__progress-bar" style={{ width: `${((activeIndex + 1) / slideCount) * 100}%` }} />
      </div>

      <div className="hero-slider__accent" aria-hidden="true" style={{ background: activeSlide.accent }} />
    </section>
  );
}
