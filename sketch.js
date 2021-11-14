let array = [];
let noiseOffset = 0.0;
let strokeThick;

function setup() {
  createCanvas(600, 600);
  //background(220, 50, 133, 20);
  drawGrid();
  textAlign(CENTER);
  fill(0);
  text("[hold down mouse and draw to begin]", width / 2, height / 2);
  noFill();


}

function draw() {
  let ran1 = 200 - mouseX;
  let ran2 = mouseX/2;
  let ran3 = mouseY/2;

  strokeWeight(strokeThick);
  noiseOffset += 0.01;
  strokeThick = noise(noiseOffset) * 15;

  if (mouseIsPressed){
    //text("drawing in progess.....", 300, 300);
  background(ran1, ran2, ran3, 20);
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX,mouseY]);




  //line(mouseX, mouseY, pmouseX, pmouseY);
  //stroke(map(mouseX, 0, 600, 0, 255, true));
  // line(width - mouseX, width - mouseY, width - pmouseX, width - pmouseY);
}

}

function keyTyped() {

  if (key === 's'){
    //save image
    console.log(`key is typed`)
    saveCanvas('myDrawing', 'png');
  } else if (key === 'd'){
    background(random(255),random(255),random(255));
    //display
    // console.log(array[0]);
    // console.log(array[0] [1]);
    beginShape();
    for(let i = 0; i < array.length ; i++){
      console.log(i);
      //line(array[i] [0], array[i] [1], array[i + 1] [0], array[i + 1] [1],);
      curveVertex(array[i] [0], array[i] [1])
    }
    endShape();
  } else if (key === 'c'){
    clear();
    background(random(255),random(255),random(255));
  }

  return false;
}

function mousePressed(){
  array = [];
}

function drawGrid(){
  strokeWeight(0);
    numCells = 20;
    fillColor = 255;

    for (let i = 0; i <= width; i += width / numCells){
      for (let j = 0; j <= height; j += height / numCells){
        if (fillColor === 255){
          fillColor = 200;
        } else {
          fillColor = 255;
        }
        fill(fillColor);
          rect(i, j, width / numCells, height / numCells);
      }

    }
    strokeWeight(strokeThick);

}
