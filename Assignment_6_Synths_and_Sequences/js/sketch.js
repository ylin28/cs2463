let slider;

const synth = new Tone.PluckSynth(
  {
    "oscillator": 
    {
      "partials": 
      [
        1,
        0,
        2,
        0,
        3
      ]
    },
    "envelope": 
    {
      "attack": 0.001,
      "decay": 1.2,
      "sustain": 0,
      "release": 1.2
    }
});
const drum = new Tone.MembraneSynth(
{
	"pitchDecay"  : 0.2 ,
	"octaves"  : 1.2 ,
	"oscillator"  : 
  {
		"type"  : "sine"
}  ,
	"envelope"  : {
		"attack"  : 0.001 ,
		"decay"  : 0.8 ,
		"sustain"  : 0.01 ,
		"release"  : 1.4 ,
		"attackCurve"  : "exponential"
	}
});
const metal = new Tone.MetalSynth(
{
	"frequency"  : 200 ,
	"envelope"  : {
		"attack"  : 0.001 ,
		"decay"  : 1.4 ,
		"release"  : 0.2
	}  ,
	"harmonicity"  : 5.1 ,
	"modulationIndex"  : 32 ,
	"resonance"  : 4000 ,
	"octaves"  : 1.5
});
const Noise = new Tone.NoiseSynth(
  {
  "noise": 
  {
      "type": "pink",
      "playbackRate" : 0.1
  },
  "envelope": 
  {
      "attack": 0.5,
      "decay": 2,
      "sustain": 0.5,
      "release": 3
  }
});

const reverb = new Tone.JCReverb(0.6);
synth.connect(reverb);
drum.connect(reverb);
metal.connect(reverb);

const osc = new Tone.OmniOscillator("C#4", "pwm").start();

const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.5,
  decay: 0.6,
  sustain: 0.3,
  release: 0.2
})

let notes = {
  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'
}

function setup() {
  createCanvas(800, 600);

  slider = new Nexus.Slider("#slider");
  reverb.toDestination();

  synth.release = 4;
  synth.resonance = 0.98;
  // synth.harmonicity.value = 1.25;
  //play a middle 'C' for the duration of an 8th note
  // synth.triggerAttackRelease("C4", "8n");

  slider.on('change', (v) =>  {
    reverb.roomSize.value = v;
  }); 

  osc.connect(ampEnv);
  ampEnv.connect(reverb);
}

function draw() {
  background(140);
}

function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);

  osc.frequency.value = toPlay;
  ampEnv.triggerAttackRelease('8n');

  synth.triggerAttackRelease(toPlay, 0.5);
  metal.triggerAttackRelease(toPlay, 0.5);
  drum.triggerAttackRelease(toPlay, 0.5);
  Noise.triggerAttackRelease(toPlay, 0.5);
  // metal.triggerAttackRelease("C4", "8n", '+0.5');
  // drum.triggerAttackRelease("D4", "8n", '+1');
  // Noise.triggerAttackRelease("G4", "8n", '+0.9');
}