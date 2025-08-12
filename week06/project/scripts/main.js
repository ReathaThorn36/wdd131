/* main.js - implements all required JS features for the rubric */

// -- Data: object + array
const featuredProduct = {
  id: 1,
  name: "Premium Cotton Fabric",
  price: 7.99,
  inStock: true
};

const fabrics = ["Cotton", "Linen", "Silk", "Wool", "Polyester"];

// -- Utility functions (2+ functions)
function formatPrice(num) {
  return num.toFixed(2);
}

function listPopularFabrics() {
  const list = document.querySelector('#fabricList');
  if (!list) return;
  list.innerHTML = '';
  fabrics.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

// -- DOM manipulation & template literals
function showFeaturedProduct() {
  const el = document.querySelector('#productInfo');
  if (!el) return;
  el.innerHTML = `<strong>${featuredProduct.name}</strong> — Only $${formatPrice(featuredProduct.price)}!`;
}

// -- Conditional branching
function checkStockAndNotify() {
  if (featuredProduct.inStock) {
    console.log(`${featuredProduct.name} is in stock.`);
  } else {
    console.log(`${featuredProduct.name} is currently out of stock.`);
  }
}

// -- localStorage usage
function saveUserNameToStorage(name) {
  if (!name) return;
  localStorage.setItem('fc_user', name);
}

function getUserNameFromStorage() {
  return localStorage.getItem('fc_user') || null;
}

// -- Event handlers
function saveNameHandler() {
  const input = document.querySelector('#nameInput');
  if (!input) return;
  const name = input.value.trim();
  if (name.length === 0) return alert('Please enter a name');
  saveUserNameToStorage(name);
  displayGreeting();
}

function displayGreeting() {
  const name = getUserNameFromStorage() || 'friend';
  const greetEl = document.querySelector('#greeting');
  if (greetEl) greetEl.textContent = `Welcome, ${name}!`;
}

// -- Form handling (valid standards + DOM interaction + event listener)
function contactFormHandler(e) {
  e.preventDefault();
  const name = document.querySelector('#cf-name').value.trim();
  const email = document.querySelector('#cf-
