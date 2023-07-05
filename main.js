// main.js
import Person from './person.js'; // Importing the Person class from person.js

const peopleContainer = document.getElementById('peopleContainer'); // Get reference to people container
const addPersonButton = document.getElementById('addPersonButton'); // Get reference to the add person button

// Add a click event listener to the add person button
addPersonButton.addEventListener('click', () => {
  // Create a new Person with random age between 20 and 70
  const person = new Person('John Doe', Math.floor(Math.random() * 50 + 20));
  
  // Create a new div for the person
  const personDiv = document.createElement('div');
  personDiv.className = 'person'; // Add the 'person' class to the div
  personDiv.textContent = person.introduce(); // Set the text content to the person's introduction
  
  // Add the person div to the people container
  peopleContainer.appendChild(personDiv);
});
