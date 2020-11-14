var thickness,wall;
var bullet,speed,weight;



function setup() {
  createCanvas(800,400);
  bullet=createSprite(50,200,50,4);
  wall=createSprite(800,200,thickness,height/2);
  wall.shapeColor=color(10);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
}

function draw() {
  background(255,255,255);  
  
  
  bullet.velocityX=speed;

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 *weight *speed* speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge >=wallLeftEdge){
    return true
  }
  return false
}