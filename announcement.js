// Sidebar toggle
const sidebar = document.querySelector(".athlete-sidebar");
const menuToggle = document.querySelector(".athlete-menu-toggle");
const closeBtn = document.querySelector(".athlete-close-btn");
const main = document.querySelector("main");

main.style.marginLeft = "250px";

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
  main.style.marginLeft = "250px";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  main.style.marginLeft = "0";
});

// Search announcements
const searchInput = document.getElementById("searchInput");
const announcementsGrid = document.getElementById("announcementsGrid");
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  const cards = announcementsGrid.querySelectorAll(".announcement-card");
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});
