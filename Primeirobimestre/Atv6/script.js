const input = document.querySelector('#taskInput');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('#taskList');

const handleAddTask = () => {
    const text = input.value.trim();
    
    if (text) {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
        input.value = '';
        input.focus();
    }
};

btn.addEventListener('click', handleAddTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAddTask();
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});