import './Button.css';
import React, { useEffect, useRef, useState} from 'react';
import * as d3 from "d3";

function D3Animation(props) {
  const ref = useRef(null)

  useEffect(() => {
    f(ref)
    
  }, []);
  
  return (
    <div ref={ref} hidden={props.hidden}>

    </div>
  );
}

export default D3Animation;


function f(ref) {

    d3.select(ref.current).select("svg").remove();
    function degToRad (degrees) {
      return degrees * Math.PI / 180;
    }
    
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
  
      const svg = d3.select(ref.current).append('svg')
      .attr("width", 300).attr("height", 300)
    
     let width = + 300,
        height = + 300,
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
