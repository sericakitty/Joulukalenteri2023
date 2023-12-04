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

   // let pictureNumber = i;
    let calendarPicturePath = './'+ pictures[i];
    
//calendarDoorText.addEventListener("click", calendarPicturePath);

}
}
calendarButton.addEventListener("click", createCalendar);