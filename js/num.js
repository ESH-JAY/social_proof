const numbers = document.querySelectorAll('.number');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const number = entry.target;
      const updateNumber = () => {
        const targetNumber = parseInt(number.textContent);
        const increment = Math.ceil(targetNumber / 100);
        let currentNumber = 0;

        const intervalId = setInterval(() => {
          currentNumber += increment;
          number.textContent = currentNumber;

          if (currentNumber >= targetNumber) {
            clearInterval(intervalId);
            number.textContent = targetNumber;
          }
        }, 80); //take note that this number is the time in milliseconds of how fast the number will increment to the intended number 
      };


//the script below will cause the animation to only run when the section is in the viewpoint. Like a trigger
      updateNumber();
      observer.unobserve(number); // Stop observing once the animation starts
    }
  });
});

numbers.forEach(number => {
  observer.observe(number);
});