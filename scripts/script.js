// Declaration

let tasks = [];
let undertasks = [];
let done = [];
let garbage = [];

const taskDivRef = document.getElementById("tasks");
const addDialogRef = document.getElementById("addDialog");
const addTaskDivRef = document.getElementById("addTaskDiv");
const confirmDivRef = document.getElementById("confirmationDiv");
const confirmTextRef = document.getElementById("confirmText");

// Functions

function openNewTaskInput() {
	addTaskDivRef.innerHTML = addTaskTemplate();
}

function pushInputToTaskArray(event) {
	const newTaskInputRef = document.getElementById("addNewTaskInput");
	event.preventDefault();
	let newTaskInput = newTaskInputRef.value;
	tasks.push(newTaskInput);
	confirmDivRef.innerHTML = confirmTextTemplate(newTaskInput);
	newTaskInputRef.value = "";
	showTaskArrayInDiv();
}

function showTaskArrayInDiv() {
	taskDivRef.innerHTML = "";
	console.log(tasks);

	for (let i = 0; i < tasks.length; i++) {
		console.log("push");
		taskDivRef.innerHTML += addTaskToDivTemplate(i);
	}
}

function addUnderTasks(index) {
	const taskTableRef = document.getElementById(taskCardTable + index);
	taskTableRef += addUnderTasksTemplate();
}
