$(document).ready(function() {
    var popup = $('#contactFormPopup');
    var btn = $('#contact-us');
    var span = $('.close');

    btn.on('click', function() {
        popup.show();
    });

    span.on('click', function() {
        popup.hide();
    });

    $(window).on('click', function(event) {
        if (event.target == popup[0]) {
            popup.hide();
        }
    });

    // form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            success: function() {
                alert('Thank you for your submission!');
                popup.hide();
            },
            error: function() {
                alert('There was an error submitting your form. Please try again.');
            }
        });
    });
});




// read more button , appears on hovering sliding images
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open('https://fylehq.com', '_blank');
        });
    });
});



// changing the image based on box selection in section 5
document.addEventListener('DOMContentLoaded', () => {
    const col1 = document.getElementById('col1');
    const col2 = document.getElementById('col2');
    const col3 = document.getElementById('col3');
    const mainImage = document.getElementById('main-image');

    const imageSources = {
        col1: 'asset/image.png', 
        col2: 'asset/hero.png', 
        col3: 'asset/image3.jpg'   
    };

    col1.addEventListener('click', () => {
        mainImage.src = imageSources.col1;
    });

    col2.addEventListener('click', () => {
        mainImage.src = imageSources.col2;
    });

    col3.addEventListener('click', () => {
        mainImage.src = imageSources.col3;
    });
});



// page animatinos
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


// Slider

document.addEventListener("DOMContentLoaded", function() { 
	const carousel = document.querySelector(".carousel"); 
	const arrowBtns = document.querySelectorAll(".wrapper i"); 
	const wrapper = document.querySelector(".wrapper"); 

	const firstCard = carousel.querySelector(".card"); 
	const firstCardWidth = firstCard.offsetWidth; 

	let isDragging = false, 
		startX, 
		startScrollLeft, 
		timeoutId; 

	const dragStart = (e) => { 
		isDragging = true; 
		carousel.classList.add("dragging"); 
		startX = e.pageX; 
		startScrollLeft = carousel.scrollLeft; 
	}; 

	const dragging = (e) => { 
		if (!isDragging) return; 
	
		
		const newScrollLeft = startScrollLeft - (e.pageX - startX); 
	
		
		if (newScrollLeft <= 0 || newScrollLeft >= 
			carousel.scrollWidth - carousel.offsetWidth) { 
			
			
			isDragging = false; 
			return; 
		} 
	
		
		carousel.scrollLeft = newScrollLeft; 
	}; 

	const dragStop = () => { 
		isDragging = false; 
		carousel.classList.remove("dragging"); 
	}; 

	const autoPlay = () => { 
	
		if (window.innerWidth < 800) return; 
		const totalCardWidth = carousel.scrollWidth; 
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
		
		// If  end, stop autoplay 
		if (carousel.scrollLeft >= maxScrollLeft) return; 
		
	
		timeoutId = setTimeout(() => 
			carousel.scrollLeft += firstCardWidth, 2500); 
	}; 

	carousel.addEventListener("mousedown", dragStart); 
	carousel.addEventListener("mousemove", dragging); 
	document.addEventListener("mouseup", dragStop); 
	wrapper.addEventListener("mouseenter", () => 
		clearTimeout(timeoutId)); 
	wrapper.addEventListener("mouseleave", autoPlay); 

	// scroll with left and right icons
	arrowBtns.forEach(btn => { 
		btn.addEventListener("click", () => { 
			carousel.scrollLeft += btn.id === "left" ? 
				-firstCardWidth : firstCardWidth; 
		}); 
	}); 
}); 
