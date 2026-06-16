import { Sun, Globe, Share2, Mail, Phone, Zap, ArrowRight } from 'lucide-react';
import logo from '../assets/Company-Logo.webp';

const footerLinks = {
  Solutions: ['Residential Solar', 'Commercial Solar', 'Industrial Solar', 'Battery Storage', 'EV Charging', 'Solar Consulting'],
  Company: ['About Us', 'Our Team', 'Careers', 'Press & Media', 'Blog', 'Partners'],
  Support: ['Help Center', 'Installation Process', 'Maintenance', 'Warranty Claims', 'Rebates & Incentives', 'Contact Us'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
};

const socials = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Share2, href: '#', label: 'Share' },
  { icon: Mail, href: '#', label: 'Email' },
  { icon: Phone, href: '#', label: 'Phone' },
  { icon: Zap, href: '#', label: 'Energy' },
];

const certifications = ['NABCEP Certified', 'SEIA Member', 'BBB A+ Rated', 'ISO 9001:2015', 'EnergyStar Partner'];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80">
      {/* Newsletter strip */}
      
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <img src={logo} alt="AM Solar World Logo" className="h-auto w-16" />
              <div>
                <span className="font-display font-bold text-xl text-white">AM SOLAR WORLD</span>
                <div className="text-blue-400 text-[10px] font-semibold tracking-widest uppercase">Always Give Better Way</div>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              World's most trusted solar company. Empowering homes and businesses with clean, affordable solar energy since 2008.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-400/10 border border-white/10 hover:border-blue-400/30 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon className="w-4 h-4 text-slate-400 hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {certifications.map(cert => (
              <span key={cert} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-500 text-xs">{cert}</span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
            <p>© 2026 AM Solar World, Inc. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
