var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
var modal5 = document.getElementById('modal5');
var modal6 = document.getElementById('modal6');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('diseño1');
var img2 = document.getElementById('diseño2');
var img3 = document.getElementById('diseño3');
var img4 = document.getElementById('diseño4');
var img5 = document.getElementById('diseño5');
var img6 = document.getElementById('diseño6');

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var modalImg6 = document.getElementById("img06");


img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
}
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
}
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
}
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
}
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
}
img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() { 
  modal1.style.display = "none";
}
span[1].onclick = function() {   
  modal2.style.display = "none";
}
span[2].onclick = function() {   
  modal3.style.display = "none";
}
span[3].onclick = function() {   
  modal4.style.display = "none";
}
span[4].onclick = function() {   
  modal5.style.display = "none";
}
span[5].onclick = function() {   
	modal6.style.display = "none";
}



function validateForm(){
	
	var mail = document.forms["formcontacto"]["emailusuario"].value;
	var nombre = document.forms["formcontacto"]["nombreusuario"].value;
	var texto = document.forms["formcontacto"]["comentario"].value;
	if (mail == ""){
		alert ("El campo e-mail debe ser rellenado");
		return false;
	}
	if (nombre == ""){
		alert ("El campo nombre debe ser rellenado");
		return false;
	}
	if (texto == ""){
		alert ("El campo comentario debe ser rellenado");
		return false;
	}
}