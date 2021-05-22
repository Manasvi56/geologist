const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground
var engine, world;
var stone, iron, rubber, hammer;
var sand1, sand2, sand3, sand4, sand5, sand6;
var ground

function setup(){
var canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;
groundObject=Bodies.rectangle(100,570,3000,40);
stone = new Stone (700,320,100,100);
iron = new Iron (300,350);
rubber = new Rubber (900,450,70);
hammer = new Hammer (10,100);

sand1 = new Sand (505,450,11);
sand2 = new Sand (510,450,11);
sand3 = new Sand (515,450,11);
sand4 = new Sand (520,450,11);
sand4 = new Sand (525,450,11);
sand5 = new Sand (530,450,11);
sand6 = new Sand (535,450,11);



}

function draw(){
    background("Blue");
    Engine.update(engine);
    rect(groundObject.position.x,groundObject.position.y,3000,40);
    stone.display();
    iron.display();
    hammer.display();
    rubber.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
}
