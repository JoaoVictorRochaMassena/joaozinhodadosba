angular
  .module("ucsalApp", ["ionic"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("login", {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "LoginCtrl",
      })
      .state("app", {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "MenuCtrl",
      })
      .state("app.noticias", {
        url: "/noticias",
        views: {
          conteudo: {
            templateUrl: "templates/noticias.html",
            controller: "NoticiasCtrl",
          },
        },
      })
      .state("app.detalhe", {
        url: "/noticias/:id",
        views: {
          conteudo: {
            templateUrl: "templates/noticia-detalhe.html",
            controller: "NoticiasCtrl",
          },
        },
      })
      .state("app.perfil", {
        url: "/perfil",
        views: {
          conteudo: {
            templateUrl: "templates/perfil.html",
            controller: "PerfilCtrl",
          },
        },
      })
      .state("app.financeiro", {
        url: "/financeiro",
        views: {
          conteudo: {
            templateUrl: "templates/financeiro.html",
            controller: "FinanceiroCtrl",
          },
        },
      });
    $urlRouterProvider.otherwise("/login");
  })
  .run(function ($rootScope, $state, AuthService) {
    $rootScope.$on("$stateChangeStart", function (event, to) {
      if (to.name.indexOf("app") === 0 && !AuthService.aluno()) {
        event.preventDefault();
        $state.go("login");
      }
    });
  })
  .controller(
    "MenuCtrl",
    function ($scope, $state, $ionicHistory, AuthService) {
      $scope.sair = function () {
        AuthService.sair();
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        $state.go("login");
      };
    },
  );
