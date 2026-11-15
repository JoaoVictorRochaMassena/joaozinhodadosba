angular
  .module("ucsalApp")
  .controller("NoticiasCtrl", function ($scope, $stateParams, NoticiasService) {
    $scope.publicacoes = NoticiasService.listar();
    $scope.categorias = NoticiasService.categorias();
    $scope.filtro = { categoria: "" };
    $scope.noticia = NoticiasService.buscar($stateParams.id);
  });
