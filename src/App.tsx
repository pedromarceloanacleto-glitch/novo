import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight, Heart, Instagram, Leaf, MapPin, Menu, MessageCircle,
  Shield, Sparkles, Sun, Video, X
} from "lucide-react";
import "./styles.css";

const WHATSAPP =
  "https://wa.me/554187357456?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consulta.";
const INSTAGRAM =
  "https://www.instagram.com/desbloqueioemocionalcomarianne/";

const areas = [
  {
    icon: Sun,
    title: "Ansiedade",
    text: "Ajuda para lidar com pensamentos acelerados, tensão emocional e a sensação de estar sempre no limite. Vamos encontrar formas de voltar ao presente.",
  },
  {
    icon: Heart,
    title: "Questões emocionais",
    text: "Um espaço seguro e sem julgamentos para falar sobre sentimentos difíceis, angústias, perdas ou dificuldades nos relacionamentos.",
  },
  {
    icon: Leaf,
    title: "Autoconhecimento",
    text: "Entender melhor seus padrões, suas escolhas e sua história, abrindo espaço para mudanças mais conscientes.",
  },
  {
    icon: Shield,
    title: "Desenvolvimento pessoal",
    text: "Construção de uma vida mais equilibrada, autêntica e consciente, alinhada com o que realmente importa para você.",
  },
];

function WhatsAppButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a className={`button button-gold ${className}`} href={WHATSAPP} target="_blank" rel="noreferrer">
      <MessageCircle size={19} /> {children}
    </a>
  );
}

function Fade({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    el.forEach(node => observer.observe(node));
    setVisible(true);
    return () => observer.disconnect();
  }, []);
  return <div className={`reveal ${visible ? "ready" : ""} ${className}`}>{children}</div>;
}

export default function App() {
  const [menu, setMenu] = useState(false);

  const close = () => setMenu(false);

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a href="#" className="brand" onClick={close}>Arianne <span>Costa</span></a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#areas">Áreas</a>
            <a href="#atendimento">Atendimento</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="nav-actions">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="social">
              <Instagram size={19} />
            </a>
            <WhatsAppButton className="nav-cta">Falar comigo</WhatsAppButton>
            <button className="menu-btn" onClick={() => setMenu(true)} aria-label="Abrir menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {menu && (
        <div className="mobile-menu">
          <button className="menu-close" onClick={close} aria-label="Fechar menu"><X size={25} /></button>
          <div className="mobile-links">
            <a href="#sobre" onClick={close}>Sobre</a>
            <a href="#areas" onClick={close}>Áreas</a>
            <a href="#atendimento" onClick={close}>Atendimento</a>
            <a href="#contato" onClick={close}>Contato</a>
          </div>
          <WhatsAppButton>Conversar pelo WhatsApp</WhatsAppButton>
          <a className="mobile-instagram" href={INSTAGRAM} target="_blank" rel="noreferrer">
            <Instagram size={19} />
