$(document).ready(function(){

	/*
	* On page load, get the version (to determine which words and
	* categories to load) from the URL, load the categories
	* and word list, and initialize all variables.
	*/

	var urlParams = new URLSearchParams(window.location.search);
	var version = urlParams.get('v');
	var is_random = urlParams.get('rand');
	if(!version) version = 2; // Default to v2 if no version present
	if(!is_random) is_random = false; // Default to no randomization
	categories = getCategories(version);
	word_list = getWordList(version);

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
			categories = getCategories(version);
			word_list = getWordList(version, is_random);
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
		if(categories[round]['separator'] != undefined){
			$("#separator_left").html(categories[round]['separator']);
		}
	}
	if(categories[round]['sub_right'] != undefined){
		$("#subcategory_right").html(categories[round]['sub_right']);
		$("#subcategory_right").attr('class', categories[round]['sub_color']);
		if(categories[round]['separator'] != undefined){
			$("#separator_right").html(categories[round]['separator']);
		}
	}
}

function clearCategories()
{
	$("#category_left").html('');
	$("#category_right").html('');
	$("#subcategory_left").html('');
	$("#subcategory_right").html('');
	$("#separator_left").html('');
	$("#separator_right").html('');
}

function showWord(count, round)
{

	word = word_list[round][count][0].val;
	color = word_list[round][count][1];

	if(word_list[round][count][0].type == 'img'){
		$("#img").attr('src', word);
		$("#word").html('');
	}

	else {
		$("#word").html(word);
		$("#word").attr('class', color);
		$("#img").attr('src', '');
	}

}

function showTime(round, timer)
{
	clearCategories();

	$("#word").html('');
	$("#img").attr('src', '');

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

function getCategories(version)
{

	var cat;
	switch (version) {
		case "1":
			cat = categories_gender;
			break;

		case "2":
		default:
			cat = categories_ability;
			break;
	}

	return cat;
}

function getWordList(version, is_random)
{

	var word_list;
	switch (version) {
		case "1":
			word_list = word_list_gender;
			break;

		case "2":
		default:
			word_list = word_list_ability;
			break;
	}

	if(is_random)
	{
		$.each(word_list, function() { fisherYates(this) });
	}

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
