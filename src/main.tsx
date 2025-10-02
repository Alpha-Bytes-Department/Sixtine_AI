import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/router.tsx'
import { StatusProvider } from './providers/StatusProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StatusProvider>
      <RouterProvider router={router}/>
    </StatusProvider>
  </StrictMode>
)
