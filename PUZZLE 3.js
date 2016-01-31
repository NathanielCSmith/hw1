//PUZZLE 3//

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
repeatDown(2);
getColor();
repeatDown(3);
repeatRight(2);
setColor(color);
repeatRight(2);
up();
up(); 