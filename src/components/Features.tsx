import React from 'react'
import { Zap, BarChart2, Users, Shield, GitBranch, Layers } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning-fast builds',
    description:
      'Incremental builds and smart caching mean your pipeline runs in seconds, not minutes. Ship more, wait less.',
    color: 'from-yellow-500 to-orange-500',
    glow: 'shadow-yellow-500/20',
  },
  {
    icon: BarChart2,
    title: 'Real-time analytics',
    description:
      'Understand how your product performs with deep dashboards, funnel analysis, and actionable insights baked right in.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Users,
    title: 'Seamless collaboration',
    description:
      'Comments, mentions, shared workspaces — your entire team stays aligned across design, engineering, and product.',
    color: 'from-violet-500 to-fuchsia-500',
    glow: 'shadow-violet-500/20',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    description:
      'SOC 2 Type II certified, end-to-end encryption, SSO, and granular role-based permissions out of the box.',
    color: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/20',
  },
  {
    icon: GitBranch,
    title: 'Git-native workflows',
    description:
      'First-class GitHub, GitLab, and Bitbucket integrations. Every feature branch, PR, and release automatically tracked.',
    color: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/20',
  },
  {
    icon: Layers,
    title: '100+ integrations',
    description:
      'Connect Slack, Jira, Figma, Datadog, and more. Luminary fits your stack instead of forcing you into a new one.',
    color: 'from-indigo-500 to-violet-500',
    glow: 'shadow-indigo-500/20',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-slate-700" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Everything your team needs
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Purpose-built for modern product teams who move fast without breaking things.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg ${feature.glow} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
