const container = document.querySelector(".floating-hearts");

for (let i = 0; i < 20; i++) {
  const heart = document.createElement("span");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 8 + Math.random() * 10 + "s";
  heart.style.animationDelay = Math.random() * 5 + "s";
  heart.style.width = heart.style.height = 10 + Math.random() * 20 + "px";
  container.appendChild(heart);
}
