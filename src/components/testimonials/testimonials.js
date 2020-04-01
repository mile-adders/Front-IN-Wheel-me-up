import React , { Fragment } from 'react';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import animal1 from './CoM-Pay-What-You-Want-Learn-to-Code-2017-Bundle.jpg';
import animal2 from './download.png';
import animal3 from './FB_IMG_1582585900965.jpg';

// 

const Testimonials = () => {
  return (
    <div className='testimonials'>
      Testimonials
      <Fragment>
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
      </Fragment>
    </div>
  );
};

export default Testimonials;