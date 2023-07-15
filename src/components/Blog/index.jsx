import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../assets/styles/components.css";

function BlogPost({ blogpost }) {
  const { name, image, date, postText, blogLink } = blogpost;

  return (
    <Card className="blogCardContainer">
      <div>
        <Card.Img className="blogImage" variant="top" src={`${image}`} alt={`Image for ${name}`} />
      </div>
      <Card.Body className="blogCardBody">
        <Card.Title>
          <h2 className="blogTitle">Blog title: {name}</h2>
          <h3 className="blogDate">Date: {date}</h3>
        </Card.Title>
        <Card.Text>
          <span>{postText}</span>
        </Card.Text>
      </Card.Body>
      <Card.Body className="blogCardBody">
        <Button className="blogButton" href={blogLink} target="_blank">
          <span className="blogLinkText">Read Blog</span>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogPost;

