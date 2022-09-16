import React from "react";
import './Card.css'

const Form: React.FC = () => {
    return (
        <div>
            <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
            <div className="progress-bar-linear-wrap">
                <div className="progress-bar-linear" data-gradient="">
                <span className="progress-value">72</span>
                <span className="progress-marker"></span></div>
            </div>
            <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
            <button className="btn btn-card">Donate Now</button>
        </div>
    );
}

export default Form;