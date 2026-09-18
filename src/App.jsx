import Navbar from "./components/Navbar";
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
    </>
  );
}

export default App;