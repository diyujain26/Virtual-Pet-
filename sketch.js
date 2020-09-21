const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

//Create variables here
var dog,happyDog, database, foodS, foodStock;

function preload()
{
  dog = loadImage("images/Dog.png")
  happyDogImg = loadImage("images/happyDog.png")
	//load images here
}

function setup() {
  database = firebase.database();

   //foodStock = database.ref('Food');
  //foodStock.on("value",readStock);

  engine = Engine.create();
  world = engine.world;
  
	canvas =  createCanvas(500,500);
 // var dog = createSprite(200,200,20,20);
  ball = Bodies.circle(50,200,20);
  //World.add(world,ball);

  ball1 = Bodies.circle(400,400,20);
  //World.add(world,ball1);

  //var dog = createSprite(200,10,20,10);
  //dog = loadImage("images/dog.png");
}


function draw() { 

  background(46, 139, 87);

  Engine.update(engine);
  
  imageMode(CENTER);
  image(dog,ball.position.x,ball.position.y,40,40);

  imageMode(CENTER);
  image(dog,ball1.position.x,ball1.position.y,40,40);

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
x=x-1;
  if(x<=0){
    x=0;
  }else{

  }

  database.ref('/').update({
    Food:x
  })
}