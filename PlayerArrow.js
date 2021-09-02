class PlayerArrow {
    constructor(x, y) {
        var options = {
            restitution:0.8,
            friction:1.0,
            denstity:1.0,
            isStatic:true
        };
        this.r = 40;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("assets/arrow.png");
        World.add(world, this.body);
      }
  
 shoot(archerAngle){
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body,false);
    Matter.body.setAngle(this.body, -PI/2);
    Matter.body.setVelocity(this.body, {x:velocity.x, y:velocity.y});
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}