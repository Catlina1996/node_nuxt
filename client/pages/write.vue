<template>
  <div class="components-container">
    <div class="editor-content" v-html="content"/>
    <div class="rightEditor">
      <tinymce :height="600" v-model="content" :id="'write'"/>
    </div>
  </div>
</template>

<script>
  import Tinymce from '~/components/Tinymce'

  export default {
    name: 'TinymceDemo',
    components: { Tinymce },
    head: {
      script: [
        {
          src: '/tinymce4.7.5/tinymce.min.js'
        }
      ]
    },
    data() {
      return {
        content: ``
      }
    }
  }
</script>

<style scoped lang="scss">

  .components-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    .editor-content {
      width: 49%;
    }
    .rightEditor {
      width: 49%;
    }
  }
</style>

