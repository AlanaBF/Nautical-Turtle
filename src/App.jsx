import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AboutMe, Contact, BlogPage, NotFound } from "./pages";
import Header from "./components/Header"
import Footer from "./components/Footer/";
import Posts from "./components/BlogJS/Posts"; // Import the Posts component
import Post1 from "./components/BlogJS/Post1"; // Import the Post1 component
import Post2 from "./components/BlogJS/Post2"; // Import the Post2 component
import Post3 from "./components/BlogJS/Post3"; // Import the Post3 component
import Post4 from "./components/BlogJS/Post4"; // Import the Post4 component
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route exact path="/" element={<Posts />} />
          <Route path="/post1" element={<Post1 />} />
          <Route path="/post2" element={<Post2 />} />
          <Route path="/post3" element={<Post3 />} />
          <Route path="/post4" element={<Post4 />} />
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

