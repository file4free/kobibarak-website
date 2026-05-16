// kb-anim.jsx — Animation utilities for KobiBarak.com
const { useState, useEffect, useRef } = React;

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
      ([e]) => {
        if (e.isIntersecting) { setVis(true); if (opts.once !== false) obs.unobserve(el); }
      },
      { threshold: opts.threshold || 0.12, rootMargin: opts.rootMargin || '0px' }
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

function FadeSlide({ children, delay = 0, y = 30, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity 0.72s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.72s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function RevealText({ text, style = {} }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh * 0.8 - r.top) / (vh * 0.5)));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <p ref={ref} style={{
      fontSize: 'clamp(28px, 4.5vw, 46px)',
      fontWeight: 400, lineHeight: 1.55, textAlign: 'center',
      ...style,
    }}>
      {words.map((w, i) => {
        const wp = Math.max(0, Math.min(1, (progress * words.length - i) * 1.2));
        return (
          <span key={i} style={{
            opacity: 0.1 + wp * 0.9,
            transition: 'opacity 0.12s ease-out',
          }}>{w}{i < words.length - 1 ? ' ' : ''}</span>
        );
      })}
    </p>
  );
}

function ParticleCanvas({ color = 'rgba(79,26,214,0.45)', count = 45 }) {
  const cvs = useRef(null);
  const particles = useRef([]);
  const raf = useRef(null);

  useEffect(() => {
    const c = cvs.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      c.width = c.offsetWidth * dpr;
      c.height = c.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);
    const W = () => c.offsetWidth;
    const H = () => c.offsetHeight;
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * W(), y: Math.random() * H(),
      r: 1 + Math.random() * 2,
      a: 0.08 + Math.random() * 0.28,
      vy: -(0.1 + Math.random() * 0.28),
      vx: (Math.random() - 0.5) * 0.22,
    }));
    const draw = () => {
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);
      particles.current.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.a;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf.current); };
  }, [color, count]);

  return <canvas ref={cvs} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}

Object.assign(window, { accentAlpha, useInView, useScrollY, FadeSlide, RevealText, ParticleCanvas });
