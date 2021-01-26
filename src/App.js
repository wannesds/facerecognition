import React, { useState } from 'react';
import './App.scss';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

function App() {
  const app = new Clarifai.App({
      apiKey : 'c0b90294f2fa4311ab006f4d3930c7c8'
    })

  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
  }

  const onInputChange = (event) => {
      setInput(event.target.value);
  }

  const onBtnSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(response => calculateFaceLocation(response))
      .catch(err => console.log(err));
  }
  
  return (
    <div className="App">
      <Navigation/>
      <Rank/>
      <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit}/>
      <FaceRecognition imageUrl={imageUrl}/>
    </div>
  );
}

export default App;
