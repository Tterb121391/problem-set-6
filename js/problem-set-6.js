/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let canvas = document.getElementById("canvas1");
  let hello = canvas.getContext("2d");
  hello.font = "48px Sans-Serif";
  hello.strokeText("Hello, World!", 10, 50);
  hello.stroke();
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let height;
  let width;
  let xCoordinate;
  let yCoordinate;
  let canvas = document.getElementById("canvas2");
  let rectangle = canvas.getContext("2d");

  while(true) {
    height = Number(prompt("Enter a height that is greater than or equal to 1."));
    if(Number.isNaN(height) == false && height >= 1 && height <= 512) {
      break;
    }
    if(height === null) {
      break;
    }
  }

  while(true) {
    width = Number(prompt("Enter a width that is greater than or equal to 1."));
    if(Number.isNaN(width) == false && width >= 1 && width <= 1024) {
      break;
    }
    if(width === null) {
      break;
    }
  }

  while(true) {
    xCoordinate = Number(prompt("Enter an x-coordinate that is greater than or equal to 5 for the top left corner of the rectangle."));
    if(Number.isNaN(xCoordinate) == false && xCoordinate >= 5 && xCoordinate <= 1024) {
      break;
    }
    if(xCoordinate === null) {
      break;
    }
  }

  while(true) {
    yCoordinate = Number(prompt("Enter an y-coordinate that is greater than or equal to 5 for the top left corner of the rectangle."));
    if(Number.isNaN(yCoordinate) == false && yCoordinate >= 5 && yCoordinate <= 512) {
      break;
    }
    if(yCoordinate === null) {
      break;
    }
  }

  rectangle.clearRect(0, 0, canvas2.width, canvas2.height);
  rectangle.beginPath();
  rectangle.rect(xCoordinate, yCoordinate, width, height);
  rectangle.stroke();
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let color;
  while(true) {
    color = prompt("Enter a color.");
    if(color === null) {
      break;
    } else if(color === "black") {
      break;
    } else if(color === "blue") {
      break;
    } else if (color === "green") {
      break;
    } else if (color === "orange") {
      break;
    } else if (color === "purple") {
      break;
    } else if (color === "red") {
      break;
    } else if (color === "yellow") {
      break;
    }
  }

  let canvas = document.getElementById("canvas3");
  let coloredRectangle = canvas.getContext("2d");
  coloredRectangle.clearRect(0, 0, canvas3.width, canvas3.height);
  coloredRectangle.beginPath();
  coloredRectangle.fillStyle = color;
  coloredRectangle.fillRect(10, 10, 100, 50);
  coloredRectangle.stroke();
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let side;
  let sides = [];
  for(let x = 1; x <= 3; x++) {
    while(true) {
      side = Number(prompt("Side " + x + ":"));
      if(Number.isNaN(side) == false && side > 0) {
        break;
      }
    }
    sides.push(side);
  }
  sides.sort(function(a, b){return a-b});
  if(Math.pow(sides[0], 2) + Math.pow(sides[1], 2) == Math.pow(sides[2], 2)) {
    let canvas = document.getElementById("canvas4");
    let triangle = canvas.getContext("2d");
    triangle.clearRect(0, 0, canvas4.width, canvas4.height);
    triangle.beginPath();
    triangle.moveTo(10, 10);
    triangle.lineTo(10, sides[0] + 10);
    triangle.lineTo(sides[1] + 10, sides[0] + 10);
    triangle.lineTo(10, 10);
    triangle.stroke();
  } else {
    alert("That is not a valid right triangle.");
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let radius;
  while(true) {
    radius = Number(prompt("Enter a radius."));
    if(Number.isNaN(radius) == false && radius > 0) {
      break;
    }
  }
  let canvas = document.getElementById("canvas5");
  let smile = canvas.getContext("2d");
  smile.clearRect(0, 0, canvas5.width, canvas5.height);
  smile.beginPath();
  smile.arc(radius + 10, radius + 10, radius * 0.7, 0, Math.PI);
  smile.stroke();
  smile.beginPath();
  smile.arc(radius + 10, radius + 10, radius, 0, 2 * Math.PI);
  smile.stroke();
  smile.beginPath();
  smile.arc(radius * 0.65 + 10, radius * 0.5 + 10, radius * 0.1, 0, 2 * Math.PI);
  smile.stroke();
  smile.beginPath();
  smile.arc(radius * 1.35 + 10, radius * 0.5 + 10, radius * 0.1, 0, 2 * Math.PI);
  smile.stroke();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let outerRadius;
  let innerRadius;
  let pi = Math.PI;
  while(true) {
    outerRadius = Number(prompt("Enter an outer radius."));
    if(Number.isNaN(outerRadius) == false && outerRadius > 0) {
      break;
    }
  }
  while(true) {
    innerRadius = Number(prompt("Enter an inner radius. It must be smaller than the outer radius."));
    if(Number.isNaN(innerRadius) == false && innerRadius > 0 && innerRadius < outerRadius) {
      break;
    }
  }
  let canvas = document.getElementById("canvas6");
  let star = canvas.getContext("2d");
  star.clearRect(0, 0, canvas6.width, canvas6.height);
  star.beginPath();
  let innerPentSide = 2 * innerRadius * Math.sin(0.2 * pi);
  let outerPentSide = 2 * outerRadius * Math.sin(0.2 * pi);
  star.moveTo(125, 125 - outerRadius);
  star.lineTo(125 + innerRadius * Math.cos(0.3 * pi), 125 - innerRadius * Math.sin(0.3 * pi));
  star.lineTo(125 + outerRadius * Math.sin(0.4 * pi), 125 - outerRadius * Math.cos(0.4 * pi));
  star.lineTo(125 + innerRadius * Math.cos(0.1 * pi), 125 + innerRadius * Math.sin(0.1 * pi));  //x - coordinate originally 0.2
  star.lineTo(125 + outerRadius * Math.sin(0.2 * pi), 125 + outerRadius * Math.cos(0.2 * pi));
  star.lineTo(125, 125 + innerRadius);
  star.lineTo(125 - outerRadius * Math.sin(0.2 * pi), 125 + outerRadius * Math.cos(0.2 * pi));
  star.lineTo(125 - innerRadius * Math.cos(0.1 * pi), 125 + innerRadius * Math.sin(0.1 * pi));
  star.lineTo(125 - outerRadius * Math.sin(0.4 * pi), 125 - outerRadius * Math.cos(0.4 * pi));
  star.lineTo(125 - innerRadius * Math.cos(0.3 * pi), 125 - innerRadius * Math.sin(0.3 * pi));
  star.lineTo(125, 125 - outerRadius);
  star.stroke();
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById("canvas7");
  let stopSign = canvas.getContext("2d");
  stopSign.clearRect(0, 0, canvas7.width, canvas7.height);
  stopSign.beginPath();
  stopSign.moveTo(10 + 40 * Math.sqrt(2), 10);
  stopSign.lineTo(90 + 40 * Math.sqrt(2), 10);
  stopSign.lineTo(90 + 80 * Math.sqrt(2), 10 + 40 * Math.sqrt(2));
  stopSign.lineTo(90 + 80 * Math.sqrt(2), 90 + 40 * Math.sqrt(2));
  stopSign.lineTo(90 + 40 * Math.sqrt(2), 90 + 80 * Math.sqrt(2));
  stopSign.lineTo(10 + 40 * Math.sqrt(2), 90 + 80 * Math.sqrt(2));
  stopSign.lineTo(10, 90 + 40 * Math.sqrt(2));
  stopSign.lineTo(10, 10 + 40 * Math.sqrt(2));
  stopSign.lineTo(10 + 40 * Math.sqrt(2), 10);
  stopSign.fillStyle = "red";
  stopSign.fill();
  stopSign.stroke();
  stopSign.beginPath();
  stopSign.fillStyle = "white";
  stopSign.font = "65px Arial";
  stopSign.textAlign = "center";
  stopSign.textBaseline = "middle";
  stopSign.fillText("STOP", 50 + 40 * Math.sqrt(2), 50 + 40 * Math.sqrt(2));
  stopSign.stroke();
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let side;
  while(true) {
    side = Number(prompt("Block length:"));
    if(Number.isNaN(side) == false) {
      break;
    }
  }
  let canvas = document.getElementById("canvas8");
  let pyramid = canvas.getContext("2d");
  pyramid.clearRect(0, 0, canvas8.width, canvas8.height);
  pyramid.beginPath();
  let blocks;
  let level;
  for(level = 5; level > 0; level--) {
    pyramid.moveTo(10 + side * 0.5 * (5 - level), canvas8.height - 10 - side * (5 - level));
    for(blocks = 0; blocks < level; blocks++) {
      pyramid.lineTo(10 + side * blocks + side * 0.5 * (5 - level), canvas8.height - 10 - side * (6 - level));
      pyramid.lineTo(10 + side * (blocks + 1) + side * 0.5 * (5 - level), canvas8.height - 10 - side * (6 - level));
      pyramid.lineTo(10 + side * (blocks + 1) + side * 0.5 * (5 - level), canvas8.height - 10 - side * (5 - level));
      pyramid.lineTo(10 + side * blocks + side * 0.5 * (5 - level), canvas8.height - 10 - side * (5 - level));
      pyramid.moveTo(10 + side * (blocks + 1) + side * 0.5 * (5 - level), canvas8.height - 10 - side * (5 - level));
    }
    pyramid.stroke();
  }

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let houseColor;
  let doorColor;
  while(true) {
    houseColor = prompt("House color:");
    if(houseColor == "blue" || "brown" || "green" || "orange" || "purple" || "red" || "yellow") {
      break;
    }
  }
  while(true) {
    doorColor = prompt("Front door color:");
    if(doorColor == "blue" || "brown" || "green" || "orange" || "purple" || "red" || "yellow") {
      break;
    }
  }
  let canvas = document.getElementById("canvas9");
  let house = canvas.getContext("2d");
  house.moveTo(150, canvas9.height - 450);
  house.lineTo(150, canvas9.height - 10);
  house.lineTo(canvas9.width - 150, canvas9.height - 10);
  house.lineTo(canvas9.width - 150, canvas9.height - 450);
  house.lineTo(150, canvas9.height - 450);
  house.fillStyle = houseColor;
  house.fill();
  house.stroke();
  house.beginPath();
  house.moveTo(150, canvas9.height - 450);
  house.lineTo(canvas9.width / 2, 10);
  house.lineTo(canvas9.width - 150, canvas9.height - 450);
  house.fillStyle = "gray";
  house.fill();
  house.stroke();
  house.beginPath();
  house.fillStyle = "lightblue";
  house.moveTo(250, canvas9.width - 400);
  house.lineTo(330, canvas9.width - 400);
  house.lineTo(330, canvas9.width - 320);
  house.lineTo(250, canvas9.width - 320);
  house.lineTo(250, canvas9.width - 400);
  house.fill();
  house.stroke();
  house.fillRect(canvas9.width - 335, canvas9.height - 400, 79, 79);
  
}
