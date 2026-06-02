import { Leaf, TrendingDown, Home, Award, Clock, HeartHandshake } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: TrendingDown,
    title: 'Save Up to 90% on Bills',
    desc: 'Our optimized systems are designed to maximize your energy production, dramatically reducing or even eliminating your monthly electricity costs.',
    stat: '90%',
    statLabel: 'Average bill reduction',
  },
  {
    icon: Leaf,
    title: 'Go 100% Carbon Neutral',
    desc: 'Every SolarVolt installation offsets an average of 4 tonnes of CO₂ per year — equivalent to planting 100 trees annually.',
    stat: '4T',
    statLabel: 'CO₂ offset per year',
  },
  {
    icon: Award,
    title: 'Industry-Leading Warranty',
    desc: 'We back our products with the industry\'s most comprehensive warranty: 25 years on panels, 10 years on inverters, and 5 years on workmanship.',
    stat: '25yr',
    statLabel: 'Full warranty',
  },
  {
    icon: Clock,
    title: 'Fast 48-Hour Installation',
    desc: 'Our certified teams handle everything from permits to grid connection. Most residential systems are fully operational within 48 hours.',
    stat: '48h',
    statLabel: 'Average install time',
  },
  {
    icon: Home,
    title: 'Increase Property Value',
    desc: 'Studies show solar panels increase home value by up to 4.1%. Your investment pays back even when you sell your home.',
    stat: '+4.1%',
    statLabel: 'Property value boost',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Local Support',
    desc: '400+ certified technicians nationwide. We\'re always just a call away for monitoring, maintenance, and emergency repairs.',
    stat: '400+',
    statLabel: 'Local technicians',
  },
];

export default function WhyUs() {
  const [visible, setVisible] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((ref, i) => {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setVisible(prev => ({ ...prev, [i]: true }));
      }, { threshold: 0.15 });
      if (ref) obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section id="why-us" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-solar-500/5 rounded-full blur-3xl" />
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-solar-400 font-semibold text-sm tracking-widest uppercase mb-4 block">Why SolarVolt</span>
          <h2 className="section-heading">
            Why Thousands Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="section-sub">
            We don't just install solar panels — we deliver a complete energy transformation backed by world-class technology and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                ref={el => refs.current[i] = el}
                className={`relative group p-6 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/8 hover:border-solar-400/30 transition-all duration-700 overflow-hidden ${
                  visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Stat watermark */}
                <div className="absolute -right-4 -top-4 font-display font-black text-6xl text-white/3 select-none group-hover:text-white/6 transition-colors">
                  {r.stat}
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-solar-400/20 to-solar-600/20 border border-solar-400/20 flex items-center justify-center flex-shrink-0 group-hover:border-solar-400/50 transition-colors">
                    <Icon className="w-6 h-6 text-solar-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-solar-300 transition-colors">{r.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>

                {/* Bottom stat pill */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-solar-400/10 text-solar-400 text-xs font-bold rounded-full border border-solar-400/20">
                    {r.stat}
                  </span>
                  <span className="text-slate-500 text-xs">{r.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
