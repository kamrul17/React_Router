import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Contact from "./Contact";
import { Suspense } from "react";
// import About from "./About";
import NavigatedExmPage from "./NavigatedExmPage";

const About = React.lazy(() => import("./About"));
function App() {
  return (
    <>
      <h1>hello</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Suspense>
        <Routes>
          <Route path="/" element={<div>i m home page</div>} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/naviPage" element={<NavigatedExmPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
