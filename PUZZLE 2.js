//PUZZLE 2//

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
repeatDown(6);
repeatRight(3);
up(); 
up(); 
repeatRight(2);
repeatDown(3);