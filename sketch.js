
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

let engine;
let world;

var rope;
var ground;


var ball,ball2,ball3;

var btn1;
var rope1


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  btn1 = createImg("up.png");
  btn1.position(30,30);
  btn1.size(50,50);
  btn1.mouseClicked(rightforce);
  
   var ball_options = {
    restitution: 0.95,
  }
   var ball_options1 = {
    isStatic:true
   }
  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,300,20,ball_options1);
  World.add(world,ball2);

  ball3 = Bodies.circle(300,200,20,ball_options);
  World.add(world,ball3);
    //BodyA or BodyB
    //PointA or PointB
    //Length
    //stiffness

  //PointA(x,y) and BodyB(ball) -use
  var options={
    pointA:{x:200,y:20}, 
    bodyB:ball, 
    length:130,
    stiffness:0.3
  }
  
  rope=Matter.Constraint.create(options);
  World.add(world,rope)

  var options1={
    bodyA:ball2,
    bodyB:ball3,
    length:150,
    stiffness:0.3,

  }

  rope1=Matter.Constraint.create(options1);
  World.add(world,rope1);
  // rope=Matter.Constraint.create({
  //   pointA:{x:200,y:20}, 
  //   bodyB:ball, 
  //   length:100,
  //   stiffness:0.1
  // });
  // World.add(world,rope)
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("pink");
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();

  ellipse(ball2.position.x,ball2.position.y,20);

  ellipse(ball3.position.x,ball3.position.y,20);
  
  //Draw the constraint
  //line(x1,y1,x2,y2)
  push()

  stroke("green");
  strokeWeight(5);
  line(rope.pointA.x,rope.pointA.y,ball.position.x,ball.position.y)

  pop()
 
  line(ball2.position.x,ball2.position.y,ball3.position.x,ball3.position.y)
  
  

}

function rightforce()
{
   Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

