"use strict";

//Random Circles
const canvasCircles = document.getElementById("circles");
const cntxCircles = canvasCircles.getContext("2d");
const circleBtn = document.querySelector(".refresh-circles");
const circlesInitialsInput = document.querySelector(".circles-initials");
let imgCircles = canvasCircles.toDataURL("image/jpeg");
let downloadCircles = document.querySelector(".download-circles-btn");
let downloadSquares = document.querySelector(".download-squares-btn");
let downloadTriangles = document.querySelector(".download-triangles-btn");
let downloadLines = document.querySelector(".download-lines-btn");

createRandomCircles();
circleBtn.addEventListener("click", function () {
    createRandomCircles()
});
function createRandomCircles() {
    let circlesNumber = Math.floor(Math.random() * 50);
    cntxCircles.clearRect(0, 0, 600, 600);
    for (let i = 0; i < circlesNumber; i++) {
        let x = Math.floor(Math.random() * 500);
        let y = Math.floor(Math.random() * 500);
        let radius = Math.floor(Math.random() * 300);
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let a = Math.random().toFixed(2);

        cntxCircles.beginPath();
        cntxCircles.arc(x, y, radius, 0, 2 * Math.PI);
        cntxCircles.fillStyle = `rgba(${red}, ${green}, ${blue}, ${a})`;
        cntxCircles.fill();
        cntxCircles.closePath();

        let text = circlesInitialsInput.value;
        cntxCircles.font = "30px 'Nothing You Could Do'";
        cntxCircles.textAlign = "right";
        cntxCircles.fillText(text, canvasCircles.width - 20, canvasCircles.height - 20);
    }
}

//Random Squares
const canvasSquares = document.getElementById("squares");
const cntxSquares = canvasSquares.getContext("2d");
const squaresBtn = document.querySelector(".refresh-squares");
const squaresInitialsInput = document.querySelector(".squares-initials");

createRandomSquares();
squaresBtn.addEventListener("click", function () {
    createRandomSquares()
});
function createRandomSquares() {
    let squaresNumber = Math.floor(Math.random() * 50);
    cntxSquares.clearRect(0, 0, 600, 600);
    for (let i = 0; i < squaresNumber; i++) {
        let x = Math.floor(Math.random() * 500);
        let y = Math.floor(Math.random() * 500);
        let width = Math.floor(Math.random() * 300);
        let height = Math.floor(Math.random() * 300);
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let a = Math.random().toFixed(2);

        cntxSquares.fillRect(x, y, width, height);
        cntxSquares.fillStyle = `rgba(${red}, ${green}, ${blue}, ${a})`;
        cntxSquares.fill();
        
        let text = squaresInitialsInput.value;
        cntxSquares.font = "30px 'Nothing You Could Do'";
        cntxSquares.textAlign = "right";
        cntxSquares.fillText(text, canvasSquares.width - 20, canvasSquares.height - 20);
    }
}

//Random Triangles
const canvasTriangles = document.getElementById("triangles");
const cntxTriangles = canvasTriangles.getContext("2d");
const trianglesBtn = document.querySelector(".refresh-triangles");
const trianglesInitialsInput = document.querySelector(".triangles-initials");

createRandomTriangles();
trianglesBtn.addEventListener("click", function () {
    createRandomTriangles();
});
function createRandomTriangles() {
    let trianglesNumber = Math.floor(Math.random() * 50);
    cntxTriangles.clearRect(0, 0, 600, 600);
    for (let i = 0; i < trianglesNumber; i++) {
        let x = Math.floor(Math.random() * 600);
        let y = Math.floor(Math.random() * 600);
        let w = Math.floor(Math.random() * 600);
        let z = Math.floor(Math.random() * 600);
        let v = Math.floor(Math.random() * 600);
        let i = Math.floor(Math.random() * 600);
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
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
        cntxTriangles.fillText(text, canvasTriangles.width - 20, canvasTriangles.height - 20);
    }
}

//Random Lines
const canvasLines = document.getElementById("lines");
const cntxLines = canvasLines.getContext("2d");
const linesBtn = document.querySelector(".refresh-lines");
const linesInitialsInput = document.querySelector(".lines-initials");

createRandomLines();
linesBtn.addEventListener("click", function () {
    createRandomLines();
});

function createRandomLines() {
    let linesNumber = Math.floor(Math.random() * 100);
    cntxLines.clearRect(0, 0, 600, 600);
    for (let i = 0; i < linesNumber; i++) {
        let x = Math.floor(Math.random() * 600);
        let y = Math.floor(Math.random() * 600);
        let w = Math.floor(Math.random() * 600);
        let z = Math.floor(Math.random() * 600);
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let a = Math.random().toFixed(2);
        
        cntxLines.beginPath();
        cntxLines.moveTo(x, y);
        cntxLines.lineTo(w, z);
        cntxLines.closePath();
        
        cntxLines.stroke();
        cntxLines.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${a})`;
        cntxLines.lineWidth = 3;
        
        let text = linesInitialsInput.value;
        cntxLines.font = "30px 'Nothing You Could Do'";
        cntxLines.textAlign = "right";
        cntxLines.fillStyle = `rgba(${red}, ${green}, ${blue}, ${a})`;
        cntxLines.fillText(text, canvasLines.width - 20, canvasLines.height - 20);
    }
} 

// Download

function canvasToImage(canvas) {
    let w = canvas.width;
    let h = canvas.height;
    let data;
    let context = canvas.getContext("2d");
    data = context.getImageData(0, 0, w, h);
    let compositeOperation = context.globalCompositeOperation;
    context.globalCompositeOperation = "destination-over";
    context.fillStyle = "#fff";
    context.fillRect(0, 0, w, h);
    let imageData = canvas.toDataURL("image/png");
    context.clearRect(0, 0, w, h);
    context.putImageData(data, 0,0);
    context.globalCompositeOperation = compositeOperation;
    return imageData;  
}

downloadCircles.addEventListener("click", function(){
    let data = canvasToImage(canvasCircles);
    downloadCircles.href = data;
    }, false );

downloadSquares.addEventListener("click", function(){
    let data = canvasToImage(canvasSquares);
    downloadSquares.href = data;
    }, false );

downloadTriangles.addEventListener("click", function(){
    let data = canvasToImage(canvasTriangles);
    downloadTriangles.href = data;
    }, false );

downloadLines.addEventListener("click", function(){
    let data = canvasToImage(canvasLines);
    downloadLines.href = data;
    }, false );



