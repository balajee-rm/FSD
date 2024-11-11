import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Q22 from './Assignment/Q22/First.jsx'
import Q23 from './Assignment/Q23/Parent.jsx'
import Q24 from './Assignment/Q24/Third.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Q24 />
  </StrictMode>,
)
