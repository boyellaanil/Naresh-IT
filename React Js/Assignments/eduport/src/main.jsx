import { createRoot } from "react-dom/client";
import App from "./App";
import "../global.css";
import { RouterProvider } from "react-router-dom";
import route from "./components/routes/Route";
import AuthProvider from "./components/context/AuthContext";
import CousreProvider from "./components/context/CourseContext";
import TrainerProvider from "./components/context/TrainerContext";

createRoot(document.getElementById("root")).render(
  <TrainerProvider>
    <CousreProvider>
      <AuthProvider>
        <RouterProvider router={route}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </CousreProvider>
  </TrainerProvider>
);
