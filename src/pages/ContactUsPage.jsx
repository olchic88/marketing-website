import { useScrollToContact } from "../hooks/useScrollToContact";

import ContactSectionAPIPage from "../components/sections/ContactSection/ContactSectionAPIPage";

import FAQSection from "../components/sections/FAQSection/FAQSection";
import { faqs } from "../components/sections/FAQSection/faqData";

export default function ContactUsPage() {
  const { nameInputRef, scrollToContact } = useScrollToContact();

  return (
    <>
      <title>Abstractly | Contact</title>

      <ContactSectionAPIPage nameInputRef={nameInputRef} />

      <FAQSection faqs={faqs} onContactClick={scrollToContact} />
    </>
  );
}
