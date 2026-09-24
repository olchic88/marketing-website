import HeroSectionSimple from "../components/sections/HeroSectionSimple/HeroSectionSimple";
import prism from "../components/sections/HeroSectionSimple/prism.webp";

import StatisticsSectionAPIPage from "../components/sections/StatisticsSection/StatisticsSectionAPIPage";

import TeamSection from "../components/sections/TeamSection/TeamSection";
import joe from "../components/sections/TeamSection/joe.webp";
import ash from "../components/sections/TeamSection/ash.webp";
import farias from "../components/sections/TeamSection/farias.webp";
import sarah from "../components/sections/TeamSection/sarah.webp";

import ContactSectionAPIPage from "../components/sections/ContactSection/ContactSectionAPIPage";

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

export default function AboutUsPage() {
  return (
    <>
      <title>Abstractly | About Us</title>

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
    </>
  );
}
