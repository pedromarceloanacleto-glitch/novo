import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

// IMPORTANTE: Altere aqui com os seus links reais depois!
const LINK_INSTAGRAM = "https://instagram.com";
const LINK_WHATSAPP = "https://wa.me";

function App() {
  return (
    <div className="app-container">
      {/* Conteúdo Principal do Site */}
      <main className="content">
        <section className="hero">
          <h1>Consultório de Psicologia</h1>
          <p>Espaço de acolhimento e cuidado para a sua saúde mental.</p>
        </section>
      </main>

      {/* O Rodapé que estava na tela do seu Claude */}
      <footer className="site-footer">
        <div className="footer-links">
          <a href="#sobre">Sobre</a>
          <a href="#areas">Áreas</a>
          <a href={LINK_INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp usando o seu favicon do ZIP */}
      <a className="floating-wa" href={LINK_WHATSAPP} target="_blank" rel="noreferrer">
        <img src="/favicon.svg" alt="WhatsApp" />
        <span>Agendar Consulta</span>
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
