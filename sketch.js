 var box1,box2,box3,box4box5,box6,box7,box8,box9,ground1
 
 
 function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  box1 = new Block(330,235,30,40)
  box2 = new Block(360,235,30,40)
  box3 = new Block(390,235,30,40)
  box4 = new Block(420,235,30,40)
  box5 = new Block(450,235,30,40)
  box6 = new Block(360,195,30,40)
  box7 = new Block(390,195,30,40)
  box8 = new Block(420,195,30,40)
  box9 = new Block(390,155,30,40)
  ground1 = new Ground(390,240,1000,10)
 }

function draw() {
  background(255,255,255);  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground1.display();
}