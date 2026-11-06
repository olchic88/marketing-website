import "./notFoundPage.css";
import NotFoundSection from "../components/sections/NotFoundSection/NotFoundSection";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <title>Page Not Found | Abstractly</title>
      <NotFoundSection buttonText="Back to Home" buttonTo="/" />
    </div>
  );
}
