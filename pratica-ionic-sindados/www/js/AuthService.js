angular.module('sindadosApp').factory('AuthService', function () {
  var logado = false;
  var dados = {};
  return {
    dados: dados,
    entrar: function (email, senha) {
      logado = email === 'associado@sindados.org.br' && senha === '123456';
      return logado;
    },
    estaLogado: function () { return logado; },
    sair: function () {
      logado = false;
      dados.email = '';
      dados.senha = '';
    }
  };
});
