import Vue from 'vue'
import Router from 'vue-router'
import Search from 'components/Search'
import Upload from 'components/Upload'
import Files from 'components/Files'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/files',
      name: 'Files',
      component: Files
    }
  ]
})
