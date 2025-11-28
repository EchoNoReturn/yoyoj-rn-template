import i18next from 'i18next'

import { SupportedLanguages } from './schema'

const changeLanguage = (lang: SupportedLanguages) => {
  i18next.changeLanguage(lang)
}

const toggleLanguage = () => {
  i18next.changeLanguage(
    i18next.language === (SupportedLanguages.EN as string)
      ? SupportedLanguages.zhCN
      : SupportedLanguages.EN,
  )
}

export const i18nt = i18next.t.bind(i18next)

export const useI18n = () => {
  return { changeLanguage, toggleLanguage, t: i18nt }
}
