import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Services from "./pages/Services";
import OurJourney1 from "./pages/OurJourney1";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FinancialClarity from "./components/FinancialClarity";
import WhatWeHelpYouPlan from "./components/WhatWeHelpYouPlan";
import OurPhilosophy from "./components/OurPhilosophy";
import FeaturedServices from "./components/FeaturedServices";
import ExperienceTrust from "./components/ExperienceTrust";
import OurJourney from "./components/OurJourney";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <FinancialClarity />
            <WhatWeHelpYouPlan />
            <OurPhilosophy />
            <FeaturedServices />
            <ExperienceTrust />
            <OurJourney />
            <ContactCTA />
            <Footer />
          </>
        }
      />

      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/journey" element={<OurJourney1 />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;