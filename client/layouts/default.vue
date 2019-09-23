<template>
  <div class="main">
    <header class="head mu-item-title" :style="{backgroundColor: bgOpacity}">
      <LOGO />
      <div class="head-right">
        <Theme />
        <MUSIC />
      </div>
    </header>
    <div class="container-box">
      <div class="container-left">
        <LEFT />
      </div>
      <div class="container-middle">
        <nuxt />
      </div>
      <div class="container-right">
        <RIGHT />
      </div>
    </div>
  </div>
</template>
<script>
import LOGO from '~/components/logo'
import MUSIC from '~/components/music'
import Theme from '~/components/theme'
import LEFT from '~/components/index/left.vue'
import RIGHT from '~/components/index/right.vue'


  export default {
    data() {
      return {
        bgOpacity: 1
      }
    },
    components: {
      LOGO,
      MUSIC,
      Theme,
      LEFT,
      RIGHT
    },

    mounted() {

    },

    methods: {
      
    },

    watch: {
      
    }
  }
</script>
<style lang="scss">
html {
  // font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  //   Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}


#__nuxt {
  width: 100%;
  height: 100%;
  #__layout {
    width: 100%;
    height: 100%;
  }
}

#__layout>div {
  width: 100%;
  height: 100%;
}

* {
  letter-spacing: 1px;
  line-height: 150%;
  text-align: justify;
  font-size: 16px;
  box-sizing: border-box;
  font-family: 'JSfont','RHYZT';
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

li {
  list-style: none;
}

.main::after {
  width: 100%;
  height: 100%;
  background-image: url('../static/bg.jpg');
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: 100% 100%;
  content: "";
  background-repeat: no-repeat;
  background-position: left;
  opacity: 0.2;
}

.head {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  overflow: unset;
  .head-right {
    display: flex;
    flex-direction: row;
    width: 120px;
  }
}

.container-box {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  // min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-top: 70px;
  padding: 0 20px;
  .container-left {
    width: 200px;
    position: sticky;
    top: 200px;
    left: 0;
  }
  .container-middle {
    width: 100%;
    padding: 0 20px;
  }
  .container-right {
    width: 300px;
    padding: 15px 10px;
  }
}
</style>
