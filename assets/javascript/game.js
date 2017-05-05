$(document).ready(function() {

var options = {
	blanche: {
		health: 120,
		attack: 7,
		counter: 8
	},
	sophia: {
		health: 105,
		attack: 10,
		counter: 5
	},
	dorothy: {
		health: 150,
		attack: 5,
		counter: 15
	},
	rose: {
		health: 170,
		attack: 8,
		counter: 10
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
var elem;
var arr;



function initializeGame () {
	userChoice = false;
	enemyChoice = false;
	player = "";
	opponent = "";
	enemyCount = 3;
	$("#stat").empty();
	elem = document.getElementsByClassName("choice");
	arr = jQuery.makeArray(elem);
	$(".imgbox").css({"background" : "pink"});
	$("#dorothy").text(options.dorothy.health);
	$("#rose").text(options.rose.health);
	$("#sophia").text(options.sophia.health);
	$("#blanche").text(options.blanche.health);
	$("#lanaiTwo").empty();

}

initializeGame();

//click to pick player and opponent
$(".choice").on("click", function () {
	//pick user player
	if (userChoice === false && enemyChoice === false) {
		player = options[$(this).data("gg-type")];
		playerName = $(this).data("gg-type");
		$(this).appendTo("#lanai");
		$(this).css({"background" : "green"})
		$("#chars >.imgbox").appendTo("#enemies");
		userChoice = true;
		playerHp = player.health;
		playerAttack = player.attack;

	//pick opponent
	} else if (userChoice === true && enemyChoice === false) {
		opponent = options[$(this).data("gg-type")];
		opponentName = $(this).data("gg-type");
		$(this).appendTo("#lanaiTwo");
		$(this).css({"background" : "red"});
		enemyChoice = true;
		opponentHp = opponent.health;
		$("#vs").css({"visibility": "visible"})
		$("#stat").empty();
	}

})

//click to attack
$(".attack").on("click", function () {

	if (enemyChoice === true && userChoice === true) {

	//change player hp based on opp counter
	playerHp -= opponent.counter;
	$("#" + playerName+ "").html(playerHp);

	//change opp hp based on player attack
	opponentHp -= playerAttack;
	$("#" + opponentName + "").html(opponentHp);

	//increase player attack power
	playerAttack += player.attack;

	$("#stat").html("<p>You attacked " + opponentName.toUpperCase() + " for " + playerAttack + " damage.</p>" +
	"<p>" + opponentName.toUpperCase() + " attacked you back for " + opponent.counter + " damage.</p>")

	checkWin();
	} else {
		$("#stat").html("<p>Choose an enemy!</p>");
	}

	})


//click to restart 
$(".reset").on("click", function () {
	$(".reset").css({"visibility": "hidden"});
	$(".imgbox").appendTo("#chars");
	$("#vs").css({"visibility": "hidden"});
	for (var i = 0; i < arr.length; i++) {
		$("#chars").append(arr[i]);
	}
	initializeGame();
})

function checkWin () {
	
	//player won with no enemies left
	if (playerHp > 0 && opponentHp <= 0 && enemyCount <= 1 && enemyChoice === true && userChoice === true) {
		$("#stat").html("<h2> YOU WIN! </h2>");
		$("#lanaiTwo > .imgbox").detach();
		$(".reset").css({"visibility": "visible"});
		$("#vs").css({"visibility": "hidden"});
		$("#lanaiTwo").html("<img src='assets/images/cheesecake.jpg'>" + "<br>" + "<h3>Your well-deserved CHEESECAKE!</h3>");



	//player won with enemies remaining
	} else if (playerHp > 0 && opponentHp <= 0 && enemyChoice === true && userChoice === true) {
		$("#stat").html("<p>You beat " + opponentName.toUpperCase() + ". Pick a new opponent!</p>");
		$("#lanaiTwo > .imgbox").detach();
		enemyCount--;
		enemyChoice = false;
		$("#vs").css({"visibility": "hidden"});

	//opponent won	
	} else if (playerHp < 0 && opponentHp > 0 || playerHp < 0 && opponentHp < 0 && userChoice === true) {
		$("#stat").html("<h2> You Lose! " + opponentName.toUpperCase() + " ate the cheesecake right in front of YOUR FACE!</h2>");
		$("#vs").css({"visibility": "hidden"});
		$(".reset").css({"visibility": "visible"});
		$("#lanai > .choice").detach();
		userChoice = false;
	}

}

})


