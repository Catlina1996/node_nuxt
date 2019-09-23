<template>
    <div class="theme">
        <img :src="themeSrc" @click="changeTheme" alt="">
    </div>
</template>

<script>
import theme from 'muse-ui/lib/theme'
const Cookie = process.client? require('js-cookie') : undefined

export default {
    props: {

    },

    data() {
        return {
            themeColor: 'light',
            themeSrc: require('../assets/themeLight.png'),
            nowDate: ''
        }
    },

    components: {

    },

    mounted() {
        this.setTheme()
    },

    methods: {
        changeTheme() {
            if(this.themeColor == 'light') {
                this.themeColor = 'dark'
                theme.use('dark')
                Cookie.set('theme', 'dark', {  expires: 3 })
            } else {
                this.themeColor = 'light'
                theme.use('light')
                Cookie.set('theme', 'light', {  expires: 3 })
            }
        },

        setTheme() {
            if(Cookie.get('theme')) {
                this.themeColor = Cookie.get('theme')
                return
            }
            const date = new Date()
            const h = date.getHours()
            if(h > 20 || h < 5) this.themeColor = 'dark'    // 晚上
            else this.themeColor = 'light'                  // 白天
        }
    },
    
    watch: {
        themeColor: {
            handler(val) {
                if(!process.client) return
                if(val == 'light') {
                    this.themeSrc = require('../assets/themeLight.png')
                    theme.add('tealLight', {
                        primary: '#2196f3',
                        secondary: '#606975',
                        success: '#4caf50',
                        warning: '#ffeb3b',
                    }, 'light')
                    theme.use('tealLight')
                }
                if(val == 'dark') {
                    this.themeSrc = require('../assets/themeDark.png')
                    theme.add('tealDark', {
                        primary: '#2196f3',
                        secondary: '#b5b5b5',
                        success: '#4caf50',
                        warning: '#ffeb3b',
                    }, 'dark')
                    theme.use('tealDark')
                }
            },
            immediate: true
        }
    }
}
</script>


<style scoped lang='scss'>

    .theme {
        height: 50px;
        margin-right: 10px;
        img {
            height: 100%;
            cursor: pointer;
        }
    }
    

</style>
