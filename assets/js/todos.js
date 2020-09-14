// Check off the todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// delete the todos
$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

// adding new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// getting the new todo from input
		var todoText = $(this).val();
		$(this).val("");
		// creating new li and adding to the ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})