import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "../../assets/styles/pages.css";
import WhackaMole from "/Whack-a-Mole.png";
const Post4 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="pageBackground">
      <div className="blogPageLayout">
        <Card className="blogCard">
          <Card.Img variant="top" src={WhackaMole} />
          <Card.Body>
            <Card.Title>
              {" "}
              100 Days of Code Challenge - Part 1: 30 days of Vanilla JavaScript
            </Card.Title>
            <Card.Subtitle>7/2/2024</Card.Subtitle>
            <Card.Text>
              🚀 I've Just completed the JavaScript30 course by Wes Bos and I'm
              excited to share my experience! 🚀
              <br></br>
              As part of 100 days of code challenge 2024 with @WomenWhoCode, I
              have just completed my 30 days of JavaScript challenge. If you're
              looking to level up your JavaScript skills in a practical and
              engaging way, look no further than JavaScript30 by @WesBos. This
              course is an absolute game-changer!
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
            <Modal.Title>
              {" "}
              100 Days of Code Challenge - Part 1: 30 days of Vanilla JavaScript
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>
              🚀 I've Just completed the JavaScript30 course by Wes Bos and I'm
              excited to share my experience! 🚀{" "}
            </h1>
            <p>
              If you're looking to level up your JavaScript skills in a
              practical and engaging way, look no further than JavaScript30 by
              @WesBos. This course is an absolute game-changer!
            </p>
            <p>
              🌟 Throughout the 30-day journey, Wes Bos takes you on a hands-on
              adventure, building 30 real-life projects using nothing but
              Vanilla JavaScript. From drum kits to clock widgets, each project
              is designed to teach you fundamental JavaScript concepts while
              also honing your coding skills. What sets this course apart is Wes
              Bos's teaching style. His clear explanations, insightful tips, and
              encouraging demeanor make learning JavaScript not only accessible
              but super enjoyable. Plus, the course is completely free! 🎉
            </p>

            <p>
              This is my repo for the course material.{" "}
              <a
                href="https://github.com/AlanaBF/30DaysJavaScriptChallenge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out here:{" "}
                <button className="btn btn-info">GitHub Repo</button>
              </a>
              <br></br>
              <br></br>The apps I share below are separate repos with
              adjustments to some of the code and are also deployed so you can
              view them.
            </p>

            <p>
              Personally, I found myself challenged in the best possible way,
              pushing my boundaries and expanding my understanding of JavaScript
              with each project. And the best part? I walked away with a
              portfolio of projects to showcase my newfound skills.{" "}
            </p>
            <p>
              Many of these are in their infancy or the same code as from the
              course and need A LOT of further development to personalise them.
              However I'm pleased with my achievements so far and wanted to show
              what you can learn in a month.
            </p>
            <p>Here are some of my favourites:</p>
            {/* Example 1 */}
            <h4>Doodle Yourself Happy</h4>
            <img
              src="/Art-App.png"
              alt="Digital Etch-a-Sketch"
              className="modalImages"
            />
            <br></br>
            <p>
              <a
                href="https://alanabf.github.io/art-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try it here:{" "}
                <button className="btn btn-info">Doodle Yourself Happy</button>
              </a>
            </p>
            <br></br>
            <br></br>
            <p>
              <em>
                A remodel of the super cool Etch-a-Sketch game. Great for
                doodling yourself happy.
              </em>{" "}
            </p>
            {/* Example 2 */}
            <h4>Whack-a-Mole</h4>
            <img
              src="/Whack-a-Mole.png"
              alt="Whack-a-Mole game"
              className="modalImages"
            />
            <br></br>
            <p>
              <a
                href="https://alanabf.github.io/whack-a-mole/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try it here:{" "}
                <button className="btn btn-info">Whack-a-Mole</button>
              </a>
            </p>
            <br></br>
            <br></br>
            <p>
              <em>
                Whack-a-Mole. Super quick moles. Not yet mobile responsive. This
                is one of the apps that I will make touch screen/mobile useable
                and also add difficulty levels, top scores, leaderboard etc. I
                also want to turn it into a React app. Looking forward to that
                being one of my next challenges.
              </em>{" "}
            </p>
            {/* Example 3 */}
            <p>
              I also really enjoyed the challenges around voice synthesis, web
              cam fun, custom video player, speech detection and geolocation. In
              fact I loved the whole lot but those in particular have sparked a
              whole wave of ideas and inspiration for new apps! Here is a taster
              of them in Vanilla JavaScript form as taught on JavaScript30 with
              Wes Bos. Watch this space for my extensions for them!
            </p>
            {/* Voice Synthesis */}
            <div>
              <h4>Voice Synthesis</h4>
              <img
                src="/SpeechSynthesis.png"
                alt="Speech Synthesis Screenshot"
                className="modalImages"
              />
              <br></br>
              <p>
                <a
                  href="https://alanabf.github.io/Speech-Synthesiser/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it here:{" "}
                  <button className="btn btn-info">The Voiceinator</button>
                </a>
              </p>
              <br></br>
              <br></br>
              <p>
                <em>
                  A speech synthesis app. Change the name and voice, change the
                  pitch and change the speed at which the voice speaks. Have
                  some fun and give it any text you like. Just replace the I
                  love JavaScript text.
                </em>{" "}
              </p>
            </div>
            {/* Web Cam Fun */}
            <div>
              <h4>Web Cam Fun</h4>
              <img
                src="/WebcamFun.png"
                alt="Webcam screen shot"
                className="modalImages"
              />
              <br></br>
              <p>
                <a
                  href="https://alanabf.github.io/Webcam-Fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it here:{" "}
                  <button className="btn btn-info">Webcam Fun</button>
                </a>
              </p>
              <br></br>
              <br></br>
              <p>
                <em>
                  A webcam with a take photo button. If you like the photo,
                  click it and it will download. This is currently a very simple
                  app but there are plenty of improvements. For example buttons
                  to switch between each of the effects. Currently this is a
                  manual process where you need to go into the code itself to
                  change the effect.{" "}
                </em>{" "}
              </p>
            </div>

            {/* Custom Video Player */}
            <div>
              <h4>Custom Video Player</h4>
              <img
                src="/CustomVideoPlayer.png"
                alt="video player screenshot"
                className="modalImages"
              />
              <br></br>
              <p>
                <a
                  href="https://alanabf.github.io/Custom-Video-Player/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it here:{" "}
                  <button className="btn btn-info">Custom Video Player</button>
                </a>
              </p>
              <br></br>
              <br></br>
              <p>
                <em>
                  A custom video player that allows me to design my own volume
                  controls and speed of play back and control of the video on
                  click.
                </em>{" "}
              </p>
            </div>

            {/* Speech Detection */}
            <div>
              <h4>Speech Detector</h4>
              <img
                src="/SpeechDetector.png"
                alt="speech detector screenshot"
                className="modalImages"
              />
              <br></br>
              <p>
                <a
                  href="https://alanabf.github.io/Speech-Detection/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it here:{" "}
                  <button className="btn btn-info">Speech Detector</button>
                </a>
              </p>
              <br></br>
              <br></br>
              <p>
                <em>
                  A speech detector that will note down everything you say.
                  There are some current pitfalls with this in that it doesnt
                  turn off unless you close the window, however this is another
                  app which I would like to further develop in the future. Make
                  sure you allow the microphone access. Open the console to see
                  the transcript at present. Future developments will allow the
                  speech detector to be switched on and off. I would also like
                  to include a way to save the transcript.
                </em>{" "}
              </p>
            </div>

            {/* Geolocation */}
            <div>
              <h4>Geolocator</h4>
              <img
                src="/Geolocator.png"
                alt="Geolocation screenshot"
                className="modalImages"
              />
              <br></br>
              <p>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Try it here:{" "}
                  <button className="btn btn-info">Geolocator</button>
                </a>
              </p>
              <br></br>
              <br></br>
              <p>
                <em>
                  This is a geolocator, that uses your location to detect speed
                  and current location. It only works in the console at the
                  moment. This is an app I definitely have lots of ideas for.
                  Having a map and plotting location and routes, and speed.
                  There are so many possibilities with this one.
                </em>{" "}
              </p>
            </div>

            <p>
              Whether you're a beginner looking to dive into JavaScript or a
              seasoned developer wanting to sharpen your skills, I highly
              recommend JavaScript30.{" "}
            </p>
            <p>
              Huge shoutout to @WesBos for creating such an incredible resource!
              🙌{" "}
            </p>
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

export default Post4;
