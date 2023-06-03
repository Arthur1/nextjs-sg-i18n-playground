import { nonDefaultLanguages, useTranslation } from '../_hooks/i18n'
import translationDef from './translationDef'

export const generateStaticParams = async () => nonDefaultLanguages.map(lang => ({ lang }))

type IndexPageProps = Readonly<{
  params: {
    lang: string
  }
}>

export default async function IndexPage({ params }: IndexPageProps) {
  const { lang } = params
  const { t } = await useTranslation({ lang, translationDef })
  return (
    <main>
      <h1>{t('greeting')}</h1>
    </main>
  )
}
