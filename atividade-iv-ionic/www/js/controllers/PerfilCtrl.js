angular.module('ucsalApp').controller('PerfilCtrl',function($scope,AuthService,AlunoService,$ionicPopup){
 $scope.$on('$ionicView.beforeEnter',function(){$scope.aluno=angular.copy(AuthService.aluno());});
 $scope.salvar=function(form){
  if(form.$invalid){$ionicPopup.alert({title:'Confira os dados',template:'Preencha todos os campos. Use e-mail válido, telefone com 10 ou 11 dígitos e CEP com 8 dígitos.'});return;}
  AlunoService.salvar(AuthService.aluno().matricula,$scope.aluno);
  $ionicPopup.alert({title:'Cadastro atualizado',template:'Suas alterações foram salvas nesta sessão.'});
 };
});
