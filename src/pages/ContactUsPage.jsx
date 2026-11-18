import { useScrollToContact } from "../hooks/useScrollToContact";

import PageMeta from "../components/PageMeta/PageMeta";

import ContactSectionAPIPage from "../components/sections/ContactSection/ContactSectionAPIPage";

import FAQSection from "../components/sections/FAQSection/FAQSection";
import { faqs } from "../components/sections/FAQSection/faqData";

export default function ContactUsPage() {
  const { nameInputRef, scrollToContact } = useScrollToContact();

  return (
    <>
      <PageMeta
        title="Abstractly | Contact"
        description="Get in touch with Abstractly. Contact our team with questions, feedback, or inquiries about our abstract images and services."
        url="https://YOUR-DOMAIN.com/contact"
      />

      <ContactSectionAPIPage nameInputRef={nameInputRef} />

      <FAQSection faqs={faqs} onContactClick={scrollToContact} />
    </>
  );
}
