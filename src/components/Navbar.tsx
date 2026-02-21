import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { localeLabels, type Locale } from '../i18n/translations'

const linkKeys = [
  { to: '/', key: 'nav.about' },
  { to: '/skills', key: 'nav.skills' },
  { to: '/experience', key: 'nav.experience' },
  { to: '/projects', key: 'nav.projects' },
  { to: '/education', key: 'nav.education' },
  { to: '/contact', key: 'nav.contact' },
]

const locales: Locale[] = ['pt', 'en', 'es']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, locale, setLocale } = useI18n()

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink
          to="/"
          className="group relative text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="gradient-text">&lt;HM /&gt;</span>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {linkKeys.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative text-sm transition-all duration-300 hover:text-violet-400 ${
                    isActive
                      ? 'text-violet-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-violet-400 after:rounded-full'
                      : 'text-slate-400'
                  }`
                }
              >
                {t(l.key)}
              </NavLink>
            </li>
          ))}

          {/* Language switcher */}
          <li className="ml-2 flex items-center gap-1 rounded-full border border-slate-700/50 bg-slate-900/50 px-1 py-0.5">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                className={`rounded-full px-2 py-0.5 text-xs font-medium transition-all duration-200 ${
                  locale === loc
                    ? 'bg-violet-500/20 text-violet-300'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {localeLabels[loc]}
              </button>
            ))}
          </li>
        </ul>

        {/* Mobile: language + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center gap-0.5 rounded-full border border-slate-700/50 bg-slate-900/50 px-1 py-0.5">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium transition-all duration-200 ${
                  locale === loc
                    ? 'bg-violet-500/20 text-violet-300'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {localeLabels[loc]}
              </button>
            ))}
          </div>

          <button
            className="flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 rounded-full bg-slate-300 transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 rounded-full bg-slate-300 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 rounded-full bg-slate-300 transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <ul className="px-4 pb-4 pt-2">
          {linkKeys.map((l, i) => (
            <li key={l.to} style={{ animationDelay: `${i * 0.05}s` }}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 text-sm transition-all duration-200 hover:text-violet-400 hover:translate-x-1 ${
                    isActive ? 'text-violet-400' : 'text-slate-400'
                  }`
                }
              >
                {t(l.key)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
