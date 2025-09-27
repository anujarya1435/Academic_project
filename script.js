let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let close = document.querySelector('#header .bx-x');

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");

  // Show navbar using GSAP only when becoming active
  if (navbar.classList.contains("active")) {
    navbar.style.display = "flex";
   navbar.style.flexDirection = "column";
     // make sure it's visible
    gsap.fromTo(
      navbar,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  } else {
    gsap.to(navbar, {
      opacity: 0,
      y: -100,
      duration: 0.5,
      onComplete: () => {
        navbar.style.display = "none"; // hide after animation
      }
    });
  }
});

close.addEventListener("click", function () {
  console.log('click cross');
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  gsap.to(navbar, {
    opacity: 0,
    y: -100,
    duration: 0.5,
    onComplete: () => {
      navbar.style.display = "none";
    }
  });
});
