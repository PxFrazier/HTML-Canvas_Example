const canvas = document.getElementById("canvas");
const cxt = canvas.getContext("2d");
cxt.canvas.width = window.innerWidth;
cxt.canvas.height = window.innerHeight / 2;
var objects = [];
var mouse = new Mouse();

window.addEventListener('mousemove', function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

function makeCharacters()
{
	let radius = Math.random() * 10;
	let circleX = Math.random() * (canvas.width - radius * 2) + radius;
	let circleY = Math.random() * (canvas.height - radius * 2) + radius;
	let speedX = (Math.random() - .5);
	let speedY = (Math.random() - .5);
	let circle = new Circle(circleX, circleY, radius, speedX, speedY);
	objects.push(circle);
}

for(var i = 0; i < 1500; i ++)
{
	makeCharacters();
}

function draw()
{
	cxt.clearRect(0, 0, canvas.width, canvas.height);
	cxt.font = "100px Arial";
	cxt.fillText("Programming is fun!", canvas.width / 4, canvas.height / 2);
	for(var i = 0; i < objects.length; i++)
	{
		objects[i].update();
	}
	window.requestAnimationFrame(draw);
}
draw();