// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill
const calculateWindChill = (t, s) => 35.74 + 0.6215 * (t * 9/5 + 32) - 35.75 * Math.pow(s / 1.609, 0.16) + 0.4275 * (t * 9/5 + 32) * Math.pow(s / 1.609, 0.16);

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const windchillEl = document.getElementById("windchill");

if (temp <= 10 && speed > 4.8) {
  const windChill = calculateWindChill(temp, speed);
  windchillEl.textContent = `${Math.round(windChill)}°F`;
} else {
  windchillEl.textContent = "N/A";
}

