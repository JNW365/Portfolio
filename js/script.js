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

//   document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");

//     form.addEventListener("submit", function (e) {
//       setTimeout(() => {
//         form.reset(); 
//       }, 100); 
//     });
//   });

//   activate toast
const form = document.getElementById('contact-form');
const toastEl = document.getElementById('confirm-toast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastEl);

form.addEventListener('submit', function (e) {
	e.preventDefault(); // Stop default submission
  
	const formData = new FormData(form);
  
	fetch(form.action, {
	  method: 'POST',
	  body: formData,
	  headers: {
		'Accept': 'application/json'
	  }
	}).then(response => {
	  if (response.ok) {
		toastBootstrap.show(); // Show the toast
		form.reset(); // Optional: clear form
	  } else {
		alert('Something went wrong. Try again!');
	  }
	}).catch(error => {
	  alert('There was a problem sending the email.');
	});
  });

