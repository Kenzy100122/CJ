const sidebar = document.querySelector(".athlete-sidebar");
const menuToggle = document.querySelector(".athlete-menu-toggle");
const closeBtn = document.querySelector(".athlete-close-btn");
const main = document.querySelector("main");

// Sidebar toggle
main.style.marginLeft = "250px";

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
  main.style.marginLeft = "250px";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  main.style.marginLeft = "0";
});

// Button functionality for all resources
const resourceButtons = document.querySelectorAll(".resource-btn");

resourceButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const resourceName = btn.getAttribute("data-resource");
    alert(`You clicked on "${resourceName}"!`);
    // Here you can replace alert with actual download/open logic
    // window.open('url-to-resource', '_blank');
  });
});
