document.getElementById("openCardBtn").addEventListener("click", function () {
  document.getElementById("birthdayCard").classList.remove("hidden");

  // Confetti animation
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Optionally disable button after click
  this.disabled = false;
  this.textContent = "💖 Click Me!";

  function createBalloon(left, delay, color) {
  const wrap = document.createElement("div");
  wrap.className = "balloon-wrap";
  wrap.style.left = left + "%";
  wrap.style.animationDelay = delay + "s";

  const balloon = document.createElement("div");
  balloon.className = `balloon ${color}`;

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "string");
  svg.setAttribute("viewBox", "0 0 10 100");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("stroke", "#333");
  path.setAttribute("stroke-width", "0.5");
  path.setAttribute("fill", "none");
  path.setAttribute("d", "M5,0 Q7,25 5,50 Q3,75 5,100");

  const animate = document.createElementNS(svgNS, "animate");
  animate.setAttribute("attributeName", "d");
  animate.setAttribute("dur", "3s");
  animate.setAttribute("repeatCount", "indefinite");
  animate.setAttribute("values", `
    M5,0 Q7,25 5,50 Q3,75 5,100;
    M5,0 Q3,25 5,50 Q7,75 5,100;
    M5,0 Q7,25 5,50 Q3,75 5,100
  `);

  path.appendChild(animate);
  svg.appendChild(path);
  wrap.appendChild(balloon);
  wrap.appendChild(svg);

  document.querySelector(".balloon-container").appendChild(wrap);
}


});
