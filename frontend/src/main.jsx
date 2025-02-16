import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/jankin-videoke-landingpage.css'
import LandingPage from './pages/jankin-videoke-landingpage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
)
