; (function (){
    "use strict"

    // armazenar o dom em variáveis
    const itemInput =  document.querySelector('#item-input')
    const toDoAddForm = document.querySelector('#todo-add')
    const ul_toDo = document.querySelector("#todo-list")
    // const lis = ul_toDo.getElementsByTagName('li')

    const arrTask = [
        {
            name:"task 1",
            createAt: Date.now(),
            completed: false
        }
    ]

    function addEventLi(li){
        li.addEventListener('click', function(){
            console.log(li)

        })
    }
    

    function generatorAddTask(obj){
        const li = document.createElement('li')
        li.className = 'todo-item'

        const button = document.createElement('button')
        button.className = 'button-check'
        const i_check = document.createElement('i')
        i_check.className = 'fas fa-check displayNone'
        button.appendChild(i_check)

        const p = document.createElement('p')
        p.className = 'task-name'
        p.textContent = obj.name

        const i_edit = document.createElement('i')
        i_edit.className = 'fas fa-edit'

        i_edit.addEventListener('click', function (e){

            const conteinerDiv = document.createElement('div')
            conteinerDiv.className = 'editContainer'
            conteinerDiv.style.display = 'flex'

            const inputEdit = document.createElement('input')
            inputEdit.setAttribute('type', 'text')
            inputEdit.className = 'editInput'
            conteinerDiv.appendChild(inputEdit)
            
            const btn_edit =  document.createElement('button')
            btn_edit.className = 'editButton'
            btn_edit.textContent = 'Edit'
            conteinerDiv.appendChild(btn_edit)
            
            const btn_cancel =  document.createElement('button')
            btn_cancel.className = 'cancelButton'
            btn_cancel.textContent = 'Cancel'
            btn_cancel.addEventListener('click', function (){
                conteinerDiv.style.display = 'none'
            })
            conteinerDiv.appendChild(btn_cancel)
            


            li.appendChild(conteinerDiv)

        })




        
        const i_remove = document.createElement('i')
        i_remove.className = 'fas fa-trash-alt'

        li.appendChild(button)
        li.appendChild(p)
        li.appendChild(i_edit)
        li.appendChild(i_remove)

        addEventLi(li)

        return li
    }


    function renderTask(){
        ul_toDo.innerHTML = ''
        arrTask.forEach(task => {
            ul_toDo.appendChild(generatorAddTask(task))
        });
    }   


    function addTask(task){
        arrTask.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })
    }

    toDoAddForm.addEventListener('submit', function(e){
        e.preventDefault()//para não enviar o formulário
        addTask(itemInput.value)
        renderTask()
        itemInput.value = ''
        itemInput.focus
    });

    renderTask()

})()
