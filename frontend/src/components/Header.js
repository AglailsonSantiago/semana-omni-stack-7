import React from 'react';

import './Header.css';

import logo from '../assets/instagram_logo.svg'
import camera from '../assets/camera.svg';

function Header() {
  return (
      <header id='main-header'>
          <div className='header-content'>
            <img id='logo' src={logo} alt='Instagram'/>
            <img id='camera' src={camera} alt='Nova Publicação'/>
          </div>
      </header>
  );
}

export default Header;