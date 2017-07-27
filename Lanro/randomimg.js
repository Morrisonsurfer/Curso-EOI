$(document).ready(function(){

	var x = Math.round(Math.random() * 7 + 1);
	var y = Math.round(Math.random() * 7 + 1);
	var z = Math.round(Math.random() * 7 + 1);
	while (x == y){
		y = Math.round(Math.random() * 7 + 1);
	};
	while (x == z){
		z = Math.round(Math.random() * 7 + 1);
	};
	while (y == z){
		z = Math.round(Math.random() * 7 + 1);
	};
	document.getElementById(x).style.visibility = "visible";
	document.getElementById(y).style.visibility = "visible";
	document.getElementById(z).style.visibility = "visible";
	
	document.getElementById(x).style.display = "block";
	document.getElementById(y).style.display = "block";
	document.getElementById(z).style.display = "block";
	
	//$("article").css({"display": "block", "float": "left", "width": "33%"});
	//$("article").css({"display": "block", "float": "left", "width": "33%"});
	//$("article").css({"display": "block", "float": "left", "width": "33%"});
});
