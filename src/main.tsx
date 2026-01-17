import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CursorTrail from "./components/CursorTrail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <CursorTrail />
  </StrictMode>,
);
