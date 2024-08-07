let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

let posicaoHorizontal2; // x
let posicaoVertical2; // y

let posicaoHorizontal3; // x
let posicaoVertical3; // y

let posicaoHorizontal4; // x
let posicaoVertical4; // y

let posicaoHorizontal5; // x
let posicaoVertical5; // y

function setup() {
  createCanvas(400, 400);
  background("white")
  cor = color(random(255), random(255), random(255) );
  circuloX = [0, 0];
  circuloY = [random(height), random(height), random(height) ];
}
    
function draw() {
   fill(cor);
   
  
 circle(circuloX[0], circuloY[0], 50);
 circle(circuloX[1], circuloY[1], 50);
 
  
for(let contador in circuloX) {
circle(circuloX[contador], circuloY[contador], 50);
circuloX[contador]+= random(0, 3);
circuloY[contador]+= random(-3, 3);

  if(circuloX[contador] >= width) {
circuloX[contador] = 0;
circuloY[contador] = random(height);
} 
 circuloX[0]+= random(0, 3);
 circuloY[0]+= random(-3, 3);
 circuloX[1]+= random(0, 3);
 circuloY[1]+= random(-3, 3);
   
  
posicaoHorizontal+= random(0, 3);
posicaoVertical+= random(-3, 3);
  
posicaoHorizontal2+= random(0, 3);
posicaoVertical2+= random(-3, 3);
  
   posicaoHorizontal3+=random(0, 3);
posicaoVertical3+= random(-3, 3);
  
   posicaoHorizontal4+= random(0, 3);
posicaoVertical4+= random(-3, 3);
  
   posicaoHorizontal5+= random(0, 3);
posicaoVertical5+= random(-3, 3);
  
  if(mouseX< posicaoHorizontal) {
    posicaoHorizontal--;
} 
   if(mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
}
   if(mouseY< posicaoVertical)  {
     posicaoVertical--;
}
  if(mouseY> posicaoVertical)  {
     posicaoVertical++;
}
   if(mouseIsPressed) {
   cor=color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
} 
}
    