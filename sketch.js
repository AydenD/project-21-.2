var bullet,bullet2,wall;
var bullet,bullet2,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(400,400);
  car=createSprite(50, 50,20,10);
  car.velocityX = random(20,30);
  car.shapeColor = "pink";

  car2=createSprite(50,300,20,10);
  car2.velocityX = random(20,30);
  car2.shapeColor = "blue";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  speed=random(223,321);

  weight=random(30,52);

  thickness=random(22,83)

}

function draw() {
  background("black");  
  
  if (wall.x-car.x<(car.width+wall.widht)/2){
    car.velocityX=0;
    var deformatiom=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColour=color(255,0,0);
    }
  
    if(deformation<180 &&deformation>100){
      car.shapeColor=color(230,230,0)
    }
  
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }

  
  
}
  
  
  drawSprites();
}

function hasCollided(Lbullet, Lwall){
  
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
 {
    return true
 }
  return false;

  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

if (damage>10)
{
  wall.shapeColor=color(255,0,0);
  }
    
if (damage<10)
{
  wall.shapeColor=color(0,255,0);
}
  
    drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftedge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
}