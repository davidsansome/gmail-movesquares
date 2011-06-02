var try_count = 0;

function move_squares() {
  // Get the main frame
  var doc = document.getElementById("canvas_frame").contentDocument;

  // Try to find an element that looks about the right size
  var square = null;
  for (var y=330 ; y<1000 ; y+=20) {
    var element = doc.elementFromPoint(160, y);
    if (element && element.offsetWidth == 13 && element.offsetHeight == 11) {
      // Found it
      square = element.parentElement.parentElement;
      break;
    }
  }

  if (square == null) {
    // Didn't find it, maybe the page hasn't loaded yet - try again in a little
    // while.
    if (try_count < 100) {
      try_count ++;
      setTimeout(move_squares, 100);
    }
    return;
  }

  // The second class on the element is the one that positions it on the right,
  // remove that class from all the squares.

  var class_names = square.className.split(" ");
  var all_squares = doc.getElementsByClassName(class_names[1]);

  while (all_squares.length > 0) {
    all_squares[0].className = class_names[0];
  }
}

move_squares();
