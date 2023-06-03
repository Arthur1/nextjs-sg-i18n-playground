const ja = {
  translation: {
    greeting: 'こんにちは、世界！',
  },
} as const

const en = {
  translation: {
    greeting: 'Hello, world!',
  },
} as const

const translationDef = { ja, en } as const

export default translationDef
