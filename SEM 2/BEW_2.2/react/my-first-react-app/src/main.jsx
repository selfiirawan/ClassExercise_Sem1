import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Hobbies from "./Hobbies.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AboutMe />
    <Contact />
    <Hobbies />
  </StrictMode>,
);
