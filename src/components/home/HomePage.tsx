"use client";

import React from "react";
import Hero from "./premium/Hero";
import CapabilityStrip from "./premium/CapabilityStrip";
import Services from "./premium/Services";
import SelectedWork from "./premium/SelectedWork";
import ProblemSolution from "./premium/ProblemSolution";
import Process from "./premium/Process";
import Principles from "./premium/Principles";
import ContactCTA from "./premium/ContactCTA";
import HomeContact from "./premium/HomeContact";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "devmola",
  alternateName: "devmola",
  url: "https://devmola.com",
  logo: "https://devmola.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-370-5614842",
    contactType: "Customer Support",
    areaServed: "PK",
    availableLanguage: ["English", "Urdu"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://devmola.com",
  name: "DevMola",
};

const HomePage = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div className="min-h-screen bg-[var(--bg)]">
        <Hero />
        <CapabilityStrip />
        <Services />
        <SelectedWork />
        <ProblemSolution />
        <Process />
        <Principles />
        {children}
        <ContactCTA />
        <HomeContact />
      </div>
    </>
  );
};

export default HomePage;
