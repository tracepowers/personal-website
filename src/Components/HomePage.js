import React, { Component } from 'react';
import {Container, Row, Col, Alert, Image} from 'react-bootstrap';
import fullPhoto from '../Images/fullPhoto.jpg';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.handleCareerClick = this.handleCareerClick.bind(this);
    this.handleEducationClick = this.handleEducationClick.bind(this);
  }

  handleCareerClick = () => {
    this.props.onSelect('career');
  };

  handleEducationClick = () => {
    this.props.onSelect('education');
  };

  render() {

    return (
      <Container>
        <h1 className='page-header'>The Official Trace Powers Website</h1>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h3>A brief introduction</h3>
            <Alert variant="secondary">My name is Trace Powers. The legends of me are all true, but you will have to meet me to learn the truth
            <br/><br/>
            I am currently working as a software developer in Chicago. My previous job titles have been Ranger, Skateboard Instructor, Innovation Intern, and Networking Intern.
            If you interested in more about my professional life, check out my <a eventKey="career" href="#" onClick={this.handleCareerClick}>Career page</a>
             or my <a href="https://www.linkedin.com/in/trace-powers-045739a7">LinkedIn</a>
             <br/><br/>
             I enjoy learning! I studied at the University of Illinois at Urbana-Champaign, and received a bachelors degree in Computer Science.
             During my bachelors I studied abroad twice. Once at KTH in Stockholm, Sweden, and once in at NUS in Singapore. Since university I have
             taken one coursera course on Machine Learning, and have done a lot of self learning through projects. Check out more on the  <a eventKey="career" href="#" onClick={this.handleEducationClick}>Education page</a>
             <br/><br/>
            In my free time I enjoy skateboarding, video games, travelling, and working on tech projects. This website is my chronicle...
            <br/><br/>
            Feel free to contact me at tracepowers@gmail.com
            </Alert>
          </Col>
          <Col md={4}>
            <Image src={fullPhoto} rounded fluid />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
