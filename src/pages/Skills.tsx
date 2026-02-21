import { useI18n } from '../i18n/context'
import { skills } from '../data/resume'
import { Server, Database, Cloud, Radio, Layout, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  database: Database,
  cloud: Cloud,
  radio: Radio,
  layout: Layout,
}

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  server:   { border: 'border-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400', glow: 'hover:shadow-violet-500/10' },
  database: { border: 'border-blue-500/30',   bg: 'bg-blue-500/10',   text: 'text-blue-400',   glow: 'hover:shadow-blue-500/10' },
  cloud:    { border: 'border-cyan-500/30',    bg: 'bg-cyan-500/10',   text: 'text-cyan-400',   glow: 'hover:shadow-cyan-500/10' },
  radio:    { border: 'border-amber-500/30',   bg: 'bg-amber-500/10',  text: 'text-amber-400',  glow: 'hover:shadow-amber-500/10' },
  layout:   { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'hover:shadow-emerald-500/10' },
}

export default function Skills() {
  const { t, locale } = useI18n()

  const totalSkills = skills.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <div className="page-enter bg-grid relative py-8">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />

      {/* Header */}
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-bold text-white">{t('skills.title')}</h1>
        <p className="mb-4 text-slate-400">{t('skills.subtitle')}</p>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
            {skills.length} {t('skills.categories')}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
            {totalSkills} {t('skills.technologies')}
          </span>
        </div>
      </div>

      {/* Skills grid */}
      <div className="stagger space-y-6">
        {skills.map((cat) => {
          const Icon = iconMap[cat.icon] || Server
          const colors = colorMap[cat.icon] || colorMap.server

          return (
            <div
              key={cat.title.en}
              className={`card-hover group relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/30 transition-shadow duration-300 hover:shadow-lg ${colors.glow}`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent ${colors.border.replace('border-', 'via-').replace('/30', '/50')} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              <div className="p-6">
                {/* Category header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${colors.border} ${colors.bg}`}>
                    <Icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-white">{cat.title[locale]}</h2>
                    <span className="text-xs text-slate-500">{cat.items.length} technologies</span>
                  </div>
                </div>

                {/* Skills as terminal-style tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`relative rounded-md border border-slate-700/40 bg-slate-800/50 px-3 py-1.5 font-mono text-xs text-slate-300 transition-all duration-200 hover:${colors.border} hover:${colors.text} hover:bg-slate-800/80`}
                    >
                      <span className={`mr-1.5 ${colors.text} opacity-50`}>#</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
