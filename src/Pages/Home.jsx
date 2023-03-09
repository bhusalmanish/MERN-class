import React from 'react';
// import LOGO from '.././logo.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Home() {
  return (
    <div className='Home'>
      {/* <h1>  Welcome  to  Home Section</h1>
      <h2> welcome to vrit </h2> */}
      <HeroSection />
      <HeroCard />
    </div>
  )
}



const HeroSection = () => {
  return (
    <div className='HeroSection'>
      <Container>
        <Row>
          <Col>
            <div>
              <HeadText text="Online Trading " />
              <h1> Sell On The Web Like A Pro</h1></div>
            <Button> join Us</Button></Col>
          <Col>
            {/* <image src={LOGO} width={4} alt="Logo" /> */}

            <img alt="Twitter" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Bitcoin_logo.svg" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}


const HeroCard = () => {

  const BCoin = <img  className='Icon' alt="Twitter" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" />

  return (<div className='HeroCard'>

    <Container>

      <div className='HeroCardTop'>
        <HeadText text="Practice Advice " />
        <h2> Packages that are aprodable</h2>
        <p>  Problems trying to resolve the conflict between {'\n'}
          the two major realms of Classical physics: Newtonian mechanics </p>

        <Row>
          <Col>   <Card style={{ width: '18rem' }}>
            <Card.Body>

              <Card.Title>{BCoin} Lifetime access</Card.Title>
              <Card.Text> 
                The gradual
                accumulation of
                information about
              </Card.Text>
              <Button> Visit</Button>

            </Card.Body>
          </Card></Col>

          <Col>    <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title> {BCoin}Books Liberary</Card.Title>
              <Card.Text>
                The gradual
                accumulation of
                information about
              </Card.Text>
              <Button> Visit</Button>

            </Card.Body>
          </Card></Col>

          <Col>   <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title> {BCoin}training Courses</Card.Title>
              <Card.Text>
                The gradual
                accumulation of
                information about
              </Card.Text>
              <Button> Visit</Button>
            </Card.Body>
          </Card></Col>

        </Row>
      </div>
    </Container>
  </div>)
}


const HeadText = (Props) => {
  return (<div className='HeadText'>
    <h5>  {Props.text} </h5>
  </div>)
}