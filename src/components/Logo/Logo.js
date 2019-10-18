import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.scss'


const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
       <div className="Tilt-inner pa3">
        <img src={brain} alt="logo" className="pt5" />
       </div>
      </Tilt>
    </div>
  );
}

export default Logo