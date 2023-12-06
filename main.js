const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container")

const calendarDays = 24;

const openDoor = (path, event) => {
  if (isDayPast(Number(event.target.innerText))) {
    return;
  }
  event.target.parentNode.style.backgroundImage = `url(${path})`;//kuvien url lisäys, videolla 36.00

  event.target.style.opacity = "0";
  event.target.style.backgroundColor = "rgb(1, 47, 81)";
  
  // Set up a transition for opacity
  event.target.style.transition = "opacity 1s ease-in-out";

  // Event listener for the end of the opacity transition
  event.target.addEventListener('transitionend', function(e) {
    // Check if the transition of opacity is completed
    if (e.propertyName === 'opacity') {
      event.target.style.display = "none";
    }
  }, { once: true }); // The 'once' opt
}

const isDayPast = (day) => {
  const toDay = new Date();
  const currentYear = toDay.getFullYear();
  const currentMonth = toDay.getMonth() + 1;
  const currentDate = toDay.getDate();

  const doorDate = day; // December is month 11 in Date (0-indexed)

  //  check that year is 2023 and month is 12 and date is under the current date
  if (currentYear <= 2023 && currentMonth <= 12 && currentDate < doorDate + 1 ) {
    return true;
  } else {
    return false;
  }
};

const createCalendar = () => {
  calendarButton.disabled = true;
  const currentDay = new Date();
  for(let i = 0; i < calendarDays; i++){
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image");
    calendarDoor.style.gridArea = "door" + (i + 1);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("text");
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);


    imageNumber = i + 1;

    if (imageNumber === currentDay.getDate()) {
      calendarDoor.style = "-webkit-box-shadow: 1px 1px 10px 7.5px #fff;"
    } 

    let imagePath = `./kuva-${imageNumber}.webp`; //kuvien lisäys tähän, videolla 32.32
    
    calendarDoorText.addEventListener("click", openDoor.bind(null, imagePath));

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
