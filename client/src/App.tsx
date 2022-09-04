import './App.css'
import Navbar from './components/Nav/Navbar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Projects from './components/Projects/Projects'
import Login from './components/Landing/Login'
import Register from './components/Landing/Register'
import { useEffect } from 'react'
import ProtectedRoutes from './components/ProtectedRoutes'

function Home() {
    return (
        <>
            <Navbar />
            <ProgressBar />
            <Projects />
        </>
    )
}

function App() {
    const hasJwt = () => {
        let flag = false

        localStorage.getItem('token') ? (flag = true) : (flag = false)
        return flag
    }
    return (
        <Router>
            <div className="flex w-full h-full flex-col">
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
