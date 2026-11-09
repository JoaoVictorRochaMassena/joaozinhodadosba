import { useState } from 'react';
import HeaderNavbar from './components/HeaderNavbar.jsx';
import NewsCarousel from './components/NewsCarousel.jsx';
import SalaryTable from './components/SalaryTable.jsx';

const noticias = [
  { id: 1, titulo: 'Campanha salarial 2026', descricao: 'Acompanhe as pautas e as próximas reuniões da categoria de tecnologia.', imagem: '/campanha.svg', link: '#pisos', acao: 'Consultar pisos' },
  { id: 2, titulo: 'Conexões para crescer', descricao: 'Encontros e oportunidades para profissionais de TI da Bahia.', imagem: '/conexoes.svg', link: '#participar', acao: 'Saiba mais' },
  { id: 3, titulo: 'Sua voz faz diferença', descricao: 'Participe das conversas sobre trabalho, carreira e direitos.', imagem: '/participacao.svg', link: '#participar', acao: 'Participar' },
];

const cargos = [
  { id: 1, cargo: 'Desenvolvedor(a)', piso: 'R$ 4.200,00', jornada: '40 horas semanais', detalhes: 'Desenvolvimento, manutenção e testes de sistemas.' },
  { id: 2, cargo: 'Analista de Suporte', piso: 'R$ 3.200,00', jornada: '40 horas semanais', detalhes: 'Atendimento técnico, diagnóstico e solução de incidentes.' },
  { id: 3, cargo: 'DBA', piso: 'R$ 5.100,00', jornada: '40 horas semanais', detalhes: 'Administração, segurança e disponibilidade de bancos de dados.' },
  { id: 4, cargo: 'DevOps', piso: 'R$ 5.400,00', jornada: '40 horas semanais', detalhes: 'Automação de entregas, infraestrutura e monitoramento.' },
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  function login() { setUserProfile({ nome: 'João' }); setIsLoggedIn(true); }
  function logout() { setUserProfile(null); setIsLoggedIn(false); }

  return (
    <>
      <HeaderNavbar isLoggedIn={isLoggedIn} userProfile={userProfile} onLogin={login} onLogout={logout} />
      <main>
        <section className="hero py-5" id="inicio">
          <div className="container py-lg-4">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5">
                <span className="eyebrow">Portal da categoria · Bahia</span>
                <h1 className="display-5 fw-bold mt-3">Tecnologia se constrói em conjunto.</h1>
                <p className="lead mt-3">Notícias, participação e informações para profissionais de TI.</p>
                <a className="btn btn-light fw-semibold mt-2" href="#pisos">Explorar o portal</a>
              </div>
              <div className="col-lg-7"><NewsCarousel noticias={noticias} /></div>
            </div>
          </div>
        </section>
        <section className="container py-5" id="pisos">
          <div className="row align-items-end g-3 mb-4">
            <div className="col-md-8"><span className="section-label">Consulta rápida</span><h2 className="fw-bold mt-2 mb-0">Pisos por cargo</h2></div>
            <div className="col-md-4"><p className="text-md-end text-secondary small mb-0">Valores ilustrativos para demonstração acadêmica.</p></div>
          </div>
          <SalaryTable cargos={cargos} />
        </section>
        <section className="container pb-5" id="participar">
          <div className="callout p-4 p-md-5 d-md-flex align-items-center justify-content-between gap-4">
            <div><span className="section-label">Faça parte</span><h2 className="h3 fw-bold mt-2">Acompanhe as próximas ações.</h2><p className="mb-md-0">Este portal é uma demonstração acadêmica inspirada no contexto do SINDADOS-BA.</p></div>
            <a href="#inicio" className="btn btn-primary flex-shrink-0">Voltar ao início</a>
          </div>
        </section>
      </main>
      <footer className="bg-dark text-white-50 py-4"><div className="container small">SINDADOS-BA · Projeto acadêmico em React e Bootstrap</div></footer>
    </>
  );
}
