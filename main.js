const calendarButton = document.querySelector(".btn-start"); // Get the button
const calendarContainer = document.querySelector(".container") // Get the calendar container
const currentDay = new Date().getDate(); // Get the current day

const calendarDays = 24; // Set total days of the calendar


// this function is for the enlarge/shrink effect for images
const toggleImageSize = (event) => { 
  const calendarDoor = event.currentTarget; // Get the current target of the event (image div)

  // if the image's element class contains enlarge, then remove it and add shrink class
  if (calendarDoor.classList.contains('enlarge')) {
    calendarDoor.classList.remove('enlarge');
    calendarDoor.classList.add('shrink');
  } else { // otherwise, remove shrink and add enlarge
    calendarDoor.classList.remove('shrink');
    calendarDoor.classList.add('enlarge');
  }
};

const openDoor = (path, event) => {
  // if the day is past, then return and do nothing
  if (isDayPast(Number(event.target.innerText))) {
    return;
  }
  const calendarDoor = event.target.parentNode; // Get the parent node of the clicked element (image div)
  const calendarDoorText = event.target; // Get the clicked element (text div)

  // Check if the door has been opened (if the image div has the class 'opened')
  if (!calendarDoor.classList.contains('opened')) {
    calendarDoor.style.backgroundImage = `url(${path})`; // Set the background image of the image div
    calendarDoorText.style.opacity = "0"; // Set the opacity of the text div to 0
    calendarDoorText.style.backgroundColor = "rgb(1, 47, 81)"; // Set the background color of the text div
    
    calendarDoorText.style.transition = "opacity 1s ease-in-out"; // Set the transition of the opacity of the text div
    calendarDoor.classList.add('opened'); // Add the class 'opened' to the image div

    calendarDoor.addEventListener('click', toggleImageSize); // Add the event listener for the enlarge/shrink effect
    
  }

  // Check if the image div has no the class 'enlarge'
  if (!calendarDoor.classList.contains('enlarge')) {
    calendarDoor.classList.add('enlarge'); // Add the class 'enlarge' to the image div
    
  } else { // Otherwise, remove the class 'enlarge'
    calendarDoor.classList.remove('enlarge');
    
  }
  
  // Add the event listener for the transition of the opacity of the text div
  calendarDoorText.addEventListener('transitionend', function (e) {
    // Check if the transition of opacity is completed
    if (!calendarDoor.classList.contains('enlarge')) {
      calendarDoorText.remove() // Remove the text div
    }
  }, { once: true }); // Set the event listener to be executed only once
}

// Check if the day is past
const isDayPast = (day) => {
  const today = new Date();
  return today.getFullYear() <= 2023 && today.getMonth() + 1 <= 12 && today.getDate() < day;
};

// Create the calendar
const createCalendar = () => {
  calendarButton.disabled = true; // Disable the button after it is clicked (no more clicks allowed)
  
  for (let i = 0; i < calendarDays; i++) { // Loop through the calendar days
    const calendarDoor = document.createElement("div"); // Create the image div
    calendarDoor.classList.add("image"); // add the class 'image' to the image div
    calendarDoor.style.gridArea = "door" + (i + 1); // Set the grid area of the image div
    calendarContainer.appendChild(calendarDoor); // Append the image div to the calendar container

    const calendarDoorText = document.createElement("div"); // Create the text div
    calendarDoorText.classList.add("text"); // Add the class 'text' to the text div
    calendarDoorText.innerHTML = i + 1; // Set the text of the text div
    calendarDoor.appendChild(calendarDoorText); // Append the text div to the image div

    if (i === currentDay) { // Check if the current day is the same as the day of the loop
      calendarDoor.classList.add("current-day"); // Add the class 'current-day' to the image div. This will add highlight to the current day box
    }

    let imagePath = `./kuva-${i+1}.webp`; // Set the path of the image
    calendarDoorText.addEventListener("click", openDoor.bind(null, imagePath)); // Add the event listener for the click event of the text div
  }
};


// Add the event listener for the click event of the button
calendarButton.addEventListener("click", createCalendar);




// when the page is loaded, create the stars
document.addEventListener('DOMContentLoaded', function () {
  const starContainer = document.querySelector('.star-container'); // Get the star container
  const numStars = 300; // Adjust the number of stars here

  for (let i = 0; i < numStars; i++) { // Loop through the number of stars
    let star = document.createElement('div'); // Create the star div
    star.className = 'star'; // Add the class 'star' to the star div
    star.style.top = `${Math.floor(Math.random() * 100)}%`; // Set the top position of the star div
    star.style.left = `${Math.floor(Math.random() * 100)}%`; // Set the left position of the star div
    star.style.animationDelay = `${Math.random() * 2}s`; // Set the animation delay of the star div
    star.classList.add('twinkle'); // Add the class 'twinkle' to the star div
    starContainer.appendChild(star); // Append the star div to the star container
  }
});
