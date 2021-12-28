import { createStore, Store, useStore as useVuexStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from './user/user'
import cart from './modules/cart'
import category from './modules/category'
import { IStoreType, IRootState } from './types'

const store = createStore<IRootState>({
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedState({
      key: 'erabbit-client-pc-124-store',
      paths: ['user', 'cart']
    })
  ]
})

export function userStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store