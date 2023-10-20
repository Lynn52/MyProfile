import React from 'react';
import './home.css';
import './menu.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faComment, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {

  return (
    <>
    <div className='page-title'>
      Contact
    </div>
    <Container fluid>
      <Row>
        <Col>
          <div className='textbox-cv' style={{marginLeft:0, marginRight:5}}>
            <FontAwesomeIcon icon={faPhone} style={{fontSize:30, textAlign:'center'}}/>
            <br /><br />010-8696-0840<br />02-3662-0840
          </div>
        </Col>
        <Col>
          <div className='textbox-cv' style={{marginLeft:5, marginRight:5}}>
            <FontAwesomeIcon icon={faEnvelope} style={{fontSize:30, alignItems:'center'}}/>
            <br /><br />hlynn5223@gmail.com<br />chrr29@ewhain.net
          </div>
        </Col>
        <Col>
          <div className='textbox-cv'style={{marginLeft:5, marginRight:0}}>
            <FontAwesomeIcon icon={faInstagram} style={{fontSize:30, textAlign:'center'}}/>
             &nbsp; & &nbsp;<FontAwesomeIcon icon={faComment} style={{fontSize:30, textAlign:'center'}}/>
             <br /><br />@hye_rr1n<br /> Kakao ID : donut52
          </div>
        </Col>
      </Row>
    </Container>
  
    </>
  );
}

export default Contact;