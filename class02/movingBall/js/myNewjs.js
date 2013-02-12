
var box;

var x=100;

var y=10;

var dx=5;

var dy=5;


 
  function draw(){
  box= myCanvas.getContext('2d');
  box.clearRect(0,0, 300,300);
  box.beginPath();
  box.fillStyle="red";

  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas

  box.arc(x,y,100,0,Math.PI*2,true);

  box.closePath();

  box.fill();

  x+=dx;

  y+=dy;

}

 setInterval(draw,10);
 
