import Vue from 'vue'

export const REMOTE_HOST = 'http://search-engine:8080'

export const Documents = () => {
  return Vue.resource(REMOTE_HOST + '/document', {}, {
    getMultiple: { method: 'GET' },
    upload: { method: 'POST' },
    get: { method: 'GET', url: REMOTE_HOST + '/document{/id}' },
    startIndexing: { method: 'POST', url: REMOTE_HOST + '/document{/id}' }
  })
}

export const Search = () => {
  return Vue.resource(REMOTE_HOST + '/search', {}, {
    run: { method: 'GET' }
  })
}
