/* add your code here */

var photos = JSON.parse(content);

for (let i = 0; i < photos.length; i++) {
  outputCard(photos[i]);
}

function outputCard(photo) {
  document.write(`<article>`)
  document.write('<div class="card" width="30px">');
  document.write('<img src="images/' + photo.filename + '" alt="' + photo.title + '">');
  document.write('<div class="caption">');
  document.write('<h2>' + photo.title + '</h2>');
  document.write('<p>' + photo.location.city +', '+ photo.location.country + '</p>');
  document.write('<h3>Colors</h3>');
  outputColors(photo.colors);
  document.write('</div>');
  document.write('</div>');
  document.write(`</article>`)
}

function outputColors(colors) {
  document.write('<span>'); 
  for (var i = 0; i < colors.length; i++) 
  {
    document.write(constructColor(colors[i]));
  }
  document.write('</span>');
}

function constructColor(color) {
  var style = constructStyle(color);
  return '<div class="color-block" style="' + style + '">' + color.name + '</div>';
}

function constructStyle(color) {
  var bgColor = color.hex;
  var textColor = (color.luminance < 70) ? '#ffffff' : '#000000';
  return 'background-color: ' + bgColor + '; color: ' + textColor + ';';
}
