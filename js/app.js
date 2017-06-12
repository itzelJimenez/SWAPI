(function(){
	var cargarPagina = function () {
		cargarPersonajes();
	}

	var cargarPersonajes = function () {
		$.ajax('http://swapi.co/api/people', {
			method: 'GET',
			dataType: 'json',
			success: function(response){
				console.log("response", response);
				var personajes = response.results;
				var total = response.count;
				mostrarPersonaje(total);
				mostrarPersonaje(personajes);
			},
			error: function(error){
				 console.log("error", error)
			}
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
	var mostrarPersonaje = function(total){
		$('#total').text(total);
	}
	$(document).ready(cargarPagina);
}) ()


