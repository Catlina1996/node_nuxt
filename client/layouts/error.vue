<template>
  <section class="errorBox">
    <div class="error">
      <div>
        <h1>{{error.statusCode}}</h1>
      </div>
      <nuxt-link to="/">返回首页</nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: "error",
    head() {
      return {
        titleTemplate: this.error.statusCode + '：页面出错了', // set a title
      }
    },
    props: ['error'],
    data() {
      return {

      }
    },

    mounted() {

    },

    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .errorBox {
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .error {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        max-width: 300px;
        max-height: 200px;
        margin: 20px 0;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      h2 {
        color: #828187;
        font-size: 20px !important;
      }
      h2:hover {
        cursor: pointer;
        user-select: none;
      }

      h1 {
        font-size: 50px !important;
        color: #828187 !important;
      }

      ul {
        li {
          a {
            font-size: 18px !important;
            color: #828187;
            text-decoration: underline;
          }
          a:hover {
            color: #c8b5bb;
          }
        }
      }
    }
  }

</style>
