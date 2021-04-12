class Db{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        World.add (world,this.body);
    }

    display(){
        var pos=this.body.position;

        push ();
            translate (pos.x,pos.y);
            rectMode(CENTER);
            //fill ("red");
            //rect(0+60,0+35,this.width,this.height);
        pop ();    
    }
}