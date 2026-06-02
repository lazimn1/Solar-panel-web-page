import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, California',
    avatar: 'SM',
    avatarColor: 'from-pink-400 to-rose-500',
    rating: 5,
    text: 'SolarVolt completely transformed our energy situation. Our electricity bill went from $380/month to literally $12. The installation team was professional, clean, and done in one day. I wish I had done this sooner!',
    savings: '$4,416/yr saved',
    system: '10kW Pro System',
  },
  {
    name: 'James Okafor',
    role: 'Business Owner, Texas',
    avatar: 'JO',
    avatarColor: 'from-blue-400 to-sky-500',
    rating: 5,
    text: 'We installed a 50kW commercial system across our warehouse. The energy savings paid back the investment in under 4 years. SolarVolt\'s team handled everything — permits, grid connection, the lot. Exceptional service.',
    savings: '$24,000/yr saved',
    system: '50kW Commercial',
  },
  {
    name: 'Emily Chen',
    role: 'Homeowner, Florida',
    avatar: 'EC',
    avatarColor: 'from-emerald-400 to-teal-500',
    rating: 5,
    text: 'The battery backup system is a game changer living in hurricane country. During the last storm, our neighbors lost power for 3 days — we never lost a single light. Worth every penny.',
    savings: '$3,200/yr saved',
    system: '8kW + 20kWh Battery',
  },
  {
    name: 'Robert Harrington',
    role: 'Property Developer, Arizona',
    avatar: 'RH',
    avatarColor: 'from-amber-400 to-orange-500',
    rating: 5,
    text: 'We\'ve used SolarVolt for 14 residential developments. Every single installation has been flawless and on schedule. Our buyers specifically ask for SolarVolt systems now — it\'s a real selling point.',
    savings: '$180,000 total saved',
    system: 'Multi-property Portfolio',
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner, New York',
    avatar: 'PS',
    avatarColor: 'from-violet-400 to-purple-500',
    rating: 5,
    text: 'I was skeptical about solar in New York, but SolarVolt showed me the data and it made complete sense. 18 months in and I\'ve already banked $2,800 in savings. The app monitoring is brilliant too.',
    savings: '$1,866/yr saved',
    system: '6kW Starter System',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(i => (i + 1) % testimonials.length);

  const getVisible = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      result.push(testimonials[(idx + i + testimonials.length) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-solar-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-white font-semibold text-sm tracking-widest uppercase mb-4 block">Reviews</span>
          <h2 className="section-heading">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="section-sub">
            Over 15,000 happy customers across North America. Here's what some of them have to say.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisible().map((t, i) => (
              <div
                key={t.name + i}
                className={`card-glass transition-all duration-500 ${i === 1 ? 'scale-105 border-solar-400/30 bg-white/10' : 'opacity-70 scale-95'}`}
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden card-glass">
            <TestimonialCard t={testimonials[idx]} />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} className="p-3 rounded-full bg-white/10 hover:bg-blue-400/20 border border-white/10 hover:border-blue-400/40 transition-all hover:scale-110 active:scale-95">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`rounded-full transition-all duration-300 ${i === idx ? 'w-8 h-2.5 bg-blue-400' : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full bg-white/10 hover:bg-blue-400/20 border border-white/10 hover:border-blue-400/40 transition-all hover:scale-110 active:scale-95">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Trust bar */}
        
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="p-6">
      <Quote className="w-8 h-8 text-solar-400/40 mb-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }, (_, i) => (
          <Star key={i} className="w-4 h-4 text-solar-400 fill-solar-400" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center font-bold text-white text-sm flex-shrink-0`}>
          {t.avatar}
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{t.name}</div>
          <div className="text-slate-500 text-xs">{t.role}</div>
        </div>
      </div>
      
    </div>
  );
}
