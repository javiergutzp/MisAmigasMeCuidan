function openPage(pageName,elmnt,color) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}
	document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = color;
}

var modal = document.getElementById("myModal");
var spanClose = document.getElementsByClassName("close")[0];
var btnAdd1 = document.getElementById("plus-button-1");
var btnAdd2 = document.getElementById("plus-button-2");
var btnPublish = document.getElementById("publish-button")

// Se abre el modal del Tendedero
btnAdd1.onclick = function() {
	modal.style.display = "block";
}

// Se publica en el Tendedero después de presionar el botón
btnPublish.onclick = function() {
	modal.style.display = "none";
	var tituloCard = $('#titulo').val();
	var descripCard = $('#descripcion').val();
	$('#id-card-1').prepend(
		`<div class="column">
			<div class="card">
	  			<h3>${$('#titulo').val()}</h3>
	  			<p>${$('#descripcion').val()}</p>
	  		</div>
	  	</div>`);
	document.getElementById('titulo').value = '';
	document.getElementById('descripcion').value = '';
}

// Se publica en el Acompañar
btnAdd2.onclick = function() {
	$('#id-card-2').prepend(
		`<div class="column">
			<div class="card">
	  			<h3>Título con hora y lugar</h3>
	  			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	  	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	  	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	  	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	  	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	  	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	  		</div>
	  	</div>`);
}

// Se cierra el modal al presionar la x
spanClose.onclick = function() {
	modal.style.display = "none";
}

// Se cierra el modal al presionar fuera de este mismo
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none"
	}
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();