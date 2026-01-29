import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/accessibility.css'

console.log('Starting React app...');

try {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  console.log('React app rendered successfully');
} catch (error) {
  console.error('Error rendering React app:', error);
  document.getElementById('root').innerHTML = `
    <div style="padding: 20px; color: red; font-family: monospace;">
      <h2>React Application Error</h2>
      <p><strong>Error:</strong> ${error.message}</p>
      <p><strong>Stack:</strong></p>
      <pre>${error.stack}</pre>
    </div>
  `;
}
