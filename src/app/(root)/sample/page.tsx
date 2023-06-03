import SamplePage from '../../[lang]/sample/page'
import { defaultLanguage } from '../../_hooks/i18n'

export default async function DefaultSamplePage() {
  return await SamplePage({
    params: {
      lang: defaultLanguage,
    },
  })
}
