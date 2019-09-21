import React from 'react';
import {Container, Row, Table} from 'react-bootstrap';

class EducationPage extends React.Component {

  render() {

    return (
      <Container>
        <h1 className='page-header'>Interesting Courses</h1>
        <Row className="justify-content-md-center">
          <div className="react-bs-container-body">
            <Table striped hover >
              <thead>
          				<tr>
            					<th width="200">Course</th>
            					<th>Description/What I learned</th>
            					<th width="100">Link</th>
          				</tr>
        			</thead>
        			<tbody>
         				<tr>
            					<td>CS 225 - Data Structures</td>
            					<td>Taught in C++, I learned about the main data structures that are used today. Lists, stacks/queues, trees, maps, and graphs are some of the most important structures that I was taught. Object-oriented programming was a big part of the class, as I learned about useful real world applications such as object manipulation with trees. Basic algorithms such as breadth/depth first searches were taught. I really enjoyed this class, and the C++ knowledge definitely comes in handy.</td>
            					<td><a href="https://courses.engr.illinois.edu/cs225/">CS 225</a></td>
          				</tr>
          				<tr>
            					<td>CS 233 - Computer Architecture</td>
            					<td>This course made me appreciate the high level languages we use today. In this class I first learned verilog, a language for writing circuits. Using verilog, I learned how computers run today, with multi-level pipeling and caches. Also, I learned MIPS, one of the main assembly languages used today. I enjoyed the class, and writing MIPS was easy once I got the hang of it. I also learned about prefetching and vectorizing to speed up code, which was very interesting.</td>
            					<td><a href="https://wiki.cites.illinois.edu/wiki/pages/viewpage.action?title=Home&spaceKey=cs233sp15">CS 233</a></td>
          				</tr>
          				<tr>
            					<td>CS 241 - Systems Programming</td>
            					<td>Currently, this has been the most useful class I have taken. The class began with learning C, and how to make simple file explorers, text editors, and my own version of malloc. Then, I learned about parallel programming, through both process&#39; and pthreads. I had to create programs that would be tested for speed against the rest of the class. Streaming sort and mapreduce were some problems that I had to create quick and smart solutions to. Finally, I learned about the internet. I learned how to connect to the internet and make my own servers all in C. Learning all the protocols and levels of abstraction has helped me immensely. </td>
            					<td><a href="https://courses.engr.illinois.edu/cs241/">CS 241</a></td>
          				</tr>
          				<tr>
            					<td>CS 357 - Numerical Analysis</td>
            					<td>Linear algebra plays a major part in computer science, and this class taught me how to use it. Taught in Python, I learned how many seemingly advanced calculations are done through simple methods. Newton&#39;s method, power iteration, and singular value decomposition were just some of the algorithms that I learned. The class also extensively went over floating point. Some of the applications I learned were finding the closest matching sub-image in a large image, testing if an image is a face, and ray tracing. This class interested me, and I learned a lot, but I do not really want to focus on graphics.</td>
            					<td><a href="https://relate.cs.illinois.edu/course/cs357-s15/">CS 357</a></td>
          				</tr>
          				<tr>
            					<td>CS 465 - User Interface Design</td>
            					<td>This class revolved around doing one project in a small group. Our idea was a crowdsourced playlist website, where you can share and create playlists with friends or strangers. We called it NowPlaying, and you can check it out by clicking on the link(if it is still up). We created the user interface on that site as well as tested it with many prototypes. We conducted research about existing solutions, and did user testing when it was complete. The interface in the site is complete, but the website is not fully functional, because we did not focus on that in the class. I enjoyed putting the website together in a group, and the testing and prototyping was a good experience.</td>
            					<td><a href="http://nowplaying.web.engr.illinois.edu/">NowPlaying</a></td>
          				</tr>
          				<tr>
            					<td>CS 498 - Probability in CS</td>
            					<td>This was mostly a statistics class, but I also learned some interesting computer science. In the class, you could choose between working with matlab or R, and I chose R, because I heard that it was overall stronger. I learned about advanced statistics that could be computed easily in R. Also, many times the professor gave us large data sets to work with. At first these were difficult and I tried to use excel to format, but by the end of the class, I used R for everything. The one really interesting thing we did in the class was create a classifier. We took a huge amount of multivariable data, and used it to train a classifier to classify new data that came in. To do this, we used clustering and the eigenvectors to focus mostly on the variables with the most variation. This let us create classifiers relatively fast without problems.</td>
            					<td><a href="http://luthuli.cs.uiuc.edu/~daf/courses/Probcourse/Probcourse-2015/498-home.html">CS 498</a></td>
          				</tr>
                  <tr>
            					<td>CS 498 - Intro to Data Science</td>
            					<td>This course went over the full spectrum of data science as both a science and a profession. As a class we had discussions about where/if data science fit into science as a whole, and what kind of scientific process exists for data science. We worked mostly in python on interesting data sets to create models and visualizations to understand the data. I learned very fast that the largest challenge for modern data scientists is cleaning/fixing data, and that
                      modelling data is usually one of the least time consuming parts.</td>
            					<td><a href="https://ischool.illinois.edu/degrees-programs/courses/is457">CS 498</a></td>
          				</tr>
                  <tr>
            					<td>CS 498 - Virtual Reality</td>
            					<td>Taught by two of the first employees of Oculus, this course was very interesting, but not something I see myself going into. The course was focused on creating programs for the oculus. The only programming for the course was some C# in Unity and it was very similar to the computer graphics course I had taken in Sweden. The projects were fun, but they were limited by the graphics models we used. Also, I learned a lot about the human eye and lenses and the physics
                      of having a screen so close to a person's eye, which was interesting.</td>
            					<td><a href="https://courses.engr.illinois.edu/cs498vr3/fa2018/">CS 498</a></td>
          				</tr>
                  <tr>
            					<td>PHYS 214 - Quantum Physics</td>
            					<td>As an engineering student, I was required to take 3 physics courses, and I took quantum as my last one. It was a mind-blowing class. The math of it was similar to other physics courses I had taken prior, but the concepts were much more interesting. Mostly the concept of the world being truly random when at a quantum level. I never imagined such a possibility and it excites me for the future knowing that there are discoveries that are so unnatural.</td>
            					<td><a href="https://courses.physics.illinois.edu/phys214/sp2019/">PHYS 214</a></td>
          				</tr>
                  <tr>
            					<td>DD2432 Artificial Neural Networks and Other Learning Systems</td>
            					<td>Taken at KTH in Sweden, this class was extremely interesting and gave me an exciting intro into AI. The course was mostly focused on ANNs which I found extremely cool. The programming was done in Matlab, but it was not toned down at all. We implemented an ANN and other AI models from scratch and used them throughout the course. I learned a lot, and I am happy that I took the course before tensorFlow came out, because I got a deep understanding of neural networks
                      before there was an easy way to work with them.</td>
            					<td><a href="https://www.kth.se/student/kurser/kurs/DD2432?l=en">DD 2432</a></td>
          				</tr>
                  <tr>
            					<td>Machine Learning Foundations: A Case Study Approach</td>
            					<td>Taken on Coursera. This class taught machine learning through a series of use cases such as predicting housing prices, and classifying images. I enjoyed this course because I love learning through projects and real use cases. A few of the parts of this course were dumbed down for beginners which I didn't mind too much, and they have more in depth courses I might take in the future.</td>
            					<td><a href="https://www.coursera.org/account/accomplishments/certificate/RMUAQEDYCP23">DD 2432</a></td>
          				</tr>
        			</tbody>
            </Table>
          </div>
        </Row>
      </Container>
    );
  }
}

export default EducationPage;
