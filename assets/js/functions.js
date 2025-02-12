$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});


// smooth-scrolling 

const scrollToSection = document.querySelectorAll('.scrollToSection');

scrollToSection.forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();

		const targetId = this.getAttribute('href').substring(1);
		const targetSection = document.getElementById(targetId);

		if (targetSection) {
			targetSection.scrollIntoView({
				behavior: 'smooth'
			});
		}
	});
});

// slider



// Map

var map = L.map('map').setView([46.813948, -71.147646], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([46.813948, -71.147646]).addTo(map);