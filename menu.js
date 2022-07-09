// Generate the menu for AI game mode
function ai_gmode(menu){
    // Replacing the menu
    menu.remove();    

    // Generate the Form for entering Player data
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("name", "p_vs_ai");
    form.setAttribute("onsubmit", "return false");

    // Input for the Player Name.
    let nameIn = document.createElement("label");
    nameIn.innerText = "Enter Name: ";

    let nameInput = document.createElement("input");
    nameInput.setAttribute("type","text");
    nameInput.setAttribute("name","name");

    // Input for player Marker.
    let markerIn = document.createElement("label");
    markerIn.innerText = "Choose Marker (Circle goes first): ";

    let circleTxt = document.createElement("label");
    circleTxt.innerText = "Circle";
    let crossTxt = document.createElement("label");
    crossTxt.innerText = "Cross";

    let circle = document.createElement("input");
    circle.setAttribute("type","radio");
    circle.setAttribute("name","marker");
    circle.setAttribute("value","circle");

    let cross = document.createElement("input");
    cross.setAttribute("type","radio");
    cross.setAttribute("name","marker");
    cross.setAttribute("value","cross");
    
    // Submit Button input.
    let sub = document.createElement("input");
    sub.setAttribute("type","submit");
    sub.setAttribute("onclick","startAiGame()");
    sub.setAttribute("id","info");

    // Combining it all together
    form.appendChild(nameIn);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(markerIn);
    form.appendChild(document.createElement("br"));
    form.appendChild(circleTxt);
    form.appendChild(circle);
    form.appendChild(document.createElement("br"));
    form.appendChild(crossTxt);
    form.appendChild(cross);
    form.appendChild(document.createElement("br"));
    form.appendChild(sub);

    // Connecting to the HTML document
    let aside = document.getElementById("menu");
    aside.appendChild(form);
}
function p2_gmode(){
    console.log(2);
}
