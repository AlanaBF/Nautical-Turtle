import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, ProfessionalProjects, ProjectGallery, CollaborativeProjects, Blog, NotFound, GamesGallery } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
          <Route path="/ProfessionalProjects" element={<ProfessionalProjects />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/CollaborativeProjects" element={<CollaborativeProjects />} />
          <Route path="/GamesGallery" element={<GamesGallery />} />
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