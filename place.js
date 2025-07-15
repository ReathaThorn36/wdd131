// Get elements
const tempElement = document.getElementById("temp");
const speedElement = document.getElementById("speed");
const chillElement = document.getElementById("chill");
const yearElement = document.getElementById("year");
const lastModifiedElement = document.getElementById("lastModified");

// Set current year
yearElement.textContent = new Date().getFullYear();

// Set last modified date
lastModifiedElement.textContent = document.lastModified;

// Parse values
const temp = parseFloat(tempElement.textContent);
const speed = parseFloat(speedElement.textContent);

// Wind chill calculation function (one line)
function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

// Apply wind chill logic
if (temp <= 10 && speed > 4.8) {
  chillElement.textContent = `${calculateWindChill(temp, speed)} °C`;
} else {
  chillElement.textContent = "N/A";
}
