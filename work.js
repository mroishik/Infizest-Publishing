$(document).ready(function () {
  AOS.init();
});
// Counting animation
function countToTarget(counterId, targetValue, duration) {
  const counter = document.getElementById(counterId);
  let start = 1;
  let increment = Math.ceil((targetValue - start) / (duration / 60));

  function count() {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(
        percentage * (targetValue - start) + start
      );
      counter.textContent = currentCount.toLocaleString() + "K+";
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  count();
}

// Call countToTarget for each counter
countToTarget("counter", 250, 5000); // For the first counter with ID 'counter'
countToTarget("counterone", 250, 5000); // For the second counter with ID 'counterone'
countToTarget("countertwo", 250, 5000); // For the second counter with ID 'counterone'
countToTarget("counterthree", 250, 5000); // For the second counter with ID 'counterone'
countToTarget("counterfour", 250, 5000); // For the second counter with ID 'counterone'
countToTarget("counterfive", 250, 5000); // For the second counter with ID 'counterone'
// Function to update counter
function updateCounter(element, targetValue, increment) {
  let currentValue = 1000; // Starting value at 1K
  const counterElement = document.querySelector(element);

  function formatNumber(number) {
    return (number / 1000).toLocaleString() + "K+";
  }

  function incrementCounter() {
    if (currentValue < targetValue) {
      currentValue += increment;
      if (currentValue > targetValue) {
        currentValue = targetValue;
      }
      counterElement.textContent = formatNumber(currentValue);
      if (currentValue >= targetValue) {
        clearInterval(counterInterval);
      }
    }
  }

  const counterInterval = setInterval(incrementCounter, 500);
}

// Call functions
jQuery(document).ready(function () {
  animateProgressBars();
});

changeWord();

countToTarget();

// Call updateCounter for each element
updateCounter(".counter1", 25000, 500); // For the first item
updateCounter(".counter2", 50000, 1000); // For the second item
updateCounter(".counter3", 75000, 1500); // For the third item
updateCounter(".counter4", 100000, 2000); // For the fourth item

// Slick Slider initialization
$(".testimonial-wrapper").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  loop: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// Wait for the DOM to be ready

document.addEventListener("DOMContentLoaded", function () {
  const textAnimation = anime.timeline({
    targets: ".animate-text",
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(200, { start: 1000 }), // Delay between animations
    opacity: 1, // Fade in
  });
  textAnimation.play();
});
