import { useState } from 'react';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'SolarVolt Starter',
    subtitle: 'Perfect for small homes',
    power: '5 kW',
    price: '8,499',
    oldPrice: '11,200',
    badge: null,
    color: 'border-white/10',
    btnClass: 'btn-secondary',
    panels: 12,
    efficiency: '20.3%',
    warranty: '25 years',
    features: [
      'Tier-1 monocrystalline panels',
      '5kW hybrid inverter',
      'Smart energy monitor',
      'Professional installation',
      '10-year workmanship warranty',
      'Mobile app monitoring',
    ],
  },
  {
    name: 'SolarVolt Pro',
    subtitle: 'Best for average homes',
    power: '10 kW',
    price: '14,999',
    oldPrice: '19,500',
    badge: 'Most Popular',
    color: 'border-solar-400/50',
    btnClass: 'btn-primary',
    panels: 24,
    efficiency: '22.1%',
    warranty: '25 years',
    features: [
      'Premium N-type TOPCon panels',
      '10kW hybrid inverter',
      '10kWh battery storage',
      'Smart energy monitor',
      'Professional installation',
      'Annual maintenance check',
      'Priority 24/7 support',
    ],
  },
  {
    name: 'SolarVolt Elite',
    subtitle: 'Maximum power & storage',
    power: '20 kW',
    price: '28,999',
    oldPrice: '38,000',
    badge: 'Best Value',
    color: 'border-sky-400/50',
    btnClass: 'btn-secondary',
    panels: 48,
    efficiency: '23.5%',
    warranty: '30 years',
    features: [
      'Ultra-premium bifacial panels',
      '20kW 3-phase inverter',
      '30kWh battery bank',
      'EV charger included',
      'Smart home integration',
      'Dedicated account manager',
      '5-year free maintenance',
      'Extended 30-year warranty',
    ],
  },
];

export default function Products() {
  const [hoveredIdx, setHoveredIdx] = useState(1);

  return (
    <section id="products" className="py-5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-white font-semibold text-sm tracking-widest uppercase mb-4 block">Our Products</span>
          <h2 className="section-heading">
            Choose Your <span className="gradient-text">Solar Package</span>
          </h2>
          <p className="section-sub">
            Transparent pricing, no hidden fees. All packages include installation, permits, and government rebate assistance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {products.map((p, i) => (
            <div
              key={p.name}
              onMouseEnter={() => setHoveredIdx(i)}
              className={`relative rounded-3xl border-2 ${p.color} transition-all duration-500 overflow-hidden ${
                hoveredIdx === i ? 'bg-white/10 shadow-2xl scale-[1.02] -translate-y-2' : 'bg-white/5'
              } ${i === 1 ? 'md:-translate-y-4' : ''}`}
            >
              {/* Badge */}
              {p.badge && (
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-b-xl ${
                  i === 1 ? 'bg-gradient-to-r from-solar-400 to-amber-400 text-slate-900' : 'bg-gradient-to-r from-sky-400 to-blue-400 text-slate-900'
                }`}>
                  {p.badge}
                </div>
              )}

              <div className="p-8 pt-10">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-5 h-5 text-solar-400" />
                    <span className="text-solar-400 font-bold text-lg">{p.power}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">{p.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">{p.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className="font-display font-black text-4xl text-white">${p.price}</span>
                    <span className="text-slate-500 line-through text-lg mb-1">${p.oldPrice}</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1">After federal tax credit (30%)</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  {[
                    { label: 'Panels', val: p.panels },
                    { label: 'Efficiency', val: p.efficiency },
                    { label: 'Warranty', val: p.warranty },
                  ].map(s => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-2">
                      <div className="font-bold text-white text-sm">{s.val}</div>
                      <div className="text-slate-500 text-[10px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-solar-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`${p.btnClass} w-full justify-center`}>
                  Get This Package <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        
      </div>
      <hr className="mt-20 border-t border-slate-700" />
    </section>
  );
}
