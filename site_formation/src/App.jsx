import React from "react";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Formules from "./components/Formules";
import Contact from "./components/Contact";
import Avis from "./components/Avis";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";

function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <Formules />
      <Contact />
      <Avis />
      <FAQ />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
