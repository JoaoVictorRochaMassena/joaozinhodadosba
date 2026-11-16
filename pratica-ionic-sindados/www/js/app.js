angular.module('sindadosApp', ['ionic'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', { url: '/login', templateUrl: 'templates/login.html', controller: 'LoginCtrl' })
      .state('area', { url: '/area', abstract: true, templateUrl: 'templates/area.html', controller: 'AreaCtrl' })
      .state('area.home', { url: '/home', views: { conteudo: { templateUrl: 'templates/home.html', controller: 'HomeCtrl' } } })
      .state('area.noticias', { url: '/noticias', views: { conteudo: { templateUrl: 'templates/noticias.html', controller: 'NoticiasCtrl' } } })
      .state('area.acordos', { url: '/acordos', views: { conteudo: { templateUrl: 'templates/acordos.html', controller: 'AcordosCtrl' } } });
    $urlRouterProvider.otherwise('/login');
  })
  .run(function ($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, destino) {
      if (destino.name.indexOf('area') === 0 && !AuthService.estaLogado()) {
        event.preventDefault();
        $state.go('login');
      }
    });
  });
