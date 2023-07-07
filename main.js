canva = document.getElementById("myCanvas")
ctx = canva.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			alphabetkey()
			document.getElementById("d1").innerHTML = "you pressed an Alphabet key"
			console.log("alphabet key")
		}
		
		if(keyPressed >=48 && keyPressed<=57)
		{
			numberkey()
			document.getElementById("d1").innerHTML = "you pressed a Nunber key"
			console.log("number key")
		}
		if(keyPressed >=37 && keyPressed<=40)
		{
			arrowkey()
			document.getElementById("d1").innerHTML = "you pressed an Arrow key"
			console.log("arrow key")
		}
		if( keyPressed >= 17 && keyPressed <= 18)
		{
			specialkey()
			document.getElementById("d1").innerHTML = "you pressed a Special key"
			console.log("special key")
		}
		if(( keyPressed >= 1 && keyPressed <= 16) ( keyPressed >= 19 && keyPressed <= 36) ( keyPressed >= 41 && keyPressed <= 47)( keyPressed >= 58 && keyPressed <= 64) ( keyPressed >= 123 && keyPressed <= 222))
		{
			otherkey()
			document.getElementById("d1").innerHTML = "you pressed an Other key"
			console.log("other key")
		}
}

function alphabetkey()
{
	img_image = "Alpkey.png"
	add()

}
function numberkey()
{
	img_image = "numkey.png"
	add()
}
function arrowkey()
{
	img_image = "Arrkey.png"
	add()
}
function specialkey()
{
	img_image = "spkey.png"
	add()
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
