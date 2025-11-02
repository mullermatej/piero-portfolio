// Gallery Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxPlaceholder = document.getElementById('lightbox-placeholder');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;

// Open lightbox when clicking on gallery item
galleryItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		currentImageIndex = index;
		openLightbox();
	});
});

function openLightbox() {
	const currentItem = galleryItems[currentImageIndex];
	const placeholder = currentItem.querySelector('.placeholder');
	const bgColor = placeholder.style.backgroundColor;
	const aspectRatio = currentItem.getAttribute('data-aspect');

	// Clone the placeholder style for lightbox
	lightboxPlaceholder.style.backgroundColor = bgColor;

	// Set appropriate size based on aspect ratio
	if (aspectRatio === 'portrait') {
		lightboxPlaceholder.style.width = '600px';
		lightboxPlaceholder.style.height = '800px';
	} else if (aspectRatio === 'landscape') {
		lightboxPlaceholder.style.width = '800px';
		lightboxPlaceholder.style.height = '600px';
	} else {
		lightboxPlaceholder.style.width = '700px';
		lightboxPlaceholder.style.height = '700px';
	}

	lightbox.classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeLightbox() {
	lightbox.classList.remove('active');
	document.body.style.overflow = 'auto';
}

function showPrevImage() {
	currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
	openLightbox();
}

function showNextImage() {
	currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
	openLightbox();
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
	if (e.target === lightbox) {
		closeLightbox();
	}
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
	if (!lightbox.classList.contains('active')) return;

	if (e.key === 'Escape') {
		closeLightbox();
	} else if (e.key === 'ArrowLeft') {
		showPrevImage();
	} else if (e.key === 'ArrowRight') {
		showNextImage();
	}
});
