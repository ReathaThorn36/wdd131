const temples = [
  {
    name: "Angkor Wat",
    location: "Siem Reap, Cambodia",
    dedication: 1150,
    area: 400000,
    image: "images/angkorwat.jpg"
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedication: 1893,
    area: 253015,
    image: "images/saltlake.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedication: 1919,
    area: 42000,
    image: "images/laiehawaii.jpg"
  },
  {
    name: "Phnom Penh Temple",
    location: "Phnom Penh, Cambodia",
    dedication: 2024,
    area: 15000,
    image: "images/phnompenh.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedication: 2019,
    area: 40000,
    image: "images/romeitaly.jpg"
  }
];

const container = document.getElementById("temple-container");
const navLinks = document.querySelectorAll("nav a");

function createCard(temple) {
  const card = document.createElement("div");
  card.className = "temple-card";

  const img = document.createElement("img");
  img.src = temple.image;
  img.alt = `${temple.name} Temple`;
  img.loading = "lazy";

  const h2 = document.createElement("h2");
  h2.textContent = temple.name;

  const p1 = document.createElement("p");
  p1.textContent = `Location: ${temple.location}`;

  const p2 = document.createElement("p");
  p2.textContent = `Dedicated: ${temple.dedication}`;

  const p3 = document.createElement("p");
  p3.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;

  card.append(img, h2, p1, p2, p3);
  container.appendChild(card);
}

function displayTemples(filtered) {
  container.innerHTML = "";
  let filteredTemples;

  switch (filtered) {
    case "old":
      filteredTemples = temples.filter(t => t.dedication < 1900);
      break;
    case "new":
      filteredTemples = temples.filter(t => t.dedication >= 2000);
      break;
    case "large":
      filteredTemples = temples.filter(t => t.area > 50000);
      break;
    case "small":
      filteredTemples = temples.filter(t => t.area <= 50000);
      break;
    default:
      filteredTemples = temples;
  }

  filteredTemples.forEach(createCard);
}

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const filter = link.dataset.filter;
    displayTemples(filter);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Initial load
displayTemples("all");
