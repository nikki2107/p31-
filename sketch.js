const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;

var score = 0;
var particle;
var turn = 0;


var gameState = "play"


function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
    
	particle = new Particle(mouseX,10,10);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,790,800,20)
	Engine.run(engine);

	for (var k = 0; k <=width; k = k + 80) {
		divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
	  }
   
   
	   for (var j = 75; j <=width; j=j+50) 
	   {
	   
		  plinkos.push(new Circle(j,75));
	   }
   
	   for (var j = 50; j <=width-10; j=j+50) 
	   {
	   
		  plinkos.push(new Circle(j,175));
	   }
   
		for (var j = 75; j <=width; j=j+50) 
	   {
	   
		  plinkos.push(new Circle(j,275));
	   }
   
		for (var j = 50; j <=width-10; j=j+50) 
	   {
	   
		  plinkos.push(new Circle(j,375));
	   }
   
	   
   
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  drawSprites();
 
  for (var i = 0; i < plinkos.length; i++) {
     
	plinkos[i].display();
	
  }
  

 
  
  for (var k = 0; k < divisions.length; k++) {
	
	divisions[k].display();
  }

  if (particle !== null){
	
	  particle.display();
	  if(particle.body.position.y>760)
	  {
		  if(particle.body.position.x<300){
			  score = score + 500;
			  particle = null;
			  if(count>=5){
				  gameState = "end";
			  }

		  }
	  }
  }

  if (particle !== null){
	
	  particle.display();
	  if(particle.body.position.y>760)
	  {
		  if(particle.body.position.x>301  &&
			particle.body.position.x<600){
			  score = score + 100;
			  particle = null;
			  if(count>=5){
				  gameState = "end";
			  }

		  }
	  }
  }

  if (particle !== null){
	
	  particle.display();
	  if(particle.body.position.y>760)
	  {
		  if(particle.body.position.x>600  &&
			particle.body.position.x<900){
			  score = score + 200;
			  particle = null;
			  if(count>=5){
				  gameState = "end";
			  }

		  }
	  }
  }
  
  textSize(20)
 text("Score : "+score,20,20)

}

function mousePressed(){
	if (gameState!=="end"){
		count++;
		particle = new Particle(mouseX,10,10,10);
	}
}