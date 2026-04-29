import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Guide from './components/Guide.jsx'
import CodeExplorer from './page/CodeExplorer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/codeexplorer" element={<CodeExplorer />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
