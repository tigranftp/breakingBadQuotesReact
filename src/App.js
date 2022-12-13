import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {BreakingBad} from "./breakingBadAPI/api.js";
import * as d3 from "d3";

function App() {
  const [quote, setQoute] = useState("");
  const [imgSRC, setImgSRC] = useState("");
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  return (
    <div>
    <header>
      <h1> Breaking Bad Quotes</h1>
    </header>
    <div className="App">


      <main className="main" id="main">
        <button className="button button--janus" id="button" disabled={isButtonEnabled} onClick={() => genQuote(setQoute, setImgSRC, setButtonEnabled)}><span>Generate Quote</span></button>
        <div>{quote}</div>
        <img src={imgSRC}></img>
        </main>

    </div>
    </div>
  );
}

export default App;






  function f() {


    function degToRad (degrees) {
      return degrees * Math.PI / 180;
    }
    
    // Returns a tween for a transition’s "d" attribute, transitioning any selected
    // arcs from their current angle to the specified new angle.
    function arcTween(newAngle, angle) {
      return function(d) {
        var interpolate = d3.interpolate(d[angle], newAngle);
        return function(t) {
          d[angle] = interpolate(t);
          return arc(d);
        };
      };
    }
  const animationTime = 500;
  const loaderRadius = 60;
  const loaderColor = '#135c09';
  
  var arc = d3.arc()
      .innerRadius(20)
      .outerRadius(loaderRadius);
  
  let svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
      svg.append("rect")
      .attr("x",  width / 2-10)
      .attr("y", height / 2-loaderRadius+10)
      .attr("width", 20)
      .attr("height", loaderRadius-10)
      .style("fill", "#ffffff");
      
  var loader = g.append("path")
      .datum({endAngle: 0, startAngle: 0})
      .style("fill", loaderColor)
      .attr("d", arc);
  
  d3.interval(function() {
    loader.datum({endAngle: 0, startAngle: 0})
    
    loader.transition()
        .duration(animationTime)
        .attrTween("d", arcTween(degToRad(360), 'endAngle'));
    
     loader.transition()
        .delay(animationTime)
        .duration(animationTime)
        .attrTween("d", arcTween(degToRad(360), 'startAngle'));
  }, animationTime * 2);



  }




  function genQuote(quoteSetter, setterImgSRC, setButtonEnabled){
    setButtonEnabled(true)
    let quote = "";
    let imgSRC = "";
    quoteSetter(quote)
    setterImgSRC(imgSRC)
    if (document.getElementById("quoteCharacter") != null){
      document.getElementById("quoteCharacter").remove()
    }
    if (document.getElementById("imgCharacter") != null){
      document.getElementById("imgCharacter").remove()
    }
    const main = document.getElementById("main");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute('width', '200');
    svg.setAttribute('height', '200');
    main.appendChild(svg);
    f();
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("id", "imgCharacter");
    img.hidden= true;
    const bb = new BreakingBad();
    let myPromise = new Promise(function(myResolve, myReject) {
      bb.getRandomQuote().then(data => {
        quote = data[0].quote + " (C) " +  data[0].author;
        imgSRC = bb.getImagePath(data[0].author);
        })
        
        setTimeout(() => {myResolve(); }, "5000")
        
      });


    myPromise.then( () =>{
      d3.select("svg").remove();
      quoteSetter(quote)
      setterImgSRC(imgSRC)
      img.hidden= false;
      setButtonEnabled(false)
    }
      )
    }
