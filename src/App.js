import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import './App.css';
import React, { Component } from 'react';
import Particles from 'react-particles-js';

const particlesOption={
  particles: {
      number:{
        value:30,
        density:{
          enable:true,
          value_area:800
        }
      }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state={
      input:''
    }
  }

  OnInputChange=(event)=>{
    console.log(event.target.value);
  }

  OnSubmit=()=>{
    console.log('clicked');
  }

  render(){
  return (
    <div className="App">
      <Particles className='particles'params={particlesOption} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm OnInputChange={this.OnInputChange}/>
    </div>
  );
  }
}

export default App;
