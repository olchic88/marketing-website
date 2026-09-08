import { Link } from "react-router";
import "./heroSectionSimple.css";
import Button from "../../ui/Button/Button";

export default function HeroSectionSimple({
  title,
  description,
  src,
  alt,
  width,
  height,
}) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-header">
          <h3 className="hero-title">{title}</h3>
          <p className="hero-description">{description}</p>
        </div>
        <div className="hero-actions">
          <div className="hero-actions-btn">
            <Button as="link" to="#" variant="secondary" size="xl">
              Learn more
            </Button>
          </div>
          <div className="hero-actions-btn">
            <Button as="link" to="#" variant="primary" size="xl">
              See pricing
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
