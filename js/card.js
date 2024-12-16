document.addEventListener("DOMContentLoaded", function() {
    // Update star ratings dynamically based on data-rating attribute
    const starRatings = document.querySelectorAll('.star-rating');

    starRatings.forEach(function(ratingElement) {
        const rating = parseInt(ratingElement.getAttribute('data-rating')); // Get rating value from data-rating
        const stars = ratingElement.querySelectorAll('.star');

        // Highlight the appropriate number of stars based on the rating
        stars.forEach(function(star, index) {
            if (index < rating) {
                star.classList.remove('empty');  // Full star
            } else {
                star.classList.add('empty');    // Empty star
            }
        });
    });

    // Handle "Enroll Now" button click
    const enrollButtons = document.querySelectorAll('.cta-btn');
    enrollButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('You have enrolled in the course!');
        });
    });
});
