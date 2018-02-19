import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
    componentDidMount(){
        this.time =setInterval(this.timer,1000);
    } 
    timer(){
       this.setState({
            clock:new Date() - this.props.start
       });
    }

    constructor(props){
        super(props);
        this.state={
            clock:0
        };
        this.timer=this.timer.bind(this);
    }
   
  render() {
      var clock= Math.round(this.state.clock/1000);
    return (
      <div>
        <h2 className="app-cont">You have been on this site since :</h2>
        <h3 className="app-timer">{clock}</h3>
      </div>
    );
  }
}

export default Timer;
