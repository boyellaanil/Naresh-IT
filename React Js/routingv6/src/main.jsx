import { createRoot } from 'react-dom/client';
import { BrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App'
import route from './components/routes/Routes';
import "../global.css"
createRoot(document.getElementById('root')).render(
 <RouterProvider router={route}>
    <App />
  </RouterProvider> 
)