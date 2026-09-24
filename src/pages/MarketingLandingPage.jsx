import HeroSectionSimple from "../components/sections/HeroSectionSimple/HeroSectionSimple";
import prism from "../components/sections/HeroSectionSimple/prism.webp";

import LogoMarqueeSection from "../components/sections/LogoMarqueeSection/LogoMarqueeSection";

import { featureSectionGridData } from "../components/sections/FeatureSectionGrid/featureSectionGridData";
import FeatureSectionGrid from "../components/sections/FeatureSectionGrid/FeatureSectionGrid";

import FeatureSectionImage from "../components/sections/FeatureSectionImage/FeatureSectionImage";
import { featureSectionImageData } from "../components/sections/FeatureSectionImage/featureSectionImageData";

import PricingSectionTiers from "../components/sections/PricingSectionTiers/PricingSectionTiers";
import {
  pricingSectionTiersData,
  plan,
} from "../components/sections/PricingSectionTiers/pricingSectionTiersData";

import FAQSection from "../components/sections/FAQSection/FAQSection";

import NewsletterSection from "../components/sections/NewsletterSection/NewsletterSection";
import abstract from "../components/sections/NewsletterSection/abstract.webp";

import ContactSectionAPIPage from "../components/sections/ContactSection/ContactSectionAPIPage";


const faqs = [
  {
    id: 0,
    question: "What types of images are available on your platform?",
    answer:
      "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
  },
  {
    id: 1,
    question: "How can I access and download images from your platform?",
    answer:
      "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
  },
  {
    id: 3,
    question: "Do you offer free images, or is there a subscription required?",
    answer:
      "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
  },
  {
    id: 4,
    question: "What payment methods do you accept for subscriptions?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
  },
  {
    id: 5,
    question: "Can I cancel or modify my subscription at any time?",
    answer:
      "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
  },
  {
    id: 6,
    question: "How frequently do you update your image collection?",
    answer:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];

const newsletterFeatures = [
  {
    id: 1,
    text: " Exclusive access to new abstract images and collections",
  },
  { id: 2, text: "Unlock special promotions only for subscribers" },
  { id: 3, text: "Regular doses of artistic inspiration" },
];


export default function MarketingLandingPage() {
  return (
    <>
      <title>Abstractly | Abstract Images</title>

      <HeroSectionSimple
        title="Well crafted abstract images"
        description="High quality abstract images for your projects, wallpaper and
                                presentations."
        src={prism}
        alt="Colorful abstract geometric shapes"
        width={696}
        height={526}
        primaryButtonText="See pricing"
        primaryButtonTo="/pricing"
        secondaryButtonText="Learn more"
        secondaryButtonTo="/features"
      />

      <LogoMarqueeSection />

      <FeatureSectionGrid {...featureSectionGridData} />

      <FeatureSectionImage side="right" {...featureSectionImageData.right} />
      <FeatureSectionImage side="left" {...featureSectionImageData.left} />

      <PricingSectionTiers
        pricingSectionTiersData={pricingSectionTiersData}
        plan={plan}
        supportingText="Pricing Tiers"
        title="Fit for all your needs"
        subtitle="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
      />

      <FAQSection faqs={faqs} />

      <NewsletterSection
        title="Get the finest curated abstracts delivered weekly to your inbox"
        banner={abstract}
        width={1176}
        height={1216}
        features={newsletterFeatures}
      />

      <ContactSectionAPIPage />
    </>
  );
}
