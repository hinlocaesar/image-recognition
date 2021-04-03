import React,{Component} from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import Rank from './components/rank/rank';
import './App.css';
import Particles from 'react-particles-js';


const particleOptions ={
  particles: {
    number: {
        value: 60
    },
    size: {
        value: 2
    }
},
}

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
    }
  }

onInputChange =(event)=>{
 console.log(event.target.value);
}

onButtonSubmit =()=>{
  console.log('click');
}


  render(){
    return (
      <div className="App">
        <Particles className='particles' 
              params={particleOptions}
            />
      <Navigation/>
      <Logo/> 
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
         {/*
        <FaceRecognition/>*/}
    </div>
  );
}
}

export default App;
