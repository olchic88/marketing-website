import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./ScrollToTop";
import { Suspense } from "react";
import MarketingLandingPage from "./pages/MarketingLandingPage";
import FeaturesPage from "./pages/FeaturesPage";
import AboutUsPage from "./pages/AboutUsPage";
import PricingPage from "./pages/PricingPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import CookieConsent from "./components/sections/CookieConsent/CookieConsent";
import PageLayout from "./layouts/PageLayout";

function App() {
  // throw new Error("Boom"); //
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CookieConsent />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<MarketingLandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
