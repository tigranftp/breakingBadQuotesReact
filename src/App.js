import logo from './logo.svg';
import './App.css';
import React, { useState, useRef} from 'react';
import Button from './Button';
import D3Animation from './D3animation.js';


function App() {
  const [quote, setQoute] = useState("");
  const [imgSRC, setImgSRC] = useState("");
  const [isLoading, isLoadingSet] = useState(false);
  return (
    <div>
    <header>
      <h1> Breaking Bad Quotes</h1>
    </header>
    <div className="App">


      <main className="main" id="main">
        
        <Button setQoute={setQoute} setImgSRC={setImgSRC} isLoadingSet={isLoadingSet}/>

        <D3Animation hidden={!isLoading}/>

        <div>{quote}</div>
        <img src={imgSRC}></img>
        </main>

    </div>
    </div>
  );
}

export default App;




