// Float/Clear Method
let x = document.querySelector('.container');
x.style['box-sizing'] = 'border-box';

function buildGrid(numberSquares = 16){

  for(let i = 0; i < numberSquares; i++){
      for (let j = 0; j < numberSquares; j++){

          let a = document.createElement('div');
          a.classList.add('grid-item');
          // set user specified square size
          if(numberSquares != 16){
            let calcWidth = 480/numberSquares;
            a.style.width = `${calcWidth}px`;
            a.style.height = `${calcWidth}px`;

          }

          if(j === 0){
            a.style.clear = 'left';
          }

          x.appendChild(a);
      }
    }
}


function removeGrid(grid){
		while (x.firstChild){
  	x.removeChild(x.firstChild);	
		}
}

function addGridListener(grid){
// Event Listener for mouseOver effect
boxes.forEach((box) => {

	box.addEventListener('mouseover', () => {
   	box.style.backgroundColor = 'red';
  });
});
}


buildGrid();


const btn = document.querySelector('#btn-generate');
let boxes = document.querySelectorAll('.grid-item');
let numSquaresPerSide = 0;

//Event Listener for button click and validate input

btn.addEventListener('click', () => {
	numSquaresPerSide = prompt("Enter number of squares per side");
  
  //send alert if input more than 100
  if(numSquaresPerSide > 100){
  	alert("Enter a number less than 100");
  }else{
  	//remove existing grid 
		removeGrid(x);    

  	// Build a new grid 5x5 - need to pass user input...
    buildGrid(numSquaresPerSide);
   
    //attach event listeners to the new grid.... get boxes first.. then EL
    boxes = document.querySelectorAll('.grid-item');
		addGridListener(boxes);
  }
  
});

addGridListener(boxes);