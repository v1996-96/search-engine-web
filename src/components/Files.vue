<template>
  <table class="table">
    <thead>
      <th>#</th>
      <th>Название</th>
      <th>Расширение</th>
      <th>Дата добавления</th>
      <th>Действия</th>
    </thead>
    <tbody>
      <tr v-for="row in list" :class="{ danger: row.indexed == 0 }">
        <td>{{ row.id }}</td>
        <td>{{ row.title }}</td>
        <td><span class="badge">{{ row.ext }}</span></td>
        <td>{{ row.create_time }}</td>
        <td>
          <a v-on:click.prevent="startIndexing(row.id)" v-if="row.indexed == 0"
             href="#" class="btn btn-default btn-xs">Индексировать</a>
        </td>
      </tr>
    </tbody>
  <table>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'se-files-list',
    computed: mapState({
      list: s => s.files.list
    }),
    methods: {
      async startIndexing (id) {
        await this.$store.dispatch('files/startIndexing', id)
        this.$store.dispatch('files/getAll')
      }
    },
    created () {
      this.$store.dispatch('files/getAll')
    }
  }
</script>
