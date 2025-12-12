import { createRoot } from "react-dom/client";
import App from "./App";
import "../global.css"
import { RouterProvider } from "react-router-dom";
import route from './components/routes/Route';

createRoot(document.getElementById("root")).render(
    <RouterProvider router={route}>
    <App />
    </RouterProvider>
);