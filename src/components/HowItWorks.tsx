import React from 'react'
import { UserPlus, Settings2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create your workspace',
    description:
      'Sign up in seconds, invite your team, and connect your repositories. Luminary sets up everything automatically — no DevOps expertise required.',
  },
  {
    number: '02',
    icon: Settings2,
    title: 'Configure your workflow',
    description:
      'Choose from dozens of pre-built templates or customize your own pipeline. Define stages, set quality gates, and configure notifications.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Ship with confidence',
    description:
      'Push your code and let Luminary handle the rest. Automated testing, one-click deployments, and real-time monitoring keep you in control.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider mb-4">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Up and running in minutes
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            No lengthy onboarding. No complex setup. Just instant value for your team.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-violet-600/50 via-fuchsia-600/50 to-pink-600/50" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step icon */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border border-violet-600/30 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-violet-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
