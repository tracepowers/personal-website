import React, { Component } from 'react';
import {Container, Row, Col, Alert, Image} from 'react-bootstrap';

class TravelsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Container>
        <h1 className='page-header'>About This Site</h1>
        <Row className="justify-content-md-center">
          <Alert variant="secondary">
            This website was created for fun/learning. In college I made a basic html/javascript/css/jquery website for tracepowers.com, but as time went on it became very dated.
            So in Apr 19 I rewrote this to be a single-page react app. It was one of my first times working with react, and it has been a fun project. I am by no means a react master, but
            I am starting to get the hang of it and it's fun. I decided to host this website on an Amazon S3 bucket because it is cheap and I think it is cool that a simple S3 bucket can be
            configured to host a static website. The code for this site is on my github at <a href="https://github.com/tracepowers/personal-website"> this link</a>. My personal
            website is mildly a resume website, so if you are interested in contacting me about an opportunity please email me at tracepowers@gmail.com.
          </Alert>
          <Col md={12}>
            <Image src={visitedCountries}  fluid/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TravelsPage;
