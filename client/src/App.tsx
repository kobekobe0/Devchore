import './App.css'
import Navbar from './components/Nav/Navbar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Projects from './components/Projects/Projects'
import Login from './components/Landing/Login'
import Register from './components/Landing/Register'

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
    return (
        <Router>
            <div className="flex w-full h-full flex-col">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
