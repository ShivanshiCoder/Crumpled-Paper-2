
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper =new Paper(100,300,20);

 ground =new Ground(400,380,800,20);

 leftSide= new Dustbin(550,320,20,100);
 bottom= new Dustbin(610,360,100,20);
 rightSide =new Dustbin(670,320,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //engine.Update(Engine);
  
  ground.display();
  paper.display();

  leftSide.display();
  bottom.display();
  rightSide.display();
  
  drawSprites();
}

   
function keyPressed() {
     if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-20})
     }


    }




