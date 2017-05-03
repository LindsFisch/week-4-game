$(document).ready(function() {

var options = {
	blanche: {
		health: 160,
		attack: 7,
		counter: 8
	},
	sophia: {
		health: 125,
		attack: 2,
		counter: 3
	},
	dorothy: {
		health: 140,
		attack: 5,
		counter: 6
	},
	rose: {
		health: 95,
		attack: 10,
		counter: 2
	}
}

var userChoice;
var enemyChoice;
var player;
var opponent;
var enemyCount;
var playerHp;
var opponentHp;
var playerAttack;
var playerName;
var opponentName;


function initializeGame () {
	userChoice = false;
	enemyChoice = false;
	player = "";
	opponent = "";
	enemyCount = 3;
	$("#stat").empty();

}

initializeGame();

//click to pick player and opponent
$(".choice").on("click", function () {
	//pick user player
	if (userChoice === false && enemyChoice === false) {
		player = options[$(this).data("gg-type")];
		playerName = $(this).data("gg-type");
		$(this).appendTo("#lanai");
		$("#chars > .imgbox").appendTo("#enemies");
		userChoice = true;
		playerHp = player.health;
		playerAttack = player.attack
	//pick opponent
	} else if (userChoice === true && enemyChoice === false) {
		opponent = options[$(this).data("gg-type")];
		opponentName = $(this).data("gg-type");
		$(this).appendTo("#lanaiTwo");
		enemyChoice = true;
		opponentHp = opponent.health;
		$("#stat").empty();
	}

})

//click to attack
$(".attack").on("click", function () {
	//continue to attack
	if (playerHp > 0 && opponentHp > 0) {
		//change player hp based on opp counter
		playerHp -= opponent.counter;

		//var hp = 999;
		//var item = $("div[data-gg-type='dorothy'] span")
		//item.text("888");
		//console.log(item);
		//console.log(item.text());
		$("#" + playerName+ "").html(playerHp);

		//change opp hp based on player attack
		opponentHp -= playerAttack;

		//increase player attack power
		playerAttack += player.attack;

		$("#stat").html("<p>You attacked " + opponentName.toUpperCase() + " for " + playerAttack + " damage.</p>" +
		"<p>" + opponentName.toUpperCase() + " attacked you back for " + opponent.counter + " damage.</p>")


	//player won - new opponent
	} else if (playerHp > 0 && opponentHp <= 0) {
		//if there are no opponents remaining
		if (enemyCount === 0) {
			$("#stat").html("<h2> YOU WIN! </h2>");
			
		//if there are opponents remaining	
		} else {	
			$("#stat").html("<p>You beat " + opponentName.toUpperCase() + ". Pick a new opponent!</p>");
			$("#lanaiTwo").empty();
			enemyCount--;
			console.log(enemyCount);
			enemyChoice = false;

		//create restart button
		}

	//opponent won
	} else if (playerHp < 0 && opponentHp > 0){
		$("#stat").html("<h2> You Lose! " + opponentName.toUpperCase() + " ate the cheesecake right in front of YOUR FACE!</h2>");

	}


})

//click to restart 
$(".restart").on("click", function () {

})
});

