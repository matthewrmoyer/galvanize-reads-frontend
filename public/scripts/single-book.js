$(document).ready(function() {

function getUrlParameter(sParam) {
		const sPageURL = decodeURIComponent(window.location.search.substring(1));
		const sURLVariables = sPageURL.split('&');
		let id;
		sURLVariables.forEach((paraName) => {
			const sParameterName = paraName.split('=');
			if (sParameterName[0] === sParam) {
				id = sParameterName[1] === undefined ? false : sParameterName[1];
			}
		});
		return id;
	}
	var bookId = getUrlParameter('id');







	$(".get-books-button").on('click', () => {
		console.log('lcikadf')
		$.get('https://galvanize-reads-moyer.herokuapp.com/books', (data) => {
			console.log(data)
			var source = $("#book-template").html()
			var template = Handlebars.compile(source)


			data.forEach((element) => {
				if(element.id==bookId){
				var html = template(element)
				$('.books-placeholder').append(html)
			}
			
			})
		})
	})

	$(document).on('click', '.single-book-page-remove-button', function(){
		console.log('asdf')

		$.ajax({
			url: 'https://galvanize-reads-moyer.herokuapp.com/books/'+bookId,
			type: 'DELETE',
			data: {
				id: bookId
			},
			success: function(result) {
				console.log('DELETING')
				console.log(result)
			}
		})

	})


	$(document).on('click', '.single-book-form-submit', function(){

			$.ajax({
			url: 'https://galvanize-reads-moyer.herokuapp.com/books/'+bookId,
			type: 'PATCH',
			data: {
				 title: $(".single-book-form-title-input").val(),
				 genre: $(".single-book-form-genre-input").val(),
				 description: $(".single-book-form-description-input").val(),
				 cover: $(".single-book-form-cover-input").val()		
			},
			success: function(result) {
				console.log('Patching')
				console.log(result)
			}
		})


	})
});