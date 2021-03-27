const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var polygon,polygonimg;

function preload() {
    polygonimg = loadImage("polygon.png");
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,680,1200,20);
    stand = new Ground(790,500,395,20);

    box1 = new Box(630,400,60,70);
    box2 = new Box(690,400,60,70);
    box3 = new Box(750,400,60,70);
    box4 = new Box(810,400,60,70);
    box5 = new Box(870,400,60,70);
    box6 = new Box(930,400,60,70);
    box7 = new Box(690, 330,60,70);
    box8 = new Box(750,330,60,70);
    box9 = new Box(810,330,60,70);
    box10 = new Box(870,330,60,70);
    box11 = new Box(750,260,60,70);
    box12 = new Box(810,260,60,70);
    box13 = new Box(780,190,60,70);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:300,y:200});


}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    stand.display();
    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    fill("pink");
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    fill("yellow");
    box11.display();
    box12.display();
    fill("lightgrey");
    box13.display();
    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();

}

function mouseDragged(){ 
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
 } 


function mouseReleased(){ 
    slingShot.fly(); 
}


function keyPressed(){ 
    if(keyCode === 32)
    { 
        slingShot.attach(this.polygon); 
    }
     }
