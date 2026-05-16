// kb-fx.jsx — Premium effects & animation utilities
const { useState, useEffect, useRef, useCallback } = React;

function accentAlpha(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function useInView(opts = {}) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); if (opts.once !== false) obs.unobserve(el); } },
      { threshold: opts.threshold || 0.1, rootMargin: opts.rootMargin || '0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return y;
}

/* Fade + slide on scroll */
function FadeSlide({ children, delay = 0, y = 28, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      ...style, opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity 0.78s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.78s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

/* Word-by-word scroll reveal with subtle rise */
function RevealText({ text, style = {} }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(' ');
  useEffect(() => {
    const fn = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setProgress(Math.max(0, Math.min(1, (vh * 0.78 - r.top) / (vh * 0.45))));
    };
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <p ref={ref} style={{
      fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 400, lineHeight: 1.55,
      textAlign: 'center', ...style,
    }}>
      {words.map((w, i) => {
        const wp = Math.max(0, Math.min(1, (progress * words.length - i) * 1.15));
        return (
          <span key={i} style={{
            display: 'inline-block', opacity: 0.06 + wp * 0.94,
            transform: `translateY(${(1 - wp) * 6}px)`,
            transition: 'opacity 0.18s ease-out, transform 0.18s ease-out',
          }}>{w}&nbsp;</span>
        );
      })}
    </p>
  );
}

/* Mouse glow that follows cursor */
function MouseGlow({ color }) {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  useEffect(() => {
    const fn = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', fn, { passive: true });
    return () => window.removeEventListener('mousemove', fn);
  }, []);
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      background: `radial-gradient(650px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 70%)`,
      transition: 'background 0.08s linear',
    }} />
  );
}

/* Aurora blobs — organic floating gradient mesh */
function AuroraBg({ accent }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div className="aurora-b aurora-b1" style={{ background: `radial-gradient(ellipse, ${accentAlpha(accent, 0.18)}, transparent 70%)` }} />
      <div className="aurora-b aurora-b2" style={{ background: `radial-gradient(ellipse, ${accentAlpha('#6FD3FF', 0.09)}, transparent 70%)` }} />
      <div className="aurora-b aurora-b3" style={{ background: `radial-gradient(ellipse, ${accentAlpha('#C04CE8', 0.07)}, transparent 70%)` }} />
    </div>
  );
}

/* Constellation: particles + connection lines + mouse interaction */
function ConstellationCanvas({ color, lineColor, count = 50 }) {
  const cvs = useRef(null);
  const pts = useRef([]);
  const raf = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const c = cvs.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const resize = () => { c.width = c.offsetWidth * dpr; c.height = c.offsetHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    resize();
    window.addEventListener('resize', resize);
    const onM = (e) => { const r = c.getBoundingClientRect(); mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top }; };
    window.addEventListener('mousemove', onM, { passive: true });

    const W = () => c.offsetWidth, H = () => c.offsetHeight;
    pts.current = Array.from({ length: count }, () => ({
      x: Math.random() * W(), y: Math.random() * H(),
      r: 1 + Math.random() * 1.6, a: 0.2 + Math.random() * 0.4,
      vy: -(0.06 + Math.random() * 0.22), vx: (Math.random() - 0.5) * 0.16,
    }));

    const LD = 130, MD = 200, lc = lineColor || color;
    const draw = () => {
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);
      const ps = pts.current, mx = mouse.current.x, my = mouse.current.y;
      ps.forEach(p => {
        p.y += p.vy; p.x += p.vx;
        if (p.y < -12) { p.y = h + 12; p.x = Math.random() * w; }
        if (p.x < -12) p.x = w + 12; if (p.x > w + 12) p.x = -12;
      });
      // Connections
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LD) {
            ctx.beginPath(); ctx.moveTo(ps[i].x, ps[i].y); ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = lc; ctx.globalAlpha = (1 - d / LD) * 0.13; ctx.lineWidth = 0.6; ctx.stroke();
          }
        }
        // Mouse connections
        const mdx = ps[i].x - mx, mdy = ps[i].y - my;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < MD && mx > 0) {
          ctx.beginPath(); ctx.moveTo(ps[i].x, ps[i].y); ctx.lineTo(mx, my);
          ctx.strokeStyle = lc; ctx.globalAlpha = (1 - md / MD) * 0.22; ctx.lineWidth = 0.6; ctx.stroke();
        }
      }
      // Dots
      ps.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color; ctx.globalAlpha = p.a; ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onM); cancelAnimationFrame(raf.current); };
  }, [color, count, lineColor]);

  return <canvas ref={cvs} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}

/* Section gradient divider */
function Divider({ accent, width = 160 }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      height: 1, maxWidth: width, margin: '0 auto',
      background: `linear-gradient(90deg, transparent, ${accentAlpha(accent, 0.35)}, transparent)`,
      opacity: vis ? 1 : 0, transform: vis ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(.22,1,.36,1) 0.1s',
    }} />
  );
}

Object.assign(window, {
  accentAlpha, useInView, useScrollY, FadeSlide, RevealText,
  MouseGlow, AuroraBg, ConstellationCanvas, Divider,
});
