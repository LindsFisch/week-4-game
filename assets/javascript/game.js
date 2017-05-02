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
var player;
var opponent;


function initializeGame () {
	userChoice = false;
	enemyChoice = false;
	player = "";
	opponent = "";

}

initializeGame();
//first pick
$(".choice").on("click", function () {
	if (userChoice === false && enemyChoice === false) {
		player = options[$(this).data("gg-type")];
		$(this).appendTo("#arena");
		userChoice = true;
	} else if (userChoice === true && enemyChoice === false) {

	}

})
});

