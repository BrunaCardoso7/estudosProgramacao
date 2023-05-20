let agenda = {
    contatos: [
      { nome: "João", telefone: "2222-3333", email: "joao@gmail.com" },
      { nome: "Maria", telefone: "1111-2222", email: "maria@gmail.com" }
    ],
    adicionarContato: function(nome, telefone, email) {
      let novoContato = { nome: nome, telefone: telefone, email: email };
      this.contatos.push(novoContato);
    },
    removerContato: function(nome) {
      let indiceContato = -1;
      for (let i = 0; i < this.contatos.length; i++) {
        if (this.contatos[i].nome === nome) {
          indiceContato = i;
          break;
        }
      }
      if (indiceContato !== -1) {
        this.contatos.splice(indiceContato, 1);
      }
    }
  };
  
  // removendo um contato
  agenda.removerContato("maria");
  console.log(agenda.contatos); // output: [{ nome: "Maria", telefone: "1111-2222", email: "maria@gmail.com" }]