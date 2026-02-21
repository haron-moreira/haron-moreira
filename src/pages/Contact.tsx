import { useI18n } from '../i18n/context'
import { personalInfo } from '../data/resume'
import { Mail, Linkedin, Github, ExternalLink, Globe, Phone, Code2, type LucideIcon } from 'lucide-react'

interface ContactLink {
  href: string
  Icon: LucideIcon
  label: string
  detail: string
  external: boolean
  color: {
    border: string
    bg: string
    text: string
    line: string
  }
}

export default function Contact() {
  const { t } = useI18n()

  const personalLinks: ContactLink[] = [
    {
      href: `mailto:${personalInfo.email}`,
      Icon: Mail,
      label: t('contact.email'),
      detail: personalInfo.email,
      external: false,
      color: { border: 'border-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400', line: 'from-violet-500 to-purple-600' },
    },
    {
      href: personalInfo.linkedin,
      Icon: Linkedin,
      label: t('contact.linkedin'),
      detail: '/in/haron-moreira',
      external: true,
      color: { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', line: 'from-blue-500 to-cyan-600' },
    },
    {
      href: personalInfo.github,
      Icon: Github,
      label: t('contact.github'),
      detail: 'haron-moreira',
      external: true,
      color: { border: 'border-slate-400/30', bg: 'bg-slate-400/10', text: 'text-slate-300', line: 'from-slate-400 to-slate-500' },
    },
  ]

  const lookCodeLinks: ContactLink[] = [
    {
      href: 'mailto:tech@lookcode.com.br',
      Icon: Mail,
      label: t('contact.email'),
      detail: 'tech@lookcode.com.br',
      external: false,
      color: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', line: 'from-amber-500 to-orange-600' },
    },
    {
      href: 'https://lookcode.com.br',
      Icon: Globe,
      label: 'Website',
      detail: 'lookcode.com.br',
      external: true,
      color: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', line: 'from-emerald-500 to-teal-600' },
    },
    {
      href: 'https://wa.me/5511933043152',
      Icon: Phone,
      label: t('contact.phone'),
      detail: '+55 11 93304-3152',
      external: true,
      color: { border: 'border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-400', line: 'from-green-500 to-emerald-600' },
    },
  ]

  const renderCards = (links: ContactLink[]) =>
    links.map((link) => (
      <a
        key={link.detail}
        href={link.href}
        target={link.external ? '_blank' : undefined}
        rel={link.external ? 'noopener noreferrer' : undefined}
        className="card-hover glow-violet-hover group relative flex flex-col overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/30 p-6 transition-shadow duration-300 hover:shadow-lg scanline"
      >
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r ${link.color.line} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

        {/* Icon + Label */}
        <div className="mb-4 flex items-center gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border ${link.color.border} ${link.color.bg} transition-transform duration-300 group-hover:scale-110`}>
            <link.Icon className={`h-6 w-6 ${link.color.text}`} />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white transition-colors duration-200 group-hover:text-violet-300">
              {link.label}
            </h2>
            <p className="text-sm text-slate-500">{link.detail}</p>
          </div>
        </div>

        {/* Action hint */}
        <div className="mt-auto flex items-center gap-1.5 text-xs text-slate-600 transition-colors duration-200 group-hover:text-violet-400/70">
          <ExternalLink className="h-3 w-3" />
          <span className="font-mono">{link.external ? link.href.replace('https://www.', '').replace('https://', '') : link.detail}</span>
        </div>
      </a>
    ))

  return (
    <div className="page-enter bg-grid relative py-8">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />

      {/* Header */}
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-bold text-white">{t('contact.title')}</h1>
        <p className="text-slate-400">{t('contact.subtitle')}</p>
      </div>

      {/* Personal contact */}
      <div className="stagger grid gap-6 md:grid-cols-3">
        {renderCards(personalLinks)}
      </div>

      {/* Look Code section */}
      <div className="mt-14">
        <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-wider text-slate-400 uppercase">
          <span className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
          <Code2 className="h-4 w-4 text-amber-400/60" />
          Look Code
          <span className="h-px flex-1 bg-gradient-to-l from-amber-500/30 to-transparent" />
        </h3>
        <p className="mb-6 text-center text-sm text-slate-500">{t('contact.lookcode.subtitle')}</p>
        <div className="stagger grid gap-6 md:grid-cols-3">
          {renderCards(lookCodeLinks)}
        </div>
      </div>
    </div>
  )
}
