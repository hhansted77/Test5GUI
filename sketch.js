let d = 60;
let deg = 58;
let outline = true;

let gui;
let diameterSlider, degSlider, outlineCheckbox;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10);

  gui = createGui();
  diameterSlider = createSlider("Diameter", 40, 330, 100, 20, 10, 100);
  //diameterSlider.onChange = diameterSliderChange;

diameterSlider.setStyle({
  fillBg: color(127, 153, 104),
  fillBgHover: color(208, 235, 185),
})

  degSlider = createSlider("Rotation", 250, 330, 100, 20, 0, 180);
  degSlider.val = 23;

degSlider.setStyle({
  fillBg: color(127, 153, 104),
  fillBgHover: color(208, 235, 185),
})

  outlineCheckbox = createCheckbox("Outline", 183, 330, 20,20, true);
}

function draw() {
  background(177, 209, 148);
  drawGui();


  if(outlineCheckbox.val){
    stroke(59, 37, 25);
  } else {
    noStroke();
  }




ellipse(90, 200, diameterSlider.val);

push();
translate(300, 200);
rotate( radians(degSlider.val) );
rect(0, 0, 60, 60);
pop();

noStroke();
textSize(15)
text(diameterSlider.label, 55, 320);
text(degSlider.label, 270, 320)

}

//function diameterSliderChange();{
 //when i tried to do this part of the video, for some reason it breaks eveyrthing
//}
