import React from 'react';
import './home.css';
import data from './data.js';
import {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faGoogleDrive} from '@fortawesome/free-brands-svg-icons';

function Portfolio() {
  let [projects] = useState(data);
  const [key, setKey] = useState('All');

  return (
    <>
    <div className='page-title'>
      Portfolio
    </div>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="All" title="All">
      <div className='content-container' style={{marginTop: 40}}>
      <div className='textbox-cv'>
        <p>{projects[0].title}</p>
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://github.com/Lynn52/Project_Yourself.git" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
      <div className='textbox-cv'>
        <p>{projects[1].title}</p>
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://github.com/Lynn52/Project_SpeedyCoding.git" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
    </div>

    <div className='content-container'>
      <div className='textbox-cv'> 
        <p>{projects[2].title}</p>
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://github.com/Lynn52/Project_WebShot.git" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
      <div className='textbox-cv'>
        <p>{projects[3].title}</p><br />
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://github.com/Lynn52/Project_MyBookList.git" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
    </div>

    <div className='content-container'>
      <div className='textbox-cv'>
        <p>{projects[4].title}</p><br />
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://github.com/Lynn52/2021_AIEdu.git" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
      <div className='textbox-cv'>
        <p>{projects[5].title}</p><br />
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://github.com/Lynn52/2023_OUTTA.git" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
    </div>

    <div className='content-container'>
      <div className='textbox-cv'>
        <p>{projects[6].title}</p><br />
        <a href="https://youtu.be/1D_t0LgLC1Q?si=KYPHUt6U3G-rW3tE" target="_blank" rel="noreferrer">
          <p style={{color:"lightslategrey"}}>{projects[6].desc}</p>
        </a>
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://drive.google.com/drive/folders/1xNfJEXpn92e4_3E7WmHm_rlYWnwsDnYS?usp=drive_link" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGoogleDrive} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
      <div className='textbox-cv'>
        <p>{projects[7].title}</p><br />
        <i style={{color:"lightslategrey"}}>{projects[7].desc}</i>
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://drive.google.com/file/d/1Ce_EntVE9jpQ2oUQawzRrRAX8ppsJfig/view?usp=drive_link" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGoogleDrive} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
    </div>

    <div className='content-container'>
      <div className='textbox-cv'>
        <p>{projects[8].title}</p><br />
        <a href="https://zep.us/play/DE717z" target="_blank" rel="noreferrer" style={{color:"lightslategrey"}}>
          <p>{projects[8].desc}</p>
        </a> 
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://drive.google.com/drive/folders/1dlBYjjWpAV-4FOt2wJqqoQ4B7DXF-3TR?usp=drive_link" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGoogleDrive} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
      <div className='textbox-cv'>
        <p>{projects[9].title}</p><br />
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://drive.google.com/file/d/17qm-KcOxFxn2I4II5LeYN_m_NGanGqgu/view?usp=drive_link" target="_blank" rel="noreferrer">
            <br /><FontAwesomeIcon icon={faGoogleDrive} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
    </div>

      </Tab>
      <Tab eventKey="Education" title="Education">
        <div className='content-container'>
            <div className='textbox-cv'>
              <p>{projects[4].title}</p><br />
              <p style={{textAlign:'right', marginBottom:0}}>
                <a href="https://github.com/Lynn52/2021_AIEdu.git" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGoogleDrive} style={{fontSize:40, color:'black'}}/>
                </a>
              </p>
            </div>
            <div className='textbox-cv'>
              <p>{projects[7].title}</p><br />
              <i>{projects[7].desc}</i>
              <p style={{textAlign:'right', marginBottom:0}}>
                <a href="https://drive.google.com/file/d/1Ce_EntVE9jpQ2oUQawzRrRAX8ppsJfig/view?usp=drive_link" target="_blank" rel="noreferrer">
                  <br /><FontAwesomeIcon icon={faGoogleDrive} style={{fontSize:40, color:'black'}}/>
                </a>
              </p>
            </div>
        </div>

        <div className='content-container'>
          <div className='textbox-cv'>
            <p>{projects[8].title}</p><br />
            <a href="https://zep.us/play/DE717z" target="_blank" rel="noreferrer" style={{color:"lightslategrey"}}>
              <p>{projects[8].desc}</p>
            </a> 
            <p style={{textAlign:'right', marginBottom:0}}>
              <a href="https://drive.google.com/drive/folders/1dlBYjjWpAV-4FOt2wJqqoQ4B7DXF-3TR?usp=drive_link" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGoogleDrive} style={{fontSize:40, color:'black'}}/>
              </a>
            </p>
          </div>
          <div className='textbox-cv'>
            <p>{projects[9].title}</p><br />
            <p style={{textAlign:'right', marginBottom:0}}>
              <a href="https://drive.google.com/file/d/17qm-KcOxFxn2I4II5LeYN_m_NGanGqgu/view?usp=drive_link" target="_blank" rel="noreferrer">
                <br /><FontAwesomeIcon icon={faGoogleDrive} style={{fontSize:40, color:'black'}}/>
              </a>
            </p>
          </div>
      </div>

      <div className='content-container'>
      <div className='textbox-cv'>
        <p>{projects[6].title}</p><br />
        <a href="https://youtu.be/1D_t0LgLC1Q?si=KYPHUt6U3G-rW3tE" target="_blank" rel="noreferrer">
          <p style={{color:"lightslategrey"}}>{projects[6].desc}</p>
        </a>
        <p style={{textAlign:'right', marginBottom:0}}>
          <a href="https://drive.google.com/drive/folders/1xNfJEXpn92e4_3E7WmHm_rlYWnwsDnYS?usp=drive_link" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGoogleDrive} style={{fontSize:40, color:'black'}}/>
          </a>
        </p>
      </div>
      </div>
      </Tab>

      <Tab eventKey="SW" title="SW">
        <div className='content-container' style={{marginTop: 40}}>
          <div className='textbox-cv'>
            <p>{projects[0].title}</p>
            <p style={{textAlign:'right', marginBottom:0}}>
              <a href="https://github.com/Lynn52/Project_Yourself.git" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
              </a>
            </p>
          </div>
          <div className='textbox-cv'>
            <p>{projects[1].title}</p>
            <p style={{textAlign:'right', marginBottom:0}}>
              <a href="https://github.com/Lynn52/Project_SpeedyCoding.git" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
              </a>
            </p>
          </div>
      </div>

      <div className='content-container'>
        <div className='textbox-cv'> 
          <p>{projects[2].title}</p>
          <p style={{textAlign:'right', marginBottom:0}}>
            <a href="https://github.com/Lynn52/Project_WebShot.git" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
            </a>
          </p>
        </div>
        <div className='textbox-cv'>
          <p>{projects[3].title}</p><br />
          <p style={{textAlign:'right', marginBottom:0}}>
            <a href="https://github.com/Lynn52/Project_MyBookList.git" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
            </a>
          </p>
        </div>
      </div>

      <div className='content-container'>
        <div className='textbox-cv'>
          <p>{projects[5].title}</p><br />
          <p style={{textAlign:'right', marginBottom:0}}>
            <a href="https://github.com/Lynn52/2023_OUTTA.git" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{fontSize:40, color:'black'}}/>
            </a>
          </p>
        </div>
      </div>
      
      </Tab>
    </Tabs>
    </>
  );
}

export default Portfolio;