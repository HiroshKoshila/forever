import * as React from 'react';
import image from './done.png';
import './Done.css';

function Done() {
    return (
      <div>
        <img src={image} alt="image" className="done-image" style={{ width: '100%'}}/>
        <h4 className="done-text">You have successfully made the donation!</h4> 
      </div>
    );
  }


  export default Done;