import React from 'react';
import './home.css';
import './menu.css';
import detail from './detail.js';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilm, faChalkboardUser, faGlobeAmericas, faPalette} from "@fortawesome/free-solid-svg-icons";


function AboutMe() {
  let [explanation] = useState(detail);
  let imagePaths = [
    '/pic1.jpeg', '/pic2.jpeg', '/pic3.jpeg', '/pic4.jpeg',
    '/pic5.jpeg', '/pic6.jpeg', '/pic7.jpeg', '/pic8.jpeg',
    '/pic9.jpeg', '/pic10.jpeg', '/pic11.jpeg', '/pic12.jpeg',
  ];

  const imageElements = imagePaths.map((imagePath, index)=>(
    <Carousel.Item  className='carousel-area'>
      <img className='carousel' key={index} src={process.env.PUBLIC_URL + imagePath} />
    </Carousel.Item>
  ));

  let [modalShow1, setModalShow1] = useState(false);
  let [modalShow2, setModalShow2] = useState(false);
  let [modalShow3, setModalShow3] = useState(false);
  let [modalShow4, setModalShow4] = useState(false);

  
  return (
    <>
     <div className='page-title'>
      About Me
    </div>
    <div className='content-container'>
      <Carousel  className='carousel-area'>
        {imageElements}
      </Carousel>
      
      <div className='textbox'>
        <p style={{fontSize: 30, fontWeight:'bold', fontStyle: 'italic', textAlign:'center', marginBottom: 30}}>배움에는 끝이 없다 <br />비버 같은 마음으로! 🦫</p>
        
        <Table size="sm">
        <tbody style={{fontSize: 18, color:'lightgray'}}>
          <tr>
            <td>생년월일</td>
            <td>2001.10.29.</td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td>010-8696-0840</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>hlynn5223@gmail.com</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>서울시 양천구 목동서로 2길 22</td>
          </tr>
          <tr>
            <td>소속</td>
            <td>이화여자대학교</td>
          </tr>
          <tr>
            <td>전공</td>
            <td>사범대학 교육학과<br />사회과학대학 심리학과<br />평점 : 4.14/4.3</td>
          </tr>
          <tr>
            <td>어학</td>
            <td>TOEIC( 975 )</td>
          </tr>
          <tr>
            <td>자격증</td>
            <td>한국사능력검정시험 2급</td>
          </tr>
          <tr>
            <td>수료</td>
            <td>사범대학 AIEdu 1기<br />국제처 소속 PeaceBuddy 54기
            <br />인문대 유화 동아리 '그림탑' 회장<br />PY4E 2022 리드부스터
            <br />2023 OUTTA 데이터분석 부트캠프</td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
    <div className='content-container' style={{marginTop: 40}}>
      <div className='textbox-cv' onClick={()=>setModalShow1(true)}>
        <FontAwesomeIcon icon={faChalkboardUser} style={{fontSize:40}}/>
        <p className='cv-title'>전공 관련 경험</p>
      </div>
      <DetailedInfoModal1 explanation={explanation} show={modalShow1} onHide={() => setModalShow1(false)} />

      <div className='textbox-cv' onClick={()=>setModalShow2(true)}>
        <FontAwesomeIcon icon={faPalette} style={{fontSize:40}}/>
        <p className='cv-title'>동아리 및 대외활동</p>
      </div>
      <DetailedInfoModal2 explanation={explanation} show={modalShow2} onHide={() => setModalShow2(false)} />
    </div>

    <div className='content-container'>
      <div className='textbox-cv' onClick={()=>setModalShow3(true)}>
        <FontAwesomeIcon icon={faGlobeAmericas} style={{fontSize:40}}/>  
        <p className='cv-title'>봉사활동 및 해외경험</p>
      </div>
      <DetailedInfoModal3 explanation={explanation} show={modalShow3} onHide={() => setModalShow3(false)} />

      <div className='textbox-cv'>
        <FontAwesomeIcon icon={faFilm} style={{fontSize:40}}/>
        <p className='cv-title' onClick={()=>setModalShow4(true)}>취미와 관심사</p>
      </div>
      <DetailedInfoModal4 explanation={explanation} show={modalShow4} onHide={() => setModalShow4(false)} />
    </div>

    </>
  );
}

function DetailedInfoModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter1"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter1">
          전공 관련 경험
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='detailedInfo'>
          <ul>
            <li type='1' className='fs-20'>{props.explanation[0].title}<br/>
              <span className='fs-15'>{props.explanation[0].date}</span><br/>
              <span className='fs-15'>{props.explanation[0].desc}</span><br/>
              <span className='fs-15'>{props.explanation[0].plus}</span></li><br/>
            <li type='1' className='fs-20'>{props.explanation[1].title}<br/>
              <span className='fs-15'>{props.explanation[1].date}</span><br/>
              <span className='fs-15'>{props.explanation[1].desc}</span><br/>
              <span className='fs-15'>{props.explanation[1].plus}</span></li><br/>
            <li type='1' className='fs-20'>{props.explanation[2].title}<br/>
              <span className='fs-15'>{props.explanation[2].date}</span><br/>
              <span className='fs-15'>{props.explanation[2].desc}</span><br/>
              <span className='fs-15'>{props.explanation[2].plus}</span></li><br/>
            <li type='1' className='fs-20'>{props.explanation[3].title}<br/>
              <span className='fs-15'>{props.explanation[3].date}</span><br/>
              <span className='fs-15'>{props.explanation[3].desc}</span><br/>
              <span className='fs-15'>{props.explanation[3].plus}</span></li><br/>
            <li type='1' className='fs-20'>{props.explanation[4].title}<br/>
              <span className='fs-15'>{props.explanation[4].date}</span><br/>
              <span className='fs-15'>{props.explanation[4].desc}</span><br/>
              <span className='fs-15'>{props.explanation[4].plus}</span></li><br/>
            <li type='1' className='fs-20'>{props.explanation[5].title}<br/>
              <span className='fs-15'>{props.explanation[5].date}</span><br/>
              <span className='fs-15'>{props.explanation[5].desc}</span><br/>
              <span className='fs-15'>{props.explanation[5].plus}</span></li><br/>
          </ul>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='outline-success'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function DetailedInfoModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter2"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter2">
          동아리 및 대외활동
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p className='detailedInfo'>
        <ul>
          <li type='1' className='fs-20'>{props.explanation[6].title}<br/>
            <span className='fs-15'>{props.explanation[6].date}</span><br/>
            <span className='fs-15'>{props.explanation[6].desc}</span><br/>
            <span className='fs-15'>{props.explanation[6].plus}</span></li><br/>
          <li type='1' className='fs-20'>{props.explanation[7].title}<br/>
            <span className='fs-15'>
            {props.explanation[7].date}<br/>
            {props.explanation[7].desc} : {props.explanation[7].plus}<br/>
              <a href="https://naver.me/5mrI1eLn" target="_blank" rel="noreferrer" style={{color:'lightslategrey'}}> 上편 : 보러가기</a> &nbsp;&nbsp;
              <a href="https://naver.me/G4wWTvZm" target="_blank" rel="noreferrer" style={{color:'lightslategrey'}}> 下편 : 보러가기</a>
            </span>
          </li><br/>
          <li type='1' className='fs-20'>{props.explanation[8].title}<br/>
            <span className='fs-15'>{props.explanation[8].date}</span><br/>
            <span className='fs-15'>{props.explanation[8].desc}</span><br/>
            <span className='fs-15'>{props.explanation[8].plus}</span></li><br/>
          <li type='1' className='fs-20'>{props.explanation[9].title}<br/>
            <span className='fs-15'>{props.explanation[9].date}</span><br/>
            <span className='fs-15'>{props.explanation[9].desc}</span><br/>
            <span className='fs-15'>{props.explanation[9].plus}</span></li><br/>
          <li type='1' className='fs-20'>{props.explanation[10].title}<br/>
            <span className='fs-15'>{props.explanation[10].date}</span><br/>
            <span className='fs-15'>{props.explanation[10].desc}</span><br/>
            <span className='fs-15'>{props.explanation[10].plus}</span></li><br/>
        </ul> 
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='outline-success'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function DetailedInfoModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter3"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter3">
          봉사활동 및 해외 경험
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p className='detailedInfo'>
        <ul>
          <li type='1' className='fs-20'>{props.explanation[11].title}<br/>
            <span className='fs-15'>{props.explanation[11].date}</span><br/>
            <span className='fs-15'>{props.explanation[11].desc}</span><br/>
            <span className='fs-15'>{props.explanation[11].plus}</span></li><br/>
          <li type='1' className='fs-20'>{props.explanation[12].title}<br/>
            <span className='fs-15'>{props.explanation[12].date}</span><br/>
            <span className='fs-15'>{props.explanation[12].desc}</span><br/>
            <span className='fs-15'>{props.explanation[12].plus}</span></li><br/>
          <li type='1' className='fs-20'>{props.explanation[13].title}<br/>
            <span className='fs-15'>{props.explanation[13].date}</span><br/>
            <p className='fs-15'>{props.explanation[13].desc}</p></li><br/>
        </ul>
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='outline-success'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function DetailedInfoModal4(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter4"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter4">
          취미와 관심사
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p className='detailedInfo'>
        <ul>
          <li type='1' className='fs-20'>최근 감명 깊게 본 영화<br/>
            <span className='fs-15'>엘리멘탈</span></li><br/>
        </ul>
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='outline-success'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AboutMe;