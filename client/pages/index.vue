<template>
    <div>
        <div class="con-top">
            <nuxt-child @counts_length="setCounts" />
        </div>
        <div class="con-pages">
          <nuxt-link v-if="current > 2" class="pointer" :to="{path: `/`}">回首页</nuxt-link>
          <nuxt-link v-if="current != 1" class="pointer" :to="{path: `/${Number(current) - 1}`}">上一页</nuxt-link>
          <nuxt-link v-if="counts > current * 10" class="pointer" :to="{path: `/${Number(current) + 1}`}">下一页</nuxt-link>
        </div>
        <div class="con-bottom"></div>
    </div>
</template>

<script>

export default {
    props: {

    },

    data() {
        return {
            current: '',
            counts: 5
        }
    },

    components: {

    },

    mounted() {
      
    },

    watch: {
      '$route': {
        handler(val) {
          
          this.current = this.$route.params.pages || 1
        },
        immediate: true
      }
    },

    methods: {
      setCounts(val) {
        console.log(val)
        
        this.counts = val
      }
    },
}
</script>


<style scoped lang='scss'>

    .con-pages {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin: 30px 0;
        margin-top: 50px;
        a {
          margin-right: 20px;
          font-size: 18px;
        }
        a:last-child {
          margin: 0;
        }
    }

</style>
