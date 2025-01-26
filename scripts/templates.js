function addTaskTemplate() {
	return `<form>
    <input id="addNewTaskInput" type="text" requiered>
    <button id="addTaskBtn" onclick="pushInputToTaskArray(event)">Hinzufügen</button>
    </form>`;
}

function confirmTextTemplate(newText) {
	return `<strong>${newText}</strong> &nbsp; has been added to the list.`;
}

function addTaskToDivTemplate(i) {
	return `<div class="taskCard">
                <div class="taskCardTextDiv">
                    <table class="taskCardTable" id="taskCardTabel${i}">
                    <th onclick="addUnderTasks(${i})">${tasks[i]}</th>
                    </table>
                    <button id="removeTaskBtn">x</button>
                    <button id="checkTaskBtn">Done</button>`;
}

function addUnderTasksTemplate() {}
