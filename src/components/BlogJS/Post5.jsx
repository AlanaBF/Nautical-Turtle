import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "../../assets/styles/pages.css";
import UnityAvatar from "../Avatar/UnityAvatar";
const Post5 = () => {
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
          <UnityAvatar />
          <Card.Body>
            <Card.Title className="blogTitle">
              {" "}
              100 Days of Code Challenge - Part 2: A Journey Down lots of Rabbit
              Holes
            </Card.Title>
            <Card.Subtitle>21/2/2024</Card.Subtitle>
            <Card.Text>
              <p>
                So, I innocently embarked on what I thought would be a simple
                journey to spruce up my portfolio with my recent Javascript30
                course and … an Avatar.{" "}
              </p>
              <p>
                Little did I know, I was about to fall into a rabbit hole so
                deep, even Alice would be impressed!
              </p>
              <p>
                It all started with a Ready Player Me Avatar. "Cool," I thought,
                "this will jazz up my portfolio nicely." Following the GitHub
                instructions, I added it in, thinking I was done...
              </p>
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
          <Modal.Body>
            <UnityAvatar />
            <h1>
              So, I innocently embarked on what I thought would be a simple
              journey to spruce up my portfolio with my recent Javascript30
              course and … an Avatar.{" "}
            </h1>
            <p>
              Little did I know, I was about to fall into a rabbit hole so deep,
              even Alice would be impressed!
            </p>
            <p>
              It all started with a Ready Player Me Avatar. "Cool," I thought,
              "this will jazz up my portfolio nicely." Following the GitHub
              instructions, I added it in, thinking I was done.
            </p>
            <p>Oh, how wrong I was! </p>
            <p>
              Next thing I knew, I stumbled upon the possibility of animating my
              Avatar with an .fbx file. Easy peasy, right? Wrong. Cue an email
              to the support team and a descent into the world of Unity. How
              hard could it be? Let's just say, my optimism quickly turned into
              a series of 😵‍💫🤯😱 moments. After countless YouTube tutorials (big
              thank you to @Dinesh Punni), problem-solving sessions, and time
              spent in the Unity abyss, I finally managed to bring my Avatar to
              life.{" "}
            </p>
            <p>Cue the happy dance!</p>
            <div>
              <iframe
                src="https://giphy.com/embed/EPSFKT1angXDO"
                width="100%"
                height="100%"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              But of course, one rabbit hole always leads to another. Now, I'm
              not just satisfied with an animated Avatar, I wanted to give the
              background some pizzazz too! Ok, step too far for now. Parked it
              and saved for another day. Right now, the priority is figuring out
              how to integrate this masterpiece into my portfolio. More rabbit
              holes ensued, Google searches and finally an npm install of
              Unity-React-WebGL. With determination rivalling that of a marathon
              runner (absolutely not a runner!), I prevailed. With a sense of
              triumph, I hit "npm run dev," and voila! It worked.
            </p>
            <p>
              Style it with a border, add, commit, deploy to GitHub—easy peasy,
              right?
            </p>
            <p>Wrong again. </p>
            <p>Parsing error! </p>{" "}
            <p>
              Arghhhhhh... More rabbit holes, more searching, and finally, a
              solution. Don't gz zip it. Slower, but it works. Cue another happy
              dance, followed by a well-deserved eye break.
            </p>
            <div>
              <iframe
                src="https://giphy.com/embed/14udF3WUwwGMaA"
                width="100%"
                height="100%"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              Through this wild adventure, I've realised a couple of things:
              firstly, I may have a touch of OCD when it comes to completing
              tasks (or am I just stubborn 🤔🤓?). Secondly, problem-solving is
              my superpower—even if it means diving headfirst into countless
              rabbit holes.
            </p>
            <p>
              Of course, I'm not done yet. The warren of rabbit holes I've built
              is still expanding and progress is progress, right? It's hard to
              believe that after two decades of teaching Geography, PE, and
              Maths, I've made a 180-degree turn into the world of coding with
              zero prior knowledge. I used to think websites were magical
              entities that just appeared out of thin air. But now, I've seen
              the sweat, tears, and late-night debugging sessions behind the
              curtain, and I'm hooked. Here's to embracing the chaos and loving
              every minute of it! 🥰
            </p>
            <blockquote>
              <p style={{ color: "var(--aqua-blue)" }}>
                {" "}
                <em>
                  "If You Always Do What You've Always Done, You'll Always Get
                  What You've Always Got."
                </em>{" "}
                - Henry Ford{" "}
              </p>
              <p>
                Think about it. If you want something different out of your life
                you have to make a change and put something different into it.
              </p>
            </blockquote>
            <p>
              Follow me as I navigate my journey into tech and web development.{" "}
              <a
                href="https://github.com/AlanaBF"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github"
                  style={{ fontSize: "2em" }}
                  aria-hidden="true"
                ></i>
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/alanabarrettfrew"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-linkedin"
                  style={{ fontSize: "2em" }}
                  aria-hidden="true"
                ></i>
              </a>
            </p>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: '#04bfbf'}}>
            <Button style={{backgroundColor: '#d8f2e3', border:'none', color:'#0388a6'}} variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Post5;
