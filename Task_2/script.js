// Function to add a new checkbox with text
function addCheckbox() {
    const todoList = document.getElementById('todoList');
    const newCheckbox = document.createElement('div');
    newCheckbox.classList.add('checkbox-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter your task...';
    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
        }
    });

    // Add event listener to toggle class when checkbox state changes
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            textInput.style.textDecoration = 'line-through';
            todoList.appendChild(newCheckbox); // Move to bottom
        } else {
            textInput.style.textDecoration = 'none';
            todoList.insertBefore(newCheckbox, todoList.firstChild); // Move to top
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        newCheckbox.remove();
    });

    newCheckbox.appendChild(checkbox);
    newCheckbox.appendChild(textInput);
    newCheckbox.appendChild(deleteButton);
    todoList.appendChild(newCheckbox);
}
