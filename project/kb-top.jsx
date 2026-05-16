// kb-top.jsx — Nav, Hero, Positioning, Drives, Areas (v2 premium)
const { useState, useEffect, useRef } = React;

/* Lucide icon bridge */
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

/* ═══════════════ NAVIGATION ═══════════════ */
function SiteNav({ accent }) {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const s = scrollY > 40;
  const links = [
    { label: 'בית', href: '#hero' }, { label: 'אודות', href: '#about' },
    { label: 'פרויקטים', href: '#projects' }, { label: 'יצירת קשר', href: '#contact' },
  ];
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 64,
      padding: '0 clamp(20px,4vw,48px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: s ? 'rgba(8,8,8,0.82)' : 'transparent',
      backdropFilter: s ? 'blur(20px) saturate(1.4)' : 'none',
      WebkitBackdropFilter: s ? 'blur(20px) saturate(1.4)' : 'none',
      borderBottom: s ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(.22,1,.36,1)',
    }}>
      <a href="#hero" style={{ fontWeight: 700, fontSize: 19, color: '#fff', textDecoration: 'none', letterSpacing: '-0.01em' }}>
        <span style={{ background: `linear-gradient(135deg, #fff 40%, ${accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>קובי ברק</span>
      </a>
      <div className="kb-desktop-nav" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {links.map(l => <a key={l.href} href={l.href} className="kb-nav-link">{l.label}</a>)}
      </div>
      <a href="#contact" className="kb-desktop-nav kb-cta-pill" style={{
        background: accent, boxShadow: `0 0 24px ${accentAlpha(accent, 0.4)}`,
      }}>בואו נדבר</a>
      <button className="kb-mobile-btn" onClick={() => setOpen(!open)} aria-label="תפריט"
        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 6 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
          {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> :
            <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}
        </svg>
      </button>
      {open && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
          background: 'rgba(6,6,6,0.97)', backdropFilter: 'blur(24px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36, zIndex: 99,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: 'white', fontSize: 28, fontWeight: 600, textDecoration: 'none' }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="kb-cta-pill" style={{ background: accent, marginTop: 8 }}>בואו נדבר</a>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════ HERO ═══════════════ */
function HeroSection({ accent, showParticles }) {
  const scrollY = useScrollY();
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '130px 24px 100px', overflow: 'hidden',
    }}>
      {/* Aurora gradient */}
      <AuroraBg accent={accent} />
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.025,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px',
        transform: `translateY(${scrollY * 0.08}px)`,
      }} />
      {/* Constellation particles */}
      {showParticles && <ConstellationCanvas color={accentAlpha(accent, 0.55)} lineColor={accentAlpha(accent, 0.4)} count={50} />}

      <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
        <FadeSlide delay={0}>
          <div className="kb-tag-glow" style={{
            '--tag-c': accent,
            background: accentAlpha(accent, 0.08), borderColor: accentAlpha(accent, 0.2),
          }}>יזם · בונה מערכות AI · מוצרים דיגיטליים</div>
        </FadeSlide>

        <FadeSlide delay={0.14}>
          <h1 className="kb-hero-name">
            <span className="kb-shimmer" style={{
              '--shimmer-c': accentAlpha(accent, 0.6),
            }}>קובי ברק</span>
          </h1>
          {/* Glow behind name */}
          <div style={{
            position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 'min(400px, 60vw)', height: 100, borderRadius: '50%',
            background: `radial-gradient(ellipse, ${accentAlpha(accent, 0.2)}, transparent 70%)`,
            filter: 'blur(30px)', pointerEvents: 'none', zIndex: -1,
          }} />
        </FadeSlide>

        <FadeSlide delay={0.26}>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 400,
            lineHeight: 1.25, marginTop: 12, color: 'rgba(255,255,255,0.75)',
          }}>יזם, בונה מערכות <span style={{ color: accent, fontWeight: 500 }}>AI</span> ומוצרים דיגיטליים.</h2>
        </FadeSlide>

        <FadeSlide delay={0.38}>
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 19px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.42)',
            maxWidth: 540, margin: '20px auto 0',
          }}>לא מתוך טרנד. מתוך צורך אמיתי, תהליך ברור ובנייה שמחזיקה מים גם אחרי הדמו.</p>
        </FadeSlide>

        <FadeSlide delay={0.5}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
            <a href="#projects" className="kb-btn-ghost">הכירו את העבודה שלי</a>
            <a href="https://barak-ai.co.il" target="_blank" rel="noopener"
              className="kb-cta-pill" style={{ background: accent, boxShadow: `0 0 32px ${accentAlpha(accent, 0.4)}` }}>
              מעבר ל־Barak AI
            </a>
          </div>
        </FadeSlide>

        {/* Scroll indicator */}
        <div className="kb-scroll-hint" style={{
          position: 'absolute', bottom: -70, left: '50%', transform: 'translateX(-50%)',
        }}>
          <div className="kb-scroll-line" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ POSITIONING STATEMENT ═══════════════ */
function PositioningSection({ accent }) {
  return (
    <section style={{
      padding: 'clamp(80px,12vw,160px) 24px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '45vh',
    }}>
      <div style={{ maxWidth: 920 }}>
        <RevealText text="אני לא מגיע ל־AI מהצד של ההייפ. אני מגיע אליו מהצד של תהליכים, שירות, מערכות, אנשים ובעיות שצריך לפתור." />
        <FadeSlide delay={0.2}>
          <div style={{ textAlign: 'center' }}>
            <a href="#about" className="kb-subtle-link" style={{ '--link-c': accent }}>קצת עליי ↓</a>
          </div>
        </FadeSlide>
      </div>
    </section>
  );
}

/* ═══════════════ WHAT DRIVES ME ═══════════════ */
function DrivesSection({ accent }) {
  return (
    <section style={{ padding: 'clamp(50px,7vw,90px) 24px', maxWidth: 920, margin: '0 auto' }}>
      <FadeSlide><div className="kb-tag-glow" style={{
        '--tag-c': accent, background: accentAlpha(accent, 0.08), borderColor: accentAlpha(accent, 0.2),
      }}>גישה</div></FadeSlide>
      <FadeSlide delay={0.1}><h2 className="kb-heading" style={{ marginTop: 12 }}>פחות רעש.</h2></FadeSlide>
      <FadeSlide delay={0.2}>
        <p style={{ fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', marginTop: 20, maxWidth: 700 }}>
          יותר מערכות שעובדות. אני מאמין ש־AI טוב לא צריך להחליף שיקול דעת אנושי, אלא לעזור לעסק להגיב מהר יותר, להבין טוב יותר ולחסוך עבודה ידנית.
        </p>
      </FadeSlide>
      <Divider accent={accent} />
    </section>
  );
}

/* ═══════════════ AREAS OF WORK ═══════════════ */
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
    <section id="services" style={{ padding: 'clamp(50px,7vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeSlide><div className="kb-tag-glow" style={{
          '--tag-c': accent, background: accentAlpha(accent, 0.08), borderColor: accentAlpha(accent, 0.2),
        }}>תחומי עשייה</div></FadeSlide>
        <FadeSlide delay={0.1}><h2 className="kb-heading">מה אני בונה<br/>ואיך אני עובד</h2></FadeSlide>
        <FadeSlide delay={0.16}><p className="kb-sub">קודם להבין את הבעיה, אחר כך לתכנן את המערכת, ורק אז לבחור את הכלים.</p></FadeSlide>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,340px),1fr))',
          gap: 16, marginTop: 48,
        }}>
          {areas.map((a, i) => (
            <FadeSlide key={a.title} delay={0.06 + i * 0.06}>
              <div className={`kb-card kb-card-${cardStyle} kb-card-fancy`} style={{ display: 'flex', flexDirection: 'column', gap: 14, height: '100%', '--fancy-c': accent }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: accentAlpha(accent, 0.08), color: accent,
                  display: 'grid', placeItems: 'center',
                  boxShadow: `0 0 20px ${accentAlpha(accent, 0.08)}`,
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}>
                  <LIcon name={a.icon} size={22} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600 }}>{a.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)' }}>{a.desc}</p>
              </div>
            </FadeSlide>
          ))}
        </div>

        <FadeSlide delay={0.45}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32, justifyContent: 'center' }}>
            {chips.map(c => <span key={c} className="kb-chip">{c}</span>)}
          </div>
        </FadeSlide>
      </div>
    </section>
  );
}

Object.assign(window, { LIcon, SiteNav, HeroSection, PositioningSection, DrivesSection, AreasSection });
