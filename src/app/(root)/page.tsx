import IndexPage from '../[lang]/page'
import { defaultLanguage } from '../_hooks/i18n'

export default async function DefaultIndexPage() {
  return await IndexPage({
    params: {
      lang: defaultLanguage,
    },
  })
}
