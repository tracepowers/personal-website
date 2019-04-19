import React, { Component } from 'react';
import {Container, Row, Col, Alert, Table} from 'react-bootstrap';

class CareerPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Container>
        <h1 className='page-header'>Interesting Courses</h1>
        <Row className="justify-content-md-center">
          <div className="react-bs-container-body">
            <Table striped hover>
              <thead>
          				<tr>
            					<th width="8%">Employer</th>
                      <th width="8%">Job Title</th>
                      <th width="8%">Dates</th>
                      <th>Description</th>
          				</tr>
        			</thead>
        			<tbody>
                <tr>
                  <td>BP (Trading Division)</td>
                  <td>Java Developer</td>
                  <td>June 2018 - Present(April 2019 at time of writing)</td>
                  <td>My second rotation at BP is as a Java developer. After BP makes physical energy trades, the trades then go to our operations team who then figure out how to actually transport the physical project from point A to point B. Usually the product is moved using pipelines, barges, or trucks. The operators use a in-house software we call Operators Work Bench (OWB). I am a backend Java developer on OWB, and I create new features and functionalities in the existing suite
                  of applications that the OWB team supports. The role is interesting because although Java was the first programming language I learned, I had never worked with enterprise Java. I have learned a lot about creating, deploying, and maintaining large softwares solutions. Also I now have a firm grasp on AWS products as we use quite a few on our team.</td>
                </tr>
                <tr>
                  <td>BP (Trading Division)</td>
                  <td>Analytics Developer</td>
                  <td>June 2017 - June 2018</td>
                  <td>I joined the commodity trading arm of BP fresh out of college in a two year rotational program. My first year-long rotation was as an developer on the analytics team. As a developer, most of my tasks were focused on creating actionable data visualizations that the analysts and traders could use to make better trades. Most of the dashboards were done in python, and a few were done in R using RShiny to create the dashboards. Another part of the position was being the
                  "scrape master". Analysts and traders were always looking for new data sources that were becoming available such as government energy data or new data vendors. If they found something that they wanted in our databases, it was up to me to figure out how to get it into our DBs. Our team had two offshore members which I oversaw who's fulltime position was to setup basic online scrapes. For more advanced ones I would code them and use python to scrape the websites and then
                  set up cron jobs to pull the data on a regular basis. Also I created some data models using advanced regressions and TensorFlow, but I did this mostly as a side thing because the analysts/traders had their own models and were not interested in trying AI driven solutions.</td>
                </tr>
                <tr>
                  <td>LGS Innovations</td>
                  <td>Network Security Intern</td>
                  <td>Summer 2016</td>
                  <td>LGS Innovations is a small government-contracted security company. While there I worked on a large project with two other interns to simulate a real network and to detect the attacks on the network. We used C in the backend to send packets between a few Raspberry Pis and also to detect all the packets that were being sent. Then we developed a frontend to display the network using Javascript. We used php to connect the frontend and backend, and the final product
                  was a cool network visuzalization where you could send packets and easily create and detect common attack scenarios that exist in networks today.</td>
                </tr>
                <tr>
                  <td>Caterpillar</td>
                  <td>Emerging Technology Intern</td>
                  <td>Fall Semester 2015</td>
                  <td>To stay ahead of competition, Caterpillar is always testing new technologies that could be useful. My job was to research, test and find business value out of new technologies. I worked with a wide array of technologies and languages. At the innovation lab where I work there were mostly student interns and we all worked together on the different projects. Students of all majors were hired to allow for a diverse range of talent.</td>
                </tr>
                <tr>
                  <td>Caterpillar</td>
                  <td>Emerging Technology Intern</td>
                  <td>Summer 2015</td>
                  <td>The emerging technologies group at Caterpillar was responsible for many of the newer technologies that were being put in production at Caterpillar. This included data visualization technologies such as Tableau, and big data technologies such as hadoop. I was put on the data lake project with 2 other interns. On the project, we researched, tested, and evaluated different solutions to problem of data accessibility. Each week, I would meet with companies about their products, or their strategies for finding data in large companies. At the end of the internship, our team presented all of our information as well as our recommendation for a data strategy.</td>
                </tr>
         				<tr>
          					<td>Boy Scouts of America</td>
                    <td>Ranger/Skateboard Instructor</td>
                    <td>Summer 2013/14</td>
                    <td>I spent one summer in New Mexico where I taught Backpacking and Leadership as a Ranger. Then I spent the next summer in West Virginia as a skateboarding instructor at one of the largest skateparks in the country. Both were extremely enjoyable jobs where I learned a lot of soft skills. I worked with scouts age 11-18 and adult scout leaders. I loved these jobs and hope to do one again for a summer in my future.</td>
        				</tr>
        			</tbody>
            </Table>
          </div>
        </Row>
      </Container>
    );
  }
}

export default CareerPage;
