$(document).ready(function () {
  AOS.init();
});
document.getElementById("popupBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("fresherBtn").addEventListener("click", function () {
  // Redirect to the page for fresher
  window.location.href = "fresher_page.html";
});

document
  .getElementById("experiencedBtn")
  .addEventListener("click", function () {
    // Redirect to the page for experienced
    window.location.href = "experienced_page.html";
  });

// auto date cvalculation
function calculateTotalTime(index) {
  var startDate = new Date(
    document.getElementsByName("Start_Date_" + index)[0].value
  );
  var endDate = new Date(
    document.getElementsByName("End_Date_" + index)[0].value
  );

  if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
    var diffTime = endDate.getTime() - startDate.getTime();
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementsByName("Total_Time_" + index)[0].value =
      diffDays + " days";
  } else {
    document.getElementsByName("Total_Time_" + index)[0].value = "";
  }
}

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

// Carrer Form
document.getElementById("popupBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("fresherBtn").addEventListener("click", function () {
  // Redirect to the page for fresher
  window.location.href = "fresher_page.html";
});

document
  .getElementById("experiencedBtn")
  .addEventListener("click", function () {
    // Redirect to the page for experienced
    window.location.href = "experienced_page.html";
  });

// contact form
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.1380659, lng: -106.6572985 },
    zoom: 12,
    mapTypeControl: false,
    disableDefaultUI: true,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
}
