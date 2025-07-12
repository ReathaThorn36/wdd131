// Footer Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempC, speedKmh) {
  const tempF = (tempC * 9/5) + 32;
  const speedMph = speedKmh / 1.609;
  return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const windchillEl = document.getElementById("windchill");

if (temp <= 10 && speed > 4.8) {
  const windChill = calculateWindChill(temp, speed);
  windchillEl.textContent = `${Math.round(windChill)}°F`;
} else {
  windchillEl.textContent = "N/A";
}
