var snt = [];
var NUM_FILES = 4; 

$(document).ready(function() {
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		console.log('Hooray! The File APIs are fully supported by this browser!');

		for (i = 0; i < NUM_FILES; i++) {
			filename = './texts/kafka/' + i + '.txt';
			// if (i == 0) {
			// 	readOriginal(filename);
			// } else {
				readTranslation(filename, i);
			// }
		}
	} else {
		alert('The File APIs are not fully supported by your browser.');
	}
});

// function displayButton() {

// }

// function readOriginal(filename) {
// 	jQuery.get(filename, function(data) {
// 		snt[0] = data.replace(/([^.!?]*[^.!?\s][.!?]['"]?)(\s|$)/g, 
// 	   	'<span class="sentence">$1</span>$2');

// 		displayButtons(); 
// 		// $('#main-text').html(snt[0]);
// 		// note that here this will only affect the main-text section
// 		$('.sentence').each(function(i) {
// 		    // Store an id with format "uniqueId_{index}" in a variable.
// 		    var id = "0_sentence_" + i;
// 		    // Give the ID to the div
// 		    $(this).attr("id", id);
// 		});
// 	});
// }

function readTranslation(filename, index) {
	// console.log(filename);
	jQuery.get(filename, function(data) {
		snt.push(data.replace(/([^.!?]*[^.!?\s][.!?]['"]?)(\s|$)/g, 
	   	'<span class="end-sentence">$1</span>$2'));
	   	// console.log(index);

	   	// end pane itself is not visible at this point
	   	// console.log(snt);
	   	var full_translation = '<div class=\"full-translation\" id=\"full-translation_' + index +'\" style=\"width:100%;border-radius:3px;\"></div>';
	   	var full_translation_id = '#full-translation_' + index;
	   	$('#end-pane').append(full_translation);
	   	$('.full-translation').each(function(i) {
	   		$(full_translation_id).html(snt[index]);
	   		$('.end-sentence').each(function(j) {
			    // Store an id with format "uniqueId_{index}" in a variable.
			    var my_class = "end-sentence_" + j; // assumes 1:1 matching for all
			    var id = index + "_" + my_class; 
			    // Give the ID to the div
			    $(this).attr("class", my_class);
			    $(this).attr("id", id);
			});
			// snt[index] = $('.full-translation').html(); <-- never implemented but might be useful

	   		var line = "";
	   		$('.end-sentence_0').each(function(k) {
			   	var end_sentence_id = '#' + k + '_end-sentence_0';
			   	// console.log('END: ' + end_sentence_id);
			   	// console.log('val: ' + $(end_sentence_id).html());
			   	line += '<div class=\"main-text_preview\" id=\"main-text_preview_' + (k) + '\" style=\"width:100%;padding:5px;padding-right:20px;border-radius:3px;\">' + $(end_sentence_id).html() + '</div>';
			});
			$('#main-text').html(line);
	   	});

	   	// var line = "";
	});
}

$(document).on('click','.main-text_preview', function() {
	var main_preview_id = '#' + event.target.id;
	var main_preview_number = event.target.id.slice(-1);
	console.log('mainID: ' + main_preview_id);
	$('#main-text').html(snt[main_preview_number]);
	$('.end-sentence').each(function(i) {
		var my_class = 'sentence'; 
		var id = main_preview_number + "_" + my_class + "_" + i;
		$(this).attr("class", my_class);
		$(this).attr("id", id);
		console.log('MY ID: ' + $(this).attr("id"));
	});
	// var preview_number = event.target.id.slice(-1);
	// var translation_to_view_id = '#full-translation_' + preview_number; 
	// $('.full-translation').css("display", "none");
	// // console.log(translation_to_view_id);
	// $(translation_to_view_id).css("display","block");
	// $('#end-pane').css("display","block");
	// $('.preview').css("background","none");
	// $(preview_id).css("background","#F1F1F1");
});

$(document).on('click','.sentence', function() {
	var sentence_id = event.target.id;
	// console.log(sentence_id);
	// console.log(snt);
	$('.sentence').css("background", "transparent"); // clear previously highlighted sentences
	$('#original-line').text($(this).text()) // set original text highlight to 
	$(this).css("background", "#F1F1F1"); // highlight the clicked text
	// $('#end-pane').css("display", "block");

	$('.full-translation').each(function(i) {
		var full_translation_id = '#full-translation_' + (i);
	   	$(this).css("display","none");
	   	$(full_translation_id).html(snt[i]);

	   	$('.end-sentence').each(function(j) {
		    // Store an id with format "uniqueId_{index}" in a variable.
		    var my_class = "end-sentence_" + (j % 151); // assumes 1:1 matching for all
		    var id = (i) + "_" + my_class; 
		    // Give the ID to the div
		    $(this).attr("class", my_class);
		    $(this).attr("id", id);
		});

		var end_sentence = ".end-" + sentence_id.substring(2);
		console.log(end_sentence);

		var line = "";
		$('#sample-sentences').css("display","block");
		var index = 0;
		$(end_sentence).each(function(k) {
			index += 1; 
		});

		for (it = 0; it < index; it++) {
			author = '#' + (it) + '_end-sentence_0';
			end_sentence_id = '#' + (it) + '_end-sentence_' + event.target.id.slice(-1);
			end_sentence_class = '.end-sentence_' + event.target.id.slice(-1);
			line += '<div class=\"preview\" id=\"preview_' + (it) + '\" style=\"width:100%;padding:5px;padding-right:20px;border-radius:3px;\">' + $(end_sentence_id).html() + '<div style=\"font-size:70%;font-weight:bold;\">' + $(author).text().substring(0,($(author).text().length - 1)) + '</div></div>';
		   	// console.log('what: ' + author);
		   	$('#sample-sentences').html(line);
		   	$(end_sentence_class).css("background","#CCC"); // highlight all matching sentences (to clicked one)
		}

		$('#end-pane').css("display","none");
	});
});

$(document).on('click','.preview', function() {
	var preview_id = '#' + event.target.id;
	console.log(preview_id);
	var preview_number = event.target.id.slice(-1);
	var translation_to_view_id = '#full-translation_' + preview_number; 
	$('.full-translation').css("display", "none");
	// console.log(translation_to_view_id);
	$(translation_to_view_id).css("display","block");
	$('#end-pane').css("display","block");
	$('.preview').css("background","none");
	$(preview_id).css("background","#F1F1F1");
});

