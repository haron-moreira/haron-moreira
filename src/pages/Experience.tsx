import { useI18n } from '../i18n/context'
import { experiences } from '../data/resume'

export default function Experience() {
  const { t, locale } = useI18n()

  return (
    <div className="page-enter py-8">
      <h1 className="mb-2 text-3xl font-bold text-white">{t('experience.title')}</h1>
      <p className="mb-8 text-slate-400">{t('experience.subtitle')}</p>

      <div className="stagger relative space-y-8 before:absolute before:top-0 before:left-[7px] before:h-full before:w-px before:bg-gradient-to-b before:from-violet-500/40 before:via-violet-500/20 before:to-transparent">
        {experiences.map((exp) => (
          <div
            key={exp.role.en + exp.period}
            className="card-hover glow-violet-hover relative ml-8 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 p-6 scanline"
          >
            {/* Timeline dot */}
            <div className="absolute top-7 -left-[25px] h-3.5 w-3.5 rounded-full border-2 border-violet-400 bg-slate-950" />

            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-white">{exp.role[locale]}</h2>
              <span className="text-violet-400">@</span>
              <span className="font-medium text-violet-400">{exp.company}</span>
            </div>
            <p className="mb-1 text-sm text-slate-500">{exp.period}</p>
            <p className="mb-1 text-xs text-slate-600">{exp.location}</p>
            <p className="mb-4 mt-3 text-sm leading-relaxed text-slate-300">{exp.description[locale]}</p>
            {exp.highlights.length > 0 && (
              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/60" />
                    {h[locale]}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
