import React, { Component } from 'react';
import {Container, Row, Col, Alert, Image} from 'react-bootstrap';
import skateboarding from '../Images/skateboarding.jpg';
import snowboarding from '../Images/snowboarding.jpg';
import wakeboarding from '../Images/Wakeboarding.jpg';
import pingpong from '../Images/pingPong.jpg';
import overwatch from '../Images/overwatch.jpg';
import chicagobears from '../Images/chicagoBears.png';
import superSmashBros from '../Images/superSmashBros.jpg';
import ImageGallery from 'react-image-gallery';

class HobbiesPage extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {

    const images = [
      {
        original: skateboarding
      },
      {
        original: snowboarding
      },
      {
        original: wakeboarding
      },
      {
        original: pingpong
      },
      {
        original: overwatch
      },
      {
        original: chicagobears
      },
      {
        original: superSmashBros
      }
    ]

    return (
      <Container>
        <h1 className='page-header'>Hobbys</h1>
        <Row className="justify-content-md-center">
          <Alert variant="secondary">
            I have many hobbies, but I don't think writing about them would be interesting, so I'm just putting some images of them.
          </Alert>
          <Col md={12}>
            <div className="react-bs-container-body">
              <ImageGallery items={images} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HobbiesPage;
