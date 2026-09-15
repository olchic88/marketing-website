import "../layouts/PageLayout";

import Navbar from "../components/Navbar/Navbar";

import HeroSectionSimple from "../components/sections/HeroSectionSimple/HeroSectionSimple";
import prism from "../components/sections/HeroSectionSimple/prism.webp";

import ContactSectionAPIPage from "../components/sections/ContactSection/ContactSectionAPIPage";

import Footer from "../components/Footer/Footer";

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

import StatisticsSectionAPIPage from "../components/sections/StatisticsSection/StatisticsSectionAPIPage";

import TeamSection from "../components/sections/TeamSection/TeamSection";
import joe from "../components/sections/TeamSection/joe.webp";
import ash from "../components/sections/TeamSection/ash.webp";
import farias from "../components/sections/TeamSection/farias.webp";
import sarah from "../components/sections/TeamSection/sarah.webp";

const navbarLinks = [
  { id: 1, label: "Home", to: "/" },
  { id: 2, label: "Features", to: "/features" },
  { id: 3, label: "Pricing", to: "/pricing" },
  { id: 4, label: "About us", to: "/about" },
  { id: 5, label: "Contact", to: "/contact" },
];

const members = [
  {
    id: 1,
    img: joe,
    name: "Joe Jackson",
    designation: "Founder & CEO",
    description:
      "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
  },
  {
    id: 2,
    img: ash,
    name: "Ash Karter",
    designation: "Founder & CFO",
    description:
      "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
  },
  {
    id: 3,
    img: farias,
    name: "Farias Amed",
    designation: "Front End AI Engineer",
    description:
      "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
  },
  {
    id: 4,
    img: sarah,
    name: "Sarah Haust",
    designation: "Dev Ops",
    description:
      "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
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

export default function AboutUsPage() {
  return (
    <>
      <title>About Us Page</title>
      <div className="page">
        <header className="page-header">
          <Navbar navbarLinks={navbarLinks} logoTo={"/marketing"} />
        </header>
        <div className="page-content">
          <main>
            <HeroSectionSimple
              title="From a tiny desk to the entire world"
              description="As a lean, passionate team, we've made something that most would think is impossible - premium abstract images for free and for all."
              src={prism}
              alt="Colorful abstract geometric shapes"
              width={696}
              height={526}
              primaryButtonText="See pricing"
              primaryButtonTo="/pricing"
              secondaryButtonText="Features"
              secondaryButtonTo="/features"
            />

            <StatisticsSectionAPIPage />

            <TeamSection members={members} />

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
