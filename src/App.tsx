import { useEffect, useRef, useState, type ReactNode } from "react";
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
  { icon: Sun, title: "Ansiedade", text: "Ajuda para lidar com pensamentos acelerados, tensão emocional e a sensação de estar sempre no limite. Vamos encontrar formas de voltar ao presente." },
  { icon: Heart, title: "Questões emocionais", text: "Um espaço seguro e sem julgamentos para falar sobre sentimentos difíceis, angústias, perdas ou dificuldades nos relacionamentos." },
  { icon: Leaf, title: "Autoconhecimento", text: "Entender melhor seus padrões, suas escolhas e sua história, abrindo espaço para mudanças mais conscientes." },
  { icon: Shield, title: "Desenvolvimento pessoal", text: "Construção de uma vida mais equilibrada, autêntica e consciente, alinhada com o que realmente importa para você." },
];

function WhatsAppButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <a className={`button button-gold ${className}`} href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19} /> {children}</a>;
}

function Fade({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>{children}</div>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const close = () => setMenu(false);
  return (
    <div className="site">
      <header className="header"><div className="container nav">
        <a href="#" className="brand" onClick={close}>Arianne <span>Costa</span></a>
        <nav className="desktop-nav" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#areas">Áreas</a><a href="#atendimento">Atendimento</a><a href="#contato">Contato</a></nav>
        <div className="nav-actions"><a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="social"><Instagram size={19} /></a><WhatsAppButton className="nav-cta">Falar comigo</WhatsAppButton><button className="menu-btn" onClick={() => setMenu(true)} aria-label="Abrir menu"><Menu size={24} /></button></div>
      </div></header>
      {menu && <div className="mobile-menu"><button className="menu-close" onClick={close} aria-label="Fechar menu"><X size={25} /></button><div className="mobile-links"><a href="#sobre" onClick={close}>Sobre</a><a href="#areas" onClick={close}>Áreas</a><a href="#atendimento" onClick={close}>Atendimento</a><a href="#contato" onClick={close}>Contato</a></div><WhatsAppButton>Conversar pelo WhatsApp</WhatsAppButton><a className="mobile-instagram" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={19} /> Instagram</a></div>}
      <main>
        <section className="hero"><div className="hero-glow" /><div className="container hero-grid"><div className="hero-photo reveal"><div className="photo-frame"><img src="/arianne-perfil.jpg" alt="Arianne Costa, psicóloga" /></div><div className="photo-accent" /><div className="experience-badge"><Sparkles size={16} /><div><strong>20+ anos</strong><span>de experiência clínica</span></div></div></div><div className="hero-copy reveal"><div className="eyebrow">Psicóloga Arianne Costa</div><h1>Um espaço para <em>respirar,</em> refletir e se reencontrar.</h1><p>Atendimento psicológico acolhedor em Curitiba e online. Uma pausa na sua semana para cuidar de você com alguém que escuta de verdade.</p><div className="hero-actions"><WhatsAppButton>Conversar pelo WhatsApp</WhatsAppButton><a className="button button-light" href="#sobre">Conhecer meu trabalho <ArrowRight size={17} /></a></div><div className="trust-line"><span>CRP</span> Atendimento ético, humano e personalizado</div></div></div><a className="scroll-cue" href="#sobre" aria-label="Ir para sobre">↓</a></section>
        <section className="intro section"><div className="container narrow"><Fade><div className="eyebrow centered">Cuidar de si também é uma escolha</div><h2>Nem sempre precisamos de respostas.<br /><em>Às vezes, precisamos de espaço.</em></h2><p className="lead">A terapia pode ser esse lugar: um momento reservado para olhar para o que você sente, compreender sua história e construir novos caminhos com mais consciência e leveza.</p></Fade></div></section>
        <section id="sobre" className="space-section section"><div className="container two-col"><Fade className="text-col"><div className="eyebrow">O espaço</div><h2>Um lugar pensado para você se sentir <em>em casa.</em></h2><p>O consultório foi cuidadosamente preparado para transmitir acolhimento desde o primeiro momento. Iluminação suave, mobiliário confortável e uma atmosfera de silêncio e privacidade — tudo pensado para que você possa se abrir com tranquilidade.</p><p>Aqui, não há pressa. Cada sessão é o seu tempo, no seu ritmo, em um ambiente onde você é livre para ser exatamente quem é.</p></Fade><Fade className="image-col"><img src="/consultorio.jpg" alt="Consultório da Arianne Costa" loading="lazy" /></Fade></div></section>
        <section id="areas" className="areas section"><div className="container"><Fade><div className="section-heading"><div className="eyebrow">Como posso ajudar</div><h2>Um olhar atento para o que <em>você vive.</em></h2><p>Um espaço de escuta e acolhimento para compreender o que está acontecendo e encontrar caminhos possíveis.</p></div></Fade><div className="area-grid">{areas.map((area) => { const Icon = area.icon; return <Fade key={area.title} className="area-card"><div className="icon"><Icon size={23} /></div><h3>{area.title}</h3><p>{area.text}</p></Fade>; })}</div></div></section>
        <section className="about section"><div className="container two-col about-grid"><Fade className="image-col about-photo"><img src="/arianne-cadeira.jpg" alt="Arianne Costa no consultório" loading="lazy" /></Fade><Fade className="text-col"><div className="eyebrow">Sobre mim</div><h2>Mais de duas décadas dedicadas à <em>escuta clínica.</em></h2><p>Sou Arianne Costa. Ao longo de mais de 20 anos de prática clínica, tenho acompanhado pessoas em seus momentos de maior vulnerabilidade e também em suas mais belas transformações.</p><p>Acredito em uma psicologia humana, ética e profundamente respeitosa com o tempo de cada pessoa. Meu papel não é dar respostas prontas, mas iluminar o caminho para que você encontre as suas próprias.</p><div className="signature">Arianne Costa</div></Fade></div></section>
        <section id="atendimento" className="modalities section"><div className="container"><Fade><div className="section-heading centered"><div className="eyebrow">Atendimento</div><h2>Onde nos <em>encontramos.</em></h2></div></Fade><div className="mod-grid"><Fade><article className="mod-card"><div className="mod-icon"><MapPin size={25} /></div><div><span className="mod-label">Presencial</span><h3>Curitiba</h3><p>Um consultório acolhedor, pensado para que você sinta conforto e privacidade desde o momento em que entra.</p></div></article></Fade><Fade><article className="mod-card"><div className="mod-icon"><Video size={25} /></div><div><span className="mod-label">Online</span><h3>De onde você estiver</h3><p>Atendimento para todo o Brasil e brasileiros no exterior, com a mesma ética, profundidade e acolhimento.</p></div></article></Fade></div></div></section>
        <section id="contato" className="cta section"><div className="cta-decoration" /><div className="container narrow"><Fade><div className="eyebrow centered">Vamos conversar?</div><h2>O primeiro passo pode ser difícil.<br /><em>Você não precisa dar ele sozinho.</em></h2><p>Se sente que este é o momento de cuidar de si, entre em contato.</p><WhatsAppButton>Agendar atendimento</WhatsAppButton></Fade></div></section>
      </main>
      <footer className="footer"><div className="container footer-inner"><div><a href="#" className="brand">Arianne <span>Costa</span></a><p>Psicóloga · Curitiba e online</p></div><div className="footer-links"><a href="#sobre">Sobre</a><a href="#areas">Áreas</a><a href="#contato">Contato</a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18} /></a></div><div className="copyright">© {new Date().getFullYear()} Arianne Costa. Todos os direitos reservados.</div></div></footer>
      <a className="floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle size={23} /></a>
    </div>
  );
}
