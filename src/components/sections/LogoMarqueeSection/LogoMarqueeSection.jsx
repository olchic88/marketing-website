import "./logoMarqueeSection.css";
import LogoStrip from "./LogoStrip";
import { logos } from "./logoMarqueeSectionData";

export default function LogoMarqueeSection() {
  return (
    <section className="logo-marquee-section">
      <div className="logo-marquee-section-content">
        <h3>Used by teams that you love</h3>
        <div className="logo-marquee-section-logos-wrapper">
          <div className="logo-marquee-section-logos">
            <LogoStrip logos={logos} />
            <LogoStrip logos={logos} ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
