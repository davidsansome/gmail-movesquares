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

  // The second class on the element is the one that positions it on the right.
  var class_names = square.className.split(" ");
  var bad_class = class_names[1];

  // Find the CSS rule that defines that class
  for (var i=0 ; i<doc.styleSheets.length ; ++i) {
    for (var j=0 ; j<doc.styleSheets[i].rules.length ; ++j) {
      if (doc.styleSheets[i].rules[j].selectorText == "." + bad_class) {
        // Delete the rule
        doc.styleSheets[i].deleteRule(j);
        return;
      }
    }
  }
}

move_squares();
