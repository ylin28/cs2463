
let sounds = new Tone.Players({

  "meow": "sounds/kitten.mp3",
  "bark": "sounds/dog.wav",
  "whoof": "sounds/wolf.wav", 
  "baa": "sounds/sheep.mp3",
  "hee-haw": "sounds/donkey.mp3"
})

const delay = new Tone.FeedbackDelay("8n", 0.2);

let soundNames = ["meow", "bark", "whoof", "baa", "hee-haw"];
let buttons = [];

let rolling;// 回声
let double_speed;//重声

function setup() {
  createCanvas(600, 600);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(200, index*90);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  rolling = createSlider(0., 1., 0.3, 0.5);//回声
  rolling.mouseReleased( () => {
    delay.delayTime.value = rolling.value();
  })
  
  
  double_speed = createSlider(0., 1., 0.5, 1.0);
  double_speed.mouseReleased( () => {
    delay.feedback.value = double_speed.value();
  })

  
}

function draw() {
  background(220, 120, 300);
  textSize(45);
  text('Press the buttons and guess', 0, 250)



  textSize(30);
  text('Thank you for pressing', 100, 500)


}

function buttonSound(whichSound) {
    sounds.player(whichSound).start();
}