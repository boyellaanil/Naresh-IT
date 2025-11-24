import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MessageProvider from "./components/context/MessageContext.jsx";
import ThemeProvider from "./components/context/theme/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <MessageProvider>
    <App />
  </MessageProvider>
  </ThemeProvider>
  
);
