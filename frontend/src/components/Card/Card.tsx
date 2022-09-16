import React from "react";
import './Card.css'
import image from './image.jpg';
import {Card} from './styles';

const Form: React.FC = () => {
    return (
        <Card>
                <img src={image} className="card-img-top" alt="image1"/>
                  <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                  <div className="progress-bar-linear-wrap">
                  <progress value = "72" max = "100" className="progress-bar-style"/>                
                  </div>
                  <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
        </Card>
    );
}

export default Form;