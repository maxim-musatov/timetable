const dayCard = document.querySelector(".timetable__day");

const dayOpen = function () {
	dayCard.classList.add("timetable__day-open");
};

dayCard.addEventListener("click", function () {
	dayOpen();
});
