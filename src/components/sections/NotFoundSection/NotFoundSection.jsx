import Button from "../../ui/Button/Button";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import "./notFoundSection.css";
import { Link } from "react-router";

export default function NotFoundSection({ buttonText, buttonTo }) {
  return (
    <section className="not-found-section">
      <div className="not-found-section-content">
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
      </div>

      <Button to={buttonTo} variant="primary" className="notfound-btn" as="link">
        {buttonText}
      </Button>
    </section>
  );
}
