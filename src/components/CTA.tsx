import React from 'react'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900 border border-violet-500/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              Get started today
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Ready to ship{' '}
              <span className="gradient-text">10× faster?</span>
            </h2>
            <p className="max-w-xl mx-auto text-slate-400 text-lg mb-10">
              Join thousands of product teams already using Luminary to move faster, collaborate better, and ship with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-base hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
              >
                Start for free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-base hover:border-slate-500 hover:text-white transition-all"
              >
                Learn more
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">No credit card required &middot; Free forever plan available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
