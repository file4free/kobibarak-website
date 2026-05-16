// kb-upper.jsx — Nav, Hero, Positioning, What Drives Me, Areas of Work
const { useState, useEffect, useRef } = React;

/* ---------- Lucide icon wrapper ---------- */
function LIcon({ name, size = 22 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    try { window.lucide.createIcons({ nodes: [i] }); } catch (e) {}
    const svg = el.querySelector('svg');
    if (svg) { svg.setAttribute('width', size); svg.setAttribute('height', size); }
  }, [name, size]);
  return <span ref={ref} style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 0, color: 'inherit' }} />;
}

/* ---------- Navigation ---------- */
function SiteNav({ accent }) {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 50;

  const links = [
    { label: 'בית', href: '#hero' },
    { label: 'אודות', href: '#about' },
    { label: 'פרויקטים', href: '#projects' },
    { label: 'יצירת קשר', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 clamp(20px, 4vw, 40px)', height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'background 0.35s, border-color 0.35s',
    }}>
      <a href="#hero" style={{ fontWeight: 700, fontSize: 20, color: '#fff', textDecoration: 'none', letterSpacing: '-0.01em' }}>
        קובי ברק
      </a>

      {/* Desktop nav */}
      <div className="kb-desktop-nav" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="kb-nav-link">{l.label}</a>
        ))}
      </div>

      <a href="#contact" className="kb-desktop-nav kb-btn-primary" style={{
        padding: '9px 22px', fontSize: 13, background: accent,
        boxShadow: `0 4px 16px ${accentAlpha(accent, 0.3)}`,
      }}>בואו נדבר</a>

      {/* Mobile hamburger */}
      <button className="kb-mobile-btn" onClick={() => setOpen(!open)} aria-label="תפריט"
        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 6 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
          {open
            ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
        </svg>
      </button>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
          background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36, zIndex: 99,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: 'white', fontSize: 26, fontWeight: 600, textDecoration: 'none' }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="kb-btn-primary" style={{ background: accent, marginTop: 8 }}>בואו נדבר</a>
        </div>
      )}
    </nav>
  );
}

/* ---------- Hero Section ---------- */
function HeroSection({ accent, showParticles }) {
  const scrollY = useScrollY();

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '120px 24px 80px', overflow: 'hidden',
    }}>
      {/* Gradient bg with parallax */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 65% 55% at 50% 42%, ${accentAlpha(accent, 0.13)} 0%, transparent 72%)`,
        transform: `translateY(${scrollY * 0.12}px)`,
      }} />
      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
      {showParticles && <ParticleCanvas color={accentAlpha(accent, 0.4)} count={45} />}

      <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
        <FadeSlide delay={0.05}>
          <div className="kb-tag" style={{
            background: accentAlpha(accent, 0.1),
            borderColor: accentAlpha(accent, 0.22),
            color: accentAlpha(accent, 1),
            filter: 'brightness(1.5)',
          }}>יזם · בונה מערכות AI · מוצרים דיגיטליים</div>
        </FadeSlide>

        <FadeSlide delay={0.18}>
          <h1 style={{
            fontSize: 'clamp(52px, 9vw, 86px)', fontWeight: 600,
            lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 20,
          }}>קובי ברק</h1>
        </FadeSlide>

        <FadeSlide delay={0.3}>
          <h2 style={{
            fontSize: 'clamp(26px, 4.2vw, 50px)', fontWeight: 400,
            lineHeight: 1.25, marginTop: 14, color: 'rgba(255,255,255,0.82)',
          }}>יזם, בונה מערכות AI ומוצרים דיגיטליים.</h2>
        </FadeSlide>

        <FadeSlide delay={0.42}>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)',
            maxWidth: 560, margin: '22px auto 0',
          }}>לא מתוך טרנד. מתוך צורך אמיתי, תהליך ברור ובנייה שמחזיקה מים גם אחרי הדמו.</p>
        </FadeSlide>

        <FadeSlide delay={0.55}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 38, flexWrap: 'wrap' }}>
            <a href="#projects" className="kb-btn-outline">הכירו את העבודה שלי</a>
            <a href="https://barak-ai.co.il" target="_blank" rel="noopener"
              className="kb-btn-primary" style={{ background: accent, boxShadow: `0 8px 24px ${accentAlpha(accent, 0.35)}` }}>
              מעבר ל־Barak AI
            </a>
          </div>
        </FadeSlide>

        {/* Scroll hint */}
        <div className="kb-scroll-hint" style={{
          position: 'absolute', bottom: -60, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: 'rgba(255,255,255,0.2)', fontSize: 11,
        }}>
          <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.15)' }} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Positioning Statement ---------- */
function PositioningSection() {
  return (
    <section style={{
      padding: 'clamp(80px, 10vw, 140px) 24px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '50vh',
    }}>
      <div style={{ maxWidth: 900, textAlign: 'center' }}>
        <RevealText text="אני לא מגיע ל־AI מהצד של ההייפ. אני מגיע אליו מהצד של תהליכים, שירות, מערכות, אנשים ובעיות שצריך לפתור." />
        <FadeSlide delay={0.2}>
          <a href="#about" className="kb-subtle-link">קצת עליי ↓</a>
        </FadeSlide>
      </div>
    </section>
  );
}

/* ---------- What Drives Me ---------- */
function DrivesSection() {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 24px', maxWidth: 900, margin: '0 auto' }}>
      <FadeSlide>
        <div className="kb-tag">גישה</div>
      </FadeSlide>
      <FadeSlide delay={0.1}>
        <h2 className="kb-heading" style={{ marginTop: 10 }}>פחות רעש.</h2>
      </FadeSlide>
      <FadeSlide delay={0.2}>
        <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', marginTop: 20, maxWidth: 700 }}>
          יותר מערכות שעובדות. אני מאמין ש־AI טוב לא צריך להחליף שיקול דעת אנושי, אלא לעזור לעסק להגיב מהר יותר, להבין טוב יותר ולחסוך עבודה ידנית.
        </p>
      </FadeSlide>
    </section>
  );
}

/* ---------- Areas of Work ---------- */
function AreasSection({ accent, cardStyle }) {
  const areas = [
    { icon: 'cpu', title: 'מערכות AI', desc: 'מידע, תהליכים, משתמשים וכלי AI — במערכת אחת שעובדת.' },
    { icon: 'settings', title: 'אוטומציה עסקית', desc: 'מה שרץ ידנית — עובר לאוטומט. חיבור בין הכלים שכבר יש.' },
    { icon: 'mic', title: 'סוכנים קוליים וצ׳אטבוטים', desc: 'מענה, סינון, איסוף מידע והעברת פניות — בכל ערוץ, 24/7.' },
    { icon: 'monitor', title: 'מוצרים דיגיטליים', desc: 'דשבורדים, פלטפורמות SaaS ומערכות ניהול — בנויות סביב הצורך.' },
    { icon: 'wrench', title: 'רכב ושירות', desc: 'ניסיון מעשי מעולם הרכב והשירות — מתורגם למערכות דיגיטליות.' },
    { icon: 'compass', title: 'ליווי ואסטרטגיית AI', desc: 'מיפוי צרכים, בניית תוכנית עבודה והטמעה — מהשאלה הראשונה ועד מערכת חיה.' },
  ];
  const chips = ['צ׳אטבוטים', 'סוכנים קוליים', 'אוטומציות', 'אתרים', 'CRM', 'SaaS', 'Garage-OS', 'Nadlan-OS'];

  return (
    <section id="services" style={{ padding: 'clamp(60px, 8vw, 100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeSlide><div className="kb-tag" style={{
          background: accentAlpha(accent, 0.1), borderColor: accentAlpha(accent, 0.22),
        }}>תחומי עשייה</div></FadeSlide>
        <FadeSlide delay={0.1}><h2 className="kb-heading">מה אני בונה<br />ואיך אני עובד</h2></FadeSlide>
        <FadeSlide delay={0.18}><p className="kb-sub">קודם להבין את הבעיה, אחר כך לתכנן את המערכת, ורק אז לבחור את הכלים.</p></FadeSlide>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: 18, marginTop: 48,
        }}>
          {areas.map((a, i) => (
            <FadeSlide key={a.title} delay={0.08 + i * 0.07}>
              <div className={`kb-card kb-card-${cardStyle}`} style={{ display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: accentAlpha(accent, 0.1), color: accent,
                  display: 'grid', placeItems: 'center',
                }}>
                  <LIcon name={a.icon} size={22} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600 }}>{a.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.5)' }}>{a.desc}</p>
              </div>
            </FadeSlide>
          ))}
        </div>

        <FadeSlide delay={0.55}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32, justifyContent: 'center' }}>
            {chips.map(c => <span key={c} className="kb-chip">{c}</span>)}
          </div>
        </FadeSlide>
      </div>
    </section>
  );
}

Object.assign(window, { LIcon, SiteNav, HeroSection, PositioningSection, DrivesSection, AreasSection });
