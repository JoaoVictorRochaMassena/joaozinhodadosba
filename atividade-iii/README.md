# Atividade III — João Victor

Aplicações simples de organização dos estudos, com AngularJS e Vue.js.

## Rodar no computador ou Codespaces

Instale o Node.js e abra o terminal nesta pasta (onde está package.json).
No PowerShell:

```
npm.cmd install
npm.cmd run dev
```

No Codespaces use npm install e npm run dev. Abra a porta 5173 na aba Ports.
Abra o endereço mostrado pelo terminal. A página inicial tem os links das duas partes.
Para gerar a versão de produção: npm.cmd run build.

## Arquivos

- angular/app.js: módulo principal e controlador.
- angular/data.js: factory de dados e serviço de notificações.
- angular/directives.js: as seis diretivas independentes com escopo isolado.
- vue/App.vue: dados, propriedades computadas e coordenação dos componentes.
- vue/components/: os seis componentes Vue.
- style.css: aparência básica e ajuste para celular.

## Apresentação

1. Abra uma dúvida e depois outra: acordeão com transição e um item aberto.
2. Navegue nas páginas de matérias e observe os limites anterior/próxima.
3. Pesquise uma matéria e filtre por categoria no menu. Clique fora para fechar.
4. Mova o controle de leitura e observe a barra de 0 a 100.
5. Alterne Hoje/Amanhã nas abas.
6. Salve o progresso: aparece um toast, que fecha pelo botão ou após 3,5 segundos.
7. Recarregue: o progresso salvo fica neste navegador.
8. Mostre os arquivos e explique os bindings do AngularJS e as props/eventos do Vue.

O conteúdo é fictício. Sem servidor de dados: apenas o progresso usa localStorage.
O vídeo explicativo de cada parte ainda deve ser gravado pelo aluno.
