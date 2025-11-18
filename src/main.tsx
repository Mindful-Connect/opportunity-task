import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Ensure this is 'react-router-dom'

import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import ToDoForm from "./pages/ToDoForm.tsx";
import ToDoList from "./pages/ToDoList.tsx";
import { SessionProvider } from "./context/SessionContext"; // 1. Import the provider

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 2. Place SessionProvider outside of BrowserRouter */}
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/form" element={<ToDoForm />} />
            <Route path="/list" element={<ToDoList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  </StrictMode>
);
