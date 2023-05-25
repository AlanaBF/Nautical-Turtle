import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../assets/styles/components.css"

function BlogPost({ blogpost }) {
  const { name, image, date, postText, blogLink } = blogpost;
  
  return (

    <Card className="blogCardContainer">
      <div>
        <Card.Img className="blogImage" variant="top" src={`${image}`} alt={`Image for ${name}`} />
      </div>
      <Card.Body>
        <Card.Title>
          <h1 className="blogTitle">Blog title: {name}</h1>
          <h1 className="blogDate">Date: {date}</h1>
        </Card.Title>
        <Card.Text>
          <h5>{postText}</h5>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link>
        <Button className="blogButton" href={blogLink} target="_blank">
            <h5 className="blogLinkText">Read Blog</h5>
          </Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BlogPost;
