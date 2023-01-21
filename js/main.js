//MODAL
const modal = document.querySelector(".modal");
const modalCard = document.querySelector(".modal__card");
const lessonsList = document.querySelector(".modal__card-lessons");

//MODAL DAYS INFO
const monday = {
	name: "Понедельник",
	lessonList: [
		"Громадська ек. діяльність",
		"Укр. Мова",
		"Англ. Мова",
		"Біологія",
	],
	taskList: {
		ged: ["сделать конспект", "переписать параграф"],
		ukrLang: ["выполнить задание в конце конспекта", "переписать параграф"],
	},
};

const tuesday = {
	name: "Вторник",
	lessonList: ["Біометрія", "Біометрія", "Фізика"],
	taskList: {
		ged: ["сделать конспект", "переписать параграф"],
		ukrLang: ["выполнить задание в конце конспекта", "переписать параграф"],
	},
};

//MODAL OPEN/LOAD INFO
const pendingTasksNum = function () {
	const modalPendingTasks = document.querySelector(".modal__card-pending");

	const calculatePendingTasks = mondayInfo.taskList.ged.concat(
		mondayInfo.taskList.ukrLang
	).length;
	modalPendingTasks.textContent = calculatePendingTasks;
};

const openModal = function (dayName) {
	const modalDayName = document.querySelector(".modal__card-header-name");

	const openModalAnim = function () {
		modal.classList.add("modal-anim");
		modalCard.classList.add("modal__card-anim");
	};

	const lessonsListing = function () {
		for (const lesson of dayName.lessonList) {
			const createModalLesson = document.createElement("li");
			createModalLesson.className = "modal__card-lesson";
			createModalLesson.textContent = lesson;
			lessonsList.appendChild(createModalLesson);
		}
	};

	modal.style.display = "flex";
	modalDayName.textContent = dayName.name;
	lessonsListing();
	openModalAnim();
};

let canClose = false;

//MODAL CLOSE
modalCard.addEventListener("mouseover", function () {
	canClose = false;
});

modalCard.addEventListener("mouseout", function () {
	canClose = true;
});

modal.addEventListener("click", function () {
	if (canClose) {
		// lessonsList.removeChild("li");
		modal.style.display = "none";
	}
});

// for (const lesson of lessons) {
// 	lessonAdd.textContent = lessons[lesson];
// 	lessonsList.append(lessonAdd);
// 	continue;
// }

// for (let i = 0; i < lessons.length; i += 1) {
// 	lessonAdd.className = `lesson${i}`;
// 	lessonAdd.textContent = lessons[i];
// 	lessonsList.append(`lesson${i}`);
// }
