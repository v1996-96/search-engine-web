<template>
  <nav class="navbar navbar-default">
    <div class="container container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
        <a class="navbar-brand" href="#">Search engine</a>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <div class="navbar-form navbar-right">
          <router-link v-if="showUploadBtn" :to="{ name: 'Upload' }" class="btn btn-primary">
            Загрузить файл
          </router-link>
          <router-link v-if="showFilesBtn" :to="{ name: 'Files' }" class="btn btn-primary">
            Управление файлами
          </router-link>
          <router-link v-if="showHomeBtn" :to="{ name: 'Search' }" class="btn btn-default">
            Вернуться к странице поиска
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'nav',
  data () {
    return {
      showHomeBtn: false,
      showFilesBtn: false,
      showUploadBtn: false
    }
  },
  watch: {
    $route: function (newValue) {
      this.btnStateChange(newValue.name)
    }
  },
  methods: {
    btnStateChange (routeName) {
      if (routeName === 'Search') {
        this.showHomeBtn = false
        this.showFilesBtn = true
      } else {
        this.showHomeBtn = true
        this.showFilesBtn = false
      }

      this.showUploadBtn = (routeName === 'Files')
    }
  },
  created () {
    this.btnStateChange(this.$route.name)
  }
}
</script>
