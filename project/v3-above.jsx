// v3-above.jsx — Nav, Hero, Statement, Bento Grid, Marquee
const { useState, useEffect, useRef } = React;

/* ════════════════ NAVIGATION ════════════════ */
function SiteNav({ accent, dark, onToggleTheme }) {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const s = scrollY > 40;
  const links = [
    { label: 'מה אני בונה', href: '#bento' },
    { label: 'פרויקטים', href: '#projects' },
    { label: 'אודות', href: '#about' },
    { label: 'יצירת קשר', href: 'https://barak-ai.co.il/contact', ext: true },
  ];
  return (
    <nav className="kb-nav" style={{
      background: s ? (dark ? 'rgba(6,6,6,0.8)' : 'rgba(247,248,255,0.82)') : 'transparent',
      backdropFilter: s ? 'blur(20px) saturate(1.4)' : 'none',
      WebkitBackdropFilter: s ? 'blur(20px) saturate(1.4)' : 'none',
      borderBottom: s ? `1px solid ${dark ? 'rgba(255,255,255,0.04)' : 'rgba(15,17,64,0.06)'}` : '1px solid transparent',
    }}>
      <a href="#hero" className="kb-nav-logo">
        <span style={{ background: `linear-gradient(135deg, ${dark ? '#fff' : '#0F1140'} 40%, ${accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800, fontSize: 17, letterSpacing: '0.04em', textTransform: 'uppercase' }}>KOBIBARAK.COM</span>
      </a>
      <div className="kb-desktop-only" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {links.map(l => <a key={l.href} href={l.href} className="kb-nav-link" {...(l.ext ? {target:'_blank', rel:'noopener'} : {})}>{l.label}</a>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button className="kb-theme-toggle" onClick={onToggleTheme} aria-label="מצב תצוגה">
          {dark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <MagneticWrap strength={0.2}>
        <a href="https://barak-ai.co.il/contact" target="_blank" rel="noopener" className="kb-desktop-only kb-pill" style={{ background: accent, boxShadow: `0 0 22px ${accentAlpha(accent, 0.35)}` }}>בואו נדבר</a>
        </MagneticWrap>
        <button className="kb-mobile-only" onClick={() => setOpen(!open)} aria-label="תפריט"
          style={{ background: 'none', border: 'none', color: dark ? 'white' : '#0F1140', cursor: 'pointer', padding: 6 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
          </svg>
        </button>
      </div>
      {open && <div className="kb-mobile-overlay" style={{ background: dark ? 'rgba(5,5,5,0.97)' : 'rgba(247,248,255,0.97)' }}>
        {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="kb-mobile-link" style={{ color: dark ? 'white' : '#0F1140' }} {...(l.ext ? {target:'_blank', rel:'noopener'} : {})}>{l.label}</a>)}
        <a href="https://barak-ai.co.il/contact" target="_blank" rel="noopener" className="kb-pill" style={{ background: accent, marginTop: 12 }}>בואו נדבר</a>
      </div>}
    </nav>
  );
}

/* ════════════════ HERO ════════════════ */
function HeroSection({ accent, dark }) {
  const scrollY = useScrollY();
  const heroOpacity = Math.max(0, 1 - scrollY / 700);
  const fg = dark ? '#fff' : '#0F1140';
  const fg2 = dark ? 'rgba(255,255,255,0.7)' : 'rgba(15,17,64,0.65)';
  const fg3 = dark ? 'rgba(255,255,255,0.35)' : 'rgba(15,17,64,0.45)';
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '140px 24px 100px', overflow: 'hidden',
    }}>
      {dark && <AuroraBg accent={accent} />}
      {dark && <FloatingShapes accent={accent} />}
      {dark && <ConstellationCanvas color={accentAlpha(accent, 0.5)} lineColor={accentAlpha(accent, 0.35)} count={55} />}
      {!dark && <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${accentAlpha(accent, 0.08)}, transparent 70%)` }} />}
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: dark ? 0.02 : 0.03,
        backgroundImage: `radial-gradient(${dark ? 'rgba(255,255,255,0.5)' : 'rgba(15,17,64,0.3)'} 1px, transparent 1px)`, backgroundSize: '30px 30px',
        transform: `translateY(${scrollY * 0.06}px)` }} />

      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', opacity: heroOpacity, transform: `translateY(${scrollY * 0.08}px)` }}>
        {/* Eyebrow */}
        <FadeSlide delay={0}>
          <div className="kb-eyebrow" style={{ '--c': accent }}>
            <span className="kb-eyebrow-dot" style={{ background: accent }} />
            יזם · בונה מערכות AI · מוצרים דיגיטליים
          </div>
        </FadeSlide>

        {/* Name — massive stagger reveal */}
        <h1 className="kb-hero-name">
          <StaggerWords text="קובי ברק" delay={0.3} style={{
            background: `linear-gradient(135deg, ${fg} 30%, ${accentAlpha(accent, 0.7)} 80%, ${accentAlpha('#6FD3FF', 0.6)})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }} />
        </h1>
        {/* Glow behind name */}
        <div style={{ position: 'absolute', top: '32%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 'min(500px, 70vw)', height: 140, borderRadius: '50%',
          background: `radial-gradient(ellipse, ${accentAlpha(accent, dark ? 0.15 : 0.08)}, transparent 65%)`,
          filter: 'blur(40px)', pointerEvents: 'none', zIndex: -1, animation: 'glowPulse 4s ease-in-out infinite' }} />

        {/* Subtitle — stagger */}
        <div style={{ marginTop: 16 }}>
          <StaggerWords text="בונה את העתיד, מערכת אחרי מערכת."
            delay={0.7} style={{ fontSize: 'clamp(22px, 3.8vw, 44px)', fontWeight: 300, color: fg2 }} />
        </div>

        {/* Description */}
        <FadeSlide delay={1.1}>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 18px)', lineHeight: 1.7, color: fg3,
            maxWidth: 500, margin: '22px auto 0' }}>
            מתוך הבנה עמוקה של שטח, חשיבה מערכתית ובנייה שמייצרת תוצאות אמיתיות.
          </p>
        </FadeSlide>

        {/* CTAs */}
        <FadeSlide delay={1.3}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 44, flexWrap: 'wrap' }}>
            <MagneticWrap>
              <a href="#projects" className="kb-ghost">הכירו את העבודה שלי</a>
            </MagneticWrap>
            <MagneticWrap>
              <a href="https://barak-ai.co.il" target="_blank" rel="noopener" className="kb-pill"
                style={{ background: accent, boxShadow: `0 0 36px ${accentAlpha(accent, 0.4)}` }}>מעבר ל־Barak AI</a>
            </MagneticWrap>
          </div>
        </FadeSlide>

        {/* Scroll hint */}
        <div className="kb-scroll-hint"><div className="kb-scroll-line" /></div>
      </div>
    </section>
  );
}

/* ════════════════ STATEMENT ════════════════ */
function StatementSection({ accent }) {
  return (
    <section style={{ padding: 'clamp(100px, 14vw, 200px) 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
      <div style={{ maxWidth: 960 }}>
        <RevealText text="אני לא מגיע ל־AI מהצד של ההייפ. אני מגיע אליו מהצד של תהליכים, שירות, מערכות, אנשים ובעיות שצריך לפתור."
          style={{ fontSize: 'clamp(26px, 4.5vw, 50px)', fontWeight: 400, lineHeight: 1.55, textAlign: 'center' }} />
      </div>
    </section>
  );
}

/* ════════════════ BENTO GRID ════════════════ */
function BentoSection({ accent }) {
  const areas = [
    { icon: 'cpu', title: 'מערכות AI', desc: 'מידע, תהליכים, משתמשים — במערכת אחת שעובדת.', span: 'wide', color: accent },
    { icon: 'settings', title: 'אוטומציה', desc: 'חיבור בין הכלים שכבר יש.', span: 'normal', color: '#5B7BF7' },
    { icon: 'mic', title: 'סוכנים קוליים', desc: 'מענה 24/7 בכל ערוץ.', span: 'normal', color: '#6FD3FF' },
    { icon: 'monitor', title: 'מוצרים דיגיטליים', desc: 'דשבורדים, SaaS ומערכות ניהול.', span: 'normal', color: '#C04CE8' },
    { icon: 'wrench', title: 'רכב ושירות', desc: 'ניסיון מהשטח → מערכות דיגיטליות.', span: 'normal', color: '#1BB78A' },
    { icon: 'compass', title: 'ליווי ואסטרטגיה', desc: 'מיפוי צרכים עד מערכת חיה.', span: 'wide', color: '#6C3FE0' },
  ];

  return (
    <section id="bento" style={{ padding: 'clamp(60px, 8vw, 110px) 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeSlide>
          <div className="kb-eyebrow" style={{ '--c': accent }}>
            <span className="kb-eyebrow-dot" style={{ background: accent }} />
            תחומי עשייה
          </div>
        </FadeSlide>
        <FadeSlide delay={0.08}>
          <h2 className="kb-h2" style={{ marginTop: 10 }}>מה אני בונה</h2>
        </FadeSlide>
        <FadeSlide delay={0.14}>
          <p className="kb-sub" style={{ marginBottom: 48 }}>קודם להבין את הבעיה, אחר כך לתכנן, ורק אז — לבחור כלים.</p>
        </FadeSlide>

        <div className="bento-grid">
          {areas.map((a, i) => (
            <FadeSlide key={a.title} delay={0.04 + i * 0.06} style={{ gridColumn: a.span === 'wide' ? 'span 2' : 'span 1' }} className="bento-cell">
              <TiltCard className="bento-card" style={{ '--card-c': a.color, height: '100%' }}>
                {/* Top gradient line */}
                <div className="bento-glow" style={{ background: `linear-gradient(90deg, ${a.color}, ${accentAlpha(a.color, 0.15)})` }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, height: '100%', padding: 28, position: 'relative' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 14, flexShrink: 0,
                    background: accentAlpha(a.color, 0.1), color: a.color,
                    display: 'grid', placeItems: 'center',
                  }}><LIcon name={a.icon} size={22} /></div>
                  <h3 style={{ fontSize: 19, fontWeight: 600 }}>{a.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.4)' }}>{a.desc}</p>
                </div>
              </TiltCard>
            </FadeSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════ MARQUEE TICKER ════════════════ */
function MarqueeSection({ accent }) {
  const row1 = ['צ׳אטבוטים', 'סוכנים קוליים', 'אוטומציות', 'CRM', 'SaaS', 'Garage-OS', 'Nadlan-OS', 'מערכות AI'];
  const row2 = ['WhatsApp', 'דשבורדים', 'LLM', 'API', 'Voice AI', 'Analytics', 'Workflows', 'Integration'];
  return (
    <section style={{ padding: '56px 0', overflow: 'hidden', direction: 'ltr' }}>
      <FadeSlide>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'center' }}>
          <Marquee items={row1} speed={40} />
          <Marquee items={row2} speed={45} reverse />
        </div>
      </FadeSlide>
    </section>
  );
}

Object.assign(window, { SiteNav, HeroSection, StatementSection, BentoSection, MarqueeSection });
