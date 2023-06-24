; (function (){
    "use strict"

    // armazenar o dom em variáveis
    const itemInput =  document.querySelector('#item-input')
    const toDoAddForm = document.querySelector('#todo-add')
    const ul_toDo = document.querySelector("#todo-list")
    const lis = ul_toDo.getElementsByTagName('li')

    const arrTask = [
        {
            name:"task 1",
            createAt: Date.now(),
            completed: false
        }
    ]

    // function addEventLi(li){
    //     li.addEventListener('click', function(){
    //         console.log(li)

    //     })
    // }
    

    function generatorAddTask(obj){
        const li = document.createElement('li')
        li.className = 'todo-item'

        const button = document.createElement('button')
        button.className = 'button-check'
        const i_check = document.createElement('i')
        i_check.className = 'fas fa-check displayNone'
        i_check.setAttribute('data-action', 'checked')

        button.setAttribute('data-action', 'checkButton')
        button.appendChild(i_check)

        const p = document.createElement('p')
        p.className = 'task-name'
        p.textContent = obj.name

        const i_edit = document.createElement('i')
        i_edit.setAttribute('data-action', 'editInput')
        i_edit.className = 'fas fa-edit'

        
        const conteinerDiv = document.createElement('div')
        conteinerDiv.className = 'editContainer'
     

        const inputEdit = document.createElement('input')
        inputEdit.setAttribute('type', 'text')
        inputEdit.className = 'editInput'
        conteinerDiv.appendChild(inputEdit)
        
        const btn_edit =  document.createElement('button')
        btn_edit.className = 'editButton'
        btn_edit.textContent = 'Edit'
        btn_edit.setAttribute('data-action', 'tbn_edited')
        conteinerDiv.appendChild(btn_edit)
        
        const btn_cancel =  document.createElement('button')
        btn_cancel.className = 'cancelButton'
        btn_cancel.setAttribute('data-action', 'tbn_canceled')
        btn_cancel.textContent = 'Cancel'

    
        conteinerDiv.appendChild(btn_cancel)
        


        li.appendChild(conteinerDiv)



        
        const i_remove = document.createElement('i')
        i_remove.className = 'fas fa-trash-alt'
        i_remove.setAttribute('data-action', 'removeInput')

        li.appendChild(button)
        li.appendChild(p)
        li.appendChild(i_edit)
        li.appendChild(i_remove)

        // addEventLi(li)

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

    function clickedUl(evt){
        console.log(evt.target)
        let dataAction = evt.target.getAttribute('data-action')
        console.log(dataAction)

        if(!dataAction) return

        let currentLi =  evt.target
        while(currentLi.nodeName !== 'LI'){
            currentLi = currentLi.parentElement
        }
        console.log(currentLi)

        const currentLiIndex = [...lis].indexOf(currentLi)
        console.log(currentLiIndex)
        
        let actions = {
            editInput: function(){
                const divConteiner = currentLi.querySelector('.editContainer')
                divConteiner.style.display = 'flex'
                // renderTask()
            },
            removeInput: function(){
                arrTask.splice(currentLiIndex, 1)
                renderTask()
            },
            tbn_canceled: function(){
                const divConteiner = currentLi.querySelector('.editContainer')
                divConteiner.style.display = 'none'
            },
            tbn_edited: function(){
                const valueInput = currentLi.querySelector('.editInput').value
                arrTask[currentLiIndex].name = valueInput
                renderTask()
            },
            checkButton: function(){
                const checked = currentLi.querySelector('.fa-check')
                checked.style.display = 'block'
            }

        }

        if(actions[dataAction]){
            actions[dataAction]()
        }
    }

    toDoAddForm.addEventListener('submit', function(e){
        e.preventDefault()//para não enviar o formulário
        addTask(itemInput.value)
        renderTask()
        itemInput.value = ''
        itemInput.focus
    });

    ul_toDo.addEventListener('click', clickedUl)

    renderTask()

})()
