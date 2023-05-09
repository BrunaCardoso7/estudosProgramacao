// Imagine que você está criando um programa para um gerenciador de tarefas. 
// O programa deve permitir ao usuário cadastrar novas tarefas, exibir uma lista 
// das tarefas cadastradas e permitir que o usuário marque uma tarefa como concluída 
// ou a remova da lista. O programa deve calcular e exibir a porcentagem de tarefas concluídas 
// e informar se todas as tarefas foram concluídas.
let listaTarefas = []

class gerenciadorTarefas {
    constructor(novatarefa){
        this.novatarefa = novatarefa;
    }
    adicionarTarefa(){
        return listaTarefas.push(this.novatarefa);
    }
    removerTarefa(){
        return listaTarefas.pop(this.novatarefa);
    }
}

let arrumarQuarto = new gerenciadorTarefas("arrumar o quarto");
let estudar = new gerenciadorTarefas("estudar");

arrumarQuarto.adicionarTarefa();
estudar.adicionarTarefa();

console.log(listaTarefas)

arrumarQuarto.removerTarefa();

console.log(listaTarefas);