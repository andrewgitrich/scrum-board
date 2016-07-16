$(document).ready(function(){



	$('button').click(function(){
		$('.col-1').append("<textarea></textarea>");
	// cancel allows the textarea to be dragged freely
	$('textarea').draggable({
		cancel: ''
	});

	});


});
