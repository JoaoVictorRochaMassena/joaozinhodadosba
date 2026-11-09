import React, { useState } from 'react';
import HeaderNavbar from './components/HeaderNavbar.jsx';
import NewsCarousel from './components/NewsCarousel.jsx';
import SalaryTable from './components/SalaryTable.jsx';

const noticias = [
  { id: 1, titulo: 'Campanha salarial', descricao: 'Informações sobre reuniões da categoria.', imagem: '/campanha.svg', link: '#pisos' },
  { id: 2, titulo: 'Encontro de TI', descricao: 'Uma conversa para profissionais da Bahia.', imagem: '/conexoes.svg', link: '#pisos' },
  { id: 3, titulo: 'Participação', descricao: 'Acompanhe as novidades do grupo.', imagem: '/participacao.svg', link: '#pisos' },
];

const cargos = [
  { id: 1, cargo: 'Desenvolvedor', piso: 'R$ 4.200,00', jornada: '40 horas semanais', detalhes: 'Criação e manutenção de sistemas.' },
  { id: 2, cargo: 'Suporte', piso: 'R$ 3.200,00', jornada: '40 horas semanais', detalhes: 'Atendimento e solução de problemas técnicos.' },
  { id: 3, cargo: 'DBA', piso: 'R$ 5.100,00', jornada: '40 horas semanais', detalhes: 'Cuida dos bancos de dados.' },
  { id: 4, cargo: 'DevOps', piso: 'R$ 5.400,00', jornada: '40 horas semanais', detalhes: 'Automação e infraestrutura.' },
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  function login() { setIsLoggedIn(true); setUserProfile({ nome: 'João' }); }
  function logout() { setIsLoggedIn(false); setUserProfile(null); }
  return (
    <>
      <HeaderNavbar isLoggedIn={isLoggedIn} userProfile={userProfile} onLogin={login} onLogout={logout} />
      <main className="container py-4">
        <h1>JoaozinhoDadosBA</h1>
        <p>Exemplo simples de página para profissionais de TI da Bahia.</p>
        <NewsCarousel noticias={noticias} />
        <section id="pisos" className="my-5">
          <h2>Pisos salariais</h2>
          <p>Valores inventados apenas para a atividade.</p>
          <SalaryTable cargos={cargos} />
        </section>
      </main>
    </>
  );
}
