import { personalInfo } from '../data/resume'
import { useI18n } from '../i18n/context'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-slate-800/60 py-6 text-center text-sm text-slate-500">
      <div className="mx-auto max-w-5xl px-4">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. {t('footer.rights')}</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-violet-400">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-violet-400">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="transition-colors duration-200 hover:text-violet-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
