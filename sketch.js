var car,wall;
var speed,weight;

function setup() {
  createCanvas(1400,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = color(255);

  wall = createSprite(1300,200,60,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(150); 
  
  if(wall.x-car.x<(car.width+wall.width)/2){
     car.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed/22509;
      if(deformation>180) {
        car.shapeColor = color(225,0,0);
        fill("red");
        textSize(30);
        text("rating :LETHAL",400,100);
      }
      if(deformation<180 && deformation>100){
        car.shapeColor = color(230,230,0);
        fill("yellow");
        textSize(30);
        text("rating : AVERAGE",400,100)
      }
      if(deformation<100){
        car.shapeColor = color(0,225,0);
        fill("green");
        textSize(30);
        text("rating :GOOD",400,100);
      }
      fill("black");
      stroke(100);
      textSize(30);
      text("speed = "+ speed,400,300);
      
      fill("black");
      stroke(100);
      textSize(30);
      text("weight = "+ weight ,400,250);

      fill("black");
      stroke(100);
      textSize(30);
      text("deformation = "+ deformation,400,200);


  }
  drawSprites();
}