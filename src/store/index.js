import Vue from 'vue'
import Vuex from 'vuex'

import search from './modules/search'
import files from './modules/files'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search,
    files
  }
})
