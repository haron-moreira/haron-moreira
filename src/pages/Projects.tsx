import { useI18n } from '../i18n/context'
import { projects } from '../data/resume'
import { ExternalLink, Lock } from 'lucide-react'

export default function Projects() {
  const { t, locale } = useI18n()

  return (
    <div className="page-enter py-8">
      <h1 className="mb-2 text-3xl font-bold text-white">{t('projects.title')}</h1>
      <p className="mb-8 text-slate-400">{t('projects.subtitle')}</p>

      <div className="stagger grid gap-6 md:grid-cols-2">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="card-hover glow-violet-hover group relative flex flex-col overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 p-6 scanline"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-violet-500/50 via-indigo-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Title + private badge */}
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-violet-400">
                {proj.title}
              </h2>
              {proj.isPrivate && (
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/50 bg-slate-800/60 px-2 py-0.5 text-[10px] text-slate-500">
                  <Lock className="h-2.5 w-2.5" />
                  {t('projects.private')}
                </span>
              )}
            </div>

            <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
              {proj.description[locale]}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {proj.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-violet-500/10 px-2 py-0.5 text-xs text-violet-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-violet-400 transition-colors duration-200 hover:text-violet-300"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t('projects.view')}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
