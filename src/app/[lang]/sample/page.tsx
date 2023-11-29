import { nonDefaultLanguages, useTranslation } from '../../_hooks/i18n'
import { LangContextProvider } from '../_components/i18n'
import { Birthday } from './_components/Birthday'
import translationDef from './translationDef'

export const generateStaticParams = async () => nonDefaultLanguages.map(lang => ({ lang }))

type SamplePageProps = Readonly<{
  params: {
    lang: string
  }
}>

export default async function SamplePage({ params }: SamplePageProps) {
  const { lang } = params
  const { t } = await useTranslation({ lang, translationDef })
  return (
    <LangContextProvider lang={lang}>
      <main>
        <h1>{t('title')}</h1>
        <p>{t('myLanguage')}</p>
        <Birthday />
      </main>
    </LangContextProvider>
  )
}
