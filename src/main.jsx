import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { ThemeToggleButton } from './components/ThemeToggle';
import {ThemeProvider} from './contexts/ThemeContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<ThemeProvider>
    
    <App />
  </ThemeProvider>
  
  </StrictMode>,
)

