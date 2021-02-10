const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var B1, B2, B3, B4, B5;

function setup() {
	createCanvas(1000, 800);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(500, 175, 600, 20);

	bobDiameter = 60;

	Bx = width/2
	By = height/4 + 500;
	B1 = new Bob(Bx - bobDiameter * 2, By ,bobDiameter);
	B2 = new Bob(Bx - bobDiameter, By ,bobDiameter);
	B3 = new Bob(Bx, By ,bobDiameter);
	B4 = new Bob(Bx + bobDiameter, By ,bobDiameter);
	B5 = new Bob(Bx + bobDiameter * 2, By ,bobDiameter);
	
	rope1 = new Rope(B1.body, roof.body,-bobDiameter * 2, 0)
	rope2 = new Rope(B2.body, roof.body, -bobDiameter * 1, 0)
	rope3 = new Rope(B3.body, roof.body, 0, 0)
	rope4 = new Rope(B4.body, roof.body, bobDiameter * 1, 0)
	rope5 = new Rope(B5.body, roof.body, bobDiameter * 2, 0)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("#18181d");
  
  roof.display();

  B1.display("#0496ff");
  B2.display("#d81159");
  B3.display("#ffbc42");
  B4.display("#00edff");
  B5.display("#8f2d56");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  fill(255);
  stroke(255);
  textSize(25)
  text("1", 370, 150)
  text("2", 430, 150)
  text("3", 490, 150)
  text("4", 550, 150)
  text("5", 610, 150)
}

function keyPressed() {
  	if (keyCode === 49) {
    	Matter.Body.applyForce(B1.body,B1.body.position,{x:-150,y:-145});
  	}
	if (keyCode === 50) {
    	Matter.Body.applyForce(B1.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B2.body,B1.body.position,{x:-150,y:-145});
  	}

	if (keyCode === 51) {
    	Matter.Body.applyForce(B1.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B2.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B3.body,B1.body.position,{x:-150,y:-145});
  	}
	if (keyCode === 52) {
    	Matter.Body.applyForce(B1.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B2.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B3.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B4.body,B1.body.position,{x:-150,y:-145});
  	}
	if (keyCode === 53) {
    	Matter.Body.applyForce(B1.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B2.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B3.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B4.body,B1.body.position,{x:-150,y:-145});
		Matter.Body.applyForce(B5.body,B1.body.position,{x:-150,y:-145});
  	}
}

function drawLine(constraint)
{
	var bobBodyPosition = constraint.bodyA.position
	var roofBodyPosition = constraint.bodyB.position

	var roofBodyOffset = constraint.pointB;
	
	var roofBodyX = roofBodyPosition.x+roofBodyOffset.x
	var roofBodyY = roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

