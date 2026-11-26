import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// my components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function Main() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <header className="d-flex justify-content-between border-bottom px-5 p-3 ms-4">
        <h1>OurLogo</h1>  
        <Navbar />
        </header>      
        <div className="container py-4">  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="mt-auto border-top pt-3">
          <p className="text-center">
            <Link to="/" className="text-decoration-none text-muted p-3">Home</Link>
            <Link to="/about" className="text-decoration-none text-muted p-3">About</Link>
            <Link to="/contact" className="text-decoration-none text-muted p-3">Contact</Link>
          </p>
          <p className="text-center small text-muted">&copy;2026 Demo by Anil</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<Main />)