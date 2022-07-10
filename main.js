// GeneDev123
// TicTacToe with JavaScript

// Object constructor for Player vs AI 
function p_vs_ai (name, marker) {
    
    this.actions = [0,0,0,0,0,0,0,0,0];
    
    this.name = name;
    this.marker = marker;
}

// Attack function for player inherited to every objects using prototype
p_vs_ai.prototype.attack = function(i){
    if(this.actions[i] === 0 && this.marker === "circle"){
        renderCircle(boardPos[i][0] + 50,boardPos[i][1] + 50);
        this.actions[i]  = 1;
    }else if (this.actions[i] === 0 && this.marker === "cross"){
        renderCross(boardPos[i][0],boardPos[i][1]);
        this.actions[i]  = 1;
    }  
    console.log(this.actions);
}

// Enemy AI attack
function aiAttack(player){
    while(true){
        let i = Math.floor(Math.random() * 9);    
        if(player.actions[i] === 0){
            player.actions[i] = 2;
            if(player.marker === "circle"){
                renderCross(boardPos[i][0] + 50,boardPos[i][1] + 50);
            }else{
                renderCircle(boardPos[i][0] + 50,boardPos[i][1] + 50); 
            }
            break;
        }
    }
}

// The positions of hte board and their corresponding coordinates
boardPos = {
    '0': [0,0],'1': [100,0],'2': [200,0],'3': [0,100],'4':[100,100],
    '5': [200,100],'6': [0,200],'7': [100,200],'8': [200,200]
}
// Object constructor for Player vs Player2  
// function p_vs_p2 (p1,p2,m1,m2) {
    
//     this.actions = [0,0,0,0,0,0,0,0,0];
    
//     this.p1 = p1;
//     this.p2 = p2;
//     this.m1 = m1;
//     this.m2 = m2;
// }


// Returns the precise coordinate of the clicked box
// Canvas location: x: 8, y: 27 
function getPosition(x,y){
    if (x <= 108){
        if (y <= 127){return('0');}
        else if (y <= 227){
        return('3');}
        else{return('6');}
    }else if (x <= 208){
        if (y <= 127){return('1');}
        else if (y <= 227){return('4');}
        else{return('7');}
    }else{
        if (y <= 127){return('2');}
        else if (y <= 227){return('5');}
        else{return('8');}
    }
}
// ==================================================================================
// BEGINNING OF PROCEDURE
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
    
    // Create Player and render the board.
    let player = new p_vs_ai(name, marker);
    renderGame();

    // Click events and getting the cursor coordinates
    let canvas = document.getElementById("game");
    canvas.addEventListener('click',function(e){
        let pos_click = getPosition(e.clientX, e.clientY);
        player.attack(pos_click);
        aiAttack(player);
    });
}