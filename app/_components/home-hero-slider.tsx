"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

type HomeHeroSliderProps = {
  slides: Slide[];
};

export function HomeHeroSlider({ slides }: HomeHeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex, slides]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-slider" aria-label="Featured company products">
      <article className="hero-slider__slide">
        <div
          key={activeSlide.title}
          className="hero-slider__backdrop"
          aria-hidden="true"
          style={{
            backgroundImage: `var(--hero-slider-overlay), url("${activeSlide.image}")`,
          }}
        />

        <div className="hero-slider__visual" aria-hidden="true">
          <img
            key={`${activeSlide.title}-visual`}
            className="hero-slider__visual-image"
            src={activeSlide.image}
            alt=""
          />
        </div>

        <div className="hero-slider__content">
          <div key={activeSlide.title} className="hero-slider__copy">
            <span className="hero-slider__eyebrow">{activeSlide.eyebrow}</span>
            <h2>{activeSlide.title}</h2>
            <p>{activeSlide.description}</p>
            <div className="hero-slider__actions">
              <Link href="/products" className="hero-slider__button hero-slider__button--primary">
                Explore Products
              </Link>
              <Link href="/contact" className="hero-slider__button hero-slider__button--secondary">
                Get Quote
              </Link>
            </div>
            <div className="hero-slider__support">
              <span>Custom software delivery</span>
              <span>Built for business growth</span>
            </div>
          </div>
        </div>
      </article>

      <div className="hero-slider__dots" aria-label="Slider navigation">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`hero-slider__dot${activeIndex === index ? " is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
