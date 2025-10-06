// Toggle "More About Me" content
document.getElementById("toggle-btn").addEventListener("click", function() {
  const extra = document.getElementById("extra-content");
  if (extra.style.display === "none" || extra.style.display === "") {
    extra.style.display = "block";
    this.innerText = "Show Less";
  } else {
    extra.style.display = "none";
    this.innerText = "Show More";
  }
});

// Real-time clock
function updateTime() {
  const now = new Date();
  document.getElementById("current-time").innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
// Change name color when clicked
const myName = document.getElementById("my-name");

myName.addEventListener("click", function() {
  // Change to your favorite color
  this.style.color = "purple"; // or any color you like
});
<script src="script.js"></script>
