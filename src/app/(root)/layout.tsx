import RootLayout, { type RootLayoutProps } from '../[lang]/layout'
import { defaultLanguage } from '../_hooks/i18n'

type DefaultRootLayoutProps = Omit<RootLayoutProps, 'params'>

export default async function DefaultIndexPage({ children }: DefaultRootLayoutProps) {
  return await RootLayout({
    params: {
      lang: defaultLanguage,
    },
    children,
  })
}
