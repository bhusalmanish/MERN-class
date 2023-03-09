import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from './logo.svg'
// import Insta from  'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import Home from './Pages/Home';
import Todo from './Pages/Todo';
import Blog from './Pages/Blog';
import About from './Pages/About';
function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Todo" element={<Todo/>} />

        <Route path="*" element={<center>  Page Not Found.  <h1> 404</h1></center>} />

      </Routes>
      <Footer />

    </>
  )
}
export default App;



const MainHeader = () => {
  return (<>
    <div className='Header'>
      <Container>
        <Row>
          <Col>    <b>   COINHunt  </b> </Col>
          <Col className='LINK' xs={6}>
            <Link to="/"> Home</Link>
            <Link to="/Todo"> Todo </Link>
            <Link to="/Blog"> Blog </Link>

            <Link to="/About"> About </Link> </Col>
          <Col>  Login <Button> Join Us</Button> </Col>
        </Row>
      </Container>
    </div>

  </>)
}
const Footer = () => {
  return (
    <div className='Footer' >
      <Container>
        <Row>
          <Col> <h4>Get In Touch</h4>
            <p>
              the quick fox jumps over the
              lazy dog
            </p>
            <Row>   <Col>  <img className='Icon' src={Logo} alt="icon" />
              <img className='Icon' src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Insta" />
              <img className="Icon" alt="Twitter" src="https://upload.wikimedia.org/wikipedia/sco/9/9f/Twitter_bird_logo_2012.svg" />
            </Col>
            </Row>

          </Col>
          <Col>
            <h4> Company info</h4>
            <h6> About Us</h6>
            <h6> Carrier</h6>
            <h6> We are Hiring</h6>
            <h6> Blog</h6>
          </Col>
          <Col><h4>Features</h4>
            <h6> Business Markering</h6>
            <h6> Use Analytics</h6>
            <h6> Live Chart</h6>
            <h6> Ultimated Support</h6>
          </Col>
          <Col><h4>Resources</h4>
            <h6> ios & Android</h6>
            <h6> Watch a Demo</h6>
            <h6> Customers</h6>
            <h6>  API</h6>
          </Col>

        </Row>
        <Row>    </Row>
      </Container>
      {/* <center>  <p>   Design By Manish Bhusal  </p></center>  */}
    </div>
  )
}