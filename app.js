const color_bucket = [
  "green",
  "red",
  "blue",
  "pink",
  "rgba(133,122,200)",
  "#f15025",
];
const btn = document.getElementById("btn");
const colors = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = Random();
  document.body.style.backgroundColor = color_bucket[randomNumber];
  colors.style.color = color_bucket[randomNumber];
  colors.textContent = color_bucket[randomNumber];
});

function Random() {
  return Math.floor(Math.random() * color_bucket.length);
}
