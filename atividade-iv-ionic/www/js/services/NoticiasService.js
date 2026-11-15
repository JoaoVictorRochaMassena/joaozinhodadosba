angular.module("ucsalApp").factory("NoticiasService", function () {
  var publicacoes = [
    {
      id: 1,
      titulo: "Rematrícula do próximo semestre",
      data: "2026-11-12",
      categoria: "Notícia",
      imagem: "img/campus.svg",
      texto:
        "Exemplo acadêmico: o período de rematrícula está chegando. Confira as disciplinas e mantenha seus dados de contato atualizados. Este comunicado é fictício e não representa um calendário oficial.",
    },
    {
      id: 2,
      titulo: "SEMOC: encontro de pesquisa e extensão",
      data: "2026-11-13",
      categoria: "Evento",
      imagem: "img/evento.svg",
      texto:
        "Exemplo acadêmico: estudantes dos campi Pituaçu e Federação podem apresentar projetos e participar de debates sobre ciência e sociedade. Programação demonstrativa, sem inscrições reais.",
    },
    {
      id: 3,
      titulo: "Iniciação científica",
      data: "2026-11-14",
      categoria: "Notícia",
      imagem: "img/campus.svg",
      texto:
        "Exemplo acadêmico: conheça as áreas de pesquisa e converse com os professores sobre projetos de iniciação científica. Consulte os canais oficiais para editais reais.",
    },
    {
      id: 4,
      titulo: "Maratona de programação",
      data: "2026-11-15",
      categoria: "Evento",
      imagem: "img/evento.svg",
      texto:
        "Exemplo acadêmico: atividade de resolução de problemas em equipe para alunos de Engenharia de Software. Evento fictício no campus Pituaçu.",
    },
  ];
  return {
    listar: function () {
      return publicacoes;
    },
    categorias: function () {
      return ["Notícia", "Evento"];
    },
    buscar: function (id) {
      return publicacoes.find(function (n) {
        return n.id === Number(id);
      });
    },
  };
});
