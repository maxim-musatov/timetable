//MODAL

const dayCard = document.querySelectorAll(".timetable__day");
const modal = document.querySelector(".modal");
const modalCard = document.querySelector(".modal__card");

const openModal = function () {
	modal.style.display = "flex";
};
let canClose = false;

modalCard.addEventListener("mouseover", function () {
	canClose = false;
});

modalCard.addEventListener("mouseout", function () {
	canClose = true;
});

modal.addEventListener("click", function () {
	if (canClose === true) {
		modal.style.display = "none";
	}
});
