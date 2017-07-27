var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
var modal5 = document.getElementById('modal5');
var modal6 = document.getElementById('modal6');
var modal7 = document.getElementById('modal7');
var modal8 = document.getElementById('modal8');
var modal9 = document.getElementById('modal9');
var modal10 = document.getElementById('modal10');
var modal11 = document.getElementById('modal11');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('diseño1');
var img2 = document.getElementById('diseño2');
var img3 = document.getElementById('diseño3');
var img4 = document.getElementById('diseño4');
var img5 = document.getElementById('diseño5');
var img6 = document.getElementById('diseño6');
var img7 = document.getElementById('diseño7');
var img8 = document.getElementById('diseño8');
var img9 = document.getElementById('diseño9');
var img10 = document.getElementById('diseño10');
var img11 = document.getElementById('diseño11');

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var modalImg6 = document.getElementById("img06");
var modalImg7 = document.getElementById("img07");
var modalImg8 = document.getElementById("img08");
var modalImg9 = document.getElementById("img09");
var modalImg10 = document.getElementById("img10");
var modalImg11 = document.getElementById("img11");


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
img7.onclick = function(){
    modal7.style.display = "block";
    modalImg7.src = this.src;
}
img8.onclick = function(){
    modal8.style.display = "block";
    modalImg8.src = this.src;
}
img9.onclick = function(){
    modal9.style.display = "block";
    modalImg9.src = this.src;
}
img10.onclick = function(){
    modal10.style.display = "block";
    modalImg10.src = this.src;
}
img11.onclick = function(){
    modal11.style.display = "block";
    modalImg11.src = this.src;
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
span[6].onclick = function() {   
	modal7.style.display = "none";
}
span[7].onclick = function() {   
	modal8.style.display = "none";
}
span[8].onclick = function() {   
	modal9.style.display = "none";
}
span[9].onclick = function() {   
	modal10.style.display = "none";
}
span[10].onclick = function() {   
  modal11.style.display = "none";
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