document
  .getElementById("search-input")
  .addEventListener("input", filterProjects);

function filterProjects() {
  const filterValue = document
    .getElementById("search-input")
    .value.toLowerCase();

  const projects = document.querySelectorAll(".grid .bg-white");

  projects.forEach((project) => {
    const tech = project
      .querySelector("p:nth-child(2)")
      .textContent.toLowerCase();
    if (tech.includes(filterValue)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
