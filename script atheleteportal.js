const sidebar = document.querySelector(".athlete-sidebar");
const menuToggle = document.querySelector(".athlete-menu-toggle");
const closeBtn = document.querySelector(".athlete-close-btn");
const main = document.querySelector("main");

// Sidebar starts active
main.style.marginLeft = "250px";

// Open sidebar
menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
  main.style.marginLeft = "250px";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  main.style.marginLeft = "0";
});

// Chart.js
const ctx = document.getElementById("progressChart");
if (ctx) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Training Hours",
          data: [1, 2, 1.5, 3, 2.5, 4],
          borderColor: "#0077b6",
          backgroundColor: "rgba(0, 119, 182, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: { y: { beginAtZero: true } },
    },
  });
}
