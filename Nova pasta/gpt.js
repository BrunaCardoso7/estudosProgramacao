class Agenda {
    constructor() {
      this.contatos = [];
    }
  
    adicionarContato(nome, telefone) {
      this.contatos.push({ nome, telefone });
    }
  
    listarContatos() {
      console.log("Contatos:");
      this.contatos.forEach((contato) => {
        console.log(`- ${contato.nome}: ${contato.telefone}`);
      });
    }
  
    buscarContato(nome) {
      const contatoEncontrado = this.contatos.find((contato) => {
        return contato.nome === nome;
      });
  
      if (contatoEncontrado) {
        console.log(`Telefone de ${nome}: ${contatoEncontrado.telefone}`);
      } else {
        console.log(`Contato ${nome} não encontrado.`);
      }
    }
  }