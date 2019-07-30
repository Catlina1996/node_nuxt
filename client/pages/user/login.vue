<template>
  <div class="container">
    <div class="form row">
      <nuxt-link class="regist" to="/user/regist">注册</nuxt-link>
      <div class="form-horizontal col-md-offset-3" id="login_form">
        <h3 class="form-title">登录</h3>
        <div class="col-md-9">
          <div class="form-group">
            <i class="fa fa-user fa-lg"></i>
            <input class="form-control required" type="text" placeholder="Username" id="username" name="username"
                   autofocus="autofocus" maxlength="20" v-model="name"/>
          </div>
          <div class="form-group">
            <i class="fa fa-lock fa-lg"></i>
            <input class="form-control required" type="password" placeholder="Password" id="password" name="password"
                   maxlength="8" v-model="password"/>
          </div>
          <div class="form-group">
            <label class="checkbox">
              <input type="checkbox" name="remember" value="1"/>记住我
            </label>
          </div>
          <div class="form-group col-md-offset-9">
            <button type="submit" class="btn btn-success pull-right" name="submit" @click="submit()">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined;
  export default {
    name: "login",
    data() {
      return {
        name: '',
        password: ''
      }
    },

    methods: {
      submit() {
        const that = this;
        const data = {
          name: this.name,
          password: this.password
        };
        Cookie.remove('auth');
        this.$axios.post('/login', data).then(res => {
          console.log(res);
          if(res.status == 200) {
            Cookie.set('auth', res.data.token, {  expires: 60 * 60 * 24 });
            that.$router.push({
              path: '/yuntai'
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">

  .form {
    background: rgba(255, 255, 255, 0.2);
    width: 400px;
    margin: 0 auto;
    position: relative;
    #login_form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        margin-top: 10px;
      }
      div {
        button {
          width: 100%;
        }
      }
    }
    .regist {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #47494e;
      text-decoration: none;
    }
    .regist:hover {
      color: orangered;
    }
  }

  /*阴影*/
  .fa {
    display: inline-block;
    top: 27px;
    left: 6px;
    position: relative;
    color: #ccc;
  }

  input[type="text"], input[type="password"] {
    padding-left: 26px;
  }

  .checkbox {
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    input {
      margin-right: 10px;
    }
  }
</style>
