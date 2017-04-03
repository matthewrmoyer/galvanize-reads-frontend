$(document).ready(function() {
	$(".get-authors-button").on('click', () => {
		console.log('lcikadf')
		$.get('https://galvanize-reads-moyer.herokuapp.com/authors', (data) => {
			console.log(data)
			var source = $("#author-template").html()
			var template = Handlebars.compile(source)
			data.forEach((element) => {
				var html = template(element)
				$('.authors-placeholder').append(html)
			})
		})
	})
});