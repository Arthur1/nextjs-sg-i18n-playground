'use client'

import { type FC, type ReactNode, createContext, useContext } from 'react'

export const LangContext = createContext<string>('')

type LangContextProviderProps = Readonly<{
  lang: string
  children: ReactNode
}>

export const LangContextProvider: FC<LangContextProviderProps> = ({ lang, children }) => (
  <LangContext.Provider value={lang}>{children}</LangContext.Provider>
)
