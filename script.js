const roles = ["Instructor", "Data Analyst", "Frontend Developer", "Designer","FullStack Developer Instructor"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedText.textContent = currentRole.substring(0, charIndex--);
  } else {
    typedText.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();


  // Get references to the hamburger icon and nav links
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Add click event listener to the hamburger icon
  hamburger.addEventListener('click', () => {
    // Toggle the 'active' class to show or hide the nav links
    navLinks.classList.toggle('active');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const profileImg = document.getElementById("profile-img");
    const defaultImage = "demo.png";

    // Helper: change image with fade
    function changeImageSmoothly(newSrc) {
      profileImg.style.opacity = 0; // Fade out
      setTimeout(() => {
        profileImg.src = newSrc; // Change image source
        profileImg.style.opacity = 1; // Fade in
      }, 300); // Adjust time to your preference
    }

    navLinks.forEach(link => {
      const hoverImg = link.getAttribute("data-image");

      link.addEventListener("mouseenter", () => {
        if (hoverImg) {
          changeImageSmoothly(hoverImg);
        }
      });

      link.addEventListener("mouseleave", () => {
        changeImageSmoothly(defaultImage);
      });
    });
  });


