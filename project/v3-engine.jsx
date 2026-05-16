// v3-engine.jsx — Premium effects, hooks, animation primitives
const { useState, useEffect, useRef, useCallback } = React;

function accentAlpha(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function useInView(opts = {}) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); if (opts.once !== false) obs.unobserve(el); } },
      { threshold: opts.threshold || 0.08, rootMargin: opts.rootMargin || '0px' });
    obs.observe(el); return () => obs.disconnect();
  }, []); return [ref, vis];
}

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => { const h = () => setY(window.scrollY); window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h); }, []);
  return y;
}

/* ─── FADE + SLIDE ─── */
function FadeSlide({ children, delay = 0, y = 24, style = {} }) {
  const [ref, vis] = useInView();
  return <div ref={ref} style={{ ...style, opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : `translateY(${y}px)`,
    transition: `opacity 0.82s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.82s cubic-bezier(.22,1,.36,1) ${delay}s` }}>{children}</div>;
}

/* ─── STAGGERED WORD REVEAL (hero entrance) ─── */
function StaggerWords({ text, delay = 0, style = {} }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay * 1000); return () => clearTimeout(t); }, [delay]);
  const words = text.split(' ');
  return <span style={{ display: 'inline' }}>
    {words.map((w, i) => (
      <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
        <span style={{ display: 'inline-block', ...style,
          transform: show ? 'translateY(0)' : 'translateY(115%)', opacity: show ? 1 : 0,
          filter: show ? 'blur(0)' : 'blur(5px)',
          transition: `transform 0.72s cubic-bezier(.22,1,.36,1) ${i * 0.09}s, opacity 0.6s ease ${i * 0.09}s, filter 0.6s ease ${i * 0.09}s`,
        }}>{w}&nbsp;</span>
      </span>
    ))}
  </span>;
}

/* ─── SCROLL REVEAL TEXT ─── */
function RevealText({ text, style = {} }) {
  const ref = useRef(null); const [progress, setProgress] = useState(0);
  const words = text.split(' ');
  useEffect(() => {
    const fn = () => { const el = ref.current; if (!el) return; const r = el.getBoundingClientRect(); const vh = window.innerHeight;
      setProgress(Math.max(0, Math.min(1, (vh * 0.75 - r.top) / (vh * 0.42)))); };
    window.addEventListener('scroll', fn, { passive: true }); fn(); return () => window.removeEventListener('scroll', fn);
  }, []);
  return <p ref={ref} style={{ ...style }}>
    {words.map((w, i) => { const wp = Math.max(0, Math.min(1, (progress * words.length - i) * 1.1));
      return <span key={i} style={{ display: 'inline-block', opacity: 0.04 + wp * 0.96,
        transform: `translateY(${(1 - wp) * 4}px)`, filter: `blur(${(1 - wp) * 1.5}px)`,
        transition: 'all 0.12s ease-out' }}>{w}&nbsp;</span>; })}
  </p>;
}

/* ─── 3D TILT CARD ─── */
function TiltCard({ children, style = {}, className = '', intensity = 5 }) {
  const ref = useRef(null);
  const onMove = (e) => { const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect(); const x = (e.clientX - rect.left) / rect.width - 0.5; const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateY(-5px)`;
    el.style.boxShadow = `${-x * 20}px ${y * 20}px 40px rgba(0,0,0,0.15)`;
  };
  const onLeave = () => { if (ref.current) { ref.current.style.transform = ''; ref.current.style.boxShadow = ''; } };
  return <div ref={ref} className={className} style={{ ...style, transition: 'transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease' }}
    onMouseMove={onMove} onMouseLeave={onLeave}>{children}</div>;
}

/* ─── MAGNETIC BUTTON WRAPPER ─── */
function MagneticWrap({ children, strength = 0.25 }) {
  const ref = useRef(null);
  const onMove = (e) => { const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (rect.left + rect.width / 2)) * strength}px, ${(e.clientY - (rect.top + rect.height / 2)) * strength}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };
  return <div ref={ref} style={{ display: 'inline-block', transition: 'transform 0.3s cubic-bezier(.22,1,.36,1)' }}
    onMouseMove={onMove} onMouseLeave={onLeave}>{children}</div>;
}

/* ─── SCROLL PROGRESS BAR ─── */
function ScrollProgress({ accent }) {
  const [p, setP] = useState(0);
  useEffect(() => { const fn = () => { const h = document.documentElement.scrollHeight - window.innerHeight; setP(h > 0 ? window.scrollY / h : 0); };
    window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn); }, []);
  return <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 200,
    background: `linear-gradient(90deg, ${accent}, ${accentAlpha('#6FD3FF', 0.7)})`,
    transformOrigin: 'right', transform: `scaleX(${p})`, boxShadow: `0 0 12px ${accentAlpha(accent, 0.5)}` }} />;
}

/* ─── MOUSE GLOW ─── */
function MouseGlow({ color }) {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  useEffect(() => { const fn = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', fn, { passive: true }); return () => window.removeEventListener('mousemove', fn); }, []);
  return <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
    background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 70%)` }} />;
}

/* ─── AURORA BLOBS ─── */
function AuroraBg({ accent }) {
  return <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    <div className="aurora-b aurora-b1" style={{ background: `radial-gradient(ellipse, ${accentAlpha(accent, 0.16)}, transparent 70%)` }} />
    <div className="aurora-b aurora-b2" style={{ background: `radial-gradient(ellipse, ${accentAlpha('#6FD3FF', 0.07)}, transparent 70%)` }} />
    <div className="aurora-b aurora-b3" style={{ background: `radial-gradient(ellipse, ${accentAlpha('#C04CE8', 0.055)}, transparent 70%)` }} />
  </div>;
}

/* ─── CONSTELLATION PARTICLES + MOUSE ─── */
function ConstellationCanvas({ color, lineColor, count = 50 }) {
  const cvs = useRef(null), pts = useRef([]), raf = useRef(null), mouse = useRef({ x: -999, y: -999 });
  useEffect(() => {
    const c = cvs.current; if (!c) return; const ctx = c.getContext('2d'); const dpr = window.devicePixelRatio || 1;
    const resize = () => { c.width = c.offsetWidth * dpr; c.height = c.offsetHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    resize(); window.addEventListener('resize', resize);
    const onM = (e) => { const r = c.getBoundingClientRect(); mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top }; };
    window.addEventListener('mousemove', onM, { passive: true });
    const W = () => c.offsetWidth, H = () => c.offsetHeight;
    pts.current = Array.from({ length: count }, () => ({ x: Math.random() * W(), y: Math.random() * H(),
      r: 0.7 + Math.random() * 1.3, a: 0.12 + Math.random() * 0.4, vy: -(0.03 + Math.random() * 0.18), vx: (Math.random() - 0.5) * 0.12 }));
    const LD = 110, MD = 170, lc = lineColor || color;
    const draw = () => {
      const w = W(), h = H(); ctx.clearRect(0, 0, w, h);
      const ps = pts.current, mx = mouse.current.x, my = mouse.current.y;
      ps.forEach(p => { p.y += p.vy; p.x += p.vx; if (p.y < -12) { p.y = h + 12; p.x = Math.random() * w; } if (p.x < -12) p.x = w + 12; if (p.x > w + 12) p.x = -12; });
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) { const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < LD) { ctx.beginPath(); ctx.moveTo(ps[i].x, ps[i].y); ctx.lineTo(ps[j].x, ps[j].y); ctx.strokeStyle = lc; ctx.globalAlpha = (1 - d / LD) * 0.1; ctx.lineWidth = 0.5; ctx.stroke(); } }
        const mdx = ps[i].x - mx, mdy = ps[i].y - my, md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < MD && mx > 0) { ctx.beginPath(); ctx.moveTo(ps[i].x, ps[i].y); ctx.lineTo(mx, my); ctx.strokeStyle = lc; ctx.globalAlpha = (1 - md / MD) * 0.18; ctx.lineWidth = 0.5; ctx.stroke(); }
      }
      ps.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = color; ctx.globalAlpha = p.a; ctx.fill(); });
      ctx.globalAlpha = 1; raf.current = requestAnimationFrame(draw);
    }; draw();
    return () => { window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onM); cancelAnimationFrame(raf.current); };
  }, [color, count, lineColor]);
  return <canvas ref={cvs} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}

/* ─── ANIMATED COUNTER ─── */
function Counter({ to, duration = 2.2, suffix = '', prefix = '' }) {
  const [ref, vis] = useInView(); const [val, setVal] = useState(0);
  useEffect(() => { if (!vis) return; let start = null;
    const step = (ts) => { if (!start) start = ts; const p = Math.min(1, (ts - start) / (duration * 1000)); setVal(Math.round((1 - Math.pow(1 - p, 3)) * to)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step); }, [vis, to, duration]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* ─── FLOATING GEOMETRIC SHAPES ─── */
function FloatingShapes({ accent }) {
  return <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    <div className="float-shape" style={{ width: 90, height: 90, borderRadius: '50%', border: `1px solid ${accentAlpha(accent, 0.05)}`, top: '15%', left: '10%', animationDuration: '24s' }} />
    <div className="float-shape" style={{ width: 4, height: 4, borderRadius: '50%', background: accentAlpha('#6FD3FF', 0.15), top: '28%', right: '15%', animationDuration: '19s', animationDelay: '-5s' }} />
    <div className="float-shape" style={{ width: 18, height: 18, borderRadius: '50%', border: `1px solid ${accentAlpha('#C04CE8', 0.05)}`, bottom: '22%', left: '20%', animationDuration: '26s', animationDelay: '-9s' }} />
    <div className="float-shape" style={{ width: 3, height: 3, borderRadius: '50%', background: accentAlpha(accent, 0.12), top: '58%', right: '9%', animationDuration: '21s', animationDelay: '-3s' }} />
    <div className="float-shape" style={{ width: 140, height: 140, borderRadius: '50%', border: `1px solid ${accentAlpha(accent, 0.02)}`, bottom: '8%', right: '22%', animationDuration: '32s', animationDelay: '-14s' }} />
    <div className="float-shape" style={{ width: 4, height: 4, borderRadius: '50%', background: accentAlpha('#6FD3FF', 0.18), top: '72%', left: '7%', animationDuration: '17s', animationDelay: '-6s' }} />
    <div className="float-shape" style={{ width: 50, height: 50, borderRadius: '50%', border: `1px solid ${accentAlpha(accent, 0.035)}`, top: '8%', right: '35%', animationDuration: '28s', animationDelay: '-10s' }} />
  </div>;
}

/* ─── MARQUEE ─── */
function Marquee({ items, speed = 35, reverse = false }) {
  const content = [...items, ...items, ...items];
  return <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
    <div style={{ display: 'inline-flex', gap: 32, animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : ''}`, paddingInlineStart: 32 }}>
      {content.map((item, i) => <span key={i} className="marquee-item">{item}</span>)}
    </div>
  </div>;
}

/* ─── DIVIDER ─── */
function Divider({ accent, width = 100 }) {
  const [ref, vis] = useInView();
  return <div ref={ref} style={{ height: 1, maxWidth: width, margin: '0 auto',
    background: `linear-gradient(90deg, transparent, ${accentAlpha(accent, 0.28)}, transparent)`,
    opacity: vis ? 1 : 0, transform: vis ? 'scaleX(1)' : 'scaleX(0)', transition: 'all 1s cubic-bezier(.22,1,.36,1) 0.1s' }} />;
}

/* ─── LUCIDE ICON ─── */
function LIcon({ name, size = 22 }) {
  const ref = useRef(null);
  useEffect(() => { const el = ref.current; if (!el || !window.lucide) return; el.innerHTML = '';
    const i = document.createElement('i'); i.setAttribute('data-lucide', name); el.appendChild(i);
    try { window.lucide.createIcons({ nodes: [i] }); } catch (e) {}
    const svg = el.querySelector('svg'); if (svg) { svg.setAttribute('width', size); svg.setAttribute('height', size); }
  }, [name, size]);
  return <span ref={ref} style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 0, color: 'inherit' }} />;
}

Object.assign(window, {
  accentAlpha, useInView, useScrollY, FadeSlide, RevealText, StaggerWords,
  TiltCard, MagneticWrap, ScrollProgress, MouseGlow, AuroraBg, ConstellationCanvas,
  Counter, FloatingShapes, Marquee, Divider, LIcon,
});
