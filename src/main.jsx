import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.tsx'
import Credits from "./pages/Credits.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <div className="sticky top-0 z-50 bg-white dark:bg-[#0E061B] shadow-md">
                <Header />
            </div>
            <div className="min-h-screen w-screen dark:bg-[#0E061B] dark:text-slate-50">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path={"/credits"} element={<Credits />} />
                </Routes>
            </div>
        </Router>
    </StrictMode>
);