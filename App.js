import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Nav';
import Home from './Components/Hom';
import About from './Components/Abou';
import Contact from './Components/Contact';
import './App.css';
function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/abou" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
