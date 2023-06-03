const ja = {
  translation: {
    title: 'サンプル',
    myLanguage: '私は日本語を話します。',
  },
} as const

const en = {
  translation: {
    title: 'Sample',
    myLanguage: 'I speak in English.',
  },
} as const

const translationDef = { ja, en } as const

export default translationDef
