//MODAL
const modal = document.querySelector(".modal");
const modalCard = document.querySelector(".modal__card");
const lessonsList = document.querySelector(".modal__card-lessons");
const tasksList = document.querySelector(".modal__card-lesson-task-list");

//MODAL DAYS INFO
const monday = {
	name: "Понедельник",
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
	accentColor: "#4a6be0",
};

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
			name: "Біологія",
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

//MODAL OPEN/LOAD INFO
const openModal = function (dayName) {
	const modalDayName = document.querySelector(".modal__card-header-name");
	const modalPendingTasks = document.querySelector(".modal__card-pending");

	const openModalAnim = function () {
		modal.classList.add("modal-anim");
		modalCard.classList.add("modal__card-anim");
	};

	// const calculatePendingTasks = dayName.taskList.ged.concat(
	// 	dayName.taskList.ukrLang
	// ).length;
	// modalPendingTasks.textContent = `${calculatePendingTasks} невыполненых задания`;

	const lessonsListing = function () {
		for (const lesson of dayName.lessonList) {
			const createModalLesson = document.createElement("li");
			const createModalTaskContainer = document.createElement("ul");
			const createModalTask = document.createElement("li");
			createModalLesson.className = "modal__card-lesson";
			createModalLesson.textContent = lesson.name;
			lessonsList.appendChild(createModalLesson);
			lessonsList.appendChild(createModalTaskContainer);
			if (lesson.tasks.length !== 0) {
				createModalTaskContainer.className =
					"modal__card-lesson-task-container";
				// createModalTask.innerHTML = lesson.tasks.join(";<br>");
				createModalTask.innerHTML = `<span class='trying'>${lesson.tasks};</span>`;
				createModalTask.className = "modal__card-lesson-task";
				createModalTaskContainer.appendChild(createModalTask);
			}
		}
	};

	// const tasksListing = function () {
	// 	for (const task of dayName.lessonList) {
	// 		const createModalTask = document.createElement("li");
	// 		createModalTask.className = "modal__card-lesson-task";
	// 		createModalTask.textContent = task.tasks;
	// 		tasksList.appendChild(createModalTask);
	// 	}
	// };

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
