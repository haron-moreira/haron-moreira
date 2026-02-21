import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Locale } from './translations'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

function getInitialLocale(): Locale {
  const saved = localStorage.getItem('locale')
  if (saved === 'pt' || saved === 'en' || saved === 'es') return saved
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('pt')) return 'pt'
  if (nav.startsWith('es')) return 'es'
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('locale', l)
  }

  const t = (key: string): string => {
    return translations[locale]?.[key] ?? translations['en']?.[key] ?? key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
