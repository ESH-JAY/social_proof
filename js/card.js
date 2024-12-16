document.addEventListener("DOMContentLoaded", function() {
    // updates star ratings dynamically
    const starRatings = document.querySelectorAll('.star-rating');

    starRatings.forEach(function(ratingElement) {
        const rating = parseInt(ratingElement.getAttribute('data-rating')); // get rating value from data-rating
        const stars = ratingElement.querySelectorAll('.star');

        // highlights the exact number if stars specified
        stars.forEach(function(star, index) {
            if (index < rating) {
                star.classList.remove('empty');
            } else {
                star.classList.add('empty');
            }
        });
    });
    });
