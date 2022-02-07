var boy;
var ground, groundImg
var invisibleGround;
var score;
var obstacles, obstaclesGroup
var boyImg, groundImg;



function preload(){
    boyImg= loadAnimation("Runner-1.png", "Runner-2.png")
    groundImg = loadImage("ground.png")

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    boy = createSprite(width/2,height-20, 20, 20);
    boy = addAnimation("running", boyImg);
    
    
    ground = createSprite(width/2, 200);
    ground.addImage(groundImg);
    ground.velocityY = 4;
}

function draw() {
    drawSprites();

}