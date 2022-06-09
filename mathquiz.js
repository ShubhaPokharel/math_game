
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");


	player1_score = 0;// we are setting player 1 score which is set to 0
	player2_score = 0;// we are setting player 2 score which is set to 0

 document.getElementById("player1_name").innerHTML = player1_name + " : " ;//in the id player1_name we set the name we putted in the input in the log in and putted :
  document.getElementById("player2_name").innerHTML = player2_name + " : ";//in the id player2_name we set the name we putted in the input in the log in and putted :

  document.getElementById("player1_score").innerHTML = player1_score; // the id player1_score will chnage each time payer 1 score is chnaged: the var player1_score is equal to the id player1_score
  document.getElementById("player2_score").innerHTML = player2_score;// the id player2_score will chnage each time payer 2 score is chnaged: the var player2_score is equal to the id player2_score

  document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;//“Question Turn - ” + player1_name //player1_name will hold the name of player1
  document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;//Answer Turn - ” + player2_name //player2_name will hold the name of player2

function send() {
	n1 = document.getElementById("number1").value;// we will get number 1 from the input box id, store it into the varible n1
    n2 = document.getElementById("number2").value;// we will get number 2 from the input box id, store it into the varible n2
    multiplictaion = n1 * n2; // var multiplication is holding n1 and n2 multiplied

    question_word = "<h4 id='word_display'> Question. " + n1+ ' * ' + n2 +"</h4>";// in the var question_word we added html so we first set a h4 and its id is word_display, then we have our h1 multiplied by h2
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";// in the var input_box we have added Answer: would be what is the total of your two numbers you added, then we added an input and the id will be input_check_box
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; // in the var check_button we have added a button Check so we can check to see if our answer is correct
    row =  question_word + input_box + check_button ;// this var row we are going the var question_word, input_box and check_button so we can have out html fully set up and n1 and n2 multiplied
    document.getElementById("output").innerHTML = row;// since the varible row has everythingt the id output is the div where n1, n2  and the button check will appear. 
document.getElementById("number1").value = "";// after all the line above is working,number 1 input on the bottom will be emptied.
document.getElementById("number2").value = "";// after all the line above is working,number 2 input on the bottom will be emptied.
}


question_turn = "player1";//the varible question turn is holding player1: when the game first begins question turn will be whatever name you putted in player 1
answer_turn = "player2";//the varible answer turn is holding player2: when the game first begins answer turn will be whatever name you putted in player 2


function check()
{
	get_answer = document.getElementById("input_check_box").value; // we will get the value of the input you wrote the answer in.
	console.log("get answer " + multiplictaion);
	if(multiplictaion == get_answer)	// in this line of code we are seeing if multiplication(computers correct code) and your answer are the same
	{
		if(answer_turn == "player1")// if player 1 has to answer
		{
			player1_score = player1_score +1;// if player one gets it correct that it adds a point
		    document.getElementById("player1_score").innerHTML = player1_score;// setting the score
		}
		else 
		{
			player2_score = player2_score +1;// if player 2 gets the answer correct than it adds a point
		    document.getElementById("player2_score").innerHTML = player2_score;// setting the score
		}
	}
	if(question_turn == "player1")// if question turn is player 1
	{
		question_turn = "player2"// since player 1 in the beggining has already had a question turn player 2 will have a question turn
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;//player question will be player2 name ex:Question Turn - Sarah
	}
	else 
	{
		question_turn = "player1"//if player 1 has not have a turn for question turn then player 1 will be asking the question
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;//player question will be player1 name ex:Question Turn - Jack
	}

	if(answer_turn == "player1")//if answer turn is player 1
	{
		answer_turn = "player2"//since player 1 in the beggining has already had a answer turn player 2 will have a question turn
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;//player answer will be player2 name
	}
	else 
	{
		answer_turn = "player1"//if player 1 has not have a turn for answer turn then player 1 will be answering the question
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;//player answer will be player1 name
	}

    document.getElementById("output").innerHTML = "";// since we have clicked check the output will restart(be empty)
}




