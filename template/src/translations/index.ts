import type { Language } from '@/hooks/language/schema'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import zhCN from './zh-cn.json'

// 默认的命名空间
export const defaultNS = 'translation'

export const resources = {
  en: en,
  'zh-CN': zhCN,
} as const satisfies Record<Language, unknown>

i18next.use(initReactI18next).init({
  defaultNS,
  resources,
  lng: 'en',
  fallbackLng: 'en',
})

i18next.services.formatter?.add('capitalize', (value: string) => {
  if (typeof value !== 'string' || value.length === 0) {
    return value
  }
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
})

export { default } from 'i18next'
