$(document).ready(function() {

var options = {
	blanche: {
		health: 6,
		attack: 7,
		counter: 8
	},
	sophia: {
		health: 1,
		attack: 2,
		counter: 3
	},
	dorothy: {
		health: 4,
		attack: 5,
		counter: 6
	},
	rose: {
		health: 9,
		attack: 10,
		counter: 2
	}
}

var userChoice;
var enemyChoice;
var player;
var opponent;


function initializeGame () {
	userChoice = false;
	enemyChoice = false;
	player = "";
	opponent = "";

}

initializeGame();

//click to pick player and opponent
$(".choice").on("click", function () {
	//pick user player
	if (userChoice === false && enemyChoice === false) {
		player = options[$(this).data("gg-type")];
		$(this).appendTo("#arena");
		$("#chars > .imgbox").appendTo("#enemies");
		userChoice = true;
		console.log(player);
	//pick opponent
	} else if (userChoice === true && enemyChoice === false) {
		opponent = options[$(this).data("gg-type")];
		$(this).appendTo("#lanai");
		enemyChoice = true;
		console.log(opponent);
	}

})

//click to attack
$(".attack").on("click", function () {
	//continue to attack
	if (player.health > 0 && opponent.health > 0) {

	//player won - new opponent
	} else if (player.health > 0 && opponent.health <= 0) {


		//if there are opponents remaining
		if () {

		//if there are no opponents remaining	
		} else {	


		//create restart button
		}

	//opponent won
	} else if (player.health < 0 && opponent.health > 0){

	}
	console.log(player.health);
	console.log(opponent.health);

})

//click to restart 
$(".restart").on("click", function () {

})
});

