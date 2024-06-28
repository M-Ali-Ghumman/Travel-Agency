'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const bookingOptions = document.querySelectorAll('.booking-option');
    const bookingForms = document.querySelectorAll('.booking-form');

    bookingOptions.forEach(option => {
        option.addEventListener('click', function () {
            const travelType = this.dataset.travelType;

            // Hide all forms
            bookingForms.forEach(form => {
                form.classList.remove('active');
            });

            // Show the corresponding form
            const correspondingForm = document.querySelector(`.booking-form.${travelType}-form`);
            if (correspondingForm) {
                correspondingForm.classList.add('active');
            }

            // Update active state for booking options
            bookingOptions.forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Show default form (plane-form)
    const defaultForm = document.querySelector('.booking-form.plane-form');
    if (defaultForm) {
        defaultForm.classList.add('active');
    }
});

window.addEventListener('scroll', function () {
    var bars = document.querySelectorAll('.fill');

    bars.forEach(function (bar) {
        var barPosition = bar.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;
        var scrollPosition = window.scrollY;

        if (barPosition < screenHeight) {
            var percentage = bar.dataset.percentage;
            bar.style.setProperty('--percentage', percentage);
        }
    });
});

document.querySelectorAll('.see-more').forEach(button => {
    button.addEventListener('click', function () {
        // Logic to show more details or navigate to another page
        alert('More details could be shown here or navigate to a new page.');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown menu on click
    document.querySelector('.navbar ul').addEventListener('click', function () {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown menu if clicked outside
    document.addEventListener('click', function (event) {
        var targetElement = event.target;
        if (!targetElement.closest('.navbar')) {
            dropdownContent.style.display = 'none';
        }
    });
});

function toggleNav() {
    var navLinks = document.querySelector('.dropdown-content');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}

// Event listener for the toggle button
document.querySelector('.toggle-btn').addEventListener('click', toggleNav);