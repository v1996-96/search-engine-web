<template>
  <div class="row">
    <div class="col-lg-8 col-md-10 col-sm-12
                        col-lg-offset-2 col-md-offset-1">
      <div class="file-add">
        <h3 class="text-center">Добавление документа</h3>
        <br>
        <form class="form-horizontal" id="doc_form" enctype='multipart/form-data'>
          <div class="form-group">
            <label for="input-file" class="col-sm-2 control-label">Файл</label>
            <div class="col-sm-8">
              <input type="file" name="file" style="margin-top: 6px" id="input-file">
            </div>
          </div>
          <div class="form-group">
            <label for="input-title" class="col-sm-2 control-label">Название</label>
            <div class="col-sm-8">
              <input type="text" name="title" class="form-control" id="input-title">
            </div>
          </div>
          <div class="form-group">
            <label for="input-desc" class="col-sm-2 control-label">Описание</label>
            <div class="col-sm-8">
              <textarea name="description" class="form-control" id="input-desc"></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-xs-12">
      <div class="show-more">
        <a href="#" v-on:click.prevent="upload" class="btn btn-primary btn-block">Загрузить</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'upload',
    methods: {
      upload () {
        let form = document.getElementById('doc_form')
        let formData = new FormData(form)

        this.$store.dispatch('files/upload', formData).then(() => {
          form.reset()
          alert('Файл успешно загружен')
        }).catch((info) => {
          alert('При загрузке файла произошла ошибка ' + info.toString())
        })
      }
    }
  }

</script>
