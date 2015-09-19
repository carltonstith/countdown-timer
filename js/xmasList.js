$(document).ready(function() {
	$("#wishList").click(function() {
	
		$(".newPage").load("xmasList.html .myList");
		
		return false;
	});
});