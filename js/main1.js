// JavaScript for drawing on canvas

window.onload = draw; // calls the function named "draw"
	var ctx;
	var linkText="homepage.html";
	var linkX=180;
	var linkY=78;
	var linkHeight=427;
	var linkWidth=415;
	var inLink = false;

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	ctx.beginPath(); // w/o this, color does not work as expected

	//add mouse listeners
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);

	// start @ 12 o'clock, clockwise
	// triangle 1
	ctx.beginPath();
	ctx.strokeStyle = "#E6E6E6"
	// ctx.fillStyle = "#E8E8E8";
	ctx.moveTo(400,110);
	ctx.lineTo(495,325); // draw line
	ctx.lineTo(600,208);
	ctx.closePath();
	ctx.stroke();
	// ctx.fill();

	// triangle 2
	ctx.beginPath();
	ctx.fillStyle = "#E6E6E6";
	ctx.moveTo(495,325);
	ctx.lineTo(600,208);
	ctx.lineTo(600,400);
	ctx.fill();
	// ctx.closePath();     // connect end to start
	// ctx.stroke();        // outline the shape that's been described

	// triangle 3
	ctx.beginPath();
	ctx.fillStyle = "#F2F2F2";
	ctx.moveTo(495,325);
	ctx.lineTo(600,400);
	ctx.lineTo(400,495);
	ctx.fill();

	// triangle 4
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.moveTo(495,325);
	ctx.lineTo(400,495);
	ctx.lineTo(215,405);
	ctx.fill();

	// triangle 5
	ctx.beginPath();
	ctx.fillStyle = "black"; // set color
	ctx.moveTo(495,325);
	ctx.lineTo(200,230);
	ctx.lineTo(215,405);
	ctx.fill();

	// triangle 4 second layer
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.strokeStyle = "white"
	ctx.moveTo(495,325);
	ctx.lineTo(400,495);
	ctx.lineTo(245,390);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	// triangle 5 second layer
	ctx.beginPath();
	ctx.fillStyle = "white"; // set color
	ctx.strokeStyle = "white"
	ctx.moveTo(495,325);
	ctx.lineTo(200,230);
	ctx.lineTo(245,390);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	// triangle 6
	ctx.beginPath();
	ctx.strokeStyle = "#E6E6E6"
	// ctx.fillStyle = "#A4A4A4";
	ctx.moveTo(200,230);
	ctx.lineTo(400,110);
	ctx.lineTo(495,325);
	//ctx.closePath();
	ctx.stroke()
	// ctx.fill();

	// eye left
	ctx.beginPath();
	ctx.fillStyle = "#2E2E2E";
	ctx.moveTo(475,300);
	ctx.lineTo(400,220);
	ctx.lineTo(350,300);
	ctx.lineTo(300,320);
	ctx.closePath();
	ctx.fill();

	// eye right
	ctx.beginPath();
	ctx.fillStyle = "#2E2E2E";
	ctx.moveTo(495,220);
	ctx.lineTo(540,285);
	ctx.lineTo(500,295);
	//ctx.lineTo(300,320);
	ctx.closePath();
	ctx.fill();

	// nose
	ctx.beginPath();
	ctx.fillStyle = "black"
  ctx.moveTo(530,310);
  ctx.quadraticCurveTo(425,310,520,345); // (cp1x, cp1y, x, y
  ctx.quadraticCurveTo(540,313,525,310);
  //ctx.quadraticCurveTo(125,25,75,25);
  ctx.stroke();
  ctx.fill()

  // mouth
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.moveTo(517,340);
	ctx.lineTo(500,355);
	ctx.lineTo(525,355);
	ctx.fill();

	// ear left
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 50;
	ctx.arc(270,190,70,0.60*Math.PI, 1.9*Math.PI, false) // (x,y,radius, startAngle, endAngle, counterClockwise)
	ctx.fillStyle = "#585858";
	ctx.stroke();
	ctx.fill();

	// ear right
	ctx.beginPath();
	ctx.arc(526,162,50,1.09*Math.PI, 0.19*Math.PI, false) // (x,y,radius, startAngle, endAngle, counterClockwise)
	ctx.fillStyle = "black";
	ctx.fill();

}


//check if the mouse is over the link and change cursor style
function on_mousemove (ev) {
  var x, y;

  // Get the mouse position relative to the canvas element.
  if (ev.layerX || ev.layerX == 0) { //for firefox
    x = ev.layerX;
    y = ev.layerY;
  }
  x-=canvas.offsetLeft;
  y-=canvas.offsetTop;

  //is the mouse over the link?
  if(x>=linkX && x <= (linkX + linkWidth) && y>=linkY && y<= (linkHeight + linkY) ){
      document.body.style.cursor = "pointer";
      inLink=true;
  }
  else{
      document.body.style.cursor = "";
      inLink=false;
  }
}

//if the link has been clicked, go to link
function on_click(e) {
  if (inLink)  {
    window.location = linkText;
	}}
}
