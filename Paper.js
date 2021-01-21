class Paper {
    constructor(x,y){
       var options= {
           isStatic:false,
           friction:0.5,
           density:1.2,
           restitution:0.3
       }

       this.paper= Bodies.circle(x,y,20,options)
       this.diameter= 20;
       World.add(world, this.paper);
    }

    display(){
        fill("white")
        var angle = this.paper.angle;
        push();
        translate(this.paper.position.x, this.paper.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0, this.diameter);
        pop();
      
    }
}

