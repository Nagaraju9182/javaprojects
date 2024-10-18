// DOM elements
const img = document.querySelector('.container img');
const userTitle = document.querySelector('.user-title');
const userValue = document.querySelector('.user-value');
const btns = document.querySelectorAll('.icon');
const btn = document.querySelector('.btn');

// API URL
const url = 'https://randomuser.me/api/';

// Default user data
let userData = {};

// Function to fetch a random user
const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];

  // Destructure data
  const { picture: { large: image } } = person;
  const { name: { first, last } } = person;
  const { email, dob: { age }, phone, location: { city, country } } = person;

  // Store data in userData object
  userData = {
    image,
    name: `${first} ${last}`,
    email,
    age,
    phone,
    location: `${city}, ${country}`,
  };

  // Set default display
  displayUser(userData);
};

// Function to display user details
const displayUser = (person) => {
  img.src = person.image;
  userValue.textContent = person.name;
  userTitle.textContent = 'My name is';

  // Remove active class from all buttons
  btns.forEach(btn => btn.classList.remove('active'));

  // Set 'name' as default active
  btns[0].classList.add('active');
};

// Function to update displayed data based on the button clicked
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const label = e.currentTarget.dataset.label;
    userTitle.textContent = My `${label} is`;
    userValue.textContent = userData[label];

    // Remove active class and set active on clicked button
    btns.forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});

// Generate a new random user when the button is clicked
btn.addEventListener('click', getUser);

// Load a user when the page is ready
window.addEventListener('DOMContentLoaded', getUser);
