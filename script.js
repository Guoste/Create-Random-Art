"use strict";
let canvasCircles = document.getElementById("circles");
let cntxCircles = canvasCircles.getContext("2d");
let circlesNumber = Math.floor(Math.random()*300);

cntxCircles.clearRect(0, 0, 600, 600);
for(let i = 0; i <circlesNumber; i++) {
    let x = Math.floor(Math.random()*500);
    let y = Math.floor(Math.random()*500);
    let radius = Math.floor(Math.random()*300);
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let a = Math.random().toFixed(2);

    cntxCircles.beginPath();
    cntxCircles.arc(x,y,radius,0,2*Math.PI);
    cntxCircles.fillStyle = `rgba(${red}, ${green}, ${blue}, ${a})`;
    cntxCircles.fill();
    cntxCircles.closePath();
    cntxCircles.stroke();
}

let canvasSquares = document.getElementById("squares");
let cntxSquares = canvasSquares.getContext("2d");
let squaresNumber = Math.floor(Math.random()*300);

cntxSquares.clearRect(0, 0, 600, 600);
for(let i = 0; i <squaresNumber; i++) {
    let x = Math.floor(Math.random()*500);
    let y = Math.floor(Math.random()*500);
    let width = Math.floor(Math.random()*300);
    let height = Math.floor(Math.random()*300);
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let a = Math.random().toFixed(2);

    cntxSquares.fillRect(x,y,width,height);
    cntxSquares.fillStyle = `rgba(${red}, ${green}, ${blue}, ${a})`;
    cntxSquares.fill();    
}

let canvasTriangles = document.getElementById("triangles");
let cntxTriangles = canvasTriangles.getContext("2d");
let TrianglesNumber = Math.floor(Math.random()*300);

cntxTriangles.clearRect(0, 0, 600, 600);
for(let i = 0; i <TrianglesNumber; i++) {
    let x = Math.floor(Math.random()*600);
    let y = Math.floor(Math.random()*600);
    let w = Math.floor(Math.random()*600);
    let z = Math.floor(Math.random()*600);
    let v = Math.floor(Math.random()*600);
    let i = Math.floor(Math.random()*600);
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let a = Math.random().toFixed(2);

    cntxTriangles.beginPath();
    cntxTriangles.moveTo(x, y);
    cntxTriangles.lineTo(w, z);
    cntxTriangles.lineTo(v, i);
    cntxTriangles.closePath();
    
    cntxTriangles.fillStyle = `rgba(${red}, ${green}, ${blue}, ${a})`;
    cntxTriangles.fill();
    cntxTriangles.stroke();
}






