import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';

// Added 'href' fields for actionable links (tel: and mailto:)
const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '8113-032-006', sub: 'Mon–Sat, 8am–8pm', href: 'tel:+918113032006' },
  { icon: Mail, label: 'Email Us', value: 'lazimkhadern@gmail.com', sub: 'Response within 2 hours', href: 'mailto:lazimkhadern@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Wandoor, Malappuram, Kerala 679328', sub: 'Just Visit' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'residential', message: '', address: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-solar-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-white font-semibold text-sm tracking-widest mb-4 block">Contact Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left: Contact info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map(c => {
              const Icon = c.icon;
              // Conditionally use an <a> tag if it has a link, otherwise a standard <div>
              const Wrapper = c.href ? 'a' : 'div';
              
              return (
                <Wrapper 
                  key={c.label}
                  href={c.href}
                  // Added 'block' and conditionally added 'cursor-pointer' if it's a link
                  className={`flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition-colors group ${c.href ? 'cursor-pointer block focus:outline-none focus:ring-2 focus:ring-blue-400/50' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-400/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider">{c.label}</div>
                    <div className="text-white font-semibold text-sm">{c.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{c.sub}</div>
                  </div>
                </Wrapper>
              );
            })}

            {/* Promise card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-400/10 to-blue-500/5 border border-blue-400/20">
              <div className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Our Promise To You
              </div>
              <ul className="space-y-1.5 text-slate-400 text-sm">
                {['No obligation quote', 'No pushy sales tactics', 'Price match guarantee', 'Licensed & insured'].map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-solar-400 flex-shrink-0" />{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:col-span-2 h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 relative group bg-white/5">
            <iframe
              src="https://maps.google.com/maps?q=Wandoor,+Malappuram,+Kerala+679328&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-700 ease-in-out"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}