function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    console.log(player1_name + " " + player2_name);
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    console.log(" after set item" +player1_name + "  "  + player2_name);
    window.location = "mathgame.html";

}