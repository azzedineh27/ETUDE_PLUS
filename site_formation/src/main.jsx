import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css"; // Import du fichier global

// ✅ Ajout de GA
const GA_ID = "G-XXXXXXXXXX"; // Remplace par ton ID

const insertGA = () => {
  const script1 = document.createElement("script");
  script1.setAttribute("async", "");
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
  document.head.appendChild(script2);
};

insertGA(); // Appel au démarrage

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);