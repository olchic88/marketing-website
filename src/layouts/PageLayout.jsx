import "./pageLayout.css";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  GitHubIcon,
  XIcon,
} from "../components/icons";

const navbarLinks = [
  { id: 1, label: "Home", to: "/" },
  { id: 2, label: "Features", to: "/features" },
  { id: 3, label: "Pricing", to: "/pricing" },
  { id: 4, label: "About us", to: "/about" },
  { id: 5, label: "Contact", to: "/contact" },
];

const footerLinks = [
  { id: 1, label: "Features", to: "/features" },
  { id: 2, label: "Pricing", to: "/pricing" },
  { id: 3, label: "About us", to: "/about" },
  { id: 4, label: "Contact", to: "/contact" },
];

const socialMediaLinks = [
  {
    id: 1,
    label: "Youtube",
    href: "#",
    icon: <YoutubeIcon />,
  },
  {
    id: 2,
    label: "Instagram",
    href: "#",
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    label: "Facebook",
    href: "#",
    icon: <FacebookIcon />,
  },
  {
    id: 4,
    label: "GitHub",
    href: "#",
    icon: <GitHubIcon />,
  },
  {
    id: 5,
    label: "X",
    href: "#",
    icon: <XIcon />,
  },
];

export default function PageLayout() {
  return (
    <div className="page">
      <header className="page-header">
        <Navbar navbarLinks={navbarLinks} logoTo="/"></Navbar>
      </header>

      <div className="page-content">
        <main>
          <Outlet />
        </main>

        <Footer
          footerLinks={footerLinks}
          socialMediaLinks={socialMediaLinks}
        ></Footer>
      </div>
    </div>
  );
}
