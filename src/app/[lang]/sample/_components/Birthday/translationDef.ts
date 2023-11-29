const ja = {
  translation: {
    myBirthday: '私の誕生日は11月21日です。',
  },
} as const

const en = {
  translation: {
    myBirthday: 'My birthday is on Nov. 21st.',
  },
} as const

const translationDef = { ja, en } as const

export default translationDef
