/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import {  Card, CardGroup   } from 'react-bootstrap';
import animal1 from './CoM-Pay-What-You-Want-Learn-to-Code-2017-Bundle.jpg';
import animal2 from './download.png';
import animal3 from './FB_IMG_1582585900965.jpg';



const Testimonials = () => {
  return (
    <div className='testimonials'>
      Testimonials
      {/* <Fragment>
        <Container>
          <Row className="p-3 justify-content-center align-items-center">
            <Col md={8} className="text-center">
              <h1 className="text-black">Main Title</h1>
              <p className="text-black pt-3">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                    scelerisque purus semper eget duis
              </p>
            </Col>
          </Row>
          <Row className="h-100 p-3 justify-content-center align-items-start">
            <Col md={6}>
              <img 
                src={animal1}
                width="100%"
                    
              />
            </Col>
            <Col md={6} className="text-center">
              <h3 className="p-1">Subtitle</h3>
              <p className="p-1">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin.
              </p>
            </Col>
          </Row>
          <Row className="h-100 p-3 justify-content-center align-items-start">
            <Col md={6}>
              <img 
                src={animal2}
                width="100%"
                    
              />
            </Col>
            <Col md={6} className="text-center">
              <h3 className="p-1">Subtitle</h3>
              <p className="p-1">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin.
              </p>
            </Col>
          </Row>
          <Row className="h-100 p-3 justify-content-center align-items-start">
            <Col md={6}>
              <img 
                src={animal3}
                width="100%"
                    
              />
            </Col>
            <Col md={6} className="text-center">
              <h3 className="p-1">Subtitle</h3>
              <p className="p-1">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment> */}

<CardGroup>
  <Card>
    <Card.Img style={{width: "70%"}} variant="top" src={animal1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img style={{width: "70%"}} variant="top" src={animal2} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img style={{width: "70%"}}  variant="top" src={animal3}  />
    
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  );
};

export default Testimonials;