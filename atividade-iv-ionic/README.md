# Portal do Aluno UCSal — Atividade IV

João Victor Rocha Massena. Protótipo acadêmico em Ionic 1 e AngularJS, conforme o enunciado. Sem banco de dados ou API.

## Executar no Windows

Instale o Node.js, extraia o projeto e abra o terminal nesta pasta, onde está package.json:

```powershell
npm.cmd run dev
```

Abra http://localhost:8100. Não é necessário npm install: as bibliotecas estão em www/lib.
No Codespaces, entre na pasta atividade-iv-ionic, execute npm run dev e abra a porta 8100.

## Login de demonstração

- Matrícula: 20261001
- Senha: 123456
- Segunda conta de teste: 20261002, mesma senha.

## Recursos

1. Login validado pelo AuthService e bloqueio de rotas sem autenticação.
2. Mural com notícias e eventos, filtro por categoria, imagens locais e detalhes.
3. Cadastro com nome, matrícula e curso bloqueados. Contato e endereço editáveis.
4. Mensalidades de três semestres, moeda brasileira, status por cor e cópia de código fictício.

Os dados ficam em memória durante a sessão. Recarregar a página restaura os dados iniciais e exige novo login. Nada é enviado a um servidor de dados.

## Organização

- www/js/app.js: módulo ucsalApp, rotas e proteção da navegação.
- www/js/controllers: lógica das telas.
- www/js/services: todos os dados fictícios e métodos de acesso.
- www/templates: telas Ionic e diretivas AngularJS.
- www/css/style.css: variáveis de cores e ajustes de tamanho.
- www/img: ilustrações SVG locais.
- www/lib: Ionic 1.3.5 e localização brasileira do AngularJS.

O Ionic 1 foi escolhido porque o PDF exige AngularJS, dependência ionic e $stateProvider.
Bibliotecas oficiais: https://github.com/ionic-team/ionic-bower/tree/v1.3.5
As bibliotecas mantêm seus avisos de licença nos arquivos distribuídos.

## Roteiro de demonstração

1. Tente entrar sem dados e depois use a conta de demonstração.
2. Abra uma notícia em Ler mais e volte ao mural.
3. No menu, abra Meu cadastro; altere o e-mail e salve.
4. Abra Mensalidades, troque o semestre e observe os status.
5. Em uma parcela A Pagar, copie a linha digitável fictícia.
6. Mostre as rotas, os quatro serviços e os controllers no código.
7. Saia pelo menu.

O vídeo explicativo obrigatório ainda precisa ser gravado.
