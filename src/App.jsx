import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import OurJourneyPage from "./pages/OurJourneyPage";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";
import FinancialClarity from "./components/FinancialClarity";
import WhatWeHelpYouPlan from "./components/WhatWeHelpYouPlan";
import OurPhilosophy from "./components/OurPhilosophy";
import FeaturedServices from "./components/FeaturedServices";
import ExperienceTrust from "./components/ExperienceTrust";
import OurJourney from "./components/OurJourney";
import ContactCTA from "./components/ContactCTA";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FinancialClarity />
              <WhatWeHelpYouPlan />
              <OurPhilosophy />
              <FeaturedServices />
              <ExperienceTrust />
              <OurJourney />
              <ContactCTA />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/journey" element={<OurJourneyPage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;