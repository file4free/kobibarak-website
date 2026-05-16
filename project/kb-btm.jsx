// kb-btm.jsx — Process, Projects, About, CTA, Footer (v2 premium)

/* ═══════════════ PROCESS TIMELINE ═══════════════ */
function ProcessSection({ accent }) {
  const steps = [
    { icon: 'search', title: 'להבין את הבעיה', desc: 'ניתוח המצב הקיים, מיפוי תהליכים, זיהוי צווארי בקבוק והגדרת מטרות ברורות.' },
    { icon: 'layers', title: 'לתכנן את המערכת', desc: 'אדריכלות פתרון, בחירת טכנולוגיות, תכנון ממשקים וזרימת מידע.' },
    { icon: 'wrench', title: 'לבנות ולהטמיע', desc: 'פיתוח, בדיקות, הדרכה והשקה — עם ליווי צמוד עד שהמערכת רצה חלק.' },
  ];
  const [ref, vis] = useInView();

  return (
    <section id="process" style={{ padding: 'clamp(60px,8vw,110px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeSlide><div className="kb-tag-glow" style={{
          '--tag-c': accent, background: accentAlpha(accent, 0.08), borderColor: accentAlpha(accent, 0.2),
        }}>איך אני עובד</div></FadeSlide>
        <FadeSlide delay={0.1}><h2 className="kb-heading">קודם הבעיה, אחר כך המערכת.</h2></FadeSlide>
        <FadeSlide delay={0.16}><p className="kb-sub">הגישה שלי מחברת בין הבנה עמוקה של שטח לבין בנייה טכנולוגית פרקטית.</p></FadeSlide>

        <div ref={ref} style={{ position: 'relative', marginTop: 56 }}>
          {/* Connecting line */}
          <div className="kb-timeline-hide" style={{
            position: 'absolute', top: 30, right: 'calc(16.67% + 4px)', left: 'calc(16.67% + 4px)',
            height: 2, borderRadius: 1, overflow: 'hidden', zIndex: 0,
          }}>
            <div style={{
              height: '100%',
              background: `linear-gradient(90deg, ${accent}, ${accentAlpha('#6FD3FF', 0.5)}, ${accent})`,
              transform: vis ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'right', transition: 'transform 1.2s cubic-bezier(.22,1,.36,1) 0.3s',
            }} />
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,260px),1fr))',
            gap: 24, position: 'relative', zIndex: 1,
          }}>
            {steps.map((s, i) => (
              <FadeSlide key={s.title} delay={0.2 + i * 0.14}>
                <div style={{ textAlign: 'center' }}>
                  {/* Step circle */}
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%', margin: '0 auto 22px',
                    background: `linear-gradient(135deg, ${accent}, ${accentAlpha(accent, 0.5)})`,
                    display: 'grid', placeItems: 'center',
                    fontSize: 20, fontWeight: 800, color: '#fff',
                    boxShadow: `0 0 32px ${accentAlpha(accent, 0.3)}, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}>{i + 1}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)', maxWidth: 280, margin: '0 auto' }}>{s.desc}</p>
                </div>
              </FadeSlide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ PROJECTS ═══════════════ */
function ProjectsSection({ accent }) {
  const projects = [
    { name: 'Barak AI', desc: 'מערכות AI לעסקים, אוטומציות, סוכנים קוליים ואתרים חכמים.', tags: ['AI', 'אוטומציות', 'סוכנים קוליים', 'SaaS'], link: 'https://barak-ai.co.il', color: '#4F1AD6' },
    { name: 'Garage-OS', desc: 'מערכת ייעודית לעולמות השירות והרכב.', tags: ['Vertical AI', 'מוסכים', 'ניהול שירות'], color: '#5B7BF7' },
    { name: 'Nadlan-OS', desc: 'מערכת לניהול לידים, נכסים ותהליכי עבודה עבור אנשי נדל״ן.', tags: ['Vertical AI', 'נדל״ן', 'CRM'], color: '#6FD3FF' },
    { name: 'MultiX Simulator', desc: 'סימולטור אינטראקטיבי לממשקי מולטימדיה וחוויות דיגיטליות בעולם הרכב.', tags: ['רכב', 'סימולציה', 'UX'], color: '#C04CE8' },
    { name: 'Ale Zahav LIVE', desc: 'פלטפורמה דיגיטלית לפעילות מקוונת, שידורים חיים ותוכן עבור הגיל השלישי.', tags: ['קהילה', 'וידאו', 'CMS'], color: '#1BB78A' },
  ];

  return (
    <section id="projects" style={{ padding: 'clamp(60px,8vw,110px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeSlide><div className="kb-tag-glow" style={{
          '--tag-c': accent, background: accentAlpha(accent, 0.08), borderColor: accentAlpha(accent, 0.2),
        }}>פרויקטים</div></FadeSlide>
        <FadeSlide delay={0.1}><h2 className="kb-heading">מה שבניתי.</h2></FadeSlide>
        <FadeSlide delay={0.16}><p className="kb-sub">כל פרויקט נבנה בהתאמה מלאה. בלי תבניות גנריות, בלי פתרונות מדף.</p></FadeSlide>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 48 }}>
          {projects.map((p, i) => (
            <FadeSlide key={p.name} delay={0.06 + i * 0.06}>
              <ProjectCard p={p} accent={accent} />
            </FadeSlide>
          ))}
        </div>

        <FadeSlide delay={0.45}>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="/portfolio" className="kb-btn-ghost" style={{ fontSize: 14 }}>לכל הפרויקטים</a>
          </div>
        </FadeSlide>
      </div>
    </section>
  );
}

function ProjectCard({ p, accent }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="kb-project-row" style={{
        background: hov ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hov ? accentAlpha(p.color, 0.25) : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 20, padding: '24px 28px',
        transition: 'all 0.35s cubic-bezier(.22,1,.36,1)',
        transform: hov ? 'translateY(-3px)' : 'none',
        boxShadow: hov ? `0 16px 48px ${accentAlpha(p.color, 0.1)}` : 'none',
        position: 'relative', overflow: 'hidden',
      }}>
      {/* Accent stripe */}
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: 3,
        background: `linear-gradient(180deg, ${p.color}, ${accentAlpha(p.color, 0.2)})`,
        opacity: hov ? 1 : 0.4, transition: 'opacity 0.3s',
      }} />
      <div style={{ flex: 1, position: 'relative' }}>
        <h3 style={{ fontSize: 21, fontWeight: 700, color: hov ? p.color : '#fff', transition: 'color 0.3s' }}>{p.name}</h3>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginTop: 6, lineHeight: 1.55 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
          {p.tags.map(t => <span key={t} className="kb-chip" style={{
            borderColor: hov ? accentAlpha(p.color, 0.2) : undefined,
          }}>{t}</span>)}
        </div>
      </div>
      {p.link && (
        <a href={p.link} target="_blank" rel="noopener" style={{
          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
          background: accentAlpha(p.color, hov ? 0.15 : 0.08), color: p.color,
          display: 'grid', placeItems: 'center', transition: 'all 0.3s',
        }}><LIcon name="arrow-up-right" size={18} /></a>
      )}
    </div>
  );
}

/* ═══════════════ ABOUT ═══════════════ */
function AboutSection({ accent }) {
  const values = [
    { n: '01', title: 'התאמה, לא תבנית', desc: 'כל מערכת נבנית סביב העסק הספציפי. אין העתק-הדבק.' },
    { n: '02', title: 'טכנולוגיה בגובה העיניים', desc: 'אני מסביר בעברית פשוטה. בלי ז׳רגון מיותר, בלי באזוורדס.' },
    { n: '03', title: 'תוצאות מדידות', desc: 'לידים, חיסכון בזמן, שביעות רצון לקוחות. מספרים, לא הבטחות.' },
  ];

  return (
    <section id="about" style={{ padding: 'clamp(60px,8vw,110px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeSlide><div className="kb-tag-glow" style={{
          '--tag-c': accent, background: accentAlpha(accent, 0.08), borderColor: accentAlpha(accent, 0.2),
        }}>אודות</div></FadeSlide>
        <FadeSlide delay={0.1}><h2 className="kb-heading">הרקע שלי מהשטח,<br/>הבנייה מהראש.</h2></FadeSlide>
        <FadeSlide delay={0.2}>
          <p style={{
            fontSize: 'clamp(15px,1.8vw,19px)', lineHeight: 1.75,
            color: 'rgba(255,255,255,0.48)', marginTop: 20, maxWidth: 720,
          }}>
            הרקע שלי מגיע מעולמות השירות, הרכב, הדיגיטל והטכנולוגיה — מקומות שבהם תהליך לא טוב הופך מהר מאוד לבעיה עסקית אמיתית.
          </p>
        </FadeSlide>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,280px),1fr))',
          gap: 16, marginTop: 48,
        }}>
          {values.map((v, i) => (
            <FadeSlide key={v.n} delay={0.12 + i * 0.1}>
              <div className="kb-card kb-card-glass kb-card-fancy" style={{ padding: 28, height: '100%', '--fancy-c': accent }}>
                <div style={{
                  fontSize: 48, fontWeight: 800, lineHeight: 1, marginBottom: 18,
                  background: `linear-gradient(135deg, ${accent}, ${accentAlpha(accent, 0.15)})`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>{v.n}</div>
                <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)' }}>{v.desc}</p>
              </div>
            </FadeSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ CTA ═══════════════ */
function CTASection({ accent }) {
  return (
    <section id="contact" style={{ padding: 'clamp(60px,8vw,110px) 24px' }}>
      <FadeSlide>
        <div style={{
          maxWidth: 920, margin: '0 auto', textAlign: 'center',
          padding: 'clamp(44px,6vw,80px) clamp(24px,4vw,56px)', borderRadius: 28,
          background: `linear-gradient(135deg, ${accentAlpha(accent, 0.1)} 0%, ${accentAlpha(accent, 0.03)} 100%)`,
          border: `1px solid ${accentAlpha(accent, 0.15)}`,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Animated gradient orbs */}
          <div className="aurora-b" style={{
            width: '50%', height: '140%', top: '-20%', left: '-10%',
            background: `radial-gradient(ellipse, ${accentAlpha(accent, 0.08)}, transparent 70%)`,
            animation: 'ctaPulse 6s ease-in-out infinite',
          }} />
          <div className="aurora-b" style={{
            width: '40%', height: '120%', bottom: '-10%', right: '-5%',
            background: `radial-gradient(ellipse, ${accentAlpha('#6FD3FF', 0.05)}, transparent 70%)`,
            animation: 'ctaPulse 8s ease-in-out infinite reverse',
          }} />

          <div style={{ position: 'relative' }}>
            <h2 style={{
              fontSize: 'clamp(26px,4vw,44px)', fontWeight: 600, marginBottom: 16,
            }}>מחפשים פתרון <span style={{ color: accent }}>AI</span>?</h2>
            <p style={{
              fontSize: 'clamp(14px,1.8vw,18px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)',
              maxWidth: 540, margin: '0 auto 36px',
            }}>
              את העבודה המסחרית שלי אני מרכז דרך Barak AI — שם אפשר לראות שירותים, פתרונות ודרכי התקשרות.
            </p>
            <a href="https://barak-ai.co.il" target="_blank" rel="noopener"
              className="kb-cta-pill" style={{
                background: accent,
                boxShadow: `0 0 40px ${accentAlpha(accent, 0.35)}`,
              }}>מעבר ל־Barak AI</a>
          </div>
        </div>
      </FadeSlide>
    </section>
  );
}

/* ═══════════════ FOOTER ═══════════════ */
function SiteFooter({ accent }) {
  const ext = [
    { label: 'Barak-AI.co.il', href: 'https://barak-ai.co.il' },
    { label: 'SkyMarketing.co.il', href: 'https://skymarketing.co.il' },
    { label: 'WhatsApp', href: 'https://wa.me/972505552007' },
  ];
  const nav = [
    { label: 'בית', href: '#hero' }, { label: 'אודות', href: '#about' },
    { label: 'פרויקטים', href: '#projects' }, { label: 'יצירת קשר', href: '#contact' },
  ];
  return (
    <footer style={{ padding: '64px 24px 28px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="kb-footer-grid">
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
              <span style={{ background: `linear-gradient(135deg, #fff 40%, ${accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>קובי ברק</span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, maxWidth: 320 }}>
              יזם, בונה מערכות AI ומוצרים דיגיטליים.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginBottom: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>לינקים</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ext.map(l => <a key={l.label} href={l.href} target="_blank" rel="noopener" className="kb-footer-link">{l.label}</a>)}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginBottom: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>ניווט</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {nav.map(l => <a key={l.label} href={l.href} className="kb-footer-link">{l.label}</a>)}
            </div>
          </div>
        </div>
        <div style={{
          marginTop: 48, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.04)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
          fontSize: 12, color: 'rgba(255,255,255,0.2)',
        }}>
          <span>© 2026 קובי ברק. כל הזכויות שמורות.</span>
          <span style={{ letterSpacing: '0.12em', color: 'rgba(255,255,255,0.15)' }}>KobiBarak.com</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { ProcessSection, ProjectsSection, ProjectCard, AboutSection, CTASection, SiteFooter });
