<template>
  <div class="search-result clearfix with-ext">
    <div class="file-ext" v-bind:class="extClass"></div>

    <h3>{{ result.title }}</h3>
    <p>{{ result.description }}</p>
    <div class="row">
      <div class="col-xs-4">
        <span class="info">Релевантность: {{ result.score }}</span>
      </div>
      <div class="col-xs-4">
      </div>
      <div class="col-xs-4">
        <a v-bind:href="downloadUrl" target="_blank" class="btn btn-link btn-xs pull-right">Скачать документ</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { REMOTE_HOST } from '../api'

  export default {
    name: 'se-search-result',
    data () {
      return {
        extClass: {
          'pdf': this.result.ext === 'pdf',
          'txt': this.result.ext === 'txt',
          'doc': this.result.ext === 'doc'
        }
      }
    },
    computed: {
      downloadUrl () {
        return REMOTE_HOST + '/' + this.result.url
      }
    },
    props: ['result']
  }

</script>
