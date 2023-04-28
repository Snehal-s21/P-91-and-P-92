player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

//document.getElementById("player1_name").innerHTML = player1_name + " : ";
//document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_name").innerHTML = player1_name + " : ";


document.getElementById("player2_name").innerHTML = player2_name + " : ";


player1_score = 0;
player2_score = 0;

questioning_player= "player1";
answering_player= "player2";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question turn :" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn :" + player2_name;


function send() {
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_box = "<br> Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}                                                                                                                                         

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer==actual_answer)
    {
        if(answering_player=="player2")
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML =player1_score;
        }
        if(questioning_player=="player1")
        {  
            questioning_player = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn: " + player2_name;
        }
        else
        {
            questioning_player = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
        }  
        if(answering_player == "player2") {
            answering_player = "player1";
            document.getElementById("player_answer").innerHTML = "Answer turn: " + player1_name; 
        }
        else{
            answering_player="player2";
            document.getElementById("player_answer").innerHTML = "Answer turn :" + player2_name;
        }
        document.getElementById("output").innerHTML="";
    }






/*
if(questoning_player=="player1")
{
questioning_player = "player2"
documument.getElementById("questoning_player").innerHTML = "Question Turn - " + player2_name;
}
else
{
questioning_player = "player1"
documument.getElementById("questoning_player").innerHTML = "Question Turn - " + player1_name;
}
document.getElementById("output").innerHTML="";




        document.getElementById("player1_score").innerHTML = update_player1_score;
    }

    if(questioning_player == "player1_name") {
        questioning_player = "player2_name";
        document.getElementById("player_question").innerHTML = "Question turn:" +player2_name; 
    }
    else{
        update_player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }
    if(questioning_player=="player1_name") {
        questioning_player="player2_name"
        document.getElementById("questoning_player").innerHTML = "Question turn -" + player2_name ;

    }
    else{
        questioning_player="player1_name";
        document.getElementById("questoning_player").innerHTML = "Question turn -" +player1_name;
    }
    if(answering_player == "player1_name") {
        answering_player = "player2_name";
        document.getElementById("player_answer").innerHTML = "Answer turn -" +player2_name; 
    }
    else{
        answering_player="player2_name";
        document.getElementById("player_answer").innerHTML = "Answer turn -" +player1_name;
    }*/

}