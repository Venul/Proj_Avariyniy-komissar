$(function() {
	VK.Widgets.Group("vk_groups", {
		mode: 3,
		width: "280px",
		height: "200px"
	}, 201892547);

	$(".scroll-link").click(function() {
		var object = $(this).attr("data-scroll");
		var destination = $(object).offset().top;

		$("html, body").animate({ 
			scrollTop: destination
		}, 1000);

		return;
	});
});