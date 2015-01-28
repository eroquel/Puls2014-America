var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostar-form"),
	$list = $("#contenido"),
	$post = $(".item").first();

	function mostrarFormulario(){
		$form.slideToggle()
		$list.slideToggle()
		return false // esto es para evitar que la pagina suba al darle clic al "a" que tiene el href"#"
	}

	function agregarPost(){
		var url = $url.val(),
			titulo = $titulo.val(),
			$clone = $post.clone();

		$clone.find(".titulo_item a")
			.text(titulo)
			.attr("href", url);
		$clone.hide();
		$list.prepend($clone);

		$clone.fadeIn();
	mostrarFormulario()
		return false;
	}
	// Eventos
	$button.click(mostrarFormulario)
	$form.on("submit",agregarPost);


	var i = 2
	//console.log(i);
	var arr = [7,4,8,5]
	var resultado = arr[++i]
console.log(i);
	console.log(resultado);
	//console.log(i);
	//console.log(arr[5]);


