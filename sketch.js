// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine, world;
var ground
var enemy1
var enemy2
var enemy3
var tanker
var cannonBall
var shootBall
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(0, 380, 12000, 20);
    tanker= new Tanker(200,375, 20,20);
    cannonBall= new CanonBall(200,50)
    enemy1= new Ball(1100, 360, 20);
    enemy2= new Ball(1100, 260, 20);
    enemy3= new Ball(1100, 160, 20);
    shootBall= new ShootBall(cannonBall.body,{x:20,y:360})
   
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background("white");
    Engine.update(engine)
    ground.display();
    tanker.display();
    cannonBall.display();
    enemy1.display();
    enemy2.display();
    enemy3.display();
     
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(cannonBall.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
   ShootBall.shoot();
    gameState = "launched";
}