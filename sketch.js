var bgImg;
var cat,catImg,catImg2;
var mouse,mouseImg,mouseImg2;

function preload() {
    //load the images here
    bgImg=loadImage('images/garden.png')
    catImg=loadAnimation('images/cat1.png')
    catImg1= loadAnimation('images/cat3.png'),
    catImg2= loadAnimation('images/cat4.png')
    mouseImg=loadAnimation('images/mouse1.png')
    mouseImg1= loadImage("images/mouse3.png")
    mouseImg2= loadAnimation('images/mouse2.png')
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,50,80);
    cat.scale=0.15
    mouse=createSprite(100,600,30,50);
    mouse.scale=0.2

    cat.addAnimation("catsitting",catImg);
    mouse.addAnimation('mouseeating',mouseImg);
    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown(LEFT_ARROW)){ 
        cat.x= cat.x-2
    }
    if(cat.x-mouse.x< (cat.width/4+mouse.width/4)){
        mouse.addAnimation("mousehappy",mouseImg2);
        mouse.changeAnimation('mousehappy')
    //mouse.framedelay=25
        cat.addAnimation("catsad",catImg2);    
        cat.changeAnimation("catsad")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode===LEFT_ARROW)
    mouse.addAnimation("mouse teasing",mouseImg1);
    mouse.changeAnimation('mouse teasing')
    //mouse.framedelay=25
    cat.addAnimation("catwalking",catImg1);    
    cat.changeAnimation("catwalking")
    cat.scale=0.2
   
}
