import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 15000, suffix: '+', label: 'Homes Powered', icon: '🏠' },
  { value: 98,    suffix: '%', label: 'Customer Satisfaction', icon: '⭐' },
  { value: 500,   suffix: 'MW', label: 'Energy Generated', icon: '⚡' },
  { value: 25,    suffix: 'yr', label: 'Warranty Coverage', icon: '🛡️' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-solar-900/20 via-sky-900/10 to-solar-900/20" />
      <div className="absolute inset-0 border-y border-white/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="font-display font-black text-4xl sm:text-5xl gradient-text mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-400 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
