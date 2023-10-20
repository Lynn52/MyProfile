import React from 'react';
import './home.css';

function Home() {

  return (
    <>
      <div className='container'>
        <img className='homeImg' src={process.env.PUBLIC_URL + '/horseshoebend.jpeg'} />
          <div className='vcentered greet'>Hello!<br /><br />
            👋<br /><br />Welcome to my profile
            <span className='blinking-text'>💙<br /><br />
            Thanks for visiting<br /><br />
            <em>Merci beaucoup!</em><br /><br />
            </span>
          </div>
      </div>
    </>
  );
}

export default Home;
