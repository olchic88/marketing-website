import "./logoMarqueeSection.css";

export default function LogoStrip({ logos, ariaHidden = false }) {
  return (
    <ul className="logo-marquee-section-logos-strip" aria-hidden={ariaHidden}>
      {logos.map((logo) => (
        <li key={logo.id}>
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </li>
      ))}
    </ul>
  );
}
