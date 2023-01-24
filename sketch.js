
//Example 1:
var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  p.setup = function() {
    p.createCanvas(200, 100);
  };

  p.draw = function() {
    p.background('rgb(0,255,0)');
    p.circle(50, 50, 85);
    p.rect(110, 9, 80);
  };
};
var myp5 = new p5(s, 'c1');

//Example 2:
var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  p.setup = function() {
    p.createCanvas(200, 200);
  };

  p.draw = function() {
    p.background('rgb(255, 255, 255)');
    p.noStroke();
    p.fill('rgba(255,148,148, 0.65)');
    p.ellipse(100, 80, 100, 100);
    p.fill('rgba(99,57,206,0.45)');
    p.ellipse(70, 130, 100, 100);
    p.fill('rgba(54,245,17,0.3)');
    p.ellipse(130, 130, 100, 100);
  };
};
var myp5 = new p5(s, 'c2');

//Example 3:
var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  p.setup = function() {
    p.createCanvas(200, 100);
  };

  p.draw = function() {
    p.background('rgb(0, 0, 0)');
    p.fill('rgba(255, 239, 11, 1)');
    p.arc(55, 50, 80, 80, -90.3, 2.5);
    p.fill('rgba(255, 35, 11,1)');
    p.circle(150, 48, 80);
    p.noStroke();
    p.rect(110, 48, 80, 43)
    p.fill('rgba(250, 0, 0)');
    p.ellipse(130, 48, 25);
    p.ellipse(170, 48, 25);
    p.fill('rgba(5, 16, 244, 1)')
    p.ellipse(130, 48, 15);
    p.ellipse(170, 48, 15);
  };
};
var myp5 = new p5(s, 'c3');

//Example 4:
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background('rgb(0, 0, 120)');
  fill('rgb(0, 150, 0)');
  ellipse(100, 100, 100);
  stroke('rgb(255, 255, 255)');
  strokeWeight(3);
  push();
  translate(width * 0.85, height * 0.18);
  rotate(0.93);
  fill('rgb(250, 0, 0)');
  stroke('rgb(255, 255, 255)');
  strokeWeight(2.5);
  star(10, 95, 22.5, 53, 5);
  pop();
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}