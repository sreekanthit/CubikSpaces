import { useState } from "react";

import AnnouncementBar from "./components/AnnouncementBar.jsx";
import IntroLoader from "./components/IntroLoader.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Feature from "./components/Feature.jsx";
import Process from "./components/Process.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <IntroLoader
          onComplete={() => setIntroComplete(true)}
        />
      )}

      <AnnouncementBar />

      <main>
        <Hero />
        <Services />
        <Feature />
        <Process />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
}