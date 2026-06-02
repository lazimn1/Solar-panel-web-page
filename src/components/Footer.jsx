import { Sun, Globe, Share2, Mail, Phone, Zap, ArrowRight } from 'lucide-react';

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
      <div className="border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-white">Stay in the Loop ☀️</h3>
            <p className="text-slate-400 text-sm mt-1">Get solar tips, rebate alerts, and exclusive offers straight to your inbox.</p>
          </div>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-solar-400/60 transition-all text-sm"
            />
            <button type="submit" className="btn-primary py-3 px-5 text-sm whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="bg-gradient-to-br from-solar-300 to-solar-600 p-2 rounded-full">
                <Sun className="w-6 h-6 text-slate-900" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">SolarVolt</span>
                <div className="text-solar-400 text-[10px] font-semibold tracking-widest uppercase">Energy Solutions</div>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              North America's most trusted solar company. Empowering homes and businesses with clean, affordable solar energy since 2008.
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
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-solar-400/10 border border-white/10 hover:border-solar-400/30 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon className="w-4 h-4 text-slate-400 hover:text-solar-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-solar-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            <p>© 2026 SolarVolt Energy Solutions, Inc. All rights reserved.</p>
            <p>Built with ☀️ and a passion for clean energy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
