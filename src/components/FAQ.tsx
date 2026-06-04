import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does the free plan work?',
    answer:
      'The free Starter plan includes up to 5 team members, 3 active projects, and 1GB of storage. No credit card required to sign up. You can upgrade at any time.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate any billing differences automatically.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. Luminary is SOC 2 Type II certified with end-to-end encryption, regular third-party audits, and enterprise-grade access controls. Your data is always yours.',
  },
  {
    question: 'Do you offer a free trial for Pro?',
    answer:
      'Yes! Every Pro plan starts with a 14-day free trial — no credit card required. If you love it, you continue. If not, you stay on the free plan with no charges.',
  },
  {
    question: 'What integrations are available?',
    answer:
      'Luminary integrates with 100+ tools including GitHub, GitLab, Bitbucket, Jira, Slack, Figma, Datadog, PagerDuty, and many more. We add new integrations every month.',
  },
  {
    question: 'How does enterprise pricing work?',
    answer:
      'Enterprise plans are custom-quoted based on your team size, usage, and requirements. Contact our sales team and we typically turn around a proposal within 24 hours.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 relative bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know about Luminary.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-white text-sm">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
