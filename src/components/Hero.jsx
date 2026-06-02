import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251, 176, 34, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-gradient-radial from-solar-900/20 via-transparent to-transparent" />
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      {/* Particles canvas */}
      <canvas ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(251,176,34,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,176,34,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-solar-400/10 border border-solar-400/30 rounded-full text-solar-300 text-sm font-semibold mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-solar-400 rounded-full animate-pulse" />
          #1 Rated Solar Company in North America
        </div>

        {/* Heading */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6 leading-[1.05]">
          Power Your World<br />
          <span className="gradient-text">With Pure Sunlight</span>
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Cut your electricity bills by up to <span className="text-solar-400 font-bold">90%</span> with our cutting-edge solar panel systems. 
          Clean energy, smarter savings, brighter future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#contact" className="btn-primary text-lg group">
            Get Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="btn-secondary text-lg">
            <Play className="w-5 h-5 text-solar-400" />
            Watch How It Works
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
          {['✓ No Upfront Cost', '✓ 25-Year Warranty', '✓ 48-Hour Install', '✓ Government Rebates'].map(b => (
            <span key={b} className="flex items-center gap-1 text-slate-300 font-medium">{b}</span>
          ))}
        </div>

        {/* Floating solar panel illustration */}
        <div className="relative mt-20 max-w-4xl mx-auto animate-float">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="grid grid-cols-4 gap-3 p-6 bg-white/5 backdrop-blur rounded-3xl border border-white/10 glow-solar">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className={`h-16 rounded-xl flex items-center justify-center text-2xl relative overflow-hidden ${
                i % 3 === 0 ? 'bg-sky-800/60' : i % 3 === 1 ? 'bg-sky-900/60' : 'bg-slate-800/60'
              } border border-sky-700/30`}>
                <div className="absolute inset-0 grid grid-cols-3 gap-px opacity-40">
                  {Array.from({length: 9}).map((_, j) => <div key={j} className="bg-sky-600/20 rounded-sm" />)}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs tracking-widest uppercase">
            Solar Panel Array — 10kW System
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-solar-400 transition-colors animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
