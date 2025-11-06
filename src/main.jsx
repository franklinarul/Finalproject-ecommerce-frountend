import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Admin from './adminpages/Admin.jsx'
import ScrollToTop from './components/Scorletop.jsx'
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <App />
    </BrowserRouter>
  </StrictMode>

 
)
