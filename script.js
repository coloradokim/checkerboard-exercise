// Hints
// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%


//a while loop? how long do we want it to be? what conditions would determine when we stop?
//once there are x number of divs,
//once there are more divs than there is room

var condition = 54;
var i = 0;
while (i < condition) {
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.style.width="11.1%";
  div.style.height="20px";
  div.style.float="left";
  div.style.paddingBottom = "11.1%";
  div.style.backgroundColor = "yellow";
  if (i % 2 === 0){
    div.style.backgroundColor = "purple";
  }
  i++;
}

//search terms for alternating colors (every other)
//loop, javascript, everyother
