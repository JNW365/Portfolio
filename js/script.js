// tooltips
let tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
for (var i = 0; i < tooltipTriggerElements.length; i++) {
	new bootstrap.Tooltip(tooltipTriggerElements[i])
}

// scroll effect 

function userScroll() {
	const navbar = document.querySelector('.navbar');

	window.addEventListener('scroll', () => {
		if(window.scrollY > 50) {
			navbar.classList.add('navbar-sticky');
	
		} else if (window.scrollY < 50) {
			navbar.classList.remove('navbar-sticky');
			navbar.style.animation = 'none';

		}
	});
}

document.addEventListener('DOMContentLoaded', userScroll)

// reset form after submit

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      setTimeout(() => {
        form.reset(); 
      }, 100); 
    });
  });


