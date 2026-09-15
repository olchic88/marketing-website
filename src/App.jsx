import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense } from "react";
import MarketingLandingPage from "./pages/MarketingLandingPage";
import FeaturesPage from "./pages/FeaturesPage";
import AboutUsPage from "./pages/AboutUsPage";
import PricingPage from "./pages/PricingPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  // throw new Error("Boom"); //
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<MarketingLandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactUsPage/>} />

          <Route path="*" element={<h1>This page was not found.</h1>} />
          {/* or the <NotFound /> component */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
