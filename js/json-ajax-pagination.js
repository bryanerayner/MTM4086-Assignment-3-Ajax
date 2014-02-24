$(document).ready(function(){


	$(".pager a").click(function(e)
	{
		e.preventDefault();
		loadProducts($(this).attr("href"));

		$(this).siblings().removeClass("is-current");
		$(this).addClass("is-current");
	});



});



function loadProducts(url)
{
	$("#product-list").empty().addClass("is-loading").load(url+" #product-list", function(){
		$("#product-list").removeClass("is-loading");
	})
}