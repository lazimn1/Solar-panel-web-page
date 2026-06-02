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
    desc: "We back our products with the industry's most comprehensive warranty: 25 years on panels, 10 years on inverters, and 5 years on workmanship.",
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
    desc: "400+ certified technicians nationwide. We're always just a call away for monitoring, maintenance, and emergency repairs.",
    stat: '400+',
    statLabel: 'Local technicians',
  },
];

export default function WhyUs() {
  const [visible, setVisible] = useState({});
  const itemRefs = useRef([]);
  const scrollRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // Swipe/Drag State for Mobile
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Intersection Observer for the fade-up animations
  useEffect(() => {
    const observers = itemRefs.current.map((ref, i) => {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setVisible(prev => ({ ...prev, [i]: true }));
      }, { threshold: 0.15 });
      if (ref) obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Determine Max Pagination Dots
  useEffect(() => {
    const calculateMaxIndex = () => {
      // If we are on tablet/desktop (>= 768px), we don't need pagination dots
      if (window.innerWidth >= 768) {
        setMaxIndex(0);
        setIsDragging(false); // Cancel any active drags on resize
      } else {
        // On mobile, every single item is a page since we show 1 at a time (centered)
        setMaxIndex(reasons.length - 1);
      }
    };

    calculateMaxIndex();
    window.addEventListener('resize', calculateMaxIndex);
    return () => window.removeEventListener('resize', calculateMaxIndex);
  }, []);

  // Update active dot based on which item is closest to the CENTER of the screen
  const handleScroll = () => {
    if (!scrollRef.current || window.innerWidth >= 768) return;
    const container = scrollRef.current;
    
    // Check if we're at the absolute end of the scroll container
    const isAtEnd = Math.abs(container.scrollWidth - container.clientWidth - container.scrollLeft) < 5;
    if (isAtEnd) {
      setActiveIndex(maxIndex);
      return;
    }

    const scrollLeft = container.scrollLeft;
    const containerCenter = scrollLeft + (container.clientWidth / 2);
    const firstItem = container.children[0];
    
    if (!firstItem) return;

    let closestIndex = 0;
    let minDistance = Infinity;

    // Find the item whose center is closest to the container's center
    Array.from(container.children).forEach((item, index) => {
      const itemCenter = (item.offsetLeft - firstItem.offsetLeft) + (item.clientWidth / 2);
      const distance = Math.abs(containerCenter - itemCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // --- Swiping Logic Handlers (Mobile Only) ---
  const handleMouseDown = (e) => {
    if (window.innerWidth >= 768) return; // Disable dragging on tablet/desktop grid
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging || window.innerWidth >= 768) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Swiping speed multiplier
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  // Scroll to center a specific index via pagination dots
  const scrollTo = (index) => {
    if (!scrollRef.current || !scrollRef.current.children[index]) return;
    const container = scrollRef.current;
    const item = container.children[index];
    const firstItem = container.children[0];
    
    // Calculate the exact scroll position to center this specific item
    const itemOffset = item.offsetLeft - firstItem.offsetLeft;
    const scrollPosition = itemOffset - (container.clientWidth / 2) + (item.clientWidth / 2);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section id="why-us" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-solar-500/5 rounded-full blur-3xl" />
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Why Thousands <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="section-sub">
            We don't just install solar panels — we deliver a complete energy transformation backed by world-class technology and service.
          </p>
        </div>

        {/* Layout Container: Slider on Mobile -> Grid on Tablet/Desktop */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`
            flex md:grid md:grid-cols-2 lg:grid-cols-3 
            overflow-x-auto md:overflow-visible 
            gap-6 pb-8 md:pb-0 
            -mx-4 px-4 md:mx-0 md:px-0
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] 
            ${isDragging ? 'snap-none cursor-grabbing select-none' : 'snap-x snap-mandatory cursor-grab md:cursor-auto'}
          `}
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                ref={el => itemRefs.current[i] = el}
                // width is 85vw on mobile to peek adjacent slides, auto-sized by grid on desktop
                className={`shrink-0 w-[85vw] sm:w-[360px] md:w-auto snap-center md:snap-align-none relative p-6 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/8 hover:border-solar-300/30 transition-all duration-700 overflow-hidden ${
                  visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Stat watermark */}
                <div className="absolute -right-4 -top-4 font-display font-black text-6xl text-white select-none group-hover:text-white/10 transition-colors pointer-events-none">
                  {r.stat}
                </div>

                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-solar-blue/20 border border-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-400/50 transition-colors pointer-events-none">
                    <Icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 mt-3 group-hover:text-solar-300 transition-colors">{r.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>

                {/* Bottom stat pill */}
                <div className="mt-4 flex items-center gap-2 relative z-10 pointer-events-none">
                  <span className="px-3 py-1 bg-solar-400/10 text-solar-400 text-xs font-bold rounded-full border border-solar-400/20">
                    {r.stat}
                  </span>
                  <span className="text-slate-500 text-xs">{r.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots (Mobile Only) */}
        {maxIndex > 0 && (
          <div className="flex md:hidden justify-center items-center gap-2.5 mt-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeIndex === i 
                    ? 'w-4 bg-blue-400 shadow-[0_0_10px_rgba(250,204,21,0.3)]' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <hr className="mt-20 border-t border-slate-700" />
    </section>
  );
}