$(function() {
	$(".scroll-link").click(function() {
		var object = $(this).attr("data-scroll");
		var destination = $(object).offset().top;

		$("html, body").animate({ 
			scrollTop: destination
		}, 1000);

		return;
	});
});