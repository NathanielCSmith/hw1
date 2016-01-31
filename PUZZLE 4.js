//PUZZLE 4//

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


var color = "green";
var color1 = "yellow";
right();
repeatDown(4);
getColor();
down();
setColor(color);
repeatRight(2);
up();
right();
getColor(); 
down();
setColor(color1);
repeatRight(2);