let bugs = []; 
let bugImage, DeadBugImage; 
let bugFrames = 7;
let bugIndex = 0;
let score = 0; 
let timer = 30; 
let gameOver = false; 


function preload() {
  bugImage = loadImage('assets/bug1.png'); 
  DeadBugImage = loadImage('assets/dead2.png');
}

function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < 10; i++) {
    bugs.push(new Bug());
  }
}


function draw() {
  background(255);

  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }

  fill(0);
  textSize(20);
  text('Your Score: ' + score, 20, 30);
  text(`Time: ${floor(timer)}`, 800, 30);
  if (timer > 0 && !gameOver) {
    timer -= 0.0167; 
  } else {
    gameOver = true; 
    fill(255, 0, 0);
    textSize(40);
    text('Game Over', width / 2 - 70, height / 2);
  }
  
}

function mousePressed() {
  for (let i = bugs.length - 1; i >= 0; i--) {
    if (bugs[i].isClicked(mouseX, mouseY)) {
      bugs[i].dead = true;
      score++;
      bugs.push(new Bug());
      break;
    }
  }
}

class Bug {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = 5;
    this.direction = random(360);
    this.dead = false; 
    this.squished = false;
  }

  
  move() {
    if(!this.dead){
      this.x += cos(radians(this.direction)) * this.speed;
      this.y += sin(radians(this.direction)) * this.speed;
      if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
        this.direction += 45;
      }
    }
    
  }

  display() {
    let frameWidth = bugImage.width / bugFrames;
    let frameHeight = bugImage.height;
    image(bugImage, this.x, this.y, frameWidth, frameHeight, bugIndex * frameWidth, 0, frameWidth, frameHeight);
    bugIndex = (bugIndex + 1) % bugFrames;
    if (this.squished) {
      this.squished = false;
    } 
    else if(this.dead){ 

      image(DeadBugImage, this.x, this.y);
      
    }
    
  }

  isClicked(x, y) {
    const frameWidth = bugImage.width / bugFrames;
    const frameHeight = bugImage.height;
  
    // If the bug is already dead, do not handle any more clicks
    if (this.dead) {
      return false;
    }
  
    const isWithinBoundsX = x >= this.x && x <= this.x + frameWidth;
    const isWithinBoundsY = y >= this.y && y <= this.y + frameHeight;
    
    if (isWithinBoundsX && isWithinBoundsY) {
      this.dead = true;
      this.squished = true;
      return true;
    }
    
    return false;
  }
  
  
}