//crumbled ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    binI=loadImage("dustbin.png");
}

function setup(){
    createCanvas(900,500);
    engine = Engine.create();
	world = engine.world;

    //ball
    ball=new Ball(70,50);

    //ground
    ground=new Ground(0,456,6000,10);

    //dustbin
    d1=new Db(700,395,10,100);
    d2=new Db(830,d1.y,d1.width,d1.height);
    d3=new Db(765,451,140,10);

    Engine.run(engine); 
}

function draw(){
    background("yellow");

    //ball
    ball.display();

    //console.log(ball.x,ball.y);

    //ground
    ground.display();

    //dustbin
    d1.display();
    d2.display();
    d3.display();

    image(binI,700,310,240,190);

    drawSprites();
    textSize(40);
    fill("black");
    text("Crumpled Ball",50,50);
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:22,y:-22})
    }
}