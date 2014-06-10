$(document).ready(function(){
	$("form").submit(function( event ) {
	  	event.preventDefault();
	  	checkForm();
	});
});

function checkForm(){
	var rows = $("form tr");
	var items = $(rows).find(":radio:checked");
	if(items.length >= 5){
		$('.error-msg').hide();
		window.location.replace("feedback.html");
	} else {
		rows.removeClass('error');
		var rowsNotSeleted = $("tbody tr:not(:has('input:radio:checked'))");
		rowsNotSeleted.addClass('error');
		$('.error-msg').show();
	}
}
