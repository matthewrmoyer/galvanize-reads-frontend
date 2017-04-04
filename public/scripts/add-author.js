$(document).ready(function() {



	$(".add-author-form-submit").on('click', () => {
		console.log('lcikadf')
		$.ajax({
			url: 'https://galvanize-reads-moyer.herokuapp.com/authors',
			type: 'POST',
			data: {
				 first_name: $(".single-author-form-first-name-input").val(),
				 last_name: $(".single-author-form-last-name-input").val(),
				 biography: $(".single-author-form-biography-input").val(),
				 portrait: $(".single-author-form-portrait-input").val()		
			},
			success: function(result) {
				console.log('Posting')
				console.log(result)
				location.reload()
			}
		})
	
	})

});