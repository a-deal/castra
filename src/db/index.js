import { openDB } from 'idb'

const EPITHET_STORE = 'epithets'

// TODO Add Schema

const dbPromise = openDB('castra', 1, {
  upgrade(db) {
    db.createObjectStore(EPITHET_STORE, {
      keyPath: 'id',
      autoIncrement: true,
    })
  },
})

export const epithets = {
  async add(...values) {
    const db = await dbPromise
    // TODO Add transaction check
  },
  async update(...newValues) {
    const db = awaitdbPromise
  },
}
