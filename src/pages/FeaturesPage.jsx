import "../layouts/PageLayout";

import Navbar from "../components/Navbar/Navbar";

import HeroSectionFeatureBullets from "../components/sections/HeroSectionFeatureBullets/HeroSectionFeatureBullets";
import prismFeatureBullets from "../components/sections/HeroSectionFeatureBullets/prismFeatureBullets.webp";

import FeatureSectionGrid from "../components/sections/FeatureSectionGrid/FeatureSectionGrid";
import { featureSectionGridData } from "../components/sections/FeatureSectionGrid/featureSectionGridData";

import FeatureSectionImage from "../components/sections/FeatureSectionImage/FeatureSectionImage";
import { featureSectionImageData } from "../components/sections/FeatureSectionImage/featureSectionImageData";

import TestimonialsSection from "../components/sections/TestimonialsSection/TestimonialsSection";
import { testimonials } from "../components/sections/TestimonialsSection/testimonialsSectionData";

import FAQSection from "../components/sections/FAQSection/FAQSection";

import ContactSectionAPIPage from "../components/sections/ContactSection/ContactSectionAPIPage";

import {
  AddressIcon,
  PhoneIcon,
  EmailIcon,
  LinkIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  GitHubIcon,
  XIcon,
} from "../components/icons";

import Footer from "../components/Footer/Footer";

const navbarLinks = [
  { id: 1, label: "Home", to: "/", type: "anchor" },
  { id: 2, label: "Features", to: "/features", type: "anchor" },
  { id: 3, label: "Pricing", to: "/pricing", type: "anchor" },
  { id: 4, label: "About us", to: "/about", type: "anchor" },
  { id: 5, label: "Contact", to: "/contact", type: "anchor" },
];

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

const contactDetails = [
  {
    id: 1,
    icon: AddressIcon,
    text: "123 Maple Street, Springfield, IL, USA",
  },
  {
    id: 2,
    icon: PhoneIcon,
    text: "+1 (650) 555-0198",
    href: "tel:+16505550198",
  },
  {
    id: 3,
    icon: EmailIcon,
    text: "hello@abstractly.com",
    href: "mailto:hello@abstractly.com",
  },
];

const footerLinks = [
  { id: 1, label: "Features", to: "/" },
  { id: 2, label: "Pricing", to: "/" },
  { id: 3, label: "About us", to: "/" },
  { id: 4, label: "Contact", to: "/" },
];

const socialMediaLinks = [
  {
    id: 1,
    label: "Youtube",
    href: "/",
    icon: <YoutubeIcon />,
  },
  {
    id: 2,
    label: "Instagram",
    href: "/",
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    label: "Facebook",
    href: "/",
    icon: <FacebookIcon />,
  },
  {
    id: 4,
    label: "GitHub",
    href: "/",
    icon: <GitHubIcon />,
  },
  {
    id: 5,
    label: "X",
    href: "/",
    icon: <XIcon />,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <title>Features Page</title>
      <div className="page">
        <header className="page-header">
          <Navbar navbarLinks={navbarLinks} logoTo={"/marketing"} />
        </header>
        <div className="page-content">
          <main>
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

            <FeatureSectionImage
              side="right"
              {...featureSectionImageData.right}
            />
            <FeatureSectionImage
              side="left"
              {...featureSectionImageData.left}
            />

            <TestimonialsSection testimonials={testimonials} />

            <FAQSection faqs={faqs} />

            <ContactSectionAPIPage />
          </main>
          <footer>
            <Footer
              footerLinks={footerLinks}
              socialMediaLinks={socialMediaLinks}
            />
          </footer>
        </div>
      </div>
    </>
  );
}
