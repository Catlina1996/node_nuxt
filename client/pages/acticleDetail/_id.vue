<template>
    
</template>

<script>
    export default {
        name: "_id",
        validate ({ params }) {
            return /^\d+$/.test(params.id)
        }
    }
</script>

<style scoped lang="scss">

</style>
