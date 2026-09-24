import PricingSectionTiers from "../components/sections/PricingSectionTiers/PricingSectionTiers";
import {
  plan,
  pricingSectionTiersData,
} from "../components/sections/PricingSectionTiers/pricingSectionTiersData";

import FAQSection from "../components/sections/FAQSection/FAQSection";
import { faqsPricing } from "../components/sections/FAQSection/faqPricingData";

import FeatureSectionGrid from "../components/sections/FeatureSectionGrid/FeatureSectionGrid";
import { featureSectionGridData } from "../components/sections/FeatureSectionGrid/featureSectionGridData";

import TestimonialsSection from "../components/sections/TestimonialsSection/TestimonialsSection";
import { testimonials } from "../components/sections/TestimonialsSection/testimonialsSectionData";

import ContactSectionAPIPage from "../components/sections/ContactSection/ContactSectionAPIPage";

export default function PricingPage() {
  return (
    <>
      <title>Abstractly | Pricing</title>

      <PricingSectionTiers
        pricingSectionTiersData={pricingSectionTiersData}
        plan={plan}
      />

      <FAQSection faqs={faqsPricing} />

      <FeatureSectionGrid {...featureSectionGridData} />

      <TestimonialsSection testimonials={testimonials} />

      <ContactSectionAPIPage />
    </>
  );
}
