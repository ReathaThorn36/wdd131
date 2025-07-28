// Product array for dynamic select options
const products = [
  { id: "fabric1", name: "Cotton Classic" },
  { id: "fabric2", name: "Silk Deluxe" },
  { id: "fabric3", name: "Linen Light" },
  { id: "fabric4", name: "Denim Durable" },
  { id: "fabric5", name: "Velvet Smooth" }
];

// Populate select options dynamically on DOM load
window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;  // Use id as value
    option.textContent = product.name;
    select.appendChild(option);
  });
});
