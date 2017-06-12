(function(){
	var cargarPagina = function () {
		cargarPersonajes();
	}

	var cargarPersonajes = function () {
		var url = 'http://swapi.co/api/people/';
		$.get(url, function (response) {
			console.log(response);
			var personajes = response.results;
			var total = response.count;
			mostrarPersonaje(personajes);
			mostrarTotal(total);
		});
		
	};
	var mostrarPersonaje = function(personajes){
		var $ul = $('#personajes');
		
				personajes.forEach(function (personaje){
					var $li = $("<li />");
					$li.text(personaje.name + " - " + personaje.height);
					$ul.append($li)
				});
	}
	var mostrarTotal = function(total){
		$('#total').text(total);
	}
	$(document).ready(cargarPagina);
}) ()


