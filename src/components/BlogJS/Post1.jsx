import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap"; // Assuming you're using react-bootstrap for the modal component
import "../../assets/styles/pages.css";

const Post1 = () => {
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
        <Card.Img
          variant="top"
          src="/IMG_7197.jpeg"
        />
        <Card.Body>
          <Card.Title>A period of reflection and goal setting</Card.Title>
          <Card.Subtitle>15/7/2023</Card.Subtitle>
          <Card.Text>
            Embarking on a career change often triggers deep reflection. In my
            first week at the West Midlands Digital Skills Academy with
            Version1, we were challenged to reflect and create goals, nurturing
            a growth mindset. These reflections took me back to my childhood,
            shaped by my parents' involvement in the Royal Air Force (RAF) and
            my love for the Mallory Towers books by Enid Blyton. Those books
            ignited a desire to attend boarding school, a place where routine,
            structure, and freedom intertwined seamlessly. With my parents'
            support and RAF subsidies, I embarked on an incredible adventure
            that left an indelible mark on my life.
          </Card.Text>
          <Button className="blogReadMoreButton" variant="primary" onClick={handleShowModal}>
            Read More
          </Button>
        </Card.Body>
      </Card>
</div>
      <Modal dialogClassName="custom-modal-dialog" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>A period of reflection and goal setting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Embarking on a career change often triggers deep reflection. In my
            first week at the West Midlands Digital Skills Academy with
            Version1, we were challenged to reflect and create goals, nurturing
            a growth mindset. These reflections took me back to my childhood,
            shaped by my parents' involvement in the Royal Air Force (RAF) and
            my love for the Mallory Towers books by Enid Blyton. Those books
            ignited a desire to attend boarding school, a place where routine,
            structure, and freedom intertwined seamlessly. With my parents'
            support and RAF subsidies, I embarked on an incredible adventure
            that left an indelible mark on my life.
          </p>
          <img
            src="/IMG_7200.jpeg"
            alt="Moffats School (AKA Kinlet Hall, nr Bewdley)"
            className="modalImages"
          />
          <p>
            <em>Moffats School (AKA Kinlet Hall, nr Bewdley)</em>
          </p>

          <img
            src="/Redsong.jpg"
            alt="Eventing at Moreton Hall"
            className="modalImages"
          />
          <p>
            <em>Redsong and myself eventing at Moreton Hall, age 12</em>{" "}
          </p>

          <p>
            The boarding school experience not only provided structure and
            routine but also offered the freedom to express myself and be
            accepted for who I was. From making our beds to performing daily
            tasks, such as being a stable hand or managing the boys' yard (girls
            included), we learned responsibility. In my time, we had no central
            heating and when there was a powercut we rode it out! I learnt to be
            resilient and embrace everything. Ponies added an extra touch of
            enchantment, allowing us to ride them bareback—a thrilling and less
            regulated time when health and safety took a backseat.
          </p>
          <img
            src="/IMG_7226.jpeg"
            alt="My first Dormitory"
            className="modalImages"
          />
          <p>
            <em>My first Dorm as a 7 year old (I had the bottom bunk by the window)</em>{" "}
          </p>
          <p>
            Beyond the daily routines, our boarding school nurtured a love for
            learning, sports, and personal development. The school's emphasis on
            soft skills and character-building activities left an enduring
            impact. We engaged in daily silent reading sessions, learned to play
            musical instruments, devoured approved storybooks and fostered a
            love for literature. Moreover, we were encouraged to master public
            speaking through activities such as the English Speaking Board (ESB)
            sessions and orations competitions. I chose to spend 2 weeks of my
            summer holidays with the school learning to sail, camping with
            trickling cold water from a hose the farmer ran to the field.
            Character building! Though initially daunting, these experiences
            equipped me with valuable communication skills that would prove
            invaluable in my later years, including a successful 20-year
            teaching career. Sadly the boarding school has now closed but my
            memories remain, I keep in regular contact with many of the family
            and students and I'm glad I was able to visit with my wife before it
            closed its doors.
          </p>
          <p>
            Reflecting on my journey, it becomes evident that schools should
            place less emphasis on grades and more on cultivating essential soft
            skills. The ability to communicate effectively, think critically,
            and adapt to new situations holds greater significance in our lives
            than the grades we achieve. My own experiences in boarding school
            and later as a teacher have taught me the value of these skills, and
            I believe that fostering them in students can have a transformative
            impact on their lives.
          </p>
          <p>
            While my boarding school years were filled with cherished memories,
            life took some challenging turns once I left that nurturing
            environment. I faced bullying and struggled to come to terms with my
            sexuality. It took time and personal growth to embrace my identity
            fully. However, I never lost sight of my dreams and continued to
            seek new adventures. I became a house parent, teacher and sports
            coach in a boarding school in the New Forest, allowing me to travel
            extensively during breaks, with Australia and Canada becoming some
            of my favourite destinations. Towards the end of this role, I was
            lucky enough to spend my holidays in the Seychelles. I met some
            amazing people and had some incredible experiences. When I reflect
            on my time in the Seychelles, I am filled with deep gratitude for
            these experiences that have shaped my perspective. The unparalleled
            beauty of those islands ignited a profound desire within me to set
            ambitious goals for my future. Among those aspirations will be the
            acquisition of a luxury motor yacht. My determination to turn this
            dream into reality is unwavering, and I’m sure that one day it will
            materialise.
          </p>
          <img
            src="/54.jpg"
            alt="48 hour fishing competition with local seychelloise"
            className="modalImages"
          />
          <p>
            <em>An annual fishing competition I was lucky to be invited to. Pirate watch, sea sickness and the most amazing fish!... oh and a local TV interview!</em>{" "}
          </p>
          <p>
            Following my unforgettable Seychelles adventure, my journey led me
            to Spain, where I embarked on an entirely new chapter of my life.
            Stepping far beyond the boundaries of my comfort zone, I embraced
            the challenge of navigating unfamiliar roads, adapting to driving on
            the opposite side, and embarking on an extraordinary three-day solo
            car journey every holiday to return home. Upon arrival, I discovered
            my accommodation was not yet ready, and I found myself spending my
            first two weeks in the unexpected company of nuns. My first
            challenge was convincing them that I didn't eat meat, only fish. The
            language barrier was a struggle. I failed. 'Jamon' apparently is ok
            for vegetarians! My upbringing made it very difficult to argue with
            a nun 😂. Although unconventional, these experiences played an
            integral role in an incredible adventure that not only restored my
            confidence but also reignited my desire to date again.
          </p>
          <img
            src="/IMG_5322.JPG"
            alt="Xativa, Spain"
            className="modalImages"
          />
          <p>
            <em></em>{" "}
          </p>
          <p>
            It was during this transformative phase of self-discovery that
            destiny intervened, and I crossed paths with the person who would
            become my wife. Together, we continue to embark on remarkable
            adventures, supporting and inspiring one another every step of the
            way.
          </p>
          <p>
            My journey has been a tapestry of diverse experiences, career
            changes, and personal growth. From teaching mathematics to leading
            probation groups and managing community payback programs, to
            fostering children, I continually pushed my boundaries. Settling in
            Cornwall, I had the opportunity to introduce a school farm, develop
            an animal care program, and spearhead the Duke of Edinburgh award
            initiative. It enabled me to write an article on ‘Why Every School
            Should have a Farm’ and really try to inspire, share and give as
            many soft skills and values as I was lucky enough to have in my
            childhood.
          </p>
          <img
            src="/IMG_9493.jpeg"
            alt="The Eco Patch, Brannel School"
            className="modalImages"
          />  <p>
            <em>The Eco Patch, Brannel School</em>
          </p>
              <img
            src="/IMG_4652.jpeg"
            alt="The Eco Patch, Brannel School"
            className="modalImages"
          />
          <p>
            <em>The Eco Patch Classroom, Brannel School</em>
          </p>
        
          <p>
            My discovery of web development has fueled my hunger for greater
            achievements. I’m raising the bar and have set my sights on bigger
            and better goals than ever before. My journey has been marked by
            resilience, self-discovery, and an unwavering pursuit of dreams. As
            I embark on my career change, I’m ready to embrace the next chapter
            of my life's adventures with Version 1.
          </p>
          <img
            src="/IMG_3626.jpeg"
            alt="Me, inside Version1!"
            className="modalImages"
          />
          <p>
            <em>Me, inside Version 1</em>
          </p>
          <p>
            Life's most extraordinary moments often arise from the depths of
            uncertainty, and I'm ready to navigate uncharted waters, both
            literally and figuratively, in pursuit of grander aspirations.
          </p>
          <p>
            Join me as I continue this journey of reflection, growth, and
            setting ambitious goals. Dare to dream big!
          </p>
          <img
            src="/IMG_2281.JPG"
            alt="My Dream"
            className="modalImages"
          />
          <p>
            <em>My Dream</em>
          </p>
          <blockquote>
            <p>
              "Don't be afraid to give up the good to go for the great." - John
              D. Rockefeller
            </p>
            <p>"Dream big and dare to fail." - Norman Vaughan</p>
          </blockquote>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Post1;
