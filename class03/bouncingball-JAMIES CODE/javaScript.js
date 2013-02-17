var box = document.getElementById("box");
var container = document.getElementById("container");


var x = 1;
var y =1;

var xspeed =5;
var yspeed= 5;

var maxX = container.clientWidth;//width of the container
var maxY = container.clientHieght;

var boxWidth = box.clientWidth; //the width of the bouncing box
var boxHeight = box.clientHieght;


setInterval(funtion(){
//if 11 is greateer or equal to maxwidth and x is smaller than or equal to 0
if(x+boxWidth >= maxX || x <= 0){ //not checking at the other side cause it's 0
  //take xspeed nad multple it by -1
  xspeed *= -1;
}
if(y+boxHeight >= maxY || y <=0){
   yspeed *= -1;
   }
}
