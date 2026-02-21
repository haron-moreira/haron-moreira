import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { personalInfo, coreStack, strengths } from '../data/resume'
import { Clock, GitCommit, FolderGit2, GraduationCap, Crosshair, Blocks, Gem, Zap, ChevronRight, MapPin } from 'lucide-react'

function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 40, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    if (!current) return

    if (!deleting && charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }

    if (!deleting && charIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, deletingSpeed)
      return () => clearTimeout(timeout)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex((textIndex + 1) % texts.length)
    }
  }, [charIndex, deleting, textIndex, texts, typingSpeed, deletingSpeed, pause])

  return displayed
}

function CountUp({ target, duration = 2000, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const steps = 60
    const increment = target / steps
    const stepTime = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [target, duration])

  return <>{count}{suffix}</>
}

export default function About() {
  const { t, locale } = useI18n()

  const typingTexts = [
    'Node.js', 'NestJS', 'Microservices', 'AWS', 'TypeScript', 'Clean Architecture',
  ]
  const typed = useTypingEffect(typingTexts)

  return (
    <div className="page-enter bg-grid relative">
      {/* Ambient glow decorations */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/5 blur-3xl" />
      <div className="pointer-events-none absolute top-60 -right-20 h-60 w-60 rounded-full bg-indigo-500/5 blur-3xl" />

      {/* ─── Hero Section ─── */}
      <section className="relative py-16 md:py-24">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left: Text content */}
          <div className="stagger flex-1">
            {/* Status badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-300">{t('hero.availability')}</span>
            </div>

            {/* Greeting */}
            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-violet-400 uppercase">
              {t('hero.greeting')}
            </p>

            {/* Name */}
            <h1 className="mb-3 text-4xl font-bold text-white md:text-6xl">
              {personalInfo.name}
            </h1>

            {/* Title */}
            <h2 className="mb-2 text-xl text-slate-300 md:text-2xl">
              {t('hero.title')} <span className="text-violet-400">|</span> {t('hero.subtitle')}
            </h2>

            {/* Typing effect */}
            <div className="mb-6 flex items-center gap-2 font-mono text-sm text-slate-500">
              <span className="text-violet-400/60">{'>'}</span>
              <span className="text-slate-400">specializing in</span>
              <span className="typing-cursor text-violet-300">{typed}</span>
            </div>

            {/* Location */}
            <p className="mb-8 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-violet-400/60" />
              {t('hero.location')}
            </p>

            {/* Summary */}
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-400">
              {t('hero.summary')}
            </p>

            {/* CTA Buttons */}
            <div className="mb-16 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-lg bg-violet-600 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <span className="relative z-10">{t('hero.cta.contact')}</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
              <Link
                to="/projects"
                className="rounded-lg border border-slate-700 px-7 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-violet-500/50 hover:text-violet-400 hover:shadow-lg hover:shadow-violet-500/5"
              >
                {t('hero.cta.projects')} →
              </Link>
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="float relative shrink-0">
            {/* Glow behind photo */}
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl" />
            {/* Rotating ring */}
            <div className="profile-ring absolute -inset-3 rounded-full border border-dashed border-violet-500/30" />
            {/* Photo */}
            <img
              src={import.meta.env.BASE_URL + 'profile-haron.png'}
              alt={personalInfo.name}
              className="relative h-48 w-48 rounded-full border-2 border-slate-700/60 object-cover shadow-xl shadow-violet-500/10 md:h-64 md:w-64"
            />
            {/* Decorative dots */}
            <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
            <div className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50" />
          </div>
        </div>

        {/* ─── Stats ─── */}
        <div className="stagger mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: 6, suffix: '+', label: t('hero.experience.label'), Icon: Clock },
            { value: 120, suffix: '+', label: t('hero.commits.label'), Icon: GitCommit },
            { value: 23, suffix: '', label: t('hero.repos.label'), Icon: FolderGit2 },
            { value: 7, suffix: '', label: t('hero.certs.label'), Icon: GraduationCap },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card-hover glow-violet-hover relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 text-center scanline"
            >
              <stat.Icon className="mx-auto mb-2 h-6 w-6 text-violet-400/70" />
              <p className="gradient-text text-3xl font-bold">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ─── Core Stack ─── */}
        <div className="mb-16">
          <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-wider text-slate-400 uppercase">
            <span className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
            {t('hero.tech.title')}
            <span className="h-px flex-1 bg-gradient-to-l from-violet-500/30 to-transparent" />
          </h3>
          <div className="stagger flex flex-wrap justify-center gap-3">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="card-hover cursor-default rounded-lg border border-slate-700/50 bg-slate-800/40 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-violet-500/50 hover:text-violet-300 hover:shadow-lg hover:shadow-violet-500/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ─── What I Bring ─── */}
        <div>
          <h3 className="mb-2 text-xl font-semibold text-white">{t('bring.title')}</h3>
          <p className="mb-8 text-sm text-slate-500">{t('bring.subtitle')}</p>
          <div className="stagger grid gap-5 md:grid-cols-2">
            {[
              { n: 1, Icon: Crosshair, color: 'from-violet-500 to-purple-600', iconColor: 'text-violet-400' },
              { n: 2, Icon: Blocks, color: 'from-indigo-500 to-blue-600', iconColor: 'text-indigo-400' },
              { n: 3, Icon: Gem, color: 'from-emerald-500 to-teal-600', iconColor: 'text-emerald-400' },
              { n: 4, Icon: Zap, color: 'from-amber-500 to-orange-600', iconColor: 'text-amber-400' },
            ].map(({ n, Icon, color, iconColor }) => (
              <div
                key={n}
                className="card-hover glow-violet-hover group relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 p-6 scanline"
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Icon + Title */}
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/80 transition-transform duration-300 group-hover:scale-110">
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>
                  <h4 className="text-base font-semibold text-white transition-colors duration-200 group-hover:text-violet-300">
                    {t(`bring.${n}.title`)}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-400">
                  {t(`bring.${n}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Strengths ─── */}
        <div className="mt-16">
          <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold tracking-wider text-slate-400 uppercase">
            <span className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
            {t('strengths.title')}
            <span className="h-px flex-1 bg-gradient-to-l from-violet-500/30 to-transparent" />
          </h3>
          <div className="stagger grid gap-3 md:grid-cols-2">
            {strengths.map((s, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 rounded-lg border border-slate-800/40 bg-slate-900/20 p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-slate-900/40"
              >
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-violet-400/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-violet-400" />
                <span className="text-sm text-slate-400 transition-colors duration-200 group-hover:text-slate-300">{s.text[locale]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
