import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import ProgramForm from './pages/ProgramForm.tsx'
import ProgramList from './pages/ProgramList.tsx'
import { SessionProvider } from './context/SessionContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/form' element={<ProgramForm />} />
            <Route path='/list' element={<ProgramList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  </StrictMode>
)
