//MODAL DAYS INFO

class Day {
	constructor({ name, lessons, tasks, color } = {}) {
		this.name = name;
		this.lessons = lessons;
		this.tasks = tasks;
		this.color = color;
	}

	openModal() {
		const modal = document.querySelector(".modal");
		const modalDayName = document.querySelector(".modal__card-header-name");
		const modalLessonsContainer = document.querySelector(
			".modal__card-lessons"
		);

		modal.style.display = "flex";
		modalDayName.textContent = this.name;

		this.lessons.map((lesson) => {
			const lessonName = document.createElement("h3");
			lessonName.className = "modal__card-lesson";
			lessonName.textContent = lesson.name;
			modalLessonsContainer.appendChild(lessonName);

			if (lesson.tasks.length > 0) {
				lesson.tasks.forEach((task) => {
					const lessonTasks = document.createElement("li");
					lessonTasks.className = "modal__card-lesson-task";
					lessonTasks.textContent = task;
					modalLessonsContainer.appendChild(lessonTasks);
				});
			}
		});
	}
}

const monday = new Day({
	name: "Понедельник",
	lessons: [
		{
			name: "Укр. Мова",
			tasks: [
				"выполнить задание в конце конспекта",
				"переписать параграф",
			],
		},
	],
	color: "#4a6be0",
});

// const monday = {
// 	name: "Понедельник",
// 	lessonList: [
// 		{
// 			name: "Громадська ек. діяльність",
// 			tasks: ["сделать конспект", "переписать параграф"],
// 		},
// 		{
// 			name: "Укр. Мова",
// 			tasks: [
// 				"выполнить задание в конце конспекта",
// 				"переписать параграф",
// 			],
// 		},
// 		{
// 			name: "Англ. Мова",
// 			tasks: [
// 				"выполнить задание в конце конспекта",
// 				"переписать параграф",
// 			],
// 		},
// 		{
// 			name: "Біологія",
// 			tasks: [],
// 		},
// 	],
// 	accentColor: "#4a6be0",
// };

const tuesday = {
	name: "Вторник",
	lessonList: [
		{
			name: "Фізика",
			tasks: ["сделать конспект", "переписать параграф"],
		},
		{
			name: "Укр. Мова",
			tasks: [
				"выполнить задание в конце конспекта",
				"переписать параграф",
			],
		},
		{
			name: "Англ. Мова",
			tasks: [
				"выполнить задание в конце конспекта",
				"переписать параграф",
			],
		},
		{
			name: "Математика",
			tasks: [],
		},
	],
	accentColor: "rgb(229, 161, 51)",
};

const wednesday = {
	name: "Среда",
	lessonList: [
		{
			name: "Громадська ек. діяльність",
			tasks: ["сделать конспект", "переписать параграф"],
		},
		{
			name: "Укр. Мова",
			tasks: [
				"выполнить задание в конце конспекта",
				"переписать параграф",
			],
		},
		{
			name: "Англ. Мова",
			tasks: [
				"выполнить задание в конце конспекта",
				"переписать параграф",
			],
		},
		{
			name: "Біологія",
			tasks: [],
		},
	],
	accentColor: "rgb(187, 83, 86)",
};

const thursday = {
	name: "Четверг",
	lessonList: [
		{
			name: "Громадська ек. діяльність",
			tasks: ["сделать конспект", "переписать параграф"],
		},
		{
			name: "Укр. Мова",
			tasks: [
				"выполнить задание в конце конспекта",
				"переписать параграф",
			],
		},
		{
			name: "Англ. Мова",
			tasks: [
				"выполнить задание в конце конспекта",
				"переписать параграф",
			],
		},
		{
			name: "Біологія",
			tasks: [],
		},
	],
	accentColor: "rgb(94, 162, 113)",
};

const friday = {
	name: "Пятница",
	lessonList: [
		{
			name: "Громадська ек. діяльність",
			tasks: ["сделать конспект", "переписать параграф"],
		},
		{
			name: "Укр. Мова",
			tasks: [
				"выполнить задание в конце конспекта",
				"переписать параграф",
			],
		},
		{
			name: "Англ. Мова",
			tasks: [
				"выполнить задание в конце конспекта",
				"переписать параграф",
			],
		},
		{
			name: "Біологія",
			tasks: [],
		},
	],
	accentColor: "rgb(119, 132, 131)",
};

//MODAL DAYS OPEN

const dayCard = document.querySelector("#monday_card");

dayCard.addEventListener("click", () => {
	monday.openModal(monday.name);
});

//MODAL OPEN/LOAD INFO
// const openModal = (dayName) => {
// 	const modalDayName = document.querySelector(".modal__card-header-name");
// 	const modalAddBtn = document.querySelector(".modal__add-btn");
// 	const modalPendingTasks = document.querySelector(".modal__card-pending");
// 	const lessonHeader = document.querySelector(".timetable__day-lesson");

// 	const lessonsListing = () => {
// 		for (const lesson of dayName.lessonList) {
// 			const createModalLesson = document.createElement("li");
// 			const createModalTaskContainer = document.createElement("ul");
// 			const lessonName = lesson.name;
// 			const tasksListing = lesson.tasks;
// 			const newLessonsSelect = document.querySelector(
// 				".modal__create-form-select"
// 			);
// 			const createLessonsListing = document.createElement("option");

// 			createModalLesson.className = "modal__card-lesson";
// 			createModalLesson.textContent = lesson.name;
// 			lessonsList.appendChild(createModalLesson);
// 			lessonsList.appendChild(createModalTaskContainer);
// 			if (lesson.tasks.length !== 0) {
// 				createModalTaskContainer.className =
// 					"modal__card-lesson-task-container";

// 				const markup = tasksListing
// 					.map(
// 						(task) =>
// 							`<li class="modal__card-lesson-task">${task}</li>`
// 					)
// 					.join("");

// 				createModalTaskContainer.innerHTML = markup;
// 			}

// 			createLessonsListing.className = "modal__create-form-select-option";
// 			createLessonsListing.innerHTML = lessonName;
// 			newLessonsSelect.appendChild(createLessonsListing);
// 		}
// 	};

// 	modal.style.display = "flex";
// 	modalCard.style.display = "initial";
// 	modalDayName.textContent = dayName.name;
// 	modalCard.style.borderColor = dayName.accentColor;
// 	modalAddBtn.style.backgroundColor = dayName.accentColor;
// 	lessonHeader.style.background = "var";
// 	lessonsListing();
// };

// let canClose = true;

// //MODAL CREATE
// const createTaskBtn = document.querySelector(".modal__add-btn");
// const createModal = document.querySelector(".modal__create");
// const tasklistModal = document.querySelector(".modal__tasklist");
// const createSubmitBtn = document.querySelector(".modal__create-form-submit");

// createTaskBtn.addEventListener("click", function () {
// 	tasklistModal.style.display = "none";
// 	createTaskBtn.style.display = "none";
// 	createModal.style.display = "initial";
// 	canClose = false;
// });

// //MODAL CLOSE
// const closeModal = function () {
// 	modal.style.display = "none";
// 	lessonsList.innerHTML = "";
// };

// modalCard.addEventListener("mouseover", function () {
// 	canClose = false;
// });

// modalCard.addEventListener("mouseout", function () {
// 	canClose = true;
// });

// modal.addEventListener("click", function () {
// 	if (modalCard.style.display === "initial" && canClose) {
// 		closeModal();
// 	}
// });
