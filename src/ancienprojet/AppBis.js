import React, { Component } from 'react';
import './App.css';
import Width from "./Width";
import Height from "./Height";
import Cursor from "./Cursor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        width : window.innerWidth,
        height: window.innerHeight,
        x: 0,
        y: 0,
        X: 0,
        Y: 0,
        clsApp: 'App'
    }
}
move =() => {
  const cls = (window.event.clientX > 900) ? 'App out' : 'App';
  this.setState({
    X: window.event.clientX,
    Y: window.event.clientY,
    clsApp: cls,
  })
}
click = () => {
this.setState({x: window.event.clientX, y: window.event.clientY})
}
resize = () => {
  this.setState({
    width: window.innerWidth,
    height: window.innerHeight
    })
}
componentDidMount(){
  window.addEventListener("resize", this.resize)
  window.addEventListener("click", this.click)
  window.addEventListener("mousemove", this.move)
 
}
componentWillUnmount(){
  window.removeEventListener("resize", this.resize)
}

  render() {
  return (
    <div className={this.state.clsApp} >
     <Width size={this.state.width} />
     <Height size={this.state.height} />
     <Cursor position={this.state.x} position2={this.state.y} />
     <Cursor position={this.state.X} position2={this.state.Y}/>
    </div>
  );
}
}

export default App;
