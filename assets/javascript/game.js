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

var player ="";
var opponent ="";

//first pick
$(".choice").on("click", function () {
	if (opponent === "") {
		player = options.($(this).attr("value"));
		console.log(player);
	}
})
});

