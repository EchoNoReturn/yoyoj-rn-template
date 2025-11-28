import * as z from 'zod';

export const enum SupportedLanguages {
  EN = 'en',
  zhCN = 'zh-CN',
}

export const languageSchema = z.enum([
  SupportedLanguages.EN,
  SupportedLanguages.zhCN,
]);

export type Language = z.infer<typeof languageSchema>;