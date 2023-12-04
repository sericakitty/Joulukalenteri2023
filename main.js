const calendarButton = document.querySelector(".btn-start"); //tarvitaan vielä buttonin luonti
const calendarContainer = document.querySelector(".container")

const calendarDays = 24;

const createCalendar = () => {
    for(let i = 0; i < calendarDays; i++){
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image");
    calendarDoor.style.gridArea = "door" + (i + 1);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("text");
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);

    courseNumber = i;
    let coursePath = '';//kuvien lisäys tähän, videolla 32.32

    // calendarDoorText.addEventListener("click", openDoor); //jäi kohtaan 34:28

}

}
calendarButton.addEventListener("click", createCalendar);

// stars animation
document.addEventListener('DOMContentLoaded', function() {
  const starContainer = document.querySelector('.star-container');
  const numStars = 100; // Adjust the number of stars here

  for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    if (Math.random() > 0.5) {
      star.classList.add('twinkle');
    }

    starContainer.appendChild(star);
  }
});
