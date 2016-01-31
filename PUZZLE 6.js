//PUZZLE 6//

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

var color = "blue";
var color1 = "red";
right();
repeatDown(3); 
left();
down();