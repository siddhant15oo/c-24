class Tanker extends BaseClass {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.image=loadImage("assets/tank.png")
    };

    display(){
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
