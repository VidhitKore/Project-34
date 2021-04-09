class Superhero {
  constructor(x,y,width,height)
	{
		var options = { 
			isStatic:false,
			restitution:0,
			density: 1.2, 
			frictionAir: 1
		};
		this.body= bodies.rectangle(x,y,width,height,options);
		this.x=x;
		this.y=y;
		this.r=r;
		this.height=height;
		this.width=width;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
		    var angle= this.body.angle;
			var pos=this.body.position;
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
