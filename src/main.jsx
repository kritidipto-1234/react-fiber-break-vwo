import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

window.name='Hellopupeteer'

// const okDiv = document.getElementById('ok');
// const newElement = document.createElement('div');
// newElement.textContent = 'This is a new element inserted before div#ok.';
// okDiv.parentNode.insertBefore(newElement, okDiv.parentNode);

