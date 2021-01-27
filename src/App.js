import React, { useState } from 'react';
import './App.scss';

import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';

function App() {
  const app = new Clarifai.App({
      apiKey : 'c0b90294f2fa4311ab006f4d3930c7c8'
    })

  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(data.outputs[0].data.regions[0].region_info.bounding_box.bottom_row);  

    return {
      leftCol: clarifaiFace.left_col * width ,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
    setBox(box);
    console.log(box);
  }

  const onInputChange = (event) => {
      setInput(event.target.value);
  }

  const onBtnSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(response => displayFaceBox(calculateFaceLocation(response)))
      .catch(err => console.log(err));
     
  }

  const onRouteChange = () => {
    setRoute('home');
  }
  
  return (
    <div className="App">
      <Navigation route={route}/>
      {
        route === 'signin' ?
          <Signin onRouteChange={onRouteChange}/> 
            :
          <section>
            <Rank/>
            <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </section>
      }
    </div>
  );
}

export default App;
