"use strict";

//Random Circles
const canvasCircles = document.getElementById("circles");
const cntxCircles = canvasCircles.getContext("2d");
const circleBtn = document.querySelector(".refresh-circles");
const circlesInitialsInput = document.querySelector(".circles-initials");

createRandomCircles();
circleBtn.addEventListener("click", function() {
    createRandomCircles()
});
function createRandomCircles(){
    let circlesNumber = Math.floor(Math.random()*100);
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
    
    let text = circlesInitialsInput.value;
    cntxCircles.font = "30px 'Nothing You Could Do'";
    cntxCircles.textAlign = "right";
    cntxCircles.fillText(text, canvasCircles.width - 20, canvasCircles.height -20);
}
}

//Random Squares
const canvasSquares = document.getElementById("squares");
const cntxSquares = canvasSquares.getContext("2d");
const squaresBtn = document.querySelector(".refresh-squares");
const squaresInitialsInput = document.querySelector(".squares-initials");

createRandomSquares();
squaresBtn.addEventListener("click", function() {
    createRandomSquares()
});
function createRandomSquares() {
    let squaresNumber = Math.floor(Math.random()*100);
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
                
                let text = squaresInitialsInput.value;
                cntxSquares.font = "30px 'Nothing You Could Do'";
                cntxSquares.textAlign = "right";
                cntxSquares.fillText(text, canvasSquares.width - 20, canvasSquares.height -20);
            }
        }
//Random Triangles
const canvasTriangles = document.getElementById("triangles");
const cntxTriangles = canvasTriangles.getContext("2d");
const trianglesBtn = document.querySelector(".refresh-triangles");
const trianglesInitialsInput = document.querySelector(".triangles-initials");

createRandomTriangles();
trianglesBtn.addEventListener("click", function() {
    createRandomTriangles();
});
function createRandomTriangles() {
    let TrianglesNumber = Math.floor(Math.random()*100);
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
                cntxTriangles.strokeStyle = "#FFF";
                
                let text = trianglesInitialsInput.value;
                cntxTriangles.font = "30px 'Nothing You Could Do'";
                cntxTriangles.textAlign = "right";
                cntxTriangles.fillText(text, canvasTriangles.width - 20, canvasTriangles.height -20);
            }
        }

const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener('click', function (e) {
   let image = canvasCircles.toDataURL("image/png");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    
    image.saveAsPNG(canvasCircles);
   
});




