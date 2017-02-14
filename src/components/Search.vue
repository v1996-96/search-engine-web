<template>
  <div class="row">
    <div class="col-lg-8 col-md-10 col-sm-12
                        col-lg-offset-2 col-md-offset-1">
      <div class="search-box">
        <div class="input-group">
          <input v-model="searchQuery" type="text" class="form-control input-lg" placeholder="Красноречивый запрос...">
          <span class="input-group-btn">
            <a v-bind:disabled="isSearching" v-on:click.prevent="search" class="btn btn-lg btn-default" href="#">Поиск</a>
          </span>
        </div>
        <br>

        <div v-if="query !== ''">
          <h5 class="text-muted">{{ queryInfo }}</h5>
          <hr>
        </div>
      </div>

      <se-search-result v-for="result in results" :result="result"></se-search-result>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex'
  import SearchResult from './SearchResult'

  export default {
    name: 'se-search',
    computed: {
      ...mapState({
        isSearching: s => s.search.isSearching,
        results: s => s.search.results,
        query: s => s.search.query
      }),
      ...mapGetters({
        queryInfo: 'search/queryInfo'
      })
    },
    data () {
      return {
        searchQuery: ''
      }
    },
    components: {
      'se-search-result': SearchResult
    },
    methods: {
      search () {
        this.$store.dispatch('search/run', this.searchQuery)
        this.searchQuery = ''
      }
    }
  }

</script>
