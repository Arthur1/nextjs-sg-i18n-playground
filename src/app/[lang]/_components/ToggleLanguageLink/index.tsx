'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { nonDefaultLanguages } from '@/app/_hooks/i18n'

type ToggleLanguageLinkProps = Readonly<{
  children: React.ReactNode
}>

export default function ToggleLanguageLink({ children }: ToggleLanguageLinkProps) {
  const pathname = usePathname()
  const enPrefix = `/${nonDefaultLanguages[0]}`
  let newPathname: string
  if (pathname.startsWith(enPrefix)) {
    newPathname = pathname.substring(enPrefix.length)
  } else {
    newPathname = `${enPrefix}${pathname}`
  }
  return <Link href={newPathname}>{children}</Link>
}
