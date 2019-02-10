import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    navcss : "sidenav",
    page: "page"
  }

  onNavigationClick = () => {
    this.setState({
        navcss: "sidenav sidenav-width",
        page: "page page-margin"  
      })
  }

  onClose = () => {
    this.setState({
        navcss: "sidenav",
        page: "page"  
      })
  }

  render() {
    return (
      <div className={this.state.page}>
        <div className={this.state.navcss}>
          <a className="closebtn" onClick={this.onClose}>x</a>
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">Logout</a>
        </div>
        <span style={
          {
            cursor: "pointer"
          }
        } onClick={this.onNavigationClick}>&#9776;</span>
      </div>
    );
  }
}

export default App;
