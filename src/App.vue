<template>
  <div>
    <se-nav></se-nav>
    <div class="container" style="margin-top: 45px;">
      <router-view></router-view>
    </div>
    <div v-if="indexing" class="info-block">
      Индексация файла
    </div>
  </div>
</template>

<script>
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min.js'
import './assets/styles.css'

import Nav from './components/Nav'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    'se-nav': Nav
  },
  computed: mapState({
    indexing: s => s.files.fileProcessing
  })
}
</script>

