import ContactSectionAPIPage from "../components/sections/ContactSection/ContactSectionAPIPage";

import FAQSection from "../components/sections/FAQSection/FAQSection";
import { faqs } from "../components/sections/FAQSection/faqData";

export default function ContactUsPage() {
  return (
    <>
      <title>Abstractly | Contact</title>

      <ContactSectionAPIPage />

      <FAQSection faqs={faqs} enableContactScroll={true} />
    </>
  );
}
