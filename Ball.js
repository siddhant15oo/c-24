class Ball extends BaseClass{
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.image=loadImage("assets/bubbles.png")
    
  }

  display() {
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  }
}
