// Estado global (Os dados da aplicação)
let taskList = [];

const resultTasks = document.getElementById('listTask');
const inputTask = document.getElementById('task');

// 2. Adicionar as tarefas
function addTask() {
    const taskText = inputTask.value;

    if (taskText === '') {
        resultTasks.innerHTML += `
        <img class="w-150 h-150" src="./9318688.jpg">
        `
        alert('Preencha o campo!')
        return;
    }

    // Criamos um objeto com ID único usando Date.now()
    const newTask = {
        id: Date.now(),
        text: taskText
    };

    taskList.push(newTask); // Adicionar o array
    inputTask.value = ''; // Limpa o campo 

    render();
}

// 3. REMOVER (Aqui vai a lógica)
function removeTask(id) {
    // Usamos o .filter() para manter apenas as tarefas que NÃO têm o ID clicado
    taskList = taskList.filter(task => task.id !== id);

    render();
}

// 4. RENDERIZAR (A ponte entre o JS e o HTML)
function render() {
    resultTasks.innerHTML = ''; // Limpa a lista para não duplicar

    // Usamos o map() para transformar cada objeto em HTML
    taskList.map(task => {
        resultTasks.innerHTML += `
            <div class="flex justify-between items-center p-2 mb-2 rounded">
                <span class="gap-4">${task.text}</span>
                <button 
                    onclick="removeTask(${task.id})" 
                    class="text-red-500 font-bold ml-4 items-center">
                    <i class="fi fi-rr-trash"></i>
                </button>
            </div>
        `
    })
}

function removeAll(index) {
    taskList.splice(index, 1)
    render();
}