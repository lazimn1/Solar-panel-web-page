import { ArrowRight, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-solar-900/40 via-amber-900/20 to-sky-900/30" />
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-solar-500/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-sky-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-solar-400/10 border border-solar-400/30 rounded-full text-solar-300 text-sm font-semibold mb-8">
          <Zap className="w-4 h-4 text-solar-400" />
          Limited Time: 30% Federal Tax Credit Available
        </div>

        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
          Start Saving With Solar <br />
          <span className="gradient-text">Today — Not Tomorrow</span>
        </h2>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          The average SolarVolt customer saves <strong className="text-solar-400">$1,800/year</strong> on electricity. Over 25 years, that's <strong className="text-solar-400">$45,000+</strong> back in your pocket.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-lg group">
            Claim Your Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="tel:+18005678910" className="btn-secondary text-lg">
            📞 Call 1-800-SOLAR
          </a>
        </div>

        {/* Countdown urgency */}
        <p className="text-slate-500 text-sm mt-8">
          ⚡ Government rebates expire soon — <span className="text-solar-400">lock in your savings now</span>
        </p>
      </div>
    </section>
  );
}
