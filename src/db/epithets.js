import stampit from '@stamp/it'

export const STORE_NAME = 'epithets'

export const IEpithetStore = stampit({
  name: 'EpithetStore',
  init({ db }) {
    this.db = db
  },
  methods: {
    async add(...values) {
      ;(await this.db).add(STORE_NAME, { values })
    },
  },
})
