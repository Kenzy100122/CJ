
/* ============================ */
/* =======  HOMESCRIPT ==== */
/* ============================ */

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  slideIndex = index;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function setSlide(index) {
  showSlide(index);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  // 🔁 Auto slide every 1 second (1000 ms)
  setInterval(() => {
    nextSlide();
  }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});



/* ============================ */
/* =======  LOGIN SCRIPT  ===== */
/* ============================ */
function handleLogin(e) {
  e.preventDefault();

  const username = document.querySelector('input[placeholder="Username"]').value.trim();
  const password = document.querySelector('input[placeholder="Password"]').value;

  const errorBox = document.getElementById('error-message');
  errorBox.textContent = "";

  // Get stored user from localStorage
  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (!storedUser) {
    errorBox.textContent = "No account found. Please register first.";
    return false;
  }

  if (username !== storedUser.username || password !== storedUser.password) {
    errorBox.textContent = "Invalid username or password.";
    return false;
  }

  // ✅ Login success
  alert("Login successful! Welcome " + storedUser.fullName);
  window.location.href = "atheleteportal.html";
  return true;
}


/* ============================ */
/* =======  REGISTERSCRIPT ==== */
/* ============================ */

// Toggle password visibility
  function togglePassword(fieldId, icon) {
    const input = document.getElementById(fieldId);
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }

  // Toggle responsive menu
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });

  function validateNumber(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  function handleRegister(e) {
    e.preventDefault();

    const fullName = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Email Address"]').value.trim();
    const contact = document.querySelector('input[placeholder="Contact Number"]').value.trim();
    const username = document.querySelector('input[placeholder="Username"]').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const errorBox = document.getElementById('error-message');
    const successBox = document.getElementById('success-message');

    // Clear old messages
    errorBox.textContent = '';
    successBox.textContent = '';

    if (!fullName || !email || !contact || !username || !password || !confirmPassword) {
      errorBox.textContent = 'Please fill out all fields.';
      return false;
    }

    if (password !== confirmPassword) {
      errorBox.textContent = 'Passwords do not match.';
      return false;
    }

    // Save user data for login
    const user = {
      fullName,
      email,
      contact,
      username,
      password
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));
    localStorage.setItem("tempEmail", email);

    successBox.textContent = "Account created successfully! Redirecting...";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);

    return true;
  }