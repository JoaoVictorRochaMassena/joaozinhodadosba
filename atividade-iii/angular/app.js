import angular from "angular";
import registerData from "./data.js";
import registerDirectives from "./directives.js";
const app = angular.module("studyApp", []);
registerData(app);
registerDirectives(app);
app.controller("StudyController", [
  "$scope",
  "StudyData",
  "NoticeService",
  function ($scope, data, notice) {
    $scope.faq = data.faq;
    $scope.tabs = data.tabs;
    $scope.categories = ["Todas", "Programação", "Revisão"];
    $scope.category = "Todas";
    $scope.search = "";
    $scope.page = 1;
    $scope.pageSize = 2;
    $scope.progress = 0;
    $scope.notice = notice;
    $scope.filtered = () =>
      data.items.filter(
        (i) =>
          ($scope.category === "Todas" || i.category === $scope.category) &&
          i.name.toLowerCase().includes($scope.search.toLowerCase()),
      );
    $scope.pages = () =>
      Math.max(1, Math.ceil($scope.filtered().length / $scope.pageSize));
    $scope.changePage = (value) => ($scope.page = value);
    $scope.setCategory = (value) => {
      $scope.category = value;
      $scope.page = 1;
    };
    $scope.closeNotice = () => notice.close();
    $scope.save = () => {
      try {
        localStorage.setItem("angularProgress", $scope.progress);
        notice.show("Progresso salvo neste navegador.");
      } catch {
        notice.show("Não foi possível salvar neste navegador.");
      }
    };
    try {
      $scope.progress = Math.min(
        100,
        Math.max(0, Number(localStorage.getItem("angularProgress")) || 0),
      );
    } catch {}
  },
]);
angular.bootstrap(document, ["studyApp"]);
