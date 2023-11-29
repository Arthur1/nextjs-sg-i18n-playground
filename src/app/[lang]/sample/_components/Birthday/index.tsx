'use client'

import { type FC, use, useContext } from 'react'

import { LangContext } from '@/app/[lang]/_components/i18n'
import { useTranslation } from '@/app/_hooks/i18n'

import translationDef from './translationDef'

export const Birthday: FC = () => {
  const lang = useContext(LangContext)
  // devサーバーだとめちゃくちゃログが流れるのでなにか間違ってる気もする
  const { t } = use(useTranslation({ lang, translationDef }))

  return <p style={{ color: 'blue' }}>{t('myBirthday')}</p>
}
