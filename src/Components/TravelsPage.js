import React, { Component } from 'react';
import {Container, Row, Col, Alert, Image} from 'react-bootstrap';
import visitedCountries from '../Images/visited_countries.png';

class TravelsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Container>
        <h1 className='page-header'>Where I've Travelled</h1>
        <Row className="justify-content-md-center">
          <Alert variant="secondary">
            I love travelling. There are so many things to do when travelling, and learning about other cultures is always interesting. While I was young I travelled around the USA with my family and with my
            Boy Scout troop. When I got to college I decided to study abroad twice, once at KTH in Stockholm, Sweden, and once at NUS in Singapore. While studying I travelled whenever I could find time. It was
            a very enjoyable experience that I hope to contine in the future. I especially loved Singapore, Germany, Japan, and Indonesia. I could see myself living in any of those countries. Below is a map of
            the countries I've been to.
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
