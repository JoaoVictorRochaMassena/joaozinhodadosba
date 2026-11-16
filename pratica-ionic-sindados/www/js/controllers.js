angular.module('sindadosApp')
  .controller('LoginCtrl', function ($scope, $state, AuthService) {
    $scope.dados = AuthService.dados;
    $scope.erro = '';
    $scope.entrar = function () {
      if (!$scope.dados.email || !$scope.dados.senha) {
        $scope.erro = 'Preencha e-mail e senha.';
        return;
      }
      if (AuthService.entrar($scope.dados.email.trim(), $scope.dados.senha)) {
        $scope.erro = '';
        $state.go('area.home');
      } else {
        $scope.erro = 'Dados incorretos. Use a conta de demonstração.';
      }
    };
  })
  .controller('AreaCtrl', function ($scope, $state, AuthService) {
    $scope.sair = function () {
      AuthService.sair();
      $state.go('login');
    };
  })
  .controller('HomeCtrl', function ($scope) {
    $scope.saudacao = 'Bem-vindo à área do associado.';
  })
  .controller('NoticiasCtrl', function ($scope, DadosService) {
    $scope.noticias = DadosService.noticias();
  })
  .controller('AcordosCtrl', function ($scope, $ionicPopup, DadosService) {
    $scope.acordos = DadosService.acordos();
    $scope.detalhes = function (acordo) {
      $ionicPopup.alert({ title: acordo.titulo, template: acordo.resumo });
    };
  });
