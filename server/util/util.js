class util {
    constructor() {

    }

    setTime(str) { //转换时间格式
        let newStr = ''
        const date = new Date(str)
        const y = date.getFullYear()
        const m = date.getMonth() + 1
        const d = date.getDate()
        if (y == new Date().getFullYear()) newStr = `${m}-${d}`
        else newStr = `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`
        return newStr
    }
}

module.exports = util