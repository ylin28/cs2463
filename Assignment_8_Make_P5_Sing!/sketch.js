var selectedColorIndex = 0;
var palette_cell_size = 35;
let mySound;

// Define sound files for each color
var redSound, orangeSound, yellowSound, greenSound, cyanSound, blueSound, magentaSound, brownSound, whiteSound, blackSound;

function preload() {
   // Load the sound effect for the delete button
   mySound = loadSound('assets/DELETE.mp3');
   // Load sound files
   redSound = loadSound('assets/Red.wav');
   orangeSound = loadSound('assets/Orange.wav');
   yellowSound = loadSound('assets/Yellow.wav');
   greenSound = loadSound('assets/Green.wav');
   cyanSound = loadSound('assets/Cyan.wav');
   blueSound = loadSound('assets/Blue.wav');
   magentaSound = loadSound('assets/Magenta.wav');
   brownSound = loadSound('assets/Brown.wav');
   whiteSound = loadSound('assets/White.wav');
   blackSound = loadSound('assets/Black.wav');
}

function setup() {
  createCanvas(700,700);
  strokeWeight(15);
  background(240);
  colors=['red','orange', 'yellow','green', 'cyan','blue', 'magenta','brown','white', 'black'];
  var x, y;
  var drawing = false;
  // Add a click event listener to the clear button
  document.getElementById("clearButton").addEventListener("click", clearCanvas);
}

function draw() {
  noStroke();
  for(let i=0;i<colors.length;i++){
    fill(colors[i]);
    rect(0, i*palette_cell_size, palette_cell_size, palette_cell_size);
  }
  stroke(colors[selectedColorIndex]);
}

function mousePressed(){
  if(mouseX >= 0 && mouseX < palette_cell_size && mouseY >= 0 && mouseY < (colors.length*palette_cell_size)){
    selectedColorIndex = floor(mouseY / palette_cell_size);
    stroke(colors[selectedColorIndex]);
    drawing = false;

    // Play corresponding sound when color is selected
    switch (selectedColorIndex) {
      case 0:
        redSound.play();
        break;
      case 1:
        orangeSound.play();
        break;
      case 2:
        yellowSound.play();
        break;
      case 3:
        greenSound.play();
        break;
      case 4:
        cyanSound.play();
        break;
      case 5:
        blueSound.play();
        break;
      case 6:
        magentaSound.play();
        break;
      case 7:
        brownSound.play();
        break;
      case 8:
        whiteSound.play();
        break;
      case 9:
        blackSound.play();
        break;
      default:
        break;
    }
  } else {
    x = mouseX;
    y = mouseY;
    drawing = true;
  }
}

function mouseDragged(){
  if(drawing){
    line(x,y, mouseX, mouseY);
    x = mouseX;
    y = mouseY;
    playDrawingSound(colors[selectedColorIndex]); // Play a sound effect while drawing
  }
}

function playDrawingSound(color) {
  // Create and play a sound effect
  let drawingSound = new p5.Oscillator();
  drawingSound.setType('sine');
  
  switch (color) {
    case 'red':
      drawingSound.freq(440);
      break;
    case 'orange':
      drawingSound.freq(494);
      break;
    case 'yellow':
      drawingSound.freq(554);
      break;
    case 'green':
      drawingSound.freq(659);
      break;
    case 'cyan':
      drawingSound.freq(740);
      break;
    case 'blue':
      drawingSound.freq(880);
      break;
    case 'magenta':
      drawingSound.freq(988);
      break;
    case 'brown':
      drawingSound.freq(1109);
      break;
    case 'white':
      drawingSound.freq(1319);
      break;
    case 'black':
      drawingSound.freq(1567);
      break;
    default:
      drawingSound.freq(random(200, 600));
      break;
  }
  
  drawingSound.amp(0.2, 0.1);
  drawingSound.start();
  drawingSound.stop(0.1);
}


// Define the clearCanvas function to clear the canvas and play a sound effect
function clearCanvas() {
  background(240);
  drawing = false;
  if (mySound.isLoaded()) {
    mySound.play();
  }
}









