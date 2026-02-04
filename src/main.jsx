import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './components/Button';
import Profile from './components/profile/Profile';
import Portfolio from './portfolio/Portfolio';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Profile />
    <Portfolio />
  </StrictMode>,
)
