export default function (app) {
  app.directive("studyAccordion", () => ({
    scope: { items: "=" },
    template: `<div ng-repeat="item in items"><button ng-click="toggle($index)" aria-expanded="{{opened===$index}}">{{item.title}}</button><div class="answer" ng-class="{open:opened===$index}"><div><p>{{item.content}}</p></div></div></div>`,
    link(s) {
      s.opened = -1;
      s.toggle = (i) => (s.opened = s.opened === i ? -1 : i);
    },
  }));
  app.directive("studyPagination", () => ({
    scope: { total: "=", current: "=", onChange: "&" },
    template: `<nav aria-label="Paginação"><button ng-disabled="current<=1" ng-click="onChange({value:current-1})">Anterior</button><button ng-repeat="n in numbers() track by n" aria-current="{{current===n?'page':'false'}}" ng-click="onChange({value:n})">{{n}}</button><button ng-disabled="current>=total" ng-click="onChange({value:current+1})">Próxima</button><p>Página {{current}} de {{total}}</p></nav>`,
    link(s) {
      s.numbers = () => Array.from({ length: s.total }, (_, i) => i + 1);
    },
  }));
  app.directive("studyProgress", () => ({
    scope: { value: "=" },
    template: `<p>{{value}}%</p><div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="{{value}}"><span ng-style="{width:value+'%'}"></span></div>`,
  }));
  app.directive("studyTabs", () => ({
    scope: { items: "=" },
    template: `<div role="tablist"><button role="tab" ng-repeat="item in items" aria-selected="{{active===$index}}" ng-click="active=$index">{{item.title}}</button></div><p role="tabpanel">{{items[active].content}}</p>`,
    link(s) {
      s.active = 0;
    },
  }));
  app.directive("studyDropdown", [
    "$document",
    function ($document) {
      return {
        scope: { options: "=", onSelect: "&" },
        template: `<div class="dropdown"><button ng-click="open=!open" aria-expanded="{{!!open}}">Filtrar matérias</button><div class="options" ng-if="open"><button ng-repeat="option in options" ng-click="choose(option)">{{option}}</button></div></div>`,
        link(s, el) {
          s.choose = (value) => {
            s.onSelect({ value });
            s.open = false;
          };
          const outside = (e) => {
            if (!el[0].contains(e.target))
              s.$applyAsync(() => (s.open = false));
          };
          $document.on("click", outside);
          s.$on("$destroy", () => $document.off("click", outside));
        },
      };
    },
  ]);
  app.directive("studyToast", () => ({
    scope: { message: "=", onClose: "&" },
    template: `<div class="toast" role="status" ng-if="message">{{message}} <button ng-click="onClose()" aria-label="Fechar aviso">Fechar</button></div>`,
  }));
}
