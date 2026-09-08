import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense } from "react";
import MarketingLandingPage from "./pages/MarketingLandingPage";

function App() {
  // throw new Error("Boom"); //
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<MarketingLandingPage />} />
          <Route path="*" element={<h1>This page was not found.</h1>} />
          {/* or the <NotFound /> component */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
