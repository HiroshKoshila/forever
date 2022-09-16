import * as React from 'react';
import Logo from './logo.png';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import './Home.css';

export default class Counter extends React.Component {
  render () {
    return (
      <div>
        <div className="row">
            <div className="col-md-12">
                <div className="card header-card">
                <div className="card-body">
                    <div className="col-lg-4">
                    <img src={Logo} alt="children's" className="header-image"/>
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body-content">
                      <h1 className="card-title">We want give them a better tomorrow!</h1>
                            <h5 className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </h5>
                            <button className="btn-started"><b>Get Started</b></button>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="col-sm-2">
                <img src={Logo} alt="project-logo" className="project-logo"/>
                </div>
                <div className="col-sm-10">
                <div className="card-project">
                        <p><b>Projects</b></p>
                    </div>

                </div>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <div className="body">
                <img src={image1} className="card-img-top" alt="image1"/>
                <div className="card-body">
                  <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                  <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear" data-gradient="">
                        <span className="progress-value">72</span>
                        <span className="progress-marker"></span></div>
                  </div>
                  <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
                  <button className="btn btn-card">Donate Now</button>
                </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image2} className="card-img-top" alt="image2"/>
                <div className="card-body">
                  <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                  <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear" data-gradient="">
                        <span className="progress-value">72</span>
                        <span className="progress-marker"></span></div>
                  </div>                  
                  <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
                  <button className="btn btn-card">Donate Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image3} className="card-img-top" alt="image3"/>
                <div className="card-body">
                <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear" data-gradient="">
                        <span className="progress-value">72</span>
                        <span className="progress-marker"></span></div>
                  </div>                  
                  <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
                  <button className="btn btn-card">Donate Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image1} className="card-img-top" alt="image4"/>
                <div className="card-body">
                <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear" data-gradient="">
                        <span className="progress-value">72</span>
                        <span className="progress-marker"></span></div>
                  </div>                  
                  <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
                  <button className="btn btn-card">Donate Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image2} className="card-img-top" alt="image4"/>
                <div className="card-body">
                <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear" data-gradient="">
                        <span className="progress-value">72</span>
                        <span className="progress-marker"></span></div>
                  </div>                  
                  <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
                  <button className="btn btn-card">Donate Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image3} className="card-img-top" alt="image4"/>
                <div className="card-body">
                <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear" data-gradient="">
                        <span className="progress-value">72</span>
                        <span className="progress-marker"></span></div>
                  </div>                  
                  <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
                  <button className="btn btn-card">Donate Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="title">
              </div>
              <div className="body">                
                  <button className="btn btn-card">Donate Now</button>
                </div>
            </div>
          </div>
      </div>
    );
  }
}