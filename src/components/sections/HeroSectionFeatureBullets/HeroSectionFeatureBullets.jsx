import { Link } from "react-router";
import "./heroSectionFeatureBullets.css";
import Button from "../../ui/Button/Button";
import { CheckIcon } from "../../icons";

export default function HeroSectionFeatureBullets({
  title,
  bullets,
  src,
  alt,
  width,
  height,
  primaryButtonText,
  primaryButtonTo,
  secondaryButtonText,
  secondaryButtonTo,
}) {
  return (
    <section className="hero-section-feature-bullets">
      <div className="hero-feature-bullets-content">
        <h3 className="hero-feature-bullets-title">{title}</h3>
        <ul className="hero-feature-bullets">
          {bullets.map((bullet) => (
            <li key={bullet.id}>
              <CheckIcon/>
              {bullet.text}
            </li>
          ))}
        </ul>
        <div className="hero-feature-bullets-actions">
          <div className="hero-feature-bullets-actions-btn">
            <Button
              variant="secondary"
              size="xl"
              as="link"
              to={secondaryButtonTo}
            >
              {secondaryButtonText}
            </Button>
          </div>
          <div className="hero-feature-bullets-actions-btn">
            <Button variant="primary" size="xl" as="link" to={primaryButtonTo}>
              {primaryButtonText}
            </Button>
          </div>
        </div>
      </div>
      <img
        src={src}
        className="hero-feature-bullets-banner"
        alt={alt}
        width={width}
        height={height}
      />
    </section>
  );
}
