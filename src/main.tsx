import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import './custom.css'
import AppRoutes from './routes/index.tsx'
import AppProvider from './providers/index.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
    {/* <PropertyDetail /> */}
    <AppRoutes />
    </AppProvider>
  </StrictMode>,
)
