//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;
background_image = "https://r-s-grewal.github.io/P-85/parkingLot.jpg";
greencar_image = "https://r-s-grewal.github.io/P-85/car2.png";

//greencar_x = 75;
//greencar_y = 325;
greencar_x = 5;
greencar_y= 225;

function add() {
	background_imgTag = new Image(); 				//defining a variable with a new image
	background_imgTag.onload = uploadBackground; 	// setting a function, onloading this variable
	background_imgTag.src = background_image;   	// load image

	greencar_imgTag = new Image(); 				//defining a variable with a new image
	greencar_imgTag.onload = uploadgreencar; 	// setting a function, onloading this variable
	greencar_imgTag.src = greencar_image;  		 // load image

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
	}
	function up()
{
	//Define function to move the car upward
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_y >=0)
	{
		greencar_y = greencar_y + 10;
		console.log("When down arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(greencar_y >=0)
	{
		greencar_x = greencar_x - 10;
		console.log("When left arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(greencar_y >=0)
	{
		greencar_x = greencar_x + 10;
		console.log("When right arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
