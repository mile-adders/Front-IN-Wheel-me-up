/* eslint-disable no-unused-vars */
import React  from 'react';
import { Card, CardGroup } from 'react-bootstrap'; 

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h2 data-aos='fade-left'>Testimonials</h2>
      <div className='greyLine' data-aos='fade-right'></div>
      <CardGroup className='background'>
        <Card className='card' data-aos='fade-right'>
          <Card.Img className='image' variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-UNATF9C2V-38c65cfd6be6-512" />
          <Card.Body>
            <Card.Title className='cardContent'>Brian Nation</Card.Title>
            <Card.Text className='cardContent'>
        This is so cool, This application is fire!!!, in the short amount of time you had, and your level of experience, seriously you did great, continue to work hard!!
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardContent'>
            <small className="text-muted">Lead Instructor - Code Fellows</small>
          </Card.Footer>
        </Card>
        <Card className='card' data-aos='fade-down'>
          <Card.Img className='image' variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-UNATFAFAM-94546c55b79c-512" />
          <Card.Body className='cardContent'>
            <Card.Title className='cardContent'>Mahmoud A. al-Khudairi</Card.Title>
            <Card.Text className='cardContent'>
        meh. Not Bad.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardContent'>
            <small className="text-muted">Lead Instructor - LTUC</small>
          </Card.Footer>
        </Card>
        <Card className='card' data-aos='fade-left'>
          <Card.Img className='image' variant="top" src="https://static.arageek.com/wp-content/uploads/2019/05/leonardo-dicaprio11.jpg" />
          <Card.Body>
            <Card.Title className='cardContent'>Just a random guy</Card.Title>
            <Card.Text className='cardContent'>
              I wish that i'm in jordan to get myself a ride, cause i heard a lot about this application, the amazing deals and service.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardContent'>
            <small className="text-muted">Film Lover</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Testimonials;