import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, Blog, FreelanceDeveloper, FreelanceTutor, NotFound } from "./pages";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/FreelanceDeveloper" element={<FreelanceDeveloper />} />
          <Route path="/FreelanceTutor" element={<FreelanceTutor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;