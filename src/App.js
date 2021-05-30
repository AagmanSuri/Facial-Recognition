import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import './App.css';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognation from './components/FaceRecognation/FaceRecognation'

const app = new Clarifai.App({
  apiKey: "3fab0a59e7624e5ca3dd8f14484a5dab",
 });

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
      input:'',
      ImageUrl:'',
    }
  }

  OnInputChange=(event)=>{
    this.setState({input:event.target.value})
    console.log('input',event.target.value);
  }

  OnButtonSubmit=()=>{
    this.setState({ImageUrl : this.state.input})
    console.log('imageurl',this.state.ImageUrl);
      app.models
      .predict(
      Clarifai.FACE_DETECT_MODEL,
      // THE JPG
      // "https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp"
      this.state.input
      )
      .then((response) => {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box.top_row);
      })
      .catch((err) => {
      console.log(err);
      });
  }

  render(){
  return (
    <div className="App">
      <Particles className='particles'params={particlesOption} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm OnInputChange={this.OnInputChange} OnButtonSubmit={this.OnButtonSubmit}/>
      <FaceRecognation ImageUrl={this.state.ImageUrl}/>
    </div>
  );
  }
}

export default App;
