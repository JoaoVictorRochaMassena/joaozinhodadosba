angular
  .module("ucsalApp")
  .controller(
    "FinanceiroCtrl",
    function ($scope, AuthService, FinanceiroService, $ionicPopup) {
      var matricula = AuthService.aluno().matricula;
      $scope.semestres = FinanceiroService.semestres(matricula);
      $scope.filtro = {
        semestre: $scope.semestres[$scope.semestres.length - 1],
      };
      $scope.carregar = function () {
        $scope.mensalidades = FinanceiroService.listar(
          matricula,
          $scope.filtro.semestre,
        );
      };
      $scope.carregar();
      $scope.copiar = function (parcela) {
        function sucesso() {
          $ionicPopup.alert({
            title: "Código copiado",
            template:
              "Linha digitável fictícia copiada. Não utilize para pagamentos.",
          });
        }
        function falha() {
          $ionicPopup.alert({
            title: "Copie manualmente",
            template:
              "O navegador não permitiu a cópia automática. Selecione o código exibido na parcela.",
          });
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(parcela.codigo).then(sucesso, falha);
        } else {
          var campo = document.createElement("textarea");
          campo.value = parcela.codigo;
          document.body.appendChild(campo);
          campo.select();
          try {
            document.execCommand("copy") ? sucesso() : falha();
          } catch (e) {
            falha();
          }
          campo.remove();
        }
      };
    },
  );
