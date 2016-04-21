// Hints
// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%


for (var i = 0; i < 63; i++) {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  var div = document.createElement('div');
  div.style.width="11.1%";
  div.style.height="20px";
  div.style.float="left";
  div.style.paddingBottom = "11.1%";
  div.style.backgroundColor = randomColor;
  document.body.appendChild(div);
}
