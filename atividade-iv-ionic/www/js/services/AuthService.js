angular.module("ucsalApp").factory("AuthService", function (AlunoService) {
  var credenciais = [
      { matricula: "20261001", senha: "123456" },
      { matricula: "20261002", senha: "123456" },
    ],
    atual = null;
  return {
    entrar: function (matricula, senha) {
      var valido = credenciais.some(function (c) {
        return c.matricula === matricula && c.senha === senha;
      });
      atual = valido ? AlunoService.buscar(matricula) : null;
      return !!atual;
    },
    aluno: function () {
      return atual;
    },
    sair: function () {
      atual = null;
    },
  };
});
