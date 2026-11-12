export default function (app) {
  app.factory("StudyData", function () {
    return {
      items: [
        { name: "Diretivas", category: "Programação" },
        { name: "Controladores", category: "Programação" },
        { name: "Serviços", category: "Programação" },
        { name: "Banco de dados", category: "Revisão" },
        { name: "Redes", category: "Revisão" },
        { name: "Engenharia de software", category: "Revisão" },
      ],
      faq: [
        {
          title: "Como estudar?",
          content: "Leia o conteúdo e faça um exercício.",
        },
        {
          title: "Como revisar?",
          content: "Separe as dúvidas e refaça os exemplos.",
        },
      ],
      tabs: [
        { title: "Hoje", content: "Estudar diretivas e resolver exercícios." },
        { title: "Amanhã", content: "Revisar serviços e praticar eventos." },
      ],
    };
  });
  app.service("NoticeService", [
    "$timeout",
    function ($timeout) {
      this.message = "";
      let timer;
      this.show = (message) => {
        $timeout.cancel(timer);
        this.message = message;
        timer = $timeout(() => (this.message = ""), 3500);
      };
      this.close = () => {
        $timeout.cancel(timer);
        this.message = "";
      };
    },
  ]);
}
