import * as React from 'react';
import Logo from './logo.png';
import './Home.css';

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };



  render () {
    return (
        <div>
        <div className="row">
            <div className="col-md-12">
                <div className="card header-card">
                <div className="card-body">
                    <div className="col-md-3">
                    <img src={Logo} alt="children's" className="header-image"/>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body-content">
                      <h1 className="card-title">We Want Give Them a Better Tomorrow!</h1>
                            <h2 className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </h2>
                            <button className="btn-started"><b>Get Started</b></button>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div>
                    <div className="card-project">
                        <img src={Logo} alt="project-logo" className="project-logo"/><h1>Projects</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    //   <div>
    //     <h1>{this.state.count}</h1>
    //     <button onClick={this.increment}>Increment</button>
    //     <button onClick={this.decrement}>Decrement</button>
    //   </div>
    );
  }
}