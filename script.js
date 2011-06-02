function move_squares() {
  var doc = document.getElementById("canvas_frame").contentDocument;
  var element = doc.elementFromPoint(160, 330).parentElement.parentElement;

  var class_names = element.className.split(" ");
  var elements = doc.getElementsByClassName(class_names[1]);

  while (elements.length > 0) {
    elements[0].className = class_names[0];
  }
}

move_squares();

