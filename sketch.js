function setup() {
  createCanvas(400, 400);
}
//new notifies the machine there is a new object to be created
//after new tell from which Class it has to make the object from
//add () after the class name
//why do we add () -> machine will go to constructor and give the properties to the object;
var rightPaddle;
 rightPaddle = new Paddle();
function draw() {
  //to paint the background white
  background("white");
  //draws the right paddle
 rightPaddle.x=390;
rightPaddle.y=mouseY;
rightPaddle.color="black";
rightPaddle.display();
  
  //draws the left paddle

  //draws the balll
  rect(200,200,10,10);
}
