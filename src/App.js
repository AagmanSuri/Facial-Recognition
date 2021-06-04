import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import './App.css';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognation from './components/FaceRecognation/FaceRecognation'
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'
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
      box:{},
      route:'signin',
      isSignedIn:false,
      user:{
        id:'',
        name:"",
        email:"",
        entries:0,
        joined:''
      }
    }
  }
loaduser=(data)=>{
  this.setState({user:{
    id:data.id,
    name:data.name,
    email:data.email,
    entries:data.entries,
    joined:data.joined
  }})
}
  calculateFaceLocation = (data) =>{
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
    const image =  document.getElementById("inputimage")
    const width = Number(image.width);
    const height= Number(image.height);
    return{
      leftCol:clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:height-(clarifaiFace.bottom_row * height)
    }
  }
  displayfaceBox = (box)=>{
    console.log(box)
    this.setState({box:box});
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
      this.state.input
      )
      .then((response) => this.displayfaceBox(this.calculateFaceLocation(response)))
      .catch((err) => {console.log(err);
      
      });
  }
onRouteChange = (route)=>{
  if(route==='signout'){
    this.setState({isSignedIn:false})
  }else if(route==='home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route:route})

}


  render(){
  return (
    <div className="App">
      <Particles className='particles'params={particlesOption} />
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      {
      this.state.route==='home'?
      <div>
      <Logo/>
      <Rank name = {this.state.user.name} entries = {this.state.user.entries}/>
      <ImageLinkForm OnInputChange={this.OnInputChange} OnButtonSubmit={this.OnButtonSubmit}/>
      <FaceRecognation box={this.state.box} ImageUrl={this.state.ImageUrl}/>
      </div>
      :(
        this.state.route==='signin'
        ?<Signin loaduser={this.loaduser} onRouteChange={this.onRouteChange}/>
        :<Register loaduser={this.loaduser} onRouteChange={this.onRouteChange}/>
      )
      }
    </div>
  );
  }
}

export default App;
