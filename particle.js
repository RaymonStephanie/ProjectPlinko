class Particle {
    constructor(x,y,width,height) {
        var options = {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 0.3
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(random(0,255),random(0,255),random(0,255));
        ellipse(pos.x, pos.y, this.width, this.height);
        pop();
    }
}