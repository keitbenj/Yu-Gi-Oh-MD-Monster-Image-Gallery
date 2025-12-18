// Define the observer options
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.1 // Trigger when 10% of the image is visible
};

// Callback to load images when they become visible
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target); // Stop observing the image once it's loaded
    }
  });
};

// Create the Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Observe all the images with class 'lazy'
document.querySelectorAll('.monster').forEach(div => {
  observer.observe(div);
});