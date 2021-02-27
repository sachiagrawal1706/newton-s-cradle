
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(width/2,50,width,20)
bob2=new Bob(width/2-50,150,100)
bob3=new Bob(width/2,150,100)
bob4=new Bob(width/2+50,150,100)
rope2=new Rope(bob2.body,{x:width/2-50,y:50})

rope3=new Rope(bob3.body,{x:width/2,y:50})
rope4=new Rope(bob4.body,{x:width/2+50,y:50})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300);
  roof.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope3.display();
  rope2.display();
  rope4.display();
  drawSprites();
 
}



