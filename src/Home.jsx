import React, { Component } from 'react';
import scrolldown from './assets/scroll.gif';
import whiteScrolldown from './assets/white.gif';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      timeValue: '',
    }
  }

  getTime = () => {
     setInterval(function() {
    const countDownDate = new Date("Feb 5, 2019 15:37:25").getTime()
    let now = new Date().getTime();

  let distance =  now - countDownDate;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
 this.setState({timeValue: `${days}jours ${hours}heures ${minutes}minutes  ${seconds}secondes` })
}.bind(this), 1000);

  }

componentDidMount() {
this.getTime()
}

  render() {
    return(
      <div className="Home">
      <h1>Guillaume Loup</h1>
      <h2>Développeur Web JavaScript ReactJs NodeJs</h2>
  <p> depuis <span>{this.state.timeValue}</span></p>
      <div className="gif-scroll">
      <a href="#presentation"><img src={this.props.backgroundColor ? whiteScrolldown : scrolldown} alt="scroll down" /></a>
      </div>
      </div>
    )
  }
}

export default Home;