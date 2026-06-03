import { useState, useEffect } from 'react';
import { Sun, Menu, X, Phone } from 'lucide-react';
import logo from '../assets/Company-Logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-black/50 backdrop-blur-3xl border-b border-white/10 shadow-xl shadow-black/30'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div>
              <div className="flex items-center justify-between bg-white shadow rounded-xl">
                <img
                  src={logo}
                  alt="AM Solar World Logo"
                  className="object-contain max-h-auto w-16"
                />
              </div>
            </div>
            <div className="flex flex-col leading-tight text-center">
              <span className="font-bold text-xl text-white tracking-tight">AM SOLAR WORLD</span>
              <span className="text-slate-400 text-[10px] font-semibold tracking-widest uppercase">We Always Give You Batter Way</span>
            </div> 
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="tel:+18005678910" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold">
              <Phone className="w-4 h-4" />
              <span>1-800-878588</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-950/95 backdrop-blur-xl border-t border-white/10 px-4 pt-4 pb-8 flex flex-col gap-1">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
