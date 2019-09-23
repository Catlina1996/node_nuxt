<template>
  <div class="components-container">
    <h4>Hello&nbsp;&nbsp;开发者！今天又有什么要分享的呢？</h4>
    <mu-container class="titleContainer">
      <mu-paper :z-depth="2">
        <mu-text-field placeholder="标题  想说点什么？" solo full-width class="divider-form" v-model="title"></mu-text-field>
        <mu-divider></mu-divider>
        <mu-text-field placeholder="描述  你写或者不写我都在这里" solo full-width class="divider-form" v-model="abstract"></mu-text-field>
      </mu-paper>
    </mu-container>
    <mu-select label="写到哪儿？" v-model="normal" full-width @change="change">
      <mu-option v-for="(option, index) in options" :key="index" :label="option.value" :value="option.value" ></mu-option>
    </mu-select>
    <div class="rightEditor">
      <tinymce :height="600" v-model="content" :id="'write'" />
    </div>
    <!-- <div class="editor-content" v-html="content"/> -->
    <div class="submit pointer">
      <img class="pointer submitBtn" @click="submit" src="../assets/submit_default.png" alt="">
    </div>
    <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
      {{msg}}
      <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
import Tinymce from "~/components/Tinymce"
let $ = null
if(process.client) {
  $ = args => document.querySelectorAll(args)[0]
}

export default {
  name: "TinymceDemo",
  components: { Tinymce },
  head: {
    script: [
      {
        src: "/tinymce4.7.5/tinymce.min.js"
      }
    ]
  },
  data() {
    return {
      title: '',
      abstract: '',
      type: 1,
      content: ``,
      options: [{
        type: 1,
        value: 'Javascript'
      }, {
        type: 2,
        value: 'CSS'
      }, {
        type: 3,
        value: 'Node'
      }, {
        type: 4,
        value: 'learning English'
      }],
      normal: '写到哪儿？',
      msg: '',
      openSimple: false
    }
  },

  mounted() {
    $(".submitBtn").onmouseover = () => {

    }
  },

  methods: {
    submit() {
      const data = {
        title: this.title,
        abstract: this.abstract,
        type: this.type,
        content: this.content
      }
      this.$axios.post('/jsnote/write', data).then(res => {
        console.log(res)
        if(res.status == 200) {
          this.openSimpleDialog()
        }
      })
    },

    openSimpleDialog () {
      this.openSimple = true;
    },

    closeSimpleDialog () {
      this.openSimple = false;
    },

    change(val) {
      console.log(val)
      this.options.forEach((item, index) => {
        if(item.value === val) this.type = item.type
      })
    }
  }
}
</script>

<style scoped lang="scss">
.components-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  h4 {
    text-align: center;
    margin-bottom: 40px;
  }
  .titleContainer {
    margin-bottom: 20px;
    .divider-form {
      padding-left: 20px;
    }
  }
  
  .editor-content {
    width: 49%;
  }
  .rightEditor {
    width: 100%;
  }
  .submit {
    position: fixed;
    right: 10%;
    bottom: 20%;
    img {
      width: 60px;
    }
  }
}
</style>

