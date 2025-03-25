import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Contact from "./Contact";
import About from "./About";
import NavigatedExmPage from "./NavigatedExmPage";

function App() {
  return (
    <>
      <h1>hello</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>i m home page</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/naviPage" element={<NavigatedExmPage />} />
      </Routes>
    </>
  );
}

export default App;
