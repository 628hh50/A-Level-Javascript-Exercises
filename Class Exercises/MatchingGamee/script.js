let gameGrid = document.getElementById("gameGrid"); 

 

console.log(gameGrid); 
let values = [ 

    "apple.png", "banana.png", "star.png", "heart.png", 

    "car.png", "dog.png", "football.png", "rainbow.png", 

    "apple.png", "banana.png", "star.png", "heart.png", 

    "car.png", "dog.png", "football.png", "rainbow.png" 

]; 

for (let i = 0; i < values.length; i++) { 

 

    let square = document.createElement("button"); 

 

    square.classList.add("square"); 

 

    let picture = document.createElement("img"); 

 

    picture.src = "images/" + values[i]; 

 

    picture.alt = "Hidden picture"; 


    square.appendChild(picture); 


 

    gameGrid.appendChild(square); 

} 