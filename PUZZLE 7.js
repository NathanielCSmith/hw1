//PUZZLE 7//

//Carry Over Functions//
function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}
function repeatRight(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
  }
}

//New Function//

function SMILE() {
while (getColor()!="red"){
  getColor();
  down(); 
}

//New Function///
  
var color = "red";
var red = getColor();

while (getColor()!="red"){
  getColor();
  down();
  
}

if (getColor() == "red") {
  repeatRight(2);
} else {
  left();
  left();
}

while (getColor()!="red"){
  getColor();
  up();
  
}

if (getColor() == "red") {
  repeatRight(2);
} else {
  left();
  left();
}
while (getColor()!="red"){
  getColor();
  down();
  
}
if (getColor() == "red") {
  repeatRight(2);
} else {
  left();
  left();
}
while (getColor()!="red"){
  getColor();
  up();
  
}
if (getColor() == "red") {
  repeatRight(2);
} else {
  left();
  left();
}
while (getColor()!="red"){
  getColor();
  down();
  
}
}

SMILE();

right();