$(function() {

	$.ajax({
		url: 'https://www.codeschool.com/users/LiloNQuiche.json',
		dataType: 'jsonp',
		success: function(response){
			for (e of response.courses.completed){
				var course = document.createElement('div');
				course.className = 'course';

				var title = document.createElement('h3');
				title.innerHTML = e.title;
				course.appendChild(title);

				var image = document.createElement('img');
				image.src = e.badge;
				course.appendChild(image);

				var link = document.createElement('a');
				link.href = e.url;
				link.target = '_blank';
				link.class = 'btn btn-primary';
				link.innerHTML= 'See Course';
				course.appendChild(link);

				document.getElementById("badges").appendChild(course);
			};
		}
	});

});
