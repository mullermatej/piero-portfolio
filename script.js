// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		navMenu.classList.toggle('active');
	});
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach((link) => {
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	});
});

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';
