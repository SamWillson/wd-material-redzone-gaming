$(document).ready(function(){
	init()
	setTimeout(init, 4000)
})

function init(){
	jumbotron_text_height  = $("#featured-jumbotron .jumbotron-text").height()
	jumbotron_image_height = $("#featured-jumbotron .jumbotron-image").height()
	jumbotron_text_top = jumbotron_image_height-jumbotron_text_height
	$("#featured-jumbotron .jumbotron-text").css("margin-top", jumbotron_text_top + "px")
	$(".post-image").height($("#post-info").height())
	$('.collapsible').collapsible()
	$('input.autocomplete').autocomplete({
		data: {
			"Grand Theft Auto 1": null,
			"Grand Theft Auto 2": null,
			"Grand Theft Auto 3": null,
			"Grand Theft Auto 4": null,
			"Grand Theft Auto 5": null,
			"Grand Theft Auto Vice City": null,
			"Grand Theft Auto San Andreas": null,

			"Watch Dogs": null,
			"Life is Strange": null,
		},
		limit: 1,
		onAutocomplete: function(val) {
		},
		minLength: 2,
	});
	$(".responsive-iframe").height($(".responsive-iframe").width() * (9/16) + "px")
}