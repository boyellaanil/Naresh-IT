import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MessageProvider from "./components/context/MessageContext.jsx";

createRoot(document.getElementById("root")).render(
  <MessageProvider>
    <App />
  </MessageProvider>
);
