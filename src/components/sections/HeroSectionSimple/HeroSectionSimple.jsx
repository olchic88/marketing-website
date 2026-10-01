import "./heroSectionSimple.css";
import Button from "../../ui/Button/Button";

export default function HeroSectionSimple({
  title,
  description,
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
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-header">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>
        </div>
        <div className="hero-actions">
          <div className="hero-actions-btn">
            <Button
              as="link"
              to={secondaryButtonTo}
              variant="secondary"
              size="xl"
            >
              {secondaryButtonText}
            </Button>
          </div>
          <div className="hero-actions-btn">
            <Button as="link" to={primaryButtonTo} variant="primary" size="xl">
              {primaryButtonText}
            </Button>
          </div>
        </div>
      </div>
      <img
        src={src}
        className="hero-banner"
        alt={alt}
        width={width}
        height={height}
      />
    </section>
  );
}
