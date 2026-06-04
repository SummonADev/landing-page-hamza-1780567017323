import React from 'react'
import { ArrowRight, Star, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-fuchsia-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-pink-600/8 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>Trusted by 10,000+ product teams</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Ship better products,{' '}
          <span className="gradient-text">10× faster</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          Luminary is the all-in-one platform that helps modern product teams collaborate, iterate, and launch with confidence — from idea to production.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-base hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
          >
            Start for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-semibold text-base hover:border-slate-500 hover:text-white transition-all"
          >
            <Play className="w-4 h-4" />
            Watch demo
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['bg-violet-500', 'bg-fuchsia-500', 'bg-pink-500', 'bg-indigo-500'].map((color, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${color} border-2 border-slate-950 flex items-center justify-center text-white text-xs font-bold`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>Join 10k+ teams</span>
          </div>
          <span className="hidden sm:block text-slate-700">•</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-1">4.9/5 from 2,000+ reviews</span>
          </div>
          <span className="hidden sm:block text-slate-700">•</span>
          <span>No credit card required</span>
        </div>

        {/* Hero image / dashboard mock */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="gradient-border rounded-2xl bg-slate-900 overflow-hidden shadow-2xl shadow-black/50">
            <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-slate-700/50 rounded-md px-4 py-1 text-xs text-slate-400">app.luminary.io/dashboard</div>
              </div>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              {/* Sidebar mock */}
              <div className="col-span-1 space-y-2">
                {['Dashboard', 'Projects', 'Analytics', 'Team', 'Settings'].map((item, i) => (
                  <div
                    key={item}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      i === 0
                        ? 'bg-violet-600/20 text-violet-300 border border-violet-600/20'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              {/* Main content mock */}
              <div className="col-span-2 space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Velocity', value: '98%', color: 'text-violet-400' },
                    { label: 'Shipped', value: '142', color: 'text-fuchsia-400' },
                    { label: 'Team', value: '24', color: 'text-pink-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                      <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                  <div className="text-xs text-slate-500 mb-2">Recent activity</div>
                  {['Feature #42 shipped to production', 'New sprint started', 'Design review completed'].map((activity) => (
                    <div key={activity} className="flex items-center gap-2 py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      <span className="text-xs text-slate-400">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow under mock */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-violet-600/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  )
}
