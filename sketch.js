var bg,bg2,trex,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  trex = loadImage("trex1.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  system = new System()
  security = new Security()
  key2 = createSprite(displayWidth/2-500,displayHeight/2-200,40,40);
    key2.addImage(trex);
    key2.visible = false;
    key23 = createSprite(displayWidth/2-300,displayHeight/2,40,40);
    key23.addImage(trex);
    key23.visible = false;
    key24 = createSprite(displayWidth/2,displayHeight/2-200,40,40);
    key24.addImage(trex);
    key24.visible = false;
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, displayWidth/2,displayHeight/2-800);

  if(score === 3) {
    clear();
    key2.visible = true;
    key24.visible = true;
    key23.visible = true;
    background("green");
    fill("yellow");
    textSize(40);
    text("PRESS SPACE KEY TO DESTROY THE BIRDS TO ENTER TREASURE!!!",displayWidth/2,displayHeight/2);
    if(keyCode === 32){
      background(bg2);
      fill("blue");
      text("TREASURE FOUND!!!!!!!!!!!!!",displayWidth/2,displayHeight/2);
      text("YOU ARE THE WINNER",displayWidth/2,displayHeight/2+50);
      text("WHOLE TREASURE GOES TO YOU",displayWidth/2,displayHeight/2+100);
      key2.visible = false;
    key24.visible = false;
    key23.visible = false;
    }
  }

  drawSprites()
}