import "./testimonialsSection.css";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import TestimonialCard from "../../ui/TestimonialCard/TestimonialCard";

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="testimonials-section">
      <SectionHeader
        supportingText="Testimonials"
        title="Countless users, countless smiles"
        subtitle="Explore our community's journey and discover why satisfaction defines us."
      />

      <ul className="testimonials-section-cards-list">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="testimonials-card-content">
            <TestimonialCard
              img={testimonial.image}
              name={testimonial.name}
              username={testimonial.username}
              text={testimonial.text}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
