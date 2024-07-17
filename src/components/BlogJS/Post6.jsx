import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "../../assets/styles/pages.css";
import Alana from "./assets/Alana.webp"
const Post6 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="blogPageLayout">
        <Card className="blogCard">
          <Card.Img variant="top" src={Alana} />
          <Card.Body>
            <Card.Title className="blogTitle">
              My Time with the Awesome Version 1 AI Labs Team
            </Card.Title>
            <Card.Subtitle className="blogDate">17/7/2024</Card.Subtitle>
            <Card.Text className="blogText">
              As an Associate Consultant on the Early Careers Pathway with
              Version 1, I am constantly given amazing opportunities to learn
              and grow. As they say, the best way to learn is to jump in at the
              deep end and sink or swim. I love the ethos of my workplace that,
              while certification is valuable, there is truly no better way to
              learn than through hands-on experience. None of my experiences so
              far have been more impactful than my time with the AI Labs team.
              As the innovators within the company, they are at the forefront of
              researching and trialling new advancements in AI.
            </Card.Text>
            <Button
              className="blogReadMoreButton"
              variant="primary"
              onClick={handleShowModal}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Modal
          dialogClassName="custom-modal-dialog"
          show={showModal}
          onHide={handleCloseModal}
        >
          <Modal.Header style={{backgroundColor:'#04bfbf', color:"#d8f2e3", fontFamily: "Handlee"}} closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: "left" }}>
            <img src={Alana} alt="" className="modalImages" />
            <p>
              As an Associate Consultant on the Early Careers Pathway with
              Version 1, I am constantly given amazing opportunities to learn
              and grow. As they say, the best way to learn is to jump in at the
              deep end and sink or swim. I love the ethos of my workplace that,
              while certification is valuable, there is truly no better way to
              learn than through hands-on experience. None of my experiences so
              far have been more impactful than my time with the AI Labs team.
            </p>
            <p>
              As the innovators within the company, they are at the forefront of
              researching and trialling new advancements in AI.{" "}
            </p>
            <p>
              During my experience, I had the chance to develop on the frontend
              and backend of a virtual assistant app, a project for which we are
              developing a proof of value.{" "}
            </p>
            <p>
              This journey not only strengthened my frontend development skills
              but also pushed me out of my comfort zone into the realms of data
              science and AI. I delved into Python coding, explored open-source
              AI models, learnt cognitive search approaches, worked with text
              embeddings, deployed models, automated processes, and contributed
              to creating a product from start to finish. Part of this journey
              included evaluating and comparing models and outputs using cosine
              similarity scores, testing, and making iterative improvements. The
              amount I have learnt in a two-week period is staggering, and I am
              incredibly grateful to the team for their support and patience as
              I navigated a multitude of new concepts.
            </p>
            <h4> Cognitive Search and Preprocessing</h4>

            <p>
              One of the key areas I worked on was improving the preprocessing
              of data for cognitive search.{" "}
            </p>
            <p>This involved:</p>
            <ul style={{fontFamily: "Handlee", margin: "0"}}>
              <li>
                OCR Improvements: Enhancing optical character recognition to
                filter for English-only content and ignore any empty chunks.
              </li>
              <li>
                Sentence Splitting: Implementing better sentence splitting
                techniques, including fixed-size chunks (e.g., 200 words) and
                variable-sized chunks based on punctuation and line endings.
              </li>
              <li>
                Content Overlap: Introducing a 10% content overlap (e.g., 256
                tokens chunk size with 25 tokens overlap) to ensure context
                retention across chunks.
              </li>{" "}
              <li>
                Text Split Skill: Developing skills to split text into pages
                (chunks of multiple sentences) or single sentences.
              </li>
            </ul>
            <h4>Frontend Development</h4>
            <p>
              While more familiar with frontend development, I still had a
              significant learning curve:
            </p>
            <ul style={{fontFamily: "Handlee", margin: "0"}}>
              <li>Technologies Used: React, TypeScript, and Tailwind CSS.</li>
              <li>
                Learning Curve: Transitioning from JavaScript to TypeScript,
                learning Tailwind CSS, and understanding interfaces and context
                in React.{" "}
              </li>
              <li>
                Components Developed: I created two components for the virtual
                assistant and integrated them with the backend API.
              </li>
            </ul>
            <h4>Initial Testing of Backend Responses in Postman</h4>
            <p>
              Before diving into full-scale model evaluations, I performed
              initial testing of backend responses:
            </p>
            <ul style={{fontFamily: "Handlee", margin: "0"}}>
              <li>
                Q&A Spreadsheet: Create a question and ground truth answer
                spreadsheet with Postman Queries ready to go and columns for
                storing results.{" "}
              </li>

              <li>
                Setup: Cloning notebooks, creating compute resources, and
                attaching clusters in Databricks.{" "}
              </li>

              <li>
                Testing: Running serving endpoints, ensuring the Chroma DB
                container was running, and using Postman to test the question
                and answer functionality.
              </li>

              <li>
                Recording Results: Logging the test results in a spreadsheet for
                further analysis.
              </li>
            </ul>
            <h4>Evaluating Models:</h4>
            <p>
              As a team, we evaluated a standard model, a quantised model, and a
              hybrid model. I was responsible for evaluating the quantised
              model.
            </p>
            <p>Here’s a step-by-step overview of our evaluation process:</p>
            <p>
              Creating the Evaluation Script: We developed an evaluation.py
              script to evaluate our models against a JSON file containing 2000
              rows of ground truth answers. Initially, we tested with 20 rows to
              ensure accuracy, then scaled up to the full dataset. The results
              were saved to another JSON file.
            </p>

            <p>
              Cost Reduction Strategy: To minimise costs, we ran the serving
              endpoints in Databricks as a job, the Chroma container in the
              Azure Portal, and the app locally in VS Code. Once the evaluation
              was completed and data was saved, we shut down all cloud
              resources.{" "}
            </p>

            <p>
              Local Data Analysis: The saved JSON file was analysed on local
              machines using Jupyter Notebooks. This allowed us to extract the
              quantised responses for Azure and Chroma, which we compared to the
              ground truth answers.{" "}
            </p>

            <p>
              Embedding Extraction: We extracted embeddings for the answers
              using our evaluation script.
            </p>

            <p>
              Cosine Similarity Calculation: We ran a cosine similarity function
              to compare the ground truth answers with the Azure and Chroma
              quantised, standard, and hybrid answers, collecting similarity
              scores.{" "}
            </p>

            <p>
              Comparison of Models: Finally, we averaged the cosine similarity
              scores to compare the performance of the standard, quantised, and
              hybrid models.{" "}
            </p>

            <h4>Personal Reflections and Key Takeaways </h4>
            <p>
              Adaptability is Key: Being pushed out of my comfort zone into the
              world of AI required a willingness to embrace new challenges and
              adapt quickly with an open mindset.
            </p>

            <p>
              Collaboration Enhances Learning: Working with a supportive team
              accelerated the learning process and made complex concepts more
              approachable.{" "}
            </p>
            <p>
              Hands-On Experience is Invaluable: The practical experience I
              gained in developing, evaluating, and improving models provided me
              with a deeper understanding of AI that cannot be achieved through
              certification alone.
            </p>

            <h4>Conclusion</h4>
            <p>
              My time with the Version 1 AI Labs team has been incredibly
              enriching. The experience not only expanded my technical skill set
              but also gave me a deeper appreciation for the vast potential of
              AI. I am excited to apply these new skills in future projects and
              to continue my journey in the exciting field of artificial
              intelligence.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Post6;