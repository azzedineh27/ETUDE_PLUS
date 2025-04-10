import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import "../i18n";

// Lazy load des sections non critiques
const Formules = lazy(() => import("./components/Formules"));
const Avis = lazy(() => import("./components/Avis"));
const FAQ = lazy(() => import("./components/FAQ"));
const EtudePlus = lazy(() => import("./components/EtudePlus"));

function App() {
  useEffect(() => {
    if (window.gtag) {
      const sessionStartTime = localStorage.getItem("sessionStartTime");
      if (!sessionStartTime) {
        localStorage.setItem("sessionStartTime", Date.now());
      }

      return () => {
        const sessionStartTime = localStorage.getItem("sessionStartTime");
        if (sessionStartTime) {
          const sessionDuration = Date.now() - parseInt(sessionStartTime, 10);
          localStorage.setItem("sessionDuration", sessionDuration);

          gtag('event', 'session_duration', {
            event_category: 'engagement',
            event_label: 'page_visit',
            value: sessionDuration / 1000,
          });
        }
      };
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Accueil />
      <Contact />

      {/* Lazy loaded sections */}
      <Suspense fallback={<div>Chargement...</div>}>
        <Formules />
        <Avis />
        <FAQ />
        <EtudePlus />
      </Suspense>

      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
