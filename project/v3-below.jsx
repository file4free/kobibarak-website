// v3-below.jsx — Projects, Process, Stats+About, CTA, Footer

/* ════════════════ PROJECTS ════════════════ */
function ProjectsSection({ accent }) {
  const projects = [
    { name: 'Barak AI', desc: 'מערכות AI לעסקים — אוטומציות, סוכנים קוליים, צ׳אטבוטים ואתרים חכמים.', tags: ['AI', 'אוטומציות', 'SaaS'], link: 'https://barak-ai.co.il', color: '#4F1AD6', featured: true },
    { name: 'Garage-OS', desc: 'מערכת ניהול ייעודית לעולמות השירות והרכב.', tags: ['Vertical AI', 'מוסכים', 'שירות'], color: '#5B7BF7', link: 'https://garage-os.co.il' },
    { name: 'Nadlan-OS', desc: 'ניהול לידים, נכסים ותהליכי עבודה עבור אנשי נדל״ן.', tags: ['Vertical AI', 'נדל״ן', 'CRM'], color: '#6FD3FF', link: 'https://nadlan-os.co.il' },
    { name: 'MultiX Simulator', desc: 'סימולטור אינטראקטיבי לממשקי מולטימדיה בעולם הרכב.', tags: ['רכב', 'סימולציה', 'UX'], color: '#C04CE8', link: 'https://multix.barak-ai.co.il' },
    { name: 'Ale Zahav LIVE', desc: 'פלטפורמה לשידורים חיים ותוכן עבור הגיל השלישי.', tags: ['קהילה', 'וידאו', 'CMS'], color: '#1BB78A', link: 'https://live.ale-zahav.co.il' },
  ];

  return (
    <section id="projects" style={{ padding: 'clamp(60px,8vw,110px) 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeSlide><div className="kb-eyebrow" style={{ '--c': accent }}>
          <span className="kb-eyebrow-dot" style={{ background: accent }} />פרויקטים</div></FadeSlide>
        <FadeSlide delay={0.08}><h2 className="kb-h2">מה שבניתי.</h2></FadeSlide>
        <FadeSlide delay={0.14}><p className="kb-sub" style={{ marginBottom: 48 }}>בלי תבניות גנריות. בלי פתרונות מדף.</p></FadeSlide>

        {/* Featured project */}
        <FadeSlide delay={0.2}>
          <FeaturedProject p={projects[0]} />
        </FadeSlide>

        {/* Grid of remaining projects */}
        <div className="projects-grid" style={{ marginTop: 14 }}>
          {projects.slice(1).map((p, i) => (
            <FadeSlide key={p.name} delay={0.1 + i * 0.06}>
              <ProjectCard p={p} />
            </FadeSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ p }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={p.link} target="_blank" rel="noopener"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="featured-project" style={{
        '--pc': p.color,
        background: hov
          ? `linear-gradient(135deg, ${accentAlpha(p.color, 0.1)} 0%, ${accentAlpha(p.color, 0.03)} 100%)`
          : 'rgba(255,255,255,0.025)',
        borderColor: hov ? accentAlpha(p.color, 0.25) : 'rgba(255,255,255,0.06)',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? `0 24px 60px ${accentAlpha(p.color, 0.12)}` : 'none',
      }}>
      {/* Accent corner glow */}
      <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%',
        background: `radial-gradient(circle, ${accentAlpha(p.color, hov ? 0.12 : 0.05)}, transparent 70%)`,
        transition: 'background 0.4s', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div className="proj-badge" style={{ background: accentAlpha(p.color, 0.12), color: p.color }}>Featured</div>
          </div>
          <h3 style={{ fontSize: 28, fontWeight: 700, color: hov ? p.color : '#fff', transition: 'color 0.3s' }}>{p.name}</h3>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', marginTop: 8, lineHeight: 1.6 }}>{p.desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
            {p.tags.map(t => <span key={t} className="kb-chip" style={{ borderColor: hov ? accentAlpha(p.color, 0.2) : undefined }}>{t}</span>)}
          </div>
        </div>
        <div style={{
          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
          background: accentAlpha(p.color, hov ? 0.18 : 0.08), color: p.color,
          display: 'grid', placeItems: 'center', transition: 'all 0.3s',
          transform: hov ? 'scale(1.08)' : 'scale(1)',
        }}><LIcon name="arrow-up-right" size={24} /></div>
      </div>
    </a>
  );
}

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);
  const Wrap = p.link ? 'a' : 'div';
  const wrapProps = p.link ? { href: p.link, target: '_blank', rel: 'noopener' } : {};
  return (
    <Wrap {...wrapProps} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} className="project-card" style={{
      background: hov ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
      borderColor: hov ? accentAlpha(p.color, 0.22) : 'rgba(255,255,255,0.06)',
      transform: hov ? 'translateY(-4px)' : 'none',
      boxShadow: hov ? `0 16px 44px ${accentAlpha(p.color, 0.08)}` : 'none',
      display: 'block', textDecoration: 'none', color: 'inherit', cursor: p.link ? 'pointer' : 'default',
    }}>
      {/* Accent top line */}
      <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 2, borderRadius: 1,
        background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
        opacity: hov ? 0.6 : 0, transition: 'opacity 0.35s' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
        <h3 style={{ fontSize: 19, fontWeight: 700, color: hov ? p.color : '#fff', transition: 'color 0.3s' }}>{p.name}</h3>
        {p.link && <div style={{
          width: 30, height: 30, borderRadius: 8, flexShrink: 0,
          background: accentAlpha(p.color, hov ? 0.15 : 0.06), color: p.color,
          display: 'grid', placeItems: 'center', transition: 'all 0.3s',
        }}><LIcon name="arrow-up-right" size={14} /></div>}
      </div>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{p.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 14 }}>
        {p.tags.map(t => <span key={t} className="kb-chip" style={{ fontSize: 11, padding: '3px 10px' }}>{t}</span>)}
      </div>
    </Wrap>
  );
}

/* ════════════════ PROCESS ════════════════ */
function ProcessSection({ accent }) {
  const steps = [
    { icon: 'search', title: 'להבין את הבעיה', desc: 'ניתוח, מיפוי תהליכים, זיהוי צווארי בקבוק ומטרות.' },
    { icon: 'layers', title: 'לתכנן', desc: 'אדריכלות פתרון, ממשקים וזרימת מידע.' },
    { icon: 'wrench', title: 'לבנות ולהטמיע', desc: 'פיתוח, בדיקות, הדרכה — עם ליווי צמוד.' },
  ];
  const [lineRef, lineVis] = useInView();

  return (
    <section id="process" style={{ padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeSlide><div className="kb-eyebrow" style={{ '--c': accent }}>
          <span className="kb-eyebrow-dot" style={{ background: accent }} />תהליך</div></FadeSlide>
        <FadeSlide delay={0.08}><h2 className="kb-h2">קודם הבעיה, אחר כך המערכת.</h2></FadeSlide>

        <div ref={lineRef} style={{ position: 'relative', marginTop: 56 }}>
          {/* Connecting line (desktop only) */}
          <div className="process-line-wrap">
            <div className="process-line" style={{
              background: `linear-gradient(90deg, ${accent}, ${accentAlpha('#6FD3FF', 0.4)}, ${accent})`,
              transform: lineVis ? 'scaleX(1)' : 'scaleX(0)',
            }} />
          </div>
          <div className="process-grid">
            {steps.map((s, i) => (
              <FadeSlide key={s.title} delay={0.18 + i * 0.14}>
                <div style={{ textAlign: 'center' }}>
                  <div className="process-circle" style={{
                    background: `linear-gradient(135deg, ${accent}, ${accentAlpha(accent, 0.4)})`,
                    boxShadow: `0 0 28px ${accentAlpha(accent, 0.25)}, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}>{i + 1}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, margin: '18px 0 8px' }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.4)', maxWidth: 260, margin: '0 auto' }}>{s.desc}</p>
                </div>
              </FadeSlide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════ STATS + ABOUT ════════════════ */
function AboutSection({ accent }) {
  const stats = [
    { num: 5, suffix: '+', label: 'מוצרים עצמאיים' },
    { num: 100, suffix: '%', label: 'בנייה בהתאמה' },
    { num: 24, suffix: '/7', label: 'סוכנים שעובדים' },
  ];
  const values = [
    { n: '01', title: 'התאמה, לא תבנית', desc: 'כל מערכת נבנית סביב העסק הספציפי.' },
    { n: '02', title: 'טכנולוגיה בגובה העיניים', desc: 'בעברית פשוטה. בלי ז׳רגון מיותר.' },
    { n: '03', title: 'תוצאות מדידות', desc: 'לידים, חיסכון בזמן, מספרים.' },
  ];

  return (
    <section id="about" style={{ padding: 'clamp(60px,8vw,110px) 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeSlide><div className="kb-eyebrow" style={{ '--c': accent }}>
          <span className="kb-eyebrow-dot" style={{ background: accent }} />אודות</div></FadeSlide>
        <FadeSlide delay={0.08}><h2 className="kb-h2">הרקע שלי מהשטח,<br />הבנייה מהראש.</h2></FadeSlide>
        <FadeSlide delay={0.14}>
          <p className="kb-sub">מעולמות השירות, הרכב, הדיגיטל והטכנולוגיה — מקומות שבהם תהליך לא טוב הופך מהר לבעיה עסקית.</p>
        </FadeSlide>

        {/* Stats */}
        <div className="stats-row">
          {stats.map((s, i) => (
            <FadeSlide key={s.label} delay={0.1 + i * 0.1}>
              <div className="stat-item">
                <div className="stat-num" style={{
                  background: `linear-gradient(135deg, ${accent}, ${accentAlpha('#6FD3FF', 0.6)})`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}><Counter to={s.num} suffix={s.suffix} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            </FadeSlide>
          ))}
        </div>

        {/* Value cards */}
        <div className="values-grid">
          {values.map((v, i) => (
            <FadeSlide key={v.n} delay={0.1 + i * 0.08}>
              <TiltCard className="value-card" intensity={4}>
                <div style={{ padding: 28 }}>
                  <div className="value-num" style={{
                    background: `linear-gradient(135deg, ${accent}, ${accentAlpha(accent, 0.12)})`,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>{v.n}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, margin: '14px 0 8px' }}>{v.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.4)' }}>{v.desc}</p>
                </div>
              </TiltCard>
            </FadeSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════ CTA ════════════════ */
function CTASection({ accent }) {
  return (
    <section id="contact" style={{ padding: 'clamp(60px,8vw,110px) 24px' }}>
      <FadeSlide>
        <div className="cta-box" style={{
          background: `linear-gradient(135deg, ${accentAlpha(accent, 0.1)}, ${accentAlpha(accent, 0.02)})`,
          borderColor: accentAlpha(accent, 0.12),
        }}>
          {/* Glow orbs */}
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '45%', height: '160%',
            background: `radial-gradient(ellipse, ${accentAlpha(accent, 0.08)}, transparent 70%)`,
            animation: 'ctaPulse 7s ease-in-out infinite', pointerEvents: 'none', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '35%', height: '140%',
            background: `radial-gradient(ellipse, ${accentAlpha('#6FD3FF', 0.04)}, transparent 70%)`,
            animation: 'ctaPulse 9s ease-in-out infinite reverse', pointerEvents: 'none', borderRadius: '50%' }} />

          <div style={{ position: 'relative', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700 }}>
              מחפשים פתרון <span style={{ color: accent }}>AI</span>?
            </h2>
            <p style={{ fontSize: 'clamp(14px, 1.6vw, 17px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.45)',
              maxWidth: 500, margin: '16px auto 40px' }}>
              את העבודה המסחרית שלי אני מרכז דרך Barak AI — שם אפשר לראות שירותים, פתרונות ודרכי התקשרות.
            </p>
            <MagneticWrap strength={0.18}>
              <a href="https://barak-ai.co.il" target="_blank" rel="noopener" className="kb-pill"
                style={{ background: accent, boxShadow: `0 0 24px ${accentAlpha(accent, 0.3)}`, whiteSpace: 'nowrap' }}>מעבר ל־Barak AI</a>
            </MagneticWrap>
          </div>
        </div>
      </FadeSlide>
    </section>
  );
}

/* ════════════════ FOOTER ════════════════ */
function SiteFooter({ accent }) {
  const ext = [
    { label: 'Barak-AI.co.il', href: 'https://barak-ai.co.il' },
    { label: 'SkyMarketing.co.il', href: 'https://skymarketing.co.il' },
    { label: 'WhatsApp', href: 'https://wa.me/972505552007' },
  ];
  const nav = [
    { label: 'מה אני בונה', href: '#bento' },
    { label: 'פרויקטים', href: '#projects' },
    { label: 'אודות', href: '#about' },
    { label: 'יצירת קשר', href: 'https://barak-ai.co.il/contact', ext: true },
  ];
  return (
    <footer className="kb-footer">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="footer-grid">
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
              <span style={{ background: `linear-gradient(135deg, var(--kb-fg, #fff) 40%, ${accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>קובי ברק</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, maxWidth: 300 }}>
              יזם, בונה מערכות AI ומוצרים דיגיטליים.
            </p>
          </div>
          <div>
            <div className="footer-heading">לינקים</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ext.map(l => <a key={l.label} href={l.href} target="_blank" rel="noopener" className="footer-link">{l.label}</a>)}
            </div>
          </div>
          <div>
            <div className="footer-heading">ניווט</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {nav.map(l => <a key={l.label} href={l.href} className="footer-link" {...(l.ext ? {target:'_blank', rel:'noopener'} : {})}>{l.label}</a>)}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 קובי ברק</span>
          <span style={{ letterSpacing: '0.12em', color: 'rgba(255,255,255,0.12)' }}>KobiBarak.com</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { ProjectsSection, FeaturedProject, ProjectCard, ProcessSection, AboutSection, CTASection, SiteFooter });
