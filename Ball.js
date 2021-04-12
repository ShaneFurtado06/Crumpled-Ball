class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            'friction':0.5,
            'restitution':0.3,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,20,options);
        this.x=x;
        this.y=y;
        this.r=20;
        this.image=loadImage("paper.png");
        World.add (world,this.body);
    }

    display(){
        var pos=this.body.position;

        push ();
            translate (pos.x,pos.y);
            rotate (this.body.angle);
            imageMode(CENTER);
            fill ("white");
            image(this.image,this.x,this.y,60,60);
        pop ();    
    }
}