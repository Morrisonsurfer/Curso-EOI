var modal1 = document.getElementById('modal1');


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('diseño1');

var modalImg1 = document.getElementById("img01");


img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() { 
  modal1.style.display = "none";
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