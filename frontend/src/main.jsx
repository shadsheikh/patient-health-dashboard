import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/tailwind.output.css";
import { Windmill } from "@windmill/react-ui";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense>
      <Windmill usePreferences>
        <App />
      </Windmill>
    </Suspense>
  </React.StrictMode>
);
