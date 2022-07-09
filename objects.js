class Circle
{
	constructor(x, y, radius, speedX, speedY)
	{
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.speedX = speedX;
		this.speedY = speedY;
		this.maxRadius = 40;
		this.minRadius = 3;
		this.colorArray = ['rgba(255, 0, 100, 1)', 'rgba(100, 0, 255, 1)', 'rgba(100, 50, 200, 1)'];
		this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
	}
	makeCharacter()
	{
		cxt.beginPath();
		cxt.fillStyle = this.color;
		cxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		cxt.fill();
		cxt.stroke();
	}
	update()
	{
		if(this.x > canvas.width - this.radius || this.x < this.radius)
		{
			this.speedX = -this.speedX;
		}
		if(this.y > canvas.height - this.radius || this.y < this.radius)
		{
			this.speedY = -this.speedY;
		}
		this.x += this.speedX;
		this.y += this.speedY;
	
		if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50)
		{
			if(this.radius < this.maxRadius)
			{
				this.radius += 1;
			}
		}
		else if(this.radius > this.minRadius)
		{
			this.radius -= 1;
		}
		this.makeCharacter();
	}
}

class Mouse
{
	constructor()
	{
		this.x = undefined;
		this.y = undefined;
	}
}