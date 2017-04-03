$(document).ready(function() {
	$(".get-books-button").on('click', () => {
		console.log('lcikadf')
		$.get('https://galvanize-reads-moyer.herokuapp.com/books', (data) => {
			console.log(data)
			var source = $("#book-template").html()
			var template = Handlebars.compile(source)
			data.forEach((element) => {
				var html = template(element)
				$('.books-placeholder').append(html)
			})
		})
	})
});