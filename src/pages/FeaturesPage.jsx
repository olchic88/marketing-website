import HeroSectionFeatureBullets from "../components/sections/HeroSectionFeatureBullets/HeroSectionFeatureBullets";
import prismFeatureBullets from "../components/sections/HeroSectionFeatureBullets/prismFeatureBullets.webp";

import FeatureSectionGrid from "../components/sections/FeatureSectionGrid/FeatureSectionGrid";
import { featureSectionGridData } from "../components/sections/FeatureSectionGrid/featureSectionGridData";

import FeatureSectionImage from "../components/sections/FeatureSectionImage/FeatureSectionImage";
import { featureSectionImageData } from "../components/sections/FeatureSectionImage/featureSectionImageData";

import TestimonialsSection from "../components/sections/TestimonialsSection/TestimonialsSection";
import { testimonials } from "../components/sections/TestimonialsSection/testimonialsSectionData";

import FAQSection from "../components/sections/FAQSection/FAQSection";
import { faqs } from "../components/sections/FAQSection/faqData";

import ContactSectionAPIPage from "../components/sections/ContactSection/ContactSectionAPIPage";


export default function FeaturesPage() {
  return (
    <>
      <title>Abstractly | Features</title>

      <HeroSectionFeatureBullets
        title="Premium abstract images"
        bullets={[
          { id: 1, text: "Minimum 5K image resolution" },
          { id: 2, text: "Various format variants available" },
          { id: 3, text: "Retina display support" },
        ]}
        src={prismFeatureBullets}
        alt="Colorful abstract geometric shapes"
        width={696}
        height={526}
        primaryButtonText="See pricing"
        primaryButtonTo="/pricing"
        secondaryButtonText="Learn more"
        secondaryButtonTo="/about"
      />

      <FeatureSectionGrid {...featureSectionGridData} />

      <FeatureSectionImage side="right" {...featureSectionImageData.right} />
      <FeatureSectionImage side="left" {...featureSectionImageData.left} />

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection faqs={faqs} />

      <ContactSectionAPIPage />
    </>
  );
}
