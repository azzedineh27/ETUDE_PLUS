import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Formules from "./components/Formules";
import Contact from "./components/Contact";
import Avis from "./components/Avis";
import FAQ from "./components/FAQ";
import EtudePlus from "./components/EtudePlus"; 
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";

function App() {
  useEffect(() => {
    // Vérifiez si l'outil Google Analytics est disponible
    if (window.gtag) {
      // Configuration de l'événement Google Analytics (session_duration)
      const sessionStartTime = localStorage.getItem("sessionStartTime");
      if (!sessionStartTime) {
        localStorage.setItem("sessionStartTime", Date.now());
      }

      return () => {
        // Enregistrer la durée de la session quand le composant se démonte
        const sessionStartTime = localStorage.getItem("sessionStartTime");
        if (sessionStartTime) {
          const sessionDuration = Date.now() - parseInt(sessionStartTime, 10);
          localStorage.setItem("sessionDuration", sessionDuration);

          // Envoi de la durée de la session à Google Analytics
          gtag('event', 'session_duration', {
            'event_category': 'engagement',
            'event_label': 'page_visit',
            'value': sessionDuration / 1000, // Convertir en secondes
          });
        }
      };
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Accueil />
      <Formules />
      <Contact />
      <Avis />
      <FAQ />
      <EtudePlus />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
