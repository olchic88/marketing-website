import { useScrollToContact } from "../hooks/useScrollToContact";

import PageMeta from "../components/PageMeta/PageMeta";

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
  const { nameInputRef, scrollToContact } = useScrollToContact();

  return (
    <>
      <PageMeta
        title="Abstractly | Pricing"
        description="Explore Abstractly pricing plans and find the right option for accessing high-quality abstract images for your projects."
        url="https://YOUR-DOMAIN.com/pricing"
      />

      <PricingSectionTiers
        pricingSectionTiersData={pricingSectionTiersData}
        plan={plan}
        heading="h1"
        planHeading="h2"
      />

      <FAQSection faqs={faqsPricing} onContactClick={scrollToContact} />

      <FeatureSectionGrid {...featureSectionGridData} />

      <TestimonialsSection testimonials={testimonials} />

      <ContactSectionAPIPage nameInputRef={nameInputRef} />
    </>
  );
}
