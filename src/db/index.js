import { openDB } from 'idb'

import { STORE_NAME as EPITHET_STORE, IEpithetStore } from './epithets'

// TODO Add Schema
const db = openDB('castra', 1, {
  upgrade(db) {
    db.createObjectStore(EPITHET_STORE, {
      keyPath: 'id',
      autoIncrement: true,
    })
  },
})

const epithetStore = IEpithetStore({ db })

export { epithetStore }
