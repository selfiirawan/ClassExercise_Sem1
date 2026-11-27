import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StorageExample from "./examples/StorageExamples.jsx";
import LocalStorageExample from "./examples/LocalStorageExample.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocalStorageExample />
  </StrictMode>,
);
