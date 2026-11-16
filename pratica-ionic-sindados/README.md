# Prática Ionic + AngularJS — SINDADOS-BA

Protótipo simples para a atividade de laboratório de João Victor.

## Rodar
Abra o terminal nesta pasta e execute `npm.cmd run dev` no Windows ou `npm run dev` no Codespaces. Não precisa instalar dependências. Abra http://localhost:8102. No Codespaces, abra a porta 8102.

Conta de demonstração: associado@sindados.org.br / 123456.

## Apresentar
Entre com os campos vazios para mostrar o erro. Depois faça login, abra Notícias, veja os três itens, abra ACTs e CCTs e clique em Ver cláusulas. Use Sair e mostre que o acesso às telas fica bloqueado.

`www/js/app.js` contém as rotas e a proteção; `AuthService.js` guarda o estado do login; `DadosService.js` guarda as notícias e os acordos fictícios; `controllers.js` liga os dados às telas. O Ionic 1.3.5 está em `www/lib`, pois a atividade permite AngularJS.

Os dados desta demonstração não representam comunicados ou acordos oficiais.

