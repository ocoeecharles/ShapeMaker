//inner loop function to add number of symbols starting on left side
function printLine(symbol, shapeSize) {
    let shape = "";
    let i = 0;
    while (true) {
      shape += symbol;
      i++;
      if (i >= shapeSize) {
        break;
      }
    }
    shape += "<br>";
    return shape;
  }
  
  //inner loop function to add spaces on left, and symbols on the right
  function printEmpties(w, x, y, z) {
    let shape = "";
    let symbol = w;
    let empty = x;
    let shapeMinusOne = y;
    let i = 0;
    let j = 0;
    let maxShapeSize = z;
  
    while (true) {
      shape += empty;
      i++;
      if (i + shapeMinusOne == maxShapeSize) {
        break;
      }
    }
  
    while (true) {
      shape += symbol;
      j++;
      if (j == shapeMinusOne) {
        break;
      }
    }
  
    shape += "<br>";
    return shape;
  }
  
  //function that contains logic for outer loop
  function displayShape() {
    let shapeSize = document.myform.shapeSize.value;
    while (shapeSize % 1 != 0) {
      shapeSize = prompt(
        "INVALID ENTRY! Please enter a whole number to build a shape."
      );
    }
    while (shapeSize < 0) {
      shapeSize = prompt(
        "INVALID ENTRY! Please enter a whole number greater than zero to build a shape."
      );
    }
    while (isNaN(shapeSize)) {
      shapeSize = prompt(
        "INVALID ENTRY! Please enter a numeric value to build a shape."
      );
    }
    shapeSize = parseInt(shapeSize);
    document.myform.shapeSize.value = shapeSize;
    let shape = "";
    let symbol = "# ";
    let empty = "&nbsp" + "&nbsp";
  
    if (shapeSize == 1) {
      shape = `${symbol}<br>${symbol}<br>${symbol}<br>${symbol}`;
      document.getElementById("shape").innerHTML = shape;
    } else if (shapeSize == 0) {
      document.getElementById("shape").innerHTML = "No shape to display";
    } else {
      //starts w shapesize number of symbols, each row loses 1 symbol on right
      let i = shapeSize;
      while (true) {
        shape += printLine(symbol, i);
        i--;
        if (i <= 0) {
          break;
        }
      }
      //starts with 1 symbol on left, and adds symbol right on each row
      let k = 1;
      while (true) {
        shape += printLine(symbol, k);
        k++;
        if (k == shapeSize + 1) {
          break;
        }
      }
      //starts with shapesize number of symbols, adds one empty on left and reduces
      //number of symbols for each row
      let h = shapeSize;
      shape += printLine(symbol, h);
      let g = shapeSize - 1;
      while (true) {
        shape = shape + printEmpties(symbol, empty, g, h);
        g--;
        if (g == 0) {
          break;
        }
      }
      //starts with 1 symbol floated right, and adds a new symbol on right at each row
      let f = 1;
      let e = shapeSize;
      while (true) {
        shape = shape + printEmpties(symbol, empty, f, e);
        f++;
        if (f == shapeSize) {
          break;
        }
      }
      shape += printLine(symbol, e);
  
      document.getElementById("shape").innerHTML = shape;
    }
  }