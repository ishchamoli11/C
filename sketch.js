
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bobObject1=new bob(600,500.10,10)
	bobObject2=new bob(650,500,10,10)
	bobObject3=new bob(700,500,10,10)
	bobObject4=new bob(750,500,10,10)
	bobObject5=new bob(650,500,10,10)

	rope1=new rope(bobObject1.body,roofObject1.body,-bobDimeter*2,0);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  

  drawSprites();
 
}











































