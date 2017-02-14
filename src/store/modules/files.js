import { Documents } from '../../api'

const state = {
  fileProcessing: false,
  list: []
}

const getters = {}

const actions = {
  upload (context, formData) {
    return new Promise((resolve, reject) => {
      Documents().upload(null, formData).then((response) => {
        if (typeof response.data.success !== 'undefined') {
          resolve(response.data)
        } else {
          reject()
        }
      }).catch((info) => {
        console.log(info)
        reject(info)
      })
    })
  },

  getAll (context) {
    return new Promise((resolve, reject) => {
      Documents().getMultiple({ all: 1 }).then((response) => {
        if (typeof response.body.list !== 'undefined') {
          context.commit('setList', response.body.list)
          resolve()
        } else {
          reject()
        }
      }).catch((info) => {
        console.log(info)
        reject(info)
      })
    })
  },

  startIndexing (context, id) {
    context.commit('setFileProcessing', true)

    return new Promise((resolve, reject) => {
      Documents().startIndexing({ id: id }, {
        startIndexing: true
      }).then((response) => {
        console.log(response)
        context.commit('setFileProcessing', false)
        resolve()
      }).catch((info) => {
        console.log(info)
        context.commit('setFileProcessing', false)
        reject(info)
      })
    })
  }
}

const mutations = {
  setFileProcessing (state, status) {
    state.fileProcessing = status
  },

  setList (state, list) {
    state.list = list
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
