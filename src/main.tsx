import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import ToDoForm from './pages/ToDoForm.tsx'
import ToDoList from './pages/ToDoList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/form' element={<ToDoForm />} />
          <Route path='/list' element={<ToDoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
