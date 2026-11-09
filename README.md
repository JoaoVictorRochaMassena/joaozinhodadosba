# Portal SINDADOS-BA — atividade React + Bootstrap

Projeto acadêmico demonstrativo, feito com Vite, React, React-Bootstrap e Bootstrap 5. Os valores salariais da tabela são **fictícios**, usados somente para demonstrar busca e modal.

## Rodar no GitHub Codespaces

1. Abra o repositório no GitHub e clique em **Code > Codespaces > Create codespace on main**.
2. No terminal do Codespaces, execute `npm install`.
3. Execute `npm run dev`.
4. Abra a porta **5173** quando o Codespaces oferecer a prévia.

## Demonstração em sala

1. Mostre o menu no computador e em largura de celular.
2. Clique em **Login**: o cabeçalho passa a mostrar “Olá, João” e **Sair**. Clique em **Sair** para voltar.
3. Use as setas ou indicadores do carrossel para trocar as três notícias.
4. Digite `DBA` na busca da tabela e abra **Ver detalhes / carga horária**. Feche o modal e apague a busca.

## Organização

- `src/App.jsx`: estado de login, dados das notícias e dos cargos.
- `src/components/HeaderNavbar.jsx`: menu responsivo e interface conforme o login.
- `src/components/NewsCarousel.jsx`: carrossel montado a partir de props.
- `src/components/SalaryTable.jsx`: busca por cargo e modal de detalhes.

O botão de login é uma simulação local para apresentar o estado do React; não existe cadastro ou autenticação real.
