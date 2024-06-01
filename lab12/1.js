function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    var li = document.createElement('li');
    li.textContent = taskInput.value;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('done');
            this.style.display = 'none';
        }
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}