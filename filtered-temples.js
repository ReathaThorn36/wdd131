filterTemples("all");
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893",
    area: 253015,
    image: "images/temple1.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919",
    area: 42000,
    image: "images/temple2.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 41010,
    image: "images/temple3.jpg"
  },
  {
    name: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "2016",
    area: 85000,
    image: "images/temple4.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017",
    area: 44000,
    image: "images/temple5.jpg"
  },
  {
    name: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996",
    area: 21430,
    image: "images/temple6.jpg"
  },
  {
    name: "Bangkok Thailand Temple",
    location: "Bangkok, Thailand",
    dedicated: "2023",
    area: 44000,
    image: "images/temple7.jpg"
  },
  {
    name: "Albuquerque New Mexico Temple",
    location: "Albuquerque, New Mexico",
    dedicated: "2000",
    area: 34000,
    image: "images/temple8.jpg"
  },
  {
    name: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "2020",
    area: 6861,
    image: "images/temple9.jpg"
  },
  {
    name: "St. George Temple",
    location: "St. George, Utah",
    dedicated: "1877",
    area: 110000,
    image: "images/temple10.jpg"
  }
];

const container = document.getElementById("templeContainer");

function displayTemples(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.className = "temple-card";
    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.image}" alt="${temple.name}" loading="lazy" width="400" height="300">
    `;
    container.appendChild(card);
  });
}

function filterTemples(filter) {
  let result = temples;
  switch (filter) {
    case "old":
      result = temples.filter(t => parseInt(t.dedicated) < 1900);
      break;
    case "new":
      result = temples.filter(t => parseInt(t.dedicated) > 2000);
      break;
    case "large":
      result = temples.filter(t => t.area > 90000);
      break;
    case "small":
      result = temples.filter(t => t.area < 10000);
      break;
    default:
      result = temples;
  }
  displayTemples(result);
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterTemples(filter);
  });
});
filterTemples("all");
