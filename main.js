const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container")

const pictures = [
            "doggo.webp",
            "jouluasetelma.webp",
            "pakanatalvi1.webp",
            "1hiiret.webp",
            "kynttila.webp",
            "jouluikkuna.webp",
            "pakanatalvi2.webp",
            "roikkuvat valot.webp",
            "lumiukko.webp.webp",
            "joulukuusi.webp",
            "pakanatalvi3.webp",
            "3lahjapaketit.webp",
            "porvoo.webp",
            "joulupehmot.webp",
            "pakanatalvi4.webp",
            "4nallet.webp",
            "talvi.webp",
            "piparit.webp",
            "pakanatalvi5.webp",
            "5puu.webp",
            "tuli.webp",
            "piparkakkutalo.webp",
            "pakanatalvi6.webp",
            "6kuuset.webp"
];

const calendarDays = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;//kuvien url lisäys, videolla 36.00
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
    let coursePath = `./Joulukalenteri2023/kuva-${courseNumber}.jpg`; //kuvien lisäys tähän, videolla 32.32

    // let pictureNumber = i;
    let calendarPicturePath = './'+ pictures[i];
    
calendarDoorText.addEventListener("click", openDoor.bind(null, calendarPicturePath));


}

}
calendarButton.addEventListener("click", createCalendar);

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
