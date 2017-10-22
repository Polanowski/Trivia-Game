/*----------------------- 
|                        |
|                        |                      
|                        |
|Harry Potter Trivia Game|
|                        |
|                        |
|                        |
------------------------*/
$(document).ready(function(){
/*Declaring variables 
- var correct is storing how many correct answers
- var incorrect is storing incorrect answers
- var timer and var counter is for the timing function
*/
var correct = 0; 
var incorrect = 0;
var timer;
var userGuess;
var counter = 30;

//Creating an function with an object to hold the questions 
//var questHarry = function(){
var questions = [{
	question: "How old was Harry when he got his scar?",
	choices: ["12 months", "15 months", "18 months", "9 months"],
	correctAnswer: "15 months"
	},
	{
	question: "What is Severus Snape's Patronus?",
	choices: ["Doe", "Snake", "Goat", "Bear"],
	correctAnswer: "Doe"
	},
	{
	question: "What is Severus Snape's Patronus",
	choices: ["Doe", "Snake", "Goat", "Bear"],
	correctAnswer: "Doe"
	},
	{
	question: "Where did Harry live with his parents, before they were killed?",
	choices: ["Number 12 Grimmauld Place", "Shell Cottage", "House of Gaunt", "Godric's Hollow"],
	correctAnswer: "Godric's Hollow"
	},
	{
	question: "What is Dumbledore's favorite candy?",
	choices: ["Lemon Drops", "Chocolate Frogs", "Peppermint", "Pumpkin Cakes"],
	correctAnswer: "Lemon Drops"
	}

];
console.log(questions[0].question); //Test
	//This is my timer functions
function timerWrapper() {
	//Sets the timer
	timer = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(timer);
			timeOut();
		}
		else if (counter > 0) {
			counter--;
		}
		$("#timer").html(counter);
	}
}
//When the user clicks the begin button.
$("button").click(function(){
	//print the question to the page
	$("button").hide();
	$("#test").html("<input type='radio' name='answers'>A <span class='btn a'></span><br><input type='radio' name='answers'>B <span class='btn b'></span><br><input type='radio' name='answers'>C <span class='btn c'></span><br><input type='radio' name='answers'>D <span class='btn d'></span><br>");
	$("#questions").append(questions[0].question);
	$(".btn.a").append(questions[0].choices[0]);
	$(".btn.b").append(questions[0].choices[1]);
	$(".btn.c").append(questions[0].choices[2]);
	$(".btn.d").append(questions[0].choices[3]);

	timerWrapper();
	console.log("test");
	console.log(incorrect);
});

$("body").on("click", ".btn", function(event){
	userGuess = $(this).text();
	
	console.log("it worked");
	console.log(userGuess);
	//for (var i = 0; i < questions.length i++) {
		if (userGuess === questions[0].correctAnswer) {
			correct++;

		} else {
			incorrect++;
		}
	//}
	console.log(correct);
	console.log(incorrect);
});



function timeOut(){
	if (counter === 0) {
		incorrect++;
	}
}

function resetGame() {
	correct = 0;
	incorrect = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

/*$("#questions").append(questions[1].question);
$("#questions").append(questions[2].question);
$("#questions").append(questions[3].question);
*/	
});