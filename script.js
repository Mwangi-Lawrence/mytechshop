// GSAP animation for the services on the home page
gsap.from(".service", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2, // Stagger the animations for a nicer effect
});

// GSAP animation for the header
gsap.from("header", {
  duration: 1,
  opacity: 0,
  y: -50,
});

// GSAP animation for the footer
gsap.from("footer", {
  duration: 1,
  opacity: 0,
  y: 50,
});