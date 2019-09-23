<template>
    <div>
        <h4>{{allData.title}}</h4>
        <p>
            <span>更新时间：{{allData.show_time}}</span>
        </p>
        <p>{{allData.abstract}}</p>
        <div v-html="allData.content"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                allData: ''
            }
        },

        async asyncData({ $axios, route }) {
            const url = `/jsnote/detail`
            const data = {
                id: route.params.id
            }
            return $axios.get(url, {params: data}).then(res => {
                return {
                    allData: res.data
                }
            })
        },

        mounted() {
            console.log(this.allData)
        },
    }
</script>

<style scoped lang="scss">

</style>
