var snt = [];
var NUM_FILES = 8; 

$(document).ready(function() {
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		console.log('Hooray! The File APIs are fully supported by this browser!');
		for (i = 0; i < NUM_FILES; i++) {
			filename = './texts/cervantes/' + i + '.txt';
			readTranslation(filename, i);
		}
	} else {
		alert('The File APIs are not fully supported by your browser.');
	}
	
	$('#main-text').on('scroll', function () {
	    $('#end-pane').scrollTop($(this).scrollTop());
	});
	
	$('#main-text').append('<div class="instruction" style="border: 1px solid;border-radius: 3px; background:#AAA; padding: 5px; height: 20px;">To get started, pick a main text to examine:</div>')
});

function readTranslation(filename, index) {
	// setTimeout(loadPreview(index), 0);
	jQuery.get(filename, function(data) {
		console.log('readTranslation(' + index + ')');
		
		snt.push(data.replace(/([^.!?]*[^.!?\s][.!?]['"]?)(\s|$)/g, 
	   	'<span class="end-sentence">$1</span>$2'));
	   	// empty divs
	   	var full_translation = '<div class=\"full-translation\" id=\"full-translation_' + index +'\" style=\"width:100%;border-radius:3px;\"></div>';
	   	$('#end-pane').append(full_translation);
	   	// console.log('#end-pane: ' + $('#end-pane').html());
	}).done(function(e) {
		console.log('FILL full_translation(' + index + ')');
		var full_translation_id = '#full-translation_' + index;
		$(full_translation_id).html(snt[index]);
	}).done(function(e) {
		console.log('update/d end-sentence (' + index + ')');
		
		$('.end-sentence').each(function(j) {
			if (j == 0) {
				console.log('ZERO!');
			}
			if (j == 1) {
				var end_sentence_id = '#' + index + '_end-sentence_0';
				var line = '<div class=\"main-text_preview\" id=\"main-text_preview_' + (index) + '\" style=\"width:100%;padding:5px;padding-right:20px;border-radius:3px;\">' + $(end_sentence_id).text() + '</div>';
				console.log('endT: ' + $(end_sentence_id).text());
				$('#main-text').append(line);
			}
			var my_class = "end-sentence_" + j; // assumes 1:1 matching for all, so a class looks like end-sentence_0
			var id = index + "_" + my_class; 
			// Give the ID to the div
			$(this).attr("class", my_class);
			$(this).attr("id", id);
			console.log('id: ' + id);
		});
	});
	// .done(function(e) {
	// });
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
		// console.log('MY ID: ' + $(this).attr("id"));
	});
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
		    var my_class = "end-sentence_" + j; // assumes 1:1 matching for all
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
			// end_sentence_id = '#' + (it) + '_end-sentence_' + event.target.id.slice(-1);
			end_sentence_id = '#' + (it) + '_' + end_sentence.substring(1);
			console.log('end_sentence to highlight: ' + end_sentence_id);
			// end_sentence_class = '.end-sentence_' + event.target.id.slice(-1);
			line += '<div class=\"preview\" id=\"preview_' + (it) + '\" style=\"width:100%;padding:5px;padding-right:20px;border-radius:3px;\">' + $(end_sentence_id).html() + '<div style=\"font-size:70%;font-weight:bold;\">' + $(author).text().substring(0,($(author).text().length - 1)) + '</div></div>';
		   	// console.log('what: ' + author);
		   	$('#sample-sentences').html(line);
		   	$(end_sentence).css("background","#CCC"); // highlight all matching sentences (to clicked one)
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

