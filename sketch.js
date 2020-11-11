
var monkey , monkey_running,platform;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ong
var gamestate= "start";
function preload(){
  
  
  monkey_running =   
loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(200,200,20,20);
  monkey.addAnimation("jj",monkey_running);
  monkey.scale=0.139
  monkey.x=50
  monkey.y=340;
  //monkey.debug=true;
  obstacleGroup=createGroup();
  platform=createSprite(300,400,1250,40)
  platform.setCollider("rectangle",0,0,1200,20) 
  //platform.debug=true;
  ong= createSprite(200,0,20,20)
}


function draw() {
background("white")
  platform.velocityX=-7
  if(gamestate=="start"){
  ong.visible=false;
  ong.velocityX=-20;
  
  
  
  
    
//console.log(monkey.y)
  spawnObstacle();
  spawnBanana();
  
if(monkey.y>=345){
    
  if(keyDown("space")){
    monkey.velocityY=-23.5;
}
    
}
    
 
  monkey.velocityY=monkey.velocityY+1  
  monkey.collide(platform);
  if(platform.x<0){
    platform.x=300;
  }
  }
  if(ong.x<0){
    ong.x=200;
    score=score+1;
}
   
 
  monkey.depth=platform.depth+1;
  stroke("balck");
  fill("black")
  textFont("algerian")
  textSize(20);
  text("Survival Time: "+score,240,50)
  drawSprites();
}
function spawnObstacle(){
if(World.frameCount%60==0){
  obstacle=createSprite(625,350,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-7;
  obstacle.scale=0.2
  obstacle.lifetime=100;
  obstacle.debug=true;
  obstacle.setCollider("rectangle",0,0,470,200);
  obstacleGroup.add(obstacle)
}  
}
function spawnBanana(){
  if(World.frameCount%70==0){
  banana=createSprite(625,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=-0.1;
  banana.y=Math.round(random(50,300));
  banana.velocityX=-7;
}
}




