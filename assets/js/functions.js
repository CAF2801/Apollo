window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

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

const slides = document.querySelectorAll('.banner li');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let counter = 0;

slides.forEach(function(slide, index) {
	slide.style.left = `${index * 100}%`;
})

nextBtn.addEventListener('click', function() {
	counter++;
	slides[counter - 1].classList.remove('active');
	slides[counter].classList.add('active');
	carousel();
})
prevBtn.addEventListener('click', function() {
	counter--;
	slides[counter + 1].classList.remove('active');
	slides[counter].classList.add('active');
	carousel();
})

function carousel() {
	if(counter < slides.length -1) {
		nextBtn.style.display = 'block';
	} else {
		nextBtn.style.display = 'none';
	}

	if(counter > 0) {
		prevBtn.style.display = 'block';
	} else {
		prevBtn.style.display = 'none';
	}

	slides.forEach(function(slide) {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	})
}

prevBtn.style.display = 'none';

// Map

var map = L.map('map').setView([46.813948, -71.147646], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([46.813948, -71.147646]).addTo(map);

