import './App.css'
import Navbar from './components/Nav/Navbar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Projects from './components/Projects/Projects'

function App() {
    return (
        <Router>
            <div className="flex w-full h-full flex-col">
                <Navbar />
                <ProgressBar />
                <Projects />
                <Routes></Routes>
            </div>
        </Router>
    )
}

export default App
