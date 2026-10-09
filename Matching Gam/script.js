let gameGrid = document.getElementById("gameGrid"); 

 

console.log(gameGrid); 

Open index.html in your browser and open the developer console. 

You should see the grid element displayed in the console. 

The line: 

document.getElementById("gameGrid") 

finds the HTML element with the ID gameGrid. 

The result is stored in the variable gameGrid. 

let square = document.createElement("button"); 

 

square.classList.add("square"); 

 

gameGrid.appendChild(square); 