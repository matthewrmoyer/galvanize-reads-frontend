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
	var authorId = getUrlParameter('id');
	console.log(authorId)

		$.get('https://galvanize-reads-moyer.herokuapp.com/authors', (data) => {
			console.log(data)
			var source = $("#author-template").html()
			var template = Handlebars.compile(source)


			data.forEach((element) => {
				if(element.id==authorId){
				var html = template(element)
				$('.authors-placeholder').append(html)
			}
			
			})
		})

	$(document).on('click', '.single-author-page-remove-button', function(){
		console.log('asdf')

		$.ajax({
			url: 'https://galvanize-reads-moyer.herokuapp.com/authors/'+authorId,
			type: 'DELETE',
			data: {
				id: authorId
			},
			success: function(result) {
				console.log('DELETING')
				console.log(result)
				location.reload()
			}
		})

	})


	$(document).on('click', '.single-author-form-submit', function(){

			$.ajax({
			url: 'https://galvanize-reads-moyer.herokuapp.com/authors/'+authorId,
			type: 'PATCH',
			data: {
				 first_name: $(".single-author-form-first-name-input").val(),
				 last_name: $(".single-author-form-last-name-input").val(),
				 biography: $(".single-author-form-biography-input").val(),
				 portrait: $(".single-author-form-portrait-input").val()		
			},
			success: function(result) {
				console.log('Patching')
				console.log(result)
				location.reload()
			}
		})


	})
});