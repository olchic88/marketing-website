import Button from "../../ui/Button/Button";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import "./notFoundSection.css";

export default function NotFoundSection({ buttonText, buttonTo }) {
  return (
    <section className="not-found-section">
      <SectionHeader
        supportingText="Not found"
        title="We can’t find the page"
        subtitle="Sorry, the page you are looking for doesn't exist or has been moved."
        heading="h1"
        className="not-found-section-header"
        supportingTextClassName="not-found-section-supporting-text"
        titleClassName="not-found-section-title"
        subtitleClassName="not-found-section-subtitle"
      />

      <Button
        to={buttonTo}
        variant="primary"
        className="not-found-section-button"
        as="link"
      >
        {buttonText}
      </Button>
    </section>
  );
}
