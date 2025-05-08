import { createRoot } from "react-dom/client";
import { router } from "./routes/routes.jsx";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

  // </StrictMode>,
);
