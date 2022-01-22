class ComputerArrow{
    constructor(x,y,width,height,archerAngle){
        var options={
            restitution: 0.8,
            friction: 0.8,
            density: 0.8,
            isStatic: true
        };
        
        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        this.isRemoved = false;
        this.archerAngle = archerAngle;
        this.image = loadImage("assets/Arrow2.png");
        this.velocity = p5.Vector.fromAngle(archerAngle);
        World.add(world, this.body);
    }

    remove(index, arrows) {
        this.isRemoved = true;
        Matter.World.remove(world, this.body);
        arrows.splice(index, 1);
      }

    shoot(archerAngle){
        this.velocity = p5.Vector.fromAngle(archerAngle);
        this.velocity.mult(20);
        Matter.Body.setVelocity(this.body, {
            x: this.velocity.x,
            y: this.velocity.y 
        });
        Matter.Body.setStatic(this.body, false)
    }

    display() {
        var tmpAngle;
        if (this.body.velocity.y === 0) {
          tmpAngle = this.archerAngle + PI / 2;
        } else {
          tmpAngle = Math.atan(this.body.velocity.y / this.body.velocity.x) - PI;
        }
    
        Matter.Body.setAngle(this.body, tmpAngle);
    
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

}