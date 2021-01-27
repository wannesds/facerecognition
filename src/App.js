import React, { useState } from 'react';
import './App.scss';

import Clarifai from 'clarifai';
import Particles from 'react-tsparticles';

import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';

function App() {

  const particlesParams = {
    
      "background": {
        "color": {
          "value": "transparent"
        },
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      },
      "interactivity": {
        "events": {
          "onClick": {
            "enable": true,
            "mode": "push"
          },
          "onHover": {
            "enable": true,
            "mode": "repulse"
          }
        },
        "modes": {
          "bubble": {
            "distance": 400,
            "duration": 2,
            "opacity": 0.8,
            "size": 40
          },
          "connect": {
            "distance": 10
          },
          "grab": {
            "distance": 400
          }
        }
      },
      "particles": {
        "color": {
          "value": "transparent"
        },
        "links": {
          "color": {
            "value": "#2de4d5"
          },
          "distance": 10,
          "enable": true,
          "opacity": 0.4,
          "triangles": {
            "enable": true
          }
        },
        "move": {
          "attract": {
            "rotate": {
              "x": 600,
              "y": 1200
            }
          },
          "enable": true,
          "outModes": {
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "speed": 10
        },
        "number": {
          "density": {
            "enable": true
          },
          "value": 80
        },
        "opacity": {
          "random": {
            "enable": true
          },
          "value": 0.5,
          "animation": {
            "enable": true,
            "minimumValue": 0.1,
            "speed": 3
          }
        },
        "shape": {
          "options": {
            "polygon": {
              "nb_sides": 5
            },
            "star": {
              "nb_sides": 5
            },
            "image": {
              "src": "https://cdn.matteobruni.it/images/particles/github.svg",
              "width": 100,
              "height": 100
            },
            "images": {
              "src": "https://cdn.matteobruni.it/images/particles/github.svg",
              "width": 100,
              "height": 100
            }
          }
        },
        "size": {
          "random": {
            "enable": true
          },
          "value": 5,
          "animation": {
            "enable": true,
            "minimumValue": 0.1,
            "speed": 20
          }
        },
        "stroke": {
          "color": {
            "value": "#000000",
            "animation": {
              "enable": false,
              "speed": 1,
              "sync": true
            }
          }
        },
        "twinkle": {
          "lines": {
            "frequency": 0.005,
            "color": {
              "value": "#ff0000"
            }
          },
          "particles": {
            "color": {
              "value": "#ffff00"
            }
          }
        }
      }
    
  }

  const app = new Clarifai.App({
      apiKey : 'c0b90294f2fa4311ab006f4d3930c7c8'
    });

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

  const onRouteChange = (route) => {
    setRoute(route);
  }
  
  return (
    <div className="App">
      <Navigation route={route} onRouteChange={onRouteChange}/>
      <Particles 
        className="particles"
        width="100vw"
        height="auto"
        canvasClassName="App"
        params={particlesParams}
      />
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
