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