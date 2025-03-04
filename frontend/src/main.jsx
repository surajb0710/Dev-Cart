import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './output.css';
import App from './App.jsx';
import ShopContextProvider from './context/ShopContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
