$(document).ready(function() {
	$(".get-books-button").on('click', () => {
		console.log('lcikadf')


		var fullData = []

		$.get('https://galvanize-reads-moyer.herokuapp.com/books', (data) => {
			console.log("book table")
			console.log(data)
			var source = $("#book-template").html()
			var template = Handlebars.compile(source)
			data.forEach((element) => {
				fullData.push(element)
				var html = template(element)
				$('.books-placeholder').append(html)
			})


			$.get('https://galvanize-reads-moyer.herokuapp.com/author_book', (data) => {
				console.log("join table")
				console.log(data)
				data.forEach((element)=> {
					var authorId = element.author_id
					var bookId = element.book_id

					console.log("Author Id: " + authorId)
					console.log("Book Id: " + bookId)


					fullData.forEach((fullDataElement) => {
						if(fullDataElement.id == bookId){
							if(typeof fullDataElement.author_id != 'object'){
								fullDataElement.author_id = []
							}
							fullDataElement.author_id.push(authorId)
						}
					})
				})
			})


			$.get('https://galvanize-reads-moyer.herokuapp.com/authors', (data) => {
				console.log("author table")

				console.log(data)

			})
		})

		console.log("Full Data")
			console.log(fullData)
	})

});