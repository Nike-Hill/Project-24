var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,height,800,20)
	box = new TrashCan(290,600,20,100);
	box2 = new TrashCan(400,640,200,20);
	box3 = new TrashCan(510,600,20,100);
	ball = new Paper(100,680,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  box.display();
  box2.display();
  box3.display();
  ball.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position, {x: 40, y: -305});

	}

	if (keyCode === DOWN_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position, {x: -40, y: -305});

	}

}


