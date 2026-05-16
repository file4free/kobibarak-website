// kb-lower.jsx — Process, Projects, About, CTA, Footer

/* ---------- Process ---------- */
function ProcessSection({ accent }) {
  const steps = [
    { icon: 'search', title: 'להבין את הבעיה', desc: 'ניתוח המצב הקיים, מיפוי תהליכים, זיהוי צווארי בקבוק והגדרת מטרות ברורות.' },
    { icon: 'layers', title: 'לתכנן את המערכת', desc: 'אדריכלות פתרון, בחירת טכנולוגיות, תכנון ממשקים וזרימת מידע.' },
    { icon: 'wrench', title: 'לבנות ולהטמיע', desc: 'פיתוח, בדיקות, הדרכה והשקה — עם ליווי צמוד עד שהמערכת רצה חלק.' },
  ];

  return (
    <section id="process" style={{ padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeSlide><div className="kb-tag" style={{
          background: accentAlpha(accent, 0.1), borderColor: accentAlpha(accent, 0.22),
        }}>איך אני עובד</div></FadeSlide>
        <FadeSlide delay={0.1}><h2 className="kb-heading">קודם הבעיה, אחר כך המערכת.</h2></FadeSlide>
        <FadeSlide delay={0.18}><p className="kb-sub">הגישה שלי מחברת בין הבנה עמוקה של שטח לבין בנייה טכנולוגית פרקטית.</p></FadeSlide>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,300px),1fr))',
          gap: 18, marginTop: 48,
        }}>
          {steps.map((s, i) => (
            <FadeSlide key={s.title} delay={0.12 + i * 0.1}>
              <div className="kb-card kb-card-glass" style={{ textAlign: 'center', padding: 32, height: '100%' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: accentAlpha(accent, 0.1), color: accent,
                  display: 'grid', placeItems: 'center', margin: '0 auto 16px',
                }}>
                  <LIcon name={s.icon} size={24} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: accent, marginBottom: 8, letterSpacing: '0.04em' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
              </div>
            </FadeSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function ProjectsSection({ accent }) {
  const projects = [
    { name: 'Barak AI', desc: 'מערכות AI לעסקים, אוטומציות, סוכנים קוליים ואתרים חכמים.', tags: ['AI', 'אוטומציות', 'סוכנים קוליים', 'צ׳אטבוטים', 'SaaS'], link: 'https://barak-ai.co.il' },
    { name: 'Garage-OS', desc: 'מערכת ייעודית לעולמות השירות והרכב.', tags: ['Vertical AI', 'מוסכים', 'ניהול שירות', 'רכב'] },
    { name: 'Nadlan-OS', desc: 'מערכת לניהול לידים, נכסים ותהליכי עבודה עבור אנשי נדל״ן.', tags: ['Vertical AI', 'נדל״ן', 'CRM', 'לידים'] },
    { name: 'MultiX Simulator', desc: 'סימולטור אינטראקטיבי לממשקי מולטימדיה וחוויות דיגיטליות בעולם הרכב.', tags: ['רכב', 'סימולציה', 'UX'] },
    { name: 'Ale Zahav LIVE', desc: 'פלטפורמה דיגיטלית לפעילות מקוונת, שידורים חיים ותוכן עבור הגיל השלישי.', tags: ['קהילה', 'וידאו', 'CMS', 'ניהול'] },
  ];

  return (
    <section id="projects" style={{ padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeSlide><div className="kb-tag" style={{
          background: accentAlpha(accent, 0.1), borderColor: accentAlpha(accent, 0.22),
        }}>פרויקטים</div></FadeSlide>
        <FadeSlide delay={0.1}><h2 className="kb-heading">מה שבניתי.</h2></FadeSlide>
        <FadeSlide delay={0.18}><p className="kb-sub">כל פרויקט נבנה בהתאמה מלאה. בלי תבניות גנריות, בלי פתרונות מדף.</p></FadeSlide>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 48 }}>
          {projects.map((p, i) => (
            <FadeSlide key={p.name} delay={0.08 + i * 0.06}>
              <div className="kb-card kb-card-glass kb-project-row">
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 21, fontWeight: 700 }}>{p.name}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginTop: 6, lineHeight: 1.55 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                    {p.tags.map(t => <span key={t} className="kb-chip">{t}</span>)}
                  </div>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener" className="kb-icon-link" style={{
                    background: accentAlpha(accent, 0.1), color: accent,
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = accentAlpha(accent, 0.2)}
                    onMouseLeave={e => e.currentTarget.style.background = accentAlpha(accent, 0.1)}
                  >
                    <LIcon name="external-link" size={18} />
                  </a>
                )}
              </div>
            </FadeSlide>
          ))}
        </div>

        <FadeSlide delay={0.5}>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <a href="/portfolio" className="kb-btn-outline" style={{ fontSize: 14, padding: '12px 26px' }}>לכל הפרויקטים</a>
          </div>
        </FadeSlide>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function AboutSection({ accent }) {
  const values = [
    { n: '01', title: 'התאמה, לא תבנית', desc: 'כל מערכת נבנית סביב העסק הספציפי. אין העתק-הדבק.' },
    { n: '02', title: 'טכנולוגיה בגובה העיניים', desc: 'אני מסביר בעברית פשוטה. בלי ז׳רגון מיותר, בלי באזוורדס.' },
    { n: '03', title: 'תוצאות מדידות', desc: 'לידים, חיסכון בזמן, שביעות רצון לקוחות. מספרים, לא הבטחות.' },
  ];

  return (
    <section id="about" style={{ padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeSlide><div className="kb-tag" style={{
          background: accentAlpha(accent, 0.1), borderColor: accentAlpha(accent, 0.22),
        }}>אודות</div></FadeSlide>
        <FadeSlide delay={0.1}><h2 className="kb-heading">הרקע שלי מהשטח, הבנייה מהראש.</h2></FadeSlide>
        <FadeSlide delay={0.2}>
          <p style={{
            fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.7,
            color: 'rgba(255,255,255,0.55)', marginTop: 20, maxWidth: 720,
          }}>
            הרקע שלי מגיע מעולמות השירות, הרכב, הדיגיטל והטכנולוגיה — מקומות שבהם תהליך לא טוב הופך מהר מאוד לבעיה עסקית אמיתית.
          </p>
        </FadeSlide>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,280px),1fr))',
          gap: 18, marginTop: 48,
        }}>
          {values.map((v, i) => (
            <FadeSlide key={v.n} delay={0.12 + i * 0.1}>
              <div className="kb-card kb-card-glass" style={{ padding: 28, height: '100%' }}>
                <div style={{
                  fontSize: 44, fontWeight: 800, lineHeight: 1,
                  color: accentAlpha(accent, 0.2), marginBottom: 16,
                }}>{v.n}</div>
                <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)' }}>{v.desc}</p>
              </div>
            </FadeSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTASection({ accent }) {
  return (
    <section id="contact" style={{ padding: 'clamp(60px,8vw,100px) 24px' }}>
      <FadeSlide>
        <div style={{
          maxWidth: 900, margin: '0 auto', textAlign: 'center',
          padding: 'clamp(40px,6vw,72px) clamp(24px,4vw,48px)', borderRadius: 28,
          background: `linear-gradient(135deg, ${accentAlpha(accent, 0.12)} 0%, ${accentAlpha(accent, 0.04)} 100%)`,
          border: `1px solid ${accentAlpha(accent, 0.18)}`,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative orbs */}
          <div style={{
            position: 'absolute', top: -70, left: -70, width: 220, height: 220, borderRadius: '50%',
            background: `radial-gradient(circle, ${accentAlpha(accent, 0.1)}, transparent 70%)`, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: -50, right: -50, width: 170, height: 170, borderRadius: '50%',
            background: `radial-gradient(circle, ${accentAlpha(accent, 0.08)}, transparent 70%)`, pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{
              fontSize: 'clamp(26px,4vw,42px)', fontWeight: 600, marginBottom: 16,
            }}>מחפשים פתרון AI?</h2>
            <p style={{
              fontSize: 'clamp(15px,2vw,18px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.6)',
              maxWidth: 560, margin: '0 auto 34px',
            }}>
              את העבודה המסחרית שלי אני מרכז דרך Barak AI — שם אפשר לראות שירותים, פתרונות ודרכי התקשרות.
            </p>
            <a href="https://barak-ai.co.il" target="_blank" rel="noopener"
              className="kb-btn-primary" style={{ background: accent, boxShadow: `0 10px 28px ${accentAlpha(accent, 0.35)}` }}>
              מעבר ל־Barak AI
            </a>
          </div>
        </div>
      </FadeSlide>
    </section>
  );
}

/* ---------- Footer ---------- */
function SiteFooter() {
  const extLinks = [
    { label: 'Barak-AI.co.il', href: 'https://barak-ai.co.il' },
    { label: 'SkyMarketing.co.il', href: 'https://skymarketing.co.il' },
    { label: 'WhatsApp', href: 'https://wa.me/972505552007' },
  ];
  const navLinks = [
    { label: 'בית', href: '#hero' },
    { label: 'אודות', href: '#about' },
    { label: 'פרויקטים', href: '#projects' },
    { label: 'יצירת קשר', href: '#contact' },
  ];

  return (
    <footer style={{ padding: '64px 24px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="kb-footer-grid">
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>קובי ברק</div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 320 }}>
              יזם, בונה מערכות AI ומוצרים דיגיטליים.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 14, letterSpacing: '0.03em' }}>לינקים</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {extLinks.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener" className="kb-footer-link">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 14, letterSpacing: '0.03em' }}>ניווט</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(l => (
                <a key={l.label} href={l.href} className="kb-footer-link">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{
          marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.25)',
        }}>
          © 2026 קובי ברק. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { ProcessSection, ProjectsSection, AboutSection, CTASection, SiteFooter });
