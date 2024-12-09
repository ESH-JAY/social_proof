// let currentIndex = 0; // To track which set of 3 testimonial cards is currently visible
// const itemsPerSlide = 3; // Number of items (testimonial cards) to show at once
// const totalSlides = document.querySelectorAll('.testimonial-card').length; // Total number of testimonial cards
// const totalSlidesInGroup = Math.ceil(totalSlides / itemsPerSlide); // Number of "groups" of 3 testimonial cards

// // Function to show the next set of 3 testimonials
// function showNextTestimonials() {
//     currentIndex = (currentIndex + 1) % totalSlidesInGroup; // Move to the next group, loop back to 0 when reaching the end
//     const carousel = document.querySelector('.testimonial-carousel');
    
//     // Calculate the offset: each group of 3 items takes up 3 * 280px (width of a testimonial) + margins
//     const offset = -currentIndex * (itemsPerSlide * 280 + itemsPerSlide * 20); 
//     carousel.style.transform = `translateX(${offset}px)`;
// }

// // Set an interval to change the testimonials every 15 seconds
// setInterval(showNextTestimonials, 15000); // Change testimonials every 15000ms (15 seconds)
