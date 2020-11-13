const Engine = Matter.Engine
const World = Matter.World
const Bodies =Matter.Bodies
const Constraint = Matter.Constraint 

var engine,world



function setup() {
    createCanvas(1500,600)
    engine = Engine.create()
    world = engine.world

    ground = new Ground(width/2,height-30,width,20)
    bob = new Bob(300,400,60)
    rope = new Rope(bob.body,{x:300,y:50})

    box1 = new Box(450,550)
    box2 = new Box(450,500)
    box3 = new Box(450,450)
    box4 = new Box(450,400)
    box5 = new Box(450,350)
    box6 = new Box(450,300)
    box7 = new Box(450,200)
    box8 = new Box(450,150)
    box9 = new Box(450,100)
    box10 = new Box(450,50)

    box11 = new Box(500,550)
    box12= new Box(500,500)
    box13= new Box(500,450)
    box14= new Box(500,400)
    box15= new Box(500,350)
    box16 = new Box(500,300)
    box17 = new Box(500,250)
    box18 = new Box(500,200)
    box19 = new Box(500,150)
    box20= new Box(500,100)
    box21= new Box(500,50)

    box41 = new Box(550,550)
    box42= new Box(550,500)
    box43= new Box(550,450)
    box44= new Box(550,400)
    box45= new Box(550,350)
    box46 = new Box(550,300)

    box31 = new Box(600,550)
    box32= new Box(600,500)
    box33= new Box(600,450)
    box34= new Box(600,400)
    box35= new Box(600,350)
    box36 = new Box(600,300)
    box37 = new Box(600,250)
    box38 = new Box(600,200)
    box39 = new Box(600,150)
}

function draw() {
  background(255,255,255);  

  Engine.update(engine)

  ground.display();
  bob.display();
  rope.display();

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()

  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()

  box41.display()
  box42.display()
  box43.display()
  box44.display()
  box45.display()
  box46.display()

  box31.display()
  box32.display()
  box33.display()
  box34.display()
  box35.display()
  box36.display()
  box37.display()
  box38.display()
  box39.display()
}

function mouseDragged(){
   
  Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
  
}








