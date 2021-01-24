import React, { useState } from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

function App() {
  const [input, setInput] = useState('');

  const onInputChange = (event) => {
      console.log(event.target.value);
  }

  const onBtnSubmit = () => {
    console.log('click');
  }
  
  return (
    <div className="App">
      <Navigation />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit}/>
      {/* <FaceRecognition/>} */}
    </div>
  );
}

export default App;
