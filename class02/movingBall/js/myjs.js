			var box ;			
			var dx= 5;
			var dy=5;
			var y=150;
			var x=10;
			//this is where the drawing begins
		
		
		function draw(){
			box= myCanvas.getContext('2d');
			box.clearRect(0,0,300,300);
			box.beginPath();
			var my_gradient=box.createLinearGradient(0,0,0,170);
			my_gradient.addColorStop(0,"blue");
			my_gradient.addColorStop(1,"black");
			my_gradient.addColorStop(0.5,"purple");
			box.fillStyle= my_gradient;
			//create an circle
			box.arc(x,y,15,75,50,0,2*Math.PI);
			box.closePath();
			box.fill();
			//box.rotate(10*Math.PI/180);
			//var img = document.getElementById("square");
			//box.drawImage(img, 0, 0);
				
			if( x<0 || x>280)
			dx=-dx;
			if( y<0 || y>160)
				dy=-dy;
				x+=dx;
				y+=dy;

			}
			
			
			//setting the time event
		setInterval(draw,15);  
	











	/*
	var box ;			
			var dx= 4;
			var dy=4;
			var y=150;
			var x=10;
			//this is where the drawing begins
		
		
		function draw(){
			box= myCanvas.getContext('2d');
			box.clearRect(0,0,300,300);
			box.beginPath();
			box.fillStyle="#0000ff";
			//create an circle
			box.arc(x,y,10,75,50,0,2*Math.PI);
			box.closePath();
			box.fill();
			//box.rotate(10*Math.PI/180);
				
			
			if( x<0 || x>280)
			dx=-dx;
			if( y<0 || y>180)
				dy=-dy;
				x+=dx;
				y+=dy;
			}
		setInterval(draw,10);  
	
*/

	
