import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../assets/images/palm-tree.jpeg';
import '../../assets/styles/pages.css';


const NotFound = () => {
  return (
    <Container fluid className='notFoundPageContainer'>
      <Container className='notFoundPageInner'>
        <div className='notFoundPageContent'>
          <div className='notFoundPageText'>
            <p>Oops...The page seems to have gone on holiday</p>
            <span>404</span>
            <p>Page Not Found</p>
            <Link to='/'>Go To Home Page</Link>
          </div>
          <div className='notFoundPageImage'>
            <img className='bug404' src={error} alt='Palm tree' />
          </div>
          
        </div>
      </Container>
    </Container>
  );
};

export default NotFound;
