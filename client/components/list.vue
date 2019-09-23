<template>
  <div class="box">
    <nuxt-link
      class="con-list pointer"
      v-for="(item, index) in list"
      :key="index"
      :to="{path: `/acticleDetail/${item.id}`}"
    >
      <span class="list-left">{{item.create_time}}</span>
      <div class="list-right">
        <p class="mu-item-title title">{{item.title}}</p>
        <p class="abstract">{{item.abstract}}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
let $ = null;
if (process.client) {
  $ = args => document.querySelectorAll(args)[0];
}

export default {
  transition(to, from) {
    if (!from) return "slide-left";
    return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  },

  props: {
      list: ''
  },

  data() {
    return {
      
    };
  },

  components: {},

  mounted() {
    const that = this;
    const child = $(".box").childNodes; //不被回收的变量
    that.setOpacity(child);
    document.body.onscroll = function() {
      const st = document.documentElement.scrollTop;
      that.setOpacity(child);
    };

  },

  watch: {},

  methods: {
    setOpacity(arr) {
      //设置滤镜模糊度
      //此处接收Nodelist数组
      Array.from(arr).forEach((item, index) => {
        const clientTop = item.getBoundingClientRect().top; //离浏览器可视区域顶部距离
        if (clientTop < 160) {
          item.style.filter = `blur(${(clientTop - 140) * -0.1}px)`;
        } else {
          item.style.filter = `blur(0px)`;
        }
      });
    }
  }
};
</script>


<style scoped lang='scss'>
.con-list {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  position: relative;
  .list-left {
    margin-right: 20px;
  }
  .list-right {
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 10px;
      font-size: 22px;
    }
  }
  &:nth-child(odd) {
    justify-content: flex-start;
    align-items: flex-start;
    &::after {
      content: "";
      width: 70%;
      height: 1px;
      background-color: #ff4081;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  &:nth-child(even) {
    justify-content: flex-end;
    align-items: flex-start;
    &::after {
      content: "";
      width: 70%;
      height: 1px;
      background-color: #ff4081;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
