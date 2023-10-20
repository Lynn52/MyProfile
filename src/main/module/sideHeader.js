import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sideHeader.css';
import {AiOutlineHome, AiOutlinePhone, AiOutlineUser} from 'react-icons/ai'; //Adobe Ilusstrator 아이콘 라이브러리
import {TbBook2} from 'react-icons/tb';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' //Fontawesome 아이콘 라이브러리
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPenNib} from "@fortawesome/free-solid-svg-icons";


function SideHeader() {
  const [page, setPage] = useState(0); //현재 선택된 페이지 나타내는 state 설정
  const [toggle, setToggle] = useState(false); //메뉴 토글 상태 나타내는 state 설정

  const handleMenuClick = (newPage) => { //메뉴 항목 클릭 시 호출, 선택한 페이지 업데이트
    setToggle(false);
    setPage(newPage);
  };

  return (
    <div className='header1'>
      <div className="header_content"> {/* 프로필 사진, 이름, SNS 링크 영역 */}
        <div className="header_photo">
            <img src={process.env.PUBLIC_URL + '/me.jpg'}></img>
        </div>
      </div>
      <div className="header_title">
        <h2>최 혜 린</h2>
        <h4>Hyerin Choi</h4>
      </div>
      {/* 우측 사이드 네비바 : 페이지 이동을 위한 메뉴 영역 */}
      <ul className="main_menu"> 
      {/* 현재 페이지와 메뉴바에서 선택한 항목이 일치하는 경우, 해당 메뉴 버튼 강조 표시 */}
        <li className={page === 0 ? 'active' : ''}> 
        {/* 현재 페이지와 메뉴바에서 선택한 항목이 다른 경우, 해당 메 버튼 강조 비활성화 */}
          <Link to='*'>
            <div
              className={`nav1 ${page !== 0 && 'not_focus'}`}
              onClick={() => handleMenuClick(0)}
            > 
              <span className="menu_icon lnr lnr_home"><AiOutlineHome /></span>
              <span className="link_text">Home</span>
            </div>
          </Link>
        </li>
        <li className={page === 1 ? 'active' : ''}>
          <Link to='/aboutme'>
            <div
              className={`nav1 ${page !== 1 && 'not_focus'}`}
              onClick={() => handleMenuClick(1)}
            >
              <span className="menu_icon lnr lnr_user"><AiOutlineUser /></span>
              <span className="link_text">About Me</span>
            </div>
          </Link>
        </li>
        <li className={page === 2 ? 'active' : ''}>
          <Link to='/portfolio'>
            <div
              className={`nav1 ${page !== 2 && 'not_focus'}`}
              onClick={() => handleMenuClick(2)}
            >
              <span className="menu_icon lnr lnr_book"><TbBook2 className='home' /></span>
              <span className="link_text">Portfolio</span>
            </div>
          </Link>
        </li>
        <li className={page === 3 ? 'active' : ''}>
          <Link to='/contact'>
            <div
              className={`nav1 ${page !== 3 && 'not_focus'}`}
              onClick={() => handleMenuClick(3)}
            >
              <span className="menu_icon lnr lnr_phone"><AiOutlinePhone /></span>
              <span className="link_text">Contact</span>
            </div>
          </Link>
        </li>
      </ul>
      <div className="social_links"> {/* SNS 링크가 연결된 아이콘 영역 */}
        <ul>
          <li>
          {/* target="_blank" : 링크를 새 창에서 열기, rel="noreferrer" : 이전 페이지 정보 제공 막는 목적 */}
            <a href="https://github.com/Lynn52" target="_blank" rel="noreferrer"> 
                <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hye_rr1n/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://blog.naver.com/edurin20" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faPenNib} />
            </a>
          </li>
        </ul>
      </div>
      <div className="header_buttons"> {/* 이메일 연동 영역 */}
        <a href="mailto:hlynn5223@gmail.com" className="btn1_primary" target="_blank" rel="noreferrer">
            <span className='button_text'>
                <FontAwesomeIcon icon={faEnvelope} />
            </span>
            &nbsp; Contact Me
        </a>
      </div>
      <div className="copyrights">@Hyerin Choi 2023 All rights reserved.</div> {/* 프로필 영역 하단 저작권 정보 */}
    </div>
  );
}

export default SideHeader;
