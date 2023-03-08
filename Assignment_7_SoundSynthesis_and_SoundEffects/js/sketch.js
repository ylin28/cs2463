var bonefire, fire, synth, reverse, chore, wooop, bgm;
var textInfo = "Click Your Mouse BBBBButton for firEEEEEE.";

function preload(){
	bonefire = loadImage('assets/bonefire.png')
  fire = loadImage('assets/fire.png')
  white = loadImage('assets/white.jpg');

}
function draw(){
	textSize(35);
  textAlign(CENTER);
	text(textInfo,width/2,30);
}

function mousePressed(){
	image(fire,200,0);
	firebeepSound();
}

function mouseReleased(){
  image(white,200,0);
	image(bonefire,90,0);
}

function firebeepSound(){
  synth.envelope.attack = 0.01 + Math.random() * 0.06;  
  synth.envelope.release = 0.3 + Math.random() * 0.05;
  synth.triggerAttackRelease("C4", "8n");
}

function setup(){
	createCanvas(800,1000);
  image(bonefire,200,0)
  
  synth = new Tone.MembraneSynth(
  {
    pitchDecay: 0.05,
    envelope: 
    {
      attack: 0.001, 
      decay: 0.5, 
      sustain: 0, 
      release: 0.2 
    }
  }).toDestination();
  
  reverse = new Tone.Reverb(
  {
    decay: 0,
    wet: 0.7,
  }).toDestination();

  chore = new Tone.Chorus(
  {
    frequency: 1,
    delayTime: 2.5,
    wet: 0.5
  }).toDestination();

  wooop = new Tone.AutoWah(
  {
    octaves: 1,
    Q: 5,
    wet: 0.5
  }).toDestination();

  synth.connect(reverse).connect(chore).connect(wooop);
  
  bgm = new Tone.Player(
  {
	  url: "assets/fire.mp3",
	  loop: true,
	  autostart: true,
	  onload: function() {
	    console.log("bgm loaded");
	  },
	  onerror: function() {
	    console.log("bgm error");
	  }
	}).toDestination();
}
