<template>
    <div>
        <section>
            <a href="/" class="logo">
                <svg class="animation" height="60">
                    <text
                        stroke-dasharray="90 310"
                        stroke-width="1px"
                        text-shadow="0 0 1px #9b59b6"
                        stroke="#9b59b6"
                        fill="#fafafa"
                        text-transform="uppercase"
                        y="80%"
                        x="50%"
                        text-anchor="middle"
                        style="font-size: 30px"
                    >
                        DuoLa口袋不放糖
                        <animate
                        attributeName="stroke-dashoffset"
                        begin="-4s"
                        dur="8s"
                        from="0"
                        to="-400"
                        repeatCount="indefinite"
                        />
                    </text>
                    <text
                        stroke-dasharray="90 310"
                        stroke-width="1px"
                        text-shadow="0 0 1px #9b59b6"
                        stroke="#9b59b6"
                        fill="#414141"
                        text-transform="uppercase"
                        y="80%"
                        x="50%"
                        text-anchor="middle"
                        style="font-size: 30px"
                    >
                        DuoLa口袋不放糖
                        <animate
                        attributeName="stroke-dashoffset"
                        begin="-8s"
                        dur="8s"
                        from="0"
                        to="-400"
                        repeatCount="indefinite"
                        />
                    </text>
                </svg>
            </a>
            <p>我要上九天揽月，我要下五洋捉鳖~</p>
        </section>
    </div>
</template>

<script>

export default {
    props: {

    },

    data() {
        return {

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

.logo {
    display: inline-block;
    position: relative;
}

.logo::after {
    content: '';
    width: 300px;
    height: 1px;
    background-color: #c1c1c1;
    position: absolute;
    bottom: -20px;
    left: 0;
}

p {
    margin: 0;
    text-align: center;
    position: relative;
    top: 30px;
}

</style>
