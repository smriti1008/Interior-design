import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      {/* Background Image with Dark Overlay */}
      <img
        src={getImageUrl("hero/heroImage.png")}
        className={styles.bgImage}
        alt="Luxury Interior"
      />
      <div className={styles.overlay} />

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.eyebrow}>Est. 2022</div>
        <h1 className={styles.title}>
          Curated Spaces for <em>Modern</em> Living
        </h1>
        <p className={styles.description}>
          Transforming spaces into inspiring sanctuaries with sustainable,
          high-quality design. Discover the magic of Oasis Interiors, where
          elegance meets everyday comfort.
        </p>

        <div className={styles.ctaRow}>
          <a href="#collections" className={styles.ctaPrimary}>
            Explore Portfolio
          </a>
          <a href="#about" className={styles.ctaSecondary}>
            Our Philosophy
          </a>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      {/* Bottom Stats */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>50+</span>
          <span className={styles.statLabel}>Projects Done</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>12</span>
          <span className={styles.statLabel}>Awards Won</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>100%</span>
          <span className={styles.statLabel}>Satisfaction</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
