<template>
    <div>
        <div class="playBox pointer" :style="{transform: `rotateZ(${rotateDeg}deg)`}" @click="play">
            <span>{{status ? 'pause' : 'start'}}</span>
        </div>
        <!-- <audio ref="audio" src="http://ting6.yymp3.net:86/new27/zhuangxinyan12/1.mp3" @play="canStart"></audio> -->
    </div>
</template>

<script>

export default {
    props: {

    },

    data() {
        return {
            rotateDeg: 0,
            status: false
        }
    },

    components: {

    },

    mounted() {

    },

    watch: {

    },

    methods: {

        canStart() {
            this.$refs.audio.play()
        },

        play(type) {
            if(type) 
            {
                this.status = !this.status
                if(this.status == false) {
                    this.pause()
                    return
                }
                this.$refs.audio.play()
            }
            if(this.status == false) return
            const that = this
            requestAnimationFrame(that.rotateBtn)
        },

        pause() {
            this.$refs.audio.pause()
        },

        rotateBtn() {
            const that = this
            if(that.status == false) return
            that.rotateDeg += 0.5
            that.play()
        }
    },
}
</script>


<style scoped lang='scss'>

    .playBox {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: brown;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: hue-rotate(60deg);
    }

    .playBox:hover {
        filter: hue-rotate(0);
    }

</style>
