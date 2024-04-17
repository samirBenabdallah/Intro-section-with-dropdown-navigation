// drop down action
document.querySelectorAll("nav ul .dropdown").forEach((item) => {
  item.addEventListener("click", (e) =>
    e.target.parentElement.classList.toggle("active")
  );
});
// menu toggle actions
function menuToggle() {
  document.querySelector("nav").classList.toggle("active");
}
document.querySelector(".bg").addEventListener("click", menuToggle);
document.getElementById("menuButton").addEventListener("click", menuToggle);
