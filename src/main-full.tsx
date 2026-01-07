import React from 'react';
import ReactDOM from 'react-dom/client';
import FullApp from './FullApp';
import './assets/styles/index.css';
import { validarAccesoMagistral } from './utils/gatekeeper';
import './utils/stressTest'; // Import to register global function

// Se ejecuta antes de renderizar cualquier componente de la FullApp
validarAccesoMagistral();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <FullApp />
  </React.StrictMode>
);
