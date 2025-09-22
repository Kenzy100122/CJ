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

const searchTraining = document.getElementById("searchTraining");
const filterCoach = document.getElementById("filterCoach");
const filterDay = document.getElementById("filterDay");
const rows = document.querySelectorAll("#scheduleBody tr");

function filterSchedule() {
  const searchValue = searchTraining.value.toLowerCase();
  const coachValue = filterCoach.value;
  const dayValue = filterDay.value;

  rows.forEach(row => {
    const training = row.dataset.training.toLowerCase();
    const coach = row.dataset.coach;
    const day = row.dataset.day;

    const matchTraining = training.includes(searchValue);
    const matchCoach = coachValue === "all" || coach === coachValue;
    const matchDay = dayValue === "all" || day === dayValue;

    if (matchTraining && matchCoach && matchDay) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

searchTraining.addEventListener("input", filterSchedule);
filterCoach.addEventListener("change", filterSchedule);
filterDay.addEventListener("change", filterSchedule);
