import './Button.css';
import React, { useState, useRef, useEffect} from 'react';
import {BreakingBad} from "./breakingBadAPI/api.js";

function Button(props) {
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  
  useEffect(() =>
    {props.isLoadingSet(isButtonEnabled)},
    [isButtonEnabled]
  )

  return (
        <button className="button button--janus" id="button" disabled={isButtonEnabled} onClick={() => genQuote(props.setQoute, props.setImgSRC, setButtonEnabled)}><span>Generate Quote</span></button>
  );
}

export default Button;


function genQuote(quoteSetter, setterImgSRC, setButtonEnabled){
    setButtonEnabled(true)
    let quote = "";
    let imgSRC = "";
    quoteSetter(quote)
    setterImgSRC(imgSRC)
    //f(ref);

    const bb = new BreakingBad();
    let myPromise = new Promise(function(myResolve, myReject) {
      bb.getRandomQuote().then(data => {
        quote = data[0].quote + " (C) " +  data[0].author;
        imgSRC = bb.getImagePath(data[0].author);
        })
        
        setTimeout(() => {myResolve(); }, "5000")
        
      });


    myPromise.then( () =>{
      //d3.select("svg").remove();
      quoteSetter(quote)
      setterImgSRC(imgSRC)
      setButtonEnabled(false)
    }
      )
    }