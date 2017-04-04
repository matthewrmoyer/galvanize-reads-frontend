$(document).ready(function() {
	$(".get-books-button").on('click', () => {
		console.log('lcikadf')


		var fullData = []

		$.get('https://galvanize-reads-moyer.herokuapp.com/books', (data) => {
			data.forEach((element) => {
				fullData.push(element)
			})


			$.get('https://galvanize-reads-moyer.herokuapp.com/author_book', (data) => {

				data.forEach((element) => {
					var authorId = element.author_id
					var bookId = element.book_id



					fullData.forEach((fullDataElement) => {
						if (fullDataElement.id == bookId) {
							if (typeof fullDataElement.author_id != 'object') {
								fullDataElement.author_id = []
							}
							fullDataElement.author_id.push(authorId)
						}
					})
				})
			})


			$.get('https://galvanize-reads-moyer.herokuapp.com/authors', (data) => {


				data.forEach((element) => {
					var author = {
						author_id: element.id,
						first_name: element.first_name,
						last_name: element.last_name
					}

					fullData.forEach((fullDataElement) => {
						if (fullDataElement.author_id == author.author_id) {
							fullDataElement.author = author
						}
					})
				})


				console.log("Full Data")
		console.log(fullData)

		var source = $("#book-template").html()
		var template = Handlebars.compile(source)
		fullData.forEach((element) => {
			var html = template(element)
			$('.books-placeholder').append(html)
		})
			})


		})

	})

});