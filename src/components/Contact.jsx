import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '1-800-SOLAR (765-27)', sub: 'Mon–Sat, 8am–8pm' },
  { icon: Mail, label: 'Email Us', value: 'hello@solarvolt.com', sub: 'Response within 2 hours' },
  { icon: MapPin, label: 'Our HQ', value: '123 Sunshine Blvd, Phoenix, AZ 85001', sub: 'Visit by appointment' },
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
          <span className="text-solar-400 font-semibold text-sm tracking-widest uppercase mb-4 block">Get Started</span>
          <h2 className="section-heading">
            Get Your Free <span className="gradient-text">Solar Quote</span>
          </h2>
          <p className="section-sub">
            Fill in your details and one of our solar experts will contact you within 2 hours with a personalised quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map(c => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-solar-400/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-solar-400/10 border border-solar-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-solar-400/20 transition-colors">
                    <Icon className="w-5 h-5 text-solar-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider">{c.label}</div>
                    <div className="text-white font-semibold text-sm">{c.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{c.sub}</div>
                  </div>
                </div>
              );
            })}

            {/* Promise card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-solar-400/10 to-amber-500/5 border border-solar-400/20">
              <div className="text-solar-400 font-bold mb-2 flex items-center gap-2">
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

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-glass flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-solar-400/10 border border-solar-400/30 flex items-center justify-center mb-6 animate-pulse-slow">
                  <CheckCircle className="w-10 h-10 text-solar-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">Quote Request Received! 🎉</h3>
                <p className="text-slate-400 max-w-sm">
                  Thank you, <span className="text-white font-semibold">{form.name}</span>! One of our solar experts will call you at <span className="text-solar-400 font-semibold">{form.phone}</span> within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-solar-400/60 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Phone *</label>
                    <input
                      name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-solar-400/60 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-solar-400/60 focus:bg-white/8 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Property Address</label>
                  <input
                    name="address" value={form.address} onChange={handleChange}
                    placeholder="123 Main St, City, State"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-solar-400/60 focus:bg-white/8 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Installation Type</label>
                  <select
                    name="type" value={form.type} onChange={handleChange}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-solar-400/60 transition-all text-sm"
                  >
                    <option value="residential">🏠 Residential</option>
                    <option value="commercial">🏢 Commercial</option>
                    <option value="industrial">🏭 Industrial</option>
                    <option value="battery">🔋 Battery Storage Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Additional Notes</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Tell us about your current electricity bill, roof size, or any specific requirements..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-solar-400/60 focus:bg-white/8 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <><Send className="w-5 h-5" /> Get My Free Quote</>
                  )}
                </button>
                <p className="text-slate-600 text-xs text-center">By submitting, you agree to our Privacy Policy. We never share your data.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
