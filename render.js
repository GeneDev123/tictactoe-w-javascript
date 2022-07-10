// The function that render a cross.
function renderCross(x,y){
    let canvas = document.getElementById("game");
    let grid = canvas.getContext("2d");

    x += 10;
    y += 10;
    grid.moveTo(x, y);
    grid.lineTo(x + 80, y + 80);
    grid.stroke();

    grid.moveTo(x + 80, y);
    grid.lineTo(x, y + 80);
    grid.stroke();

}
// The function that renders a circle.
function renderCircle(x, y){
    let canvas = document.getElementById("game");
    let grid = canvas.getContext("2d");

    grid.beginPath();
    grid.arc(x,y,40,0,2*Math.PI);
    grid.stroke();
}

// The function that renders the grid of the game.
function renderGame(){
    let canvas = document.getElementById("game");
    
    // Render the grid. 
    let grid = canvas.getContext("2d");
    grid.moveTo(100,0);
    grid.lineTo(100,300);
    grid.stroke();

    grid.moveTo(200,0);
    grid.lineTo(200,300);
    grid.stroke();

    grid.moveTo(0,100);
    grid.lineTo(300,100);
    grid.stroke();

    grid.moveTo(0,200);
    grid.lineTo(300,200);
    grid.stroke();

}