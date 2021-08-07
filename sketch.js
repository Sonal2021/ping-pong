var line;
var ball;
var pedal1;
var pedal2;
var edges;
function setup(){
  createCanvas(400,400)
  for (var i = 50; i < 400; i=i+50) {
  line=createSprite(200,i,5,30)
  }
  ball=createSprite(200,200,20,20)
  ball.shapeColor="white";
  pedal1=createSprite(10,200,10,70)
  pedal1.shapeColor="pink";
  pedal2=createSprite(390,200,10,70)
  pedal2.shapeColor="blue";
}
function draw(){
background("black")
pedal2.y=mouseY
if(keyDown("space"))
{
  ball.velocityX=3
  ball.velocityY=3
}
var edges=createEdgeSprites()
ball.bounceOff(edges[2])
ball.bounceOff(edges[3])
ball.bounceOff(pedal1)
ball.bounceOff(pedal2)
pedal1.y=ball.y
drawSprites()
}
