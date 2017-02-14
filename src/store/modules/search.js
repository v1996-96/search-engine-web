import { Search } from '../../api'

const state = {
  isSearching: false,
  query: '',
  results: []
}

const getters = {
  queryInfo (state) {
    if (state.query !== '') {
      if (state.results.length > 0) {
        return 'Записи найдены по запросу: ' + state.query
      } else {
        return 'По запросу ' + state.query + ' документы не найдены'
      }
    } else return ''
  }
}

const actions = {
  run (context, query) {
    context.commit('setSearching', query)

    return new Promise((resolve, reject) => {
      Search().run({ query: query }).then((response) => {
        if (typeof response.body.list !== 'undefined') {
          context.commit('setResult', response.body.list)
          resolve()
        } else {
          reject()
        }
      }).catch((info) => {
        context.commit('setResult', [])
        reject(info)
      })
    })
  }
}

const mutations = {
  setSearching (state, query) {
    state.isSearching = true
    state.query = query
  },

  setResult (state, data) {
    state.isSearching = false
    state.results = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
