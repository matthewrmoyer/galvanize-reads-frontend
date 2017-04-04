$(document).ready(function() {



	$(".add-book-form-submit").on('click', () => {
		console.log('lcikadf')
		$.ajax({
			url: 'https://galvanize-reads-moyer.herokuapp.com/books',
			type: 'POST',
			data: {
				 title: $(".single-book-form-title-input").val(),
				 genre: $(".single-book-form-genre-input").val(),
				 description: $(".single-book-form-description-input").val(),
				 cover: $(".single-book-form-cover-input").val()		
			},
			success: function(result) {
				console.log('Posting')
				console.log(result)
				location.reload()
			}
		})
	
	})

});