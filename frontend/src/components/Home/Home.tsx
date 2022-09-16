import * as React from 'react';
import {useState} from 'react';

import Logo from './logo.png';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import './Home.css';

import Card from '../Card/Card';
import Form from '../Form/Form';
import Done from '../Done/Done';

function Home() {

    const [page, setPage] = useState(0);

    const CardTitle = ["Card","Form","Done"];

    const PageDisplay = () => {
      if(page === 0){
        return <Card/>;
      } else if (page === 1){
        return <Form/>
      } else {
        return <Done/>
      }
    } 

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
                <div className="card-body">
                {PageDisplay()}
                  { page === 1 ? <button className="btn btn-card" 
                    onClick={() => { 
                    setPage((currPage) => currPage - 1);
                    }}>Prev</button> : '' }

                  <button className="btn btn-card"
                    onClick={() => { 
                      if (page===CardTitle.length - 1) {
                        alert("Successfully Donated!");
                        setPage((currPage) => currPage - 2);
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }}>{ page === 0 ? "Donate Now" : '' }
                    { page === 1 ? "Pay Now" : '' }
                    { page === 2 ? "Done" : '' }</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image2} className="card-img-top" alt="image2"/>
                <div className="card-body">
                  <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                  <progress value = "72" max = "100" className="progress-bar-style"/>                
                  <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
                  <button className="btn btn-card">Donate Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                {PageDisplay()}
                  { page === 1 ? <button className="btn btn-card" 
                    onClick={() => { 
                    setPage((currPage) => currPage - 1);
                    }}>Prev</button> : '' }

                  <button className="btn btn-card"
                    onClick={() => { 
                      if (page===CardTitle.length - 1) {
                        alert("Successfully Donated!");
                        setPage((currPage) => currPage - 2);
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }}>{ page === 0 ? "Donate Now" : '' }
                    { page === 1 ? "Pay Now" : '' }
                    { page === 2 ? "Done" : '' }</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image1} className="card-img-top" alt="image4"/>
                <div className="card-body">
                <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                  <progress value = "72" max = "100" className="progress-bar-style"/>                
                  <h3 className="card-text-body">$6900</h3><p className="card-text-raised">Raised</p>
                  <button className="btn btn-card">Donate Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                {PageDisplay()}
                  { page === 1 ? <button className="btn btn-card" 
                    onClick={() => { 
                    setPage((currPage) => currPage - 1);
                    }}>Prev</button> : '' }

                  <button className="btn btn-card"
                    onClick={() => { 
                      if (page===CardTitle.length - 1) {
                        alert("Successfully Donated!");
                        setPage((currPage) => currPage - 2);
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }}>{ page === 0 ? "Donate Now" : '' }
                    { page === 1 ? "Pay Now" : '' }
                    { page === 2 ? "Done" : '' }</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image3} className="card-img-top" alt="image4"/>
                <div className="card-body">
                <h6 className="card-title-image">Build School Wellawaya Sri Lanka</h6>
                <progress value = "72" max = "100" className="progress-bar-style"/>                
                  <h3 className="card-text-body">$6900</h3>
                  <p className="card-text-raised">Raised</p>
                  <button className="btn btn-card">Donate Now</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }


  export default Home;