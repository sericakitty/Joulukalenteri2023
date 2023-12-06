const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container")

const calendarDays = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;//kuvien url lisäys, videolla 36.00
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "rgb(1, 47, 81)";
  }

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


    courseNumber = i + 1;
    let coursePath = `./kuva-${courseNumber}.webp`; //kuvien lisäys tähän, videolla 32.32
    
calendarDoorText.addEventListener("click", openDoor.bind(null, coursePath));


}

}
calendarButton.addEventListener("click", createCalendar);


//kuvan zoomaus
//id pitäis vaihtaa niin, että sais kuvat näkyviin
function zoomin() { 
  let GFG = document.getElementById(""); 
  let currWidth = GFG.clientWidth; 
  GFG.style.width = (currWidth + 100) + "px"; 
} 

function zoomout() { 
  let GFG = document.getElementById(""); 
  let currWidth = GFG.clientWidth; 
  GFG.style.width = (currWidth - 100) + "px"; 
}


// stars animation
document.addEventListener('DOMContentLoaded', function() {
  const starContainer = document.querySelector('.star-container');
  const numStars = 300; // Adjust the number of stars here

  for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.floor(Math.random() * 100)}%`;
    star.style.left = `${Math.floor(Math.random() * 100)}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    star.classList.add('twinkle');
    starContainer.appendChild(star);
  }
});
