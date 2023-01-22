//MODAL
const modal = document.querySelector(".modal");
const modalCard = document.querySelector(".modal__card");
const lessonsList = document.querySelector(".modal__card-lessons");
const tasksList = document.querySelector(".modal__card-lesson-task-list");

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
	accentColor: "#4a6be0",
};

const tuesday = {
	name: "Вторник",
	lessonList: ["Біометрія", "Біометрія", "Фізика"],
	taskList: {
		ged: ["сделать конспект", "переписать параграф"],
		ukrLang: ["выполнить задание в конце конспекта", "переписать параграф"],
	},
	accentColor: "rgb(229, 161, 51)",
};

const wednesday = {
	name: "Среда",
	lessonList: ["Біометрія", "Біометрія", "Фізика"],
	taskList: {
		ged: ["сделать конспект", "переписать параграф"],
		ukrLang: ["выполнить задание в конце конспекта", "переписать параграф"],
	},
	accentColor: "rgb(187, 83, 86)",
};

const thursday = {
	name: "Четверг",
	lessonList: ["Біометрія", "Біометрія", "Фізика"],
	taskList: {
		ged: ["сделать конспект", "переписать параграф"],
		ukrLang: ["выполнить задание в конце конспекта", "переписать параграф"],
	},
	accentColor: "rgb(94, 162, 113)",
};

const friday = {
	name: "Пятница",
	lessonList: ["Біометрія", "Біометрія", "Фізика"],
	taskList: {
		ged: ["сделать конспект", "переписать параграф"],
		ukrLang: ["выполнить задание в конце конспекта", "переписать параграф"],
	},
	accentColor: "rgb(119, 132, 131)",
};

//MODAL OPEN/LOAD INFO
const openModal = function (dayName, taskName) {
	const modalDayName = document.querySelector(".modal__card-header-name");
	const modalPendingTasks = document.querySelector(".modal__card-pending");

	const openModalAnim = function () {
		modal.classList.add("modal-anim");
		modalCard.classList.add("modal__card-anim");
	};

	const calculatePendingTasks = dayName.taskList.ged.concat(
		dayName.taskList.ukrLang
	).length;
	modalPendingTasks.textContent = `${calculatePendingTasks} невыполненых задания`;

	const lessonsListing = function () {
		for (const lesson of dayName.lessonList) {
			const createModalLesson = document.createElement("li");
			const createModalTask = document.createElement("li");
			createModalLesson.className = "modal__card-lesson";
			createModalTask.className = "modal__card-lesson-task";
			createModalLesson.textContent = lesson;
			createModalLesson.textContent = lesson;
			lessonsList.appendChild(createModalLesson);
		}
	};

	const tasksListing = function () {
		for (const task of dayName.taskList.taskName) {
			const createModalTask = document.createElement("li");
			createModalTask.className = "modal__card-lesson-task";
			createModalTask.textContent = task;
			tasksList.appendChild(createModalTask);
		}
	};

	modal.style.display = "flex";
	modalDayName.textContent = dayName.name;
	modalCard.style.borderColor = dayName.accentColor;
	modalPendingTasks.style.backgroundColor = dayName.accentColor;
	lessonsListing();
	openModalAnim();
};

let canClose = true;

//MODAL CLOSE
modalCard.addEventListener("mouseover", function () {
	canClose = false;
});

modalCard.addEventListener("mouseout", function () {
	canClose = true;
});

modal.addEventListener("click", function () {
	if (canClose) {
		modal.style.display = "none";
	}
});

const closeModal = function () {
	modal.style.display = "none";
};
