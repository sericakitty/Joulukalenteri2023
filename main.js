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

    courseNumber = i + 1;
    let coursePath = '';//kuvien lisäys tähän, videolla 32.32
    
    calendarDoorText.addEventListener("click", openDoor); //jäi kohtaan 34:28

}
}
calendarButton.addEventListener("click", createCalendar);