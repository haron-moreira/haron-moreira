import { useI18n } from '../i18n/context'
import { education } from '../data/resume'
import { GraduationCap, Calendar, Building2 } from 'lucide-react'

const levelColor: Record<string, { border: string; bg: string; text: string; line: string }> = {
  mba:        { border: 'border-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400', line: 'from-violet-500 to-purple-600' },
  associate:  { border: 'border-blue-500/30',   bg: 'bg-blue-500/10',   text: 'text-blue-400',   line: 'from-blue-500 to-cyan-600' },
  technician: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', line: 'from-emerald-500 to-teal-600' },
}

function getLevel(degreeEn: string) {
  if (degreeEn.startsWith('MBA')) return 'mba'
  if (degreeEn.startsWith('IT Technician') || degreeEn.startsWith('Técnico')) return 'technician'
  return 'associate'
}

export default function Education() {
  const { t, locale } = useI18n()

  return (
    <div className="page-enter bg-grid relative py-8">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/3 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />

      {/* Header */}
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-bold text-white">{t('education.title')}</h1>
        <p className="mb-4 text-slate-400">{t('education.subtitle')}</p>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
            {education.length} {t('education.institutions')}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="stagger relative space-y-6 pl-8 md:pl-10">
        {/* Vertical timeline line */}
        <div className="absolute top-2 bottom-2 left-3 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-emerald-500/20 md:left-4" />

        {education.map((ed) => {
          const level = getLevel(ed.degree.en)
          const colors = levelColor[level]

          return (
            <div key={ed.degree.en + ed.institution} className="group relative">
              {/* Timeline dot */}
              <div className={`absolute -left-5 top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 ${colors.border} bg-slate-950 transition-all duration-300 group-hover:scale-125 md:-left-6`}>
                <div className={`h-1.5 w-1.5 rounded-full ${colors.bg.replace('/10', '/60')}`} />
              </div>

              {/* Card */}
              <div className={`card-hover glow-violet-hover relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/30 p-6 transition-shadow duration-300 hover:shadow-lg scanline`}>
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r ${colors.line} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  {/* Left: Icon + Info */}
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border ${colors.border} ${colors.bg} transition-transform duration-300 group-hover:scale-110`}>
                      <GraduationCap className={`h-6 w-6 ${colors.text}`} />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-violet-300">
                        {ed.degree[locale]}
                      </h2>
                      <div className="mt-1.5 flex flex-wrap items-center gap-3 text-sm">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <Building2 className="h-3.5 w-3.5 text-slate-500" />
                          {ed.institution}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Period badge */}
                  <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border ${colors.border} ${colors.bg} px-3 py-1 text-xs font-medium ${colors.text}`}>
                    <Calendar className="h-3 w-3" />
                    {ed.period}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
