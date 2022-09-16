import * as React from 'react';
import './Home.css';
import Logo from './Logo.jpg';

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
                <div className="card topic-with-logo">
                    <div className="card-body">
                        <h5 className="card-title"><b>Together We</b></h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="card header-card">
                    <div className="col-md-3">
                    <img src={Logo} alt="children's" className="header-image"/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div>
                    <div className="card-form">
                        <h1>Project</h1>
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