// GeneDev123
// TicTacToe with JavaScript

// Object constructor for Player vs AI 
function p_vs_ai (name, marker) {
    
    this.actions = [[0,0,0],[0,0,0],[0,0,0]];
    
    this.name = name;
    this.marker = marker;
}
// Object constructor for Player vs Player2  
function p_vs_p2 (p1,p2,m1,m2) {
    
    this.actions = [[0,0,0],[0,0,0],[0,0,0]];
    
    this.p1 = p1;
    this.p2 = p2;
    this.m1 = m1;
    this.m2 = m2;
}

// Check the type of game mode the user choose.
function gmode(){
    let buttons = document.getElementById("play_option");
    buttons.addEventListener("click", function(e){
        if(e.target.id == "ai"){
            ai_gmode(buttons);
        }else if(e.target.id == "p2"){
            p2_gmode(buttons);
        }});
}

function startAiGame(){
    let name = document.forms["p_vs_ai"]["name"].value;
    let marker = document.forms["p_vs_ai"]["marker"].value;
    console.log(name, marker);

    // Create Player and render the game.
    let player = new p_vs_ai(name, marker);
    renderGame();
    renderCross(0,0);
    renderCross(100,100);
    renderCross(200,200);

    renderCircle(150,50);
    // let winner = "none";
    // while(winner === "none"){

        
    // }
}

// Win conditions
// winner = {
//     [1,1,1],
//     ]
// }