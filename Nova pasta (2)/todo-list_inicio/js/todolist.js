; (function (){
    "use strict"

    // armazenar o dom em variáveis
    const itemInput =  document.querySelector('#item-input')
    const toDoAddForm = document.querySelector('#todo-add')
    const ul_toDo = document.querySelector("#todo-list")
    const lis = ul_toDo.getElementsByTagName('li')

    function addTask(task){
        const li = document.createElement('li')
        li.className = 'todo-item'

        const button = document.createElement('button')
        button.className = 'button-check'
        const i_check = document.createElement('i')
        i_check.className = 'fas fa-check displayNone'
        button.appendChild(i_check)

        const p = document.createElement('p')
        p.className = 'task-name'
        p.textContent = task

        const i_edit = document.createElement('i')
        i_edit.className = 'fas fa-edit'
        
        const i_remove = document.createElement('i')
        i_remove.className = 'fas fa-trash-alt'

        li.appendChild(button)
        li.appendChild(p)
        li.appendChild(i_edit)
        li.appendChild(i_remove)

        ul_toDo.appendChild(li)

    }

    toDoAddForm.addEventListener('submit', function(e){
        e.preventDefault()//para não enviar o formulário
        addTask(itemInput.value)
        itemInput.value = ''
        itemInput.focus
    });
    [...lis].forEach(element => {
        element.addEventListener('click', function(e){
            console.log(this)
        });
    });

})()
