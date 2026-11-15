angular.module('ucsalApp').controller('LoginCtrl',function($scope,$state,AuthService){
 $scope.login={};$scope.erro='';
 $scope.entrar=function(form){$scope.erro='';if(form.$invalid){$scope.erro='Preencha a matrícula e a senha.';return;}
 if(AuthService.entrar($scope.login.matricula.trim(),$scope.login.senha)){$scope.login={};$state.go('app.noticias');}else{$scope.erro='Matrícula ou senha incorreta.';}};
});
