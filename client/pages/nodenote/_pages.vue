<template>
  <div>
    <LIST :list="list" />
  </div>
</template>

<script>
import LIST from '~/components/list'
let $ = null;
if (process.client) {
  $ = args => document.querySelectorAll(args)[0];
}

export default {
  transition(to, from) {
    if (!from) return "slide-left";
    return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  },

  props: {},

  data() {
    return {
      list: [
        {
          time: "2019-01-01",
          title: "webpack引入iconfont",
          abstract:
            "如果这一关没有练出手，没有掌握其要旨，那么在以后的科研中定会存在很大的缺陷。",
          id: "1"
        }
      ],
      limit: 10,
      counts: 0
    };
  },

  components: {
      LIST
  },

  async asyncData({ $axios, route }) {
    const data = {
      page: route.params.pages || 1,
      limit: 10,
      type: 3
    };
    return $axios.get("/jsnote/list", { params: data }).then(res => {
      return {
        list: res.data.list,
        counts: res.data.counts
      }
    })
  },

  mounted() {
    const that = this;
    const child = $(".box").childNodes; //不被回收的变量
    that.setOpacity(child);
    document.body.onscroll = function() {
      const st = document.documentElement.scrollTop;
      that.setOpacity(child);
    };
    this.$emit("counts", this.counts);

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

</style>
