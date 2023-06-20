import React from "react";
import BlogPost from "../../components/Blog";
import blog from "../../blog.json";
import "../../assets/styles/pages.css";

function Blog() {
  return (
    <div className="pageBackground">
    <h1 className="blogPageTitle">Blog</h1>
      <div className="pictureSection">
        <div className="backgroundBlogPicture">
          
        </div>
      </div>
      <a href="https://newsletter-signup-ntrf.onrender.com/" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-lg btn-primary btn-block blogPageButton" type="button">
    Signup to receive blog updates
  </button>
</a>
        
        <p className="blogText">
          Welcome to my blog space. Join me on my journey as I take a massive
          leap into the unknown with a career change from Teacher to Front End
          Web Developer
        </p>
    

      <div className="blogCard">
        {blog.map((blogpost) => (
          <BlogPost key={blogpost.id} blogpost={blogpost} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
