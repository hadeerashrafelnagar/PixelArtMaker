// Select color input
let color = document.querySelector("#colorPicker");

// Select size input
let table = document.querySelector("#pixelCanvas");
let height = document.querySelector('#inputHeight').value;
let width = document.querySelector('#inputWidth').value;
console.log(height,width)
makeGrid(height, width);

// When size is submitted by the user, call makeGrid()
let submitButton = document.querySelector("#sizePicker");
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWidth').value;
    console.log(height,width)
    table.firstChild.remove();
makeGrid(height, width);
  });

//define the function
// Your code goes here
function makeGrid(height, width) {
  for (let r = 0;r <= height; r++){
    let row = table.insertRow(r);
    for (let c = 0;c < width; c++){
      let column = row.insertCell(c);
      table.addEventListener('mousedown', function(event){
        event.target.style.backgroundColor = color.value;
      })

    }  
    }  
}
makeGrid();
