import React, { useState } from 'react';
import './App.scss';

import Particles from 'react-tsparticles';

import Navigation from '../components/Navigation/Navigation';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';

import { particles } from '../Particles';

function App() {

  const initState = {
    input : '',
    imageUrl : '',
    box : {},
    route : 'signin',
    isSignedIn: false,
    user : {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
  };

  const [input, setInput] = useState(initState.input);
  const [imageUrl, setImageUrl] = useState(initState.imageUrl);
  const [box, setBox] = useState(initState.box);
  const [route, setRoute] = useState(initState.route);
  const [isSignedIn, setIsSignedIn] = useState(initState.isSignedIn);
  const [user, setUser] = useState(initState.user);

  //const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(res => setData(res))
  //   }
  //   fetchData()
  // },[])

  //console.log('data after useeffect', data);

  // useEffect(() => {
    
  // }, [user])

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    });
  }

  const calculateFaceLocation = (response) => {
    const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    //console.log(data.outputs[0].data.regions[0].region_info.bounding_box.bottom_row);  

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
      fetch('https://frozen-shore-44702.herokuapp.com/imageurl', {
        method: 'post', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: input })
      })
      .then(response => response.json())
      .then(response => {
        if(response) {
          console.log(response);
          fetch('https://frozen-shore-44702.herokuapp.com/image', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: user.id })
          })
            .then(response => response.json())
            .then(count => {
              setUser(user => ({
                ...user,
                entries: count
              }))
            })
            .catch(err => console.log(err));

        }
        displayFaceBox(calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
     
  }

  const onRouteChange = (route) => {
    setRoute(route);

    if(route === 'signout') {
      setIsSignedIn(initState.isSignedIn);
      setImageUrl(initState.imageUrl);
    } else if(route === 'home') {
      setIsSignedIn(true);
    }

  }
  
  return (
    <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
      <Particles 
        className="particles"
        width="100vw"
        height="auto"
        canvasClassName="App"
        params={particles}
      />
      { route === 'home' 
        ? <section>
            <Rank name={user.name} entries={user.entries}/>
            <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </section>
        :  (
          route === 'signin'
            ? <Signin onRouteChange={onRouteChange} loadUser={loadUser}/> 
            : <Register onRouteChange={onRouteChange} loadUser={loadUser}/>
        )
          
        

      }
    </div>
  );
}

export default App;
