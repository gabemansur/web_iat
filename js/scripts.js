$(document).ready(function(){

	/*
	* On page load, load the categories and word list,
	* and initialize all variables.
	*/
	categories = getCategories();
	word_list = getWordList();
	console.log(word_list);

	/*
	* round and count are used as array indices
	* and are incremented as the task advances.
	* count is initially set to -1 to allow the
	* categories to display once, before the words
	* appear.
	*/
	var round = 0;
	var count = -1;
	var timer = new Array();

	// Show the initial starting screen
	showStart();

	/**
	* Pressing the space bar will advance the task by:
	* 	- showing the next word;
	*		- moving to the next category;
	* 	- displaying the time for the completed category;
	*/
	$(document).bind('keydown', 'space', function () {

		if($("#timer").is(":visible")){
			$("#timer").hide();
		}

		// If all rounds have been completed, move to the end
		//  but initialize the task so it is ready to run again
		if(word_list[round] == undefined){
			showEnd();
			round = 0;
			categories = getCategories();
			word_list = getWordList();
			return;
		}

		// If count is -1 display the categories only, and increment the count
		if(count == -1){
			showCategories(categories, round);
			$("#word").html('');
			count++;
			return;
		}

		// Record the starting time for this round
		if(count == 0){
			timer[round] = Date.now();
		}

		// If the end of the words for this round is reached,
		//  show the time for the round
		if(count > word_list[round].length-1){
			showTime(round, timer);
			round++;
			count = -1;
			return;
		}

		// Otherwise, show the next word in the round
		else {
			showWord(count, round);
		}

		count++;

	});

});

function showCategories(categories, round)
{
	$("#category_left").html(categories[round]['left']);
	$("#category_left").attr('class', categories[round]['color']);
	$("#category_right").html(categories[round]['right']);
	$("#category_right").attr('class', categories[round]['color']);

	if(categories[round]['sub_left'] != undefined){
		$("#subcategory_left").html(categories[round]['sub_left']);
		$("#subcategory_left").attr('class', categories[round]['sub_color']);
	}
	if(categories[round]['sub_right'] != undefined){
		$("#subcategory_right").html(categories[round]['sub_right']);
		$("#subcategory_right").attr('class', categories[round]['sub_color']);
	}
}

function clearCategories()
{
	$("#category_left").html('');
	$("#category_right").html('');
	$("#subcategory_left").html('');
	$("#subcategory_right").html('');
}

function showWord(count, round)
{
	word = word_list[round][count][0];
	color = word_list[round][count][1];
	$("#word").html(word);
	$("#word").attr('class', color);
}

function showTime(round, timer)
{
	clearCategories();

	$("#word").html('');

	$("#timer").show();
	end_time = Date.now();
	$("#time").html(end_time - timer[round] + " milliseconds");

}

function showStart()
{
	clearCategories();
	$("#word").html('Press [SPACE] to begin');
}

function showEnd()
{
	clearCategories();
	$("#word").html('End of Test');
}

function getCategories()
{

	return {
						0: {
									left: 'Male',
									right: 'Female',
									color: 'black'
								},

						1: {
									left: 'Career',
									right: 'Home',
									color: 'green'
								},

						2: {
									left: 'Male',
									right: 'Female',
									color: 'black',
									sub_left: 'Career',
									sub_right: 'Home',
									sub_color: 'green'
							 },

					 	3: {
									left: 'Female',
									right: 'Male',
									color: 'black'
								},


						4: {
									left: 'Female',
									right: 'Male',
									color: 'black',
									sub_left: 'Career',
									sub_right: 'Home',
									sub_color: 'green'
							 }

					};
}

function getWordList()
{

		word_list = [

			[
				["Michelle", "black"],
				["Jeffrey", "black"],
				["Daniel", "black"],
				["John", "black"],
				["Julia", "black"],
				["Emily", "black"],
				["Paul", "black"],
				["Anna", "black"],
				["Ben", "black"],
				["Rebecca", "black"],
				["Barbara", "black"],
				["John", "black"]
			],

			[
				["Office", "green"],
				["Family", "green"],
				["Professional", "green"],
				["Salary", "green"],
				["Children", "green"],
				["Laundry", "green"],
				["Business", "green"],
				["Marriage", "green"],
				["Corporation", "green"],
				["Cooking", "green"],
				["Career", "green"],
				["Parents", "green"]
			],

			[
				["Michelle", "black"],
				["Jeffrey", "black"],
				["Daniel ", "black"],
				["John", "black"],
				["Julia", "black"],
				["Emily", "black"],
				["Paul", "black"],
				["Anna", "black"],
				["Ben", "black"],
				["Rebecca", "black"],
				["Barbara", "black"],
				["John", "black"],
				["Office", "green"],
				["Family", "green"],
				["Professional", "green"],
				["Salary", "green"],
				["Children", "green"],
				["Laundry", "green"],
				["Business", "green"],
				["Marriage", "green"],
				["Corporation", "green"],
				["Cooking", "green"],
				["Career", "green"],
				["Parents", "green"]
			],

			[
				["Michelle", "black"],
				["Jeffrey", "black"],
				["Daniel", "black"],
				["John", "black"],
				["Julia", "black"],
				["Emily", "black"],
				["Paul", "black"],
				["Anna", "black"],
				["Ben", "black"],
				["Rebecca", "black"],
				["Barbara", "black"],
				["John", "black"]
			],

			[
				["Michelle", "black"],
				["Jeffrey", "black"],
				["Daniel ", "black"],
				["John", "black"],
				["Julia", "black"],
				["Emily", "black"],
				["Paul", "black"],
				["Anna", "black"],
				["Ben", "black"],
				["Rebecca", "black"],
				["Barbara", "black"],
				["John", "black"],
				["Office", "green"],
				["Family", "green"],
				["Professional", "green"],
				["Salary", "green"],
				["Children", "green"],
				["Laundry", "green"],
				["Business", "green"],
				["Marriage", "green"],
				["Corporation", "green"],
				["Cooking", "green"],
				["Career", "green"],
				["Parents", "green"]
			]
		];


	$.each(word_list, function() { fisherYates(this) });
	return word_list;
}


/**
* Randomizes an array
*/
function fisherYates(arr) {
    var i = arr.length, j, tempi, tempj;
    if (i === 0) return false;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        tempi = arr[i];
        tempj = arr[j];
        arr[i] = tempj;
        arr[j] = tempi;
    }
}
