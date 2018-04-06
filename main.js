$("#text1, #text2, #text3").hide();

$("button").click(function(){
	$(this).next("button").show();
});