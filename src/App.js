import React, { Component } from 'react';
import './App.scss';
import Home from './Home.jsx';
import Presentation from './Presentation.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

class App extends Component {
constructor(props) {
  super(props); 
    this.state={
      nameClass: false,
      backgroundColor: false,
    }
}

  click = () => {
    this.setState({backgroundColor : !this.state.backgroundColor})
  }

  render() {
    const change = this.state.backgroundColor ? "color-white" : "color-black";
    const { backgroundColor } = this.state;
  return (
    <div className="App" >
    <div className={change}>
  <button className="btn draw-border" type="submit" onClick={this.click}>{this.state.backgroundColor ? 'Switchez en Mode Nuit' : 'Switchez en Mode Jour'}</button>
  <Home backgroundColor={backgroundColor}/>
  <Presentation />
  <Projects backgroundColor={backgroundColor} />
  <Contact />
  </div>
    </div>
  );
}
}

export default App;
