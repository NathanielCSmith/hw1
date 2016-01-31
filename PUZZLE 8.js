//PUZZLE 8//

var color = "red";
var red = getColor();

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

function Reefer(total) {
 var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}
//Carry Over Functions////////
  
repeatDown(8);
  
repeatRight(2);
  
Reefer(8);
  
repeatRight(2);
  
repeatDown(8);
  
repeatRight(2);

Reefer(8);
  
repeatRight(2);

repeatDown(8);

repeatRight(2);