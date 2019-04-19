import React, { Component } from 'react';
import {Container, Row, Col, Alert, Image} from 'react-bootstrap';
import skatePhoto1 from '../Images/20190402_071222.jpg';
import skatePhoto2 from '../Images/20190402_071229.jpg';
import skatePhoto3 from '../Images/20190402_071241.jpg';
import skatePhoto4 from '../Images/20190402_071309.jpg';

class SkateboardPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Container>
        <h1 className='page-header'>Skateboarding</h1>
        <Row className="justify-content-md-center">
          <Alert variant="secondary">
            Skateboarding is my largest hobby at the moment, and I hope to continue as long as I can. Recently I built an electric skateboard and here are some pictures. I loosely followed a design found at 
            <a href="https://www.youtube.com/channel/UC99A60wVHfwNe5xEa3z5xNA/videos"> Oren's Projects</a>. I ordered online parts on Amazon, Ebay, and HobbyKing. I bought the board from my local skate shop Fa Skates.
            I created from the undercarriage using a tuperware container I bought at Target. The whole project cost around $350. I drilled holes through the tuperware and into the board. Originally I thought that
            I would need two tuperware containers, one for the circuit board and one for the batteries. I was pleasently surprised that I could fit everything in one, but when I started riding the board I realized
            that the weight is a bit back heavy now. The board has 3 speeds, and the fastest one is very fast ~20 mph. I enjoyed building this and using it for transporation.
          </Alert>
          <Col md={12}>
            <Image src={skatePhoto1}  fluid/>
          </Col>
          <Col md={12}>
            <Image src={skatePhoto2}  fluid/>
          </Col>
          <Col md={12}>
            <Image src={skatePhoto3}  fluid/>
          </Col>
          <Col md={12}>
            <Image src={skatePhoto4}  fluid/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SkateboardPage;
