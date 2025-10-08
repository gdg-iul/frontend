import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// CHANGED: Casing from "./Styles/index.css" to "./styles/index.css"
import "./styles/index.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

