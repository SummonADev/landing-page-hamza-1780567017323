import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'NovaTech',
    avatar: 'SC',
    avatarColor: 'from-violet-500 to-fuchsia-500',
    rating: 5,
    text: 'Luminary completely transformed how we ship software. Our release cycle went from bi-weekly to daily, and our engineers are happier than ever. Honestly the best investment we made this year.',
  },
  {
    name: 'Marcus Johansson',
    role: 'Head of Product',
    company: 'Stride Labs',
    avatar: 'MJ',
    avatarColor: 'from-blue-500 to-cyan-500',
    rating: 5,
    text: 'I've tried every project management tool on the market. Luminary is the only one that bridges the gap between product and engineering seamlessly. The analytics alone are worth the price.',
  },
  {
    name: 'Priya Nair',
    role: 'CTO',
    company: 'Flux Systems',
    avatar: 'PN',
    avatarColor: 'from-pink-500 to-rose-500',
    rating: 5,
    text: 'We scaled from 5 to 50 engineers without any growing pains thanks to Luminary. The enterprise security features and audit logs gave our compliance team exactly what they needed.',
  },
  {
    name: 'Diego Alvarez',
    role: 'Engineering Manager',
    company: 'Beacon AI',
    avatar: 'DA',
    avatarColor: 'from-green-500 to-emerald-500',
    rating: 5,
    text: 'The git-native workflows are a game changer. Everything is tied to actual code, so there's no manual status updates or chasing people down. Velocity metrics speak for themselves.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-fuchsia-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Loved by engineering teams
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Don't take our word for it — hear from the teams shipping with Luminary every day.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800">
            <Quote className="absolute top-6 right-8 w-10 h-10 text-violet-500/20" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">\u201c{t.text}\u201d</p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm`}
              >
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-slate-500">
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all rounded-full ${
                    i === active ? 'w-6 h-2 bg-violet-500' : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
