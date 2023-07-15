import React from "react";
import BlogPost from "../../components/Blog";
import blog from "../../blog.json";
import "../../assets/styles/pages.css";

function Blog() {
  return (
    <div className="pageBackground">
      <h1 className="blogPageTitle">Blog</h1>
      <div className="pictureSection">
        <div className="backgroundBlogPicture"></div>
      </div>
      <p className="blogText">
        Welcome to my blog space. Join me as I keep you posted of updates, news,
        upcoming projects and resources.
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
