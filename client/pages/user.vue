<template>
  <div class="loginBox">
    <nuxt-child />
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        name: '',
        password: ''
      }
    },

    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .loginBox {
    width: 100%;
    height: 100%;
    background: url("../assets/1.jpg");
    animation-name: myfirst;
    animation-duration: 20s;
    /*变换时间*/
    animation-delay: 2s;
    /*动画开始时间*/
    animation-iteration-count: infinite;
    /*下一周期循环播放*/
    animation-play-state: running;
    /*动画开始运行*/
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes myfirst {
    0% {
      background: url("../assets/1.jpg");
    }
    20% {
      background: url("../assets/2.jpg");
    }
    40% {
      background: url("../assets/3.jpg");
    }
    60% {
      background: url("../assets/4.jpg");
    }
    80% {
      background: url("../assets/5.jpg");
    }
    100% {
      background: url("../assets/1.jpg");
    }
  }
</style>
