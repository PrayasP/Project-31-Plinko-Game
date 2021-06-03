class Particle{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.1,
            density: 1.2
        }
        // this.radius = 10;
        this.body = Bodies.circle(x-120,y,radius,options);
        this.radius = radius;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}