import { 
  Home, 
  Building2, 
  Factory, 
  Zap, 
  Shield, 
  Wrench, 
  ArrowRight 
} from 'lucide-react';

import { 
  useRef, 
  useEffect, 
  useState 
} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // <-- Added import

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; // <-- Added import for pagination styles

// Services Data
const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    desc: 'Custom solar systems designed for homes of all sizes. Slash your electricity bill while increasing your property value.',
    color: 'from-solar-400 to-amber-500',
    glow: 'shadow-solar-500/20',
    features: [
      'System design & assessment',
      'Premium panel installation',
      'Smart monitoring app'
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    desc: 'Scalable solar solutions for businesses, offices, and retail spaces. Maximize ROI with our enterprise-grade systems.',
    color: 'from-sky-400 to-blue-500',
    glow: 'shadow-sky-500/20',
    features: [
      'Energy audit & consulting',
      'Large-scale installation',
      'Grid-tie & net metering'
    ],
  },
  {
    icon: Factory,
    title: 'Industrial Solar',
    desc: 'High-capacity solar farms and rooftop installations for manufacturing plants and industrial facilities.',
    color: 'from-emerald-400 to-teal-500',
    glow: 'shadow-emerald-500/20',
    features: [
      'MW-scale solutions',
      'Power purchase agreements',
      'Carbon credit advisory'
    ],
  },
  {
    icon: Zap,
    title: 'Battery Storage',
    desc: 'Next-generation battery storage systems that keep your home powered even when the grid goes down.',
    color: 'from-violet-400 to-purple-500',
    glow: 'shadow-violet-500/20',
    features: [
      'Tesla Powerwall certified',
      '24/7 backup power',
      'AI-powered management'
    ],
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    desc: 'Comprehensive maintenance plans to keep your solar system performing at peak efficiency year after year.',
    color: 'from-rose-400 to-pink-500',
    glow: 'shadow-rose-500/20',
    features: [
      'Annual performance checks',
      'Panel cleaning service',
      'Remote diagnostics'
    ],
  },
  {
    icon: Wrench,
    title: 'Solar Consulting',
    desc: 'Expert advice on government rebates, tax incentives, and the best solar strategy for your unique situation.',
    color: 'from-orange-400 to-red-500',
    glow: 'shadow-orange-500/20',
    features: [
      'Federal & state rebates',
      'Financial modeling',
      'Permits & approvals'
    ],
  },
];

// Service Card Component
function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = service.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`card-glass group cursor-pointer transition-all duration-700 h-full ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg ${service.glow} group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {service.desc}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-slate-300 text-sm"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Learn More Link */}
      <a
        href="#contact"
        className={`flex items-center gap-2 text-sm font-semibold mt-auto bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
      >
        Learn More
        <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}

// Services Section with Swiper (Mobile) and Grid (Desktop)
export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-blue-500/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-semibold text-sm tracking-widest uppercase mb-4 block">
            Services
          </span>
          <h2 className="section-heading">
            Complete Solar <span className="gradient-text">Solutions</span>
          </h2>
        </div>

        {/* Mobile View: Swiper Slider with Pagination */}
        <div className="md:hidden">
          <Swiper
            style={{"--swiper-pagination-bullet-inactive-color": "White"}}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true // Makes it look cleaner when there are many dots
            }}
            modules={[Pagination]} // <-- Added module here
            className="pb-12 !pt-2" // Added padding-bottom for the dots to sit below the card
          >
            {services.map((service, i) => (
              <SwiperSlide key={service.title} className="h-auto"> 
                {/* h-auto ensures cards stretch to match the tallest one */}
                <ServiceCard service={service} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop/Tablet View: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

      </div>
      <hr className="mt-20 border-t border-slate-700" />
    </section>
  );
}