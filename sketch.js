
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var floor;
var left, bottom, right;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,200,45)

	floor = new Ground(200, 700, 900, 50);

	left = new Bin(450, 620, 20, 100);
	bottom = new Bin(510, 660, 100, 20);
	right = new Bin(570, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  floor.display();

  left.display();
  bottom.display();
  right.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === DOWN_ARROW) {
    Matter.Body.applyForce(paper.body, paper_pos, {x:85, y: 85})
	}
}



