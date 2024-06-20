document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    // taskList.addEventListener('click', handleTaskClick);
    taskList.addEventListener('click', deleteTask);

    function addTask(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');

            const taskContent = document.createElement('div');
            taskContent.classList.add('task');
            const taskTitle = document.createElement('span');
            taskTitle.textContent = taskText;
            const taskDate = document.createElement('span');
            taskDate.classList.add('task-date');
            taskDate.textContent = new Date().toLocaleString();
            taskContent.appendChild(taskTitle);
            taskContent.appendChild(taskDate);

            const icons = document.createElement('div');
            icons.classList.add('icons');
            const completeIcon = document.createElement('i');
            completeIcon.classList.add('fas', 'fa-check-circle');
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fas', 'fa-times-circle');
            icons.appendChild(completeIcon);
            icons.appendChild(deleteIcon);

            taskItem.appendChild(taskContent);
            taskItem.appendChild(icons);

            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

function handleTaskClick(e) {
    if (e.target.classList.contains('fa-check-circle')) {
        const taskItem = e.target.closest('li');
        taskItem.classList.toggle('complete');
    } else if (e.target.classList.contains('fa-times-circle')) {
        const taskItem = e.target.closest('li');
        taskItem.remove();
    }
    }
});

// delete task
function deleteTask() {
    const taskItem = e.target.closest('li');
    taskItem.remove();
}