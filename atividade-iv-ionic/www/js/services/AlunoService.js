angular.module('ucsalApp').factory('AlunoService',function(){
 var alunos=[
 {matricula:'20261001',nome:'João Victor Rocha Massena',curso:'Engenharia de Software',email:'joao@example.com',telefone:'71999990001',cep:'41740000',rua:'Rua Exemplo, 10',bairro:'Pituaçu',cidade:'Salvador'},
 {matricula:'20261002',nome:'Aluno de Demonstração',curso:'Engenharia de Software',email:'aluno@example.com',telefone:'71999990002',cep:'40210000',rua:'Rua Modelo, 20',bairro:'Federação',cidade:'Salvador'}];
 return {buscar:function(matricula){return alunos.find(function(a){return a.matricula===matricula;});},
 salvar:function(matricula,dados){var aluno=this.buscar(matricula);['email','telefone','cep','rua','bairro','cidade'].forEach(function(campo){aluno[campo]=dados[campo].trim();});return aluno;}};
});
