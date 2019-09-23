<template>
    <div>
        <div class="classfy-list">
            <div class="list" v-for="(item, listIndex) in classfyList" :key="listIndex">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="item.iconFont"></use>
                </svg>
                <nuxt-link class="pointer" :to="item.url">{{item.name}}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    head() {
        return {
            script: [
                {
                    src: '/iconfont/iconfont.js'
                }
            ]
        }
    },

    props: {

    },

    data() {
        return {
            classfyList: [
                {
                    name: 'javascript',
                    iconFont: '#icon-dongman',
                    url: '/'
                },
                {
                    name: 'css',
                    iconFont: '#icon-tengxundongman',
                    url: '/cssnote'
                },
                {
                    name: 'node',
                    iconFont: '#icon-youxi',
                    url: '/nodenote'
                }
            ]
        }
    },

    components: {

    },

    mounted() {

    },

    watch: {

    },

    methods: {

    },
}
</script>


<style scoped lang='scss'>

    .classfy-list {
        width: 100%;
        padding: 0;
        .list {
            height: 50px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            svg {
                width: 2em;
                height: 2em;
                margin-right: 14px;
            }   
            a {
                display: inline-block;
                width: calc(100% - 2em);
            }
        }
    }

</style>
