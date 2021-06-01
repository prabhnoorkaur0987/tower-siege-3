const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine,world

var ground
var polygon,polygonImg
var sling1
var bg="bg1.png"

var backgroundimage
function preload(){

 getBackgroundImg()
}
function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
world=engine.world;






ground1 = new Ground(500, 500, 320, 20);
ground2 = new Ground(800, 300, 320, 20);
ground3 = new Ground(600,height,1500,20)
box1=new Box(400,465,50,50)
box2=new Box(470,465,50,50)
box3=new Box(540,465,50,50)
box4=new Box(610,465,50,50)

//line2
box5=new Box(450,415,50,50)
box6=new Box(510,415,50,50)
box7=new Box(570,415,50,50)
//line3
box8=new Box(480,365,50,50)
box9=new Box(540,365,50,50)
//lastline
box10=new Box(510,315,50,50)




//next tower
box11=new Box(720,265,50,50)
box12=new Box(780,265,50,50)
box13=new Box(840,265,50,50)
box14=new Box(900,265,50,50)

//line2
box15=new Box(750,215,50,50)
box16=new Box(810,215,50,50)
box17=new Box(870,215,50,50)
//line3
box18=new Box(780,165,50,50)
box19=new Box(835,165,50,50)
//lastline
box20=new Box(810,115,50,50)
polygon1 = new Polygon(300, 200, 50, 50);

  sling1 = new Launcher(polygon1.body, { x: 70, y: 200 });
  Engine.run(engine)
}

function draw() {
  if(backgroundimage)
        background(backgroundimage);
  
 
  
 
  polygon1.display()

sling1.display()
 ground1.display();
 ground2.display();
ground3.display()
fill("blue")
 box1.display()
box2.display()
box3.display()
box4.display()




fill("yellow")
box5.display()
box6.display()
box7.display()

fill("Red")
  box8.display()
box9.display()
fill("grey")
box10.display()
fill("purple")
box11.display()
box12.display()
box13.display()
box14.display()
fill("green")
box15.display()
box16.display()
box17.display()
fill("orange")
box18.display()
box19.display()
fill("grey")
box20.display()
drawSprites()

 
}
function mouseDragged(){
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling1.fly()
}
function keyPressed(){
  if(keyCode===32){
    sling1.attach(polygon1.body)
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bg = "bg1.png";
  }
  else{
      bg= "bg2.jpg";
  }

  backgroundimage = loadImage(bg);
  console.log(backgroundimage);
}
