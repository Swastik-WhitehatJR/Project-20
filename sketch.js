var canvas,bg;
var cat, catImg1,catImg2;
var rat, ratImg1,ratImg2;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/catOne.png");
    catImg2=loadAnimation("images/catTwo.png","images/catThree.png");
    catImg3= loadAnimation("images/catFour.png");
    ratImg1=loadAnimation("images/ratOne.png");
    ratImg2= loadAnimation("images/ratTwo.png","images/ratThree.png");
    ratImg3=loadAnimation("images/ratFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.2;
    cat.setCollider("circle",0,0,400);

    rat = createSprite(200, 600);
    rat.addAnimation("ratStanding", ratImg1);
    rat.scale = 0.15;
    rat.setCollider("circle",0,0,400);
}

function draw() {

    background(bg);

    console.log((cat.width - rat.width)/2);
    console.log(cat.x - rat.x);

    if(cat.x - rat.x <= cat.width*2 - rat.width*2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");

        rat.addAnimation("ratLastImage", ratImg3);
        rat.scale=0.15;
        rat.changeAnimation("ratLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyDown = "LEFT_ARROW"){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        rat.addAnimation("ratTeasing", ratImg2);
        rat.changeAnimation("ratTeasing");
    }
}