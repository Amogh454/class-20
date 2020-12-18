var boxA;
var boxB;


function setup() {
  createCanvas(800,400);
  boxA = createSprite(400, 200, 50, 50);
  boxA.shapeColor = "red";
  boxB = createSprite(300, 100, 20, 20);
  boxB.shapeColor = "red";

}

function draw() {
  background(255,255,255); 
  
  boxB.x = World.mouseX;
  boxB.y = World.mouseY;

  if(boxB.y - boxA.y < boxB.height/2+ boxA.height/2
    && boxA.y - boxB.y < boxB.height/2+ boxA.height/2
    && boxB. x- boxA.x < boxB.width/2+ boxA.width/2
    && boxA.x - boxB.x < boxB.width/2+ boxA.width/2){
   boxA.shapeColor = "blue";
   boxB.shapeColor = "blue";
  }

  else 
  {
    boxA.shapeColor = "red";
    boxB.shapeColor = "red";
  }




  drawSprites();
}