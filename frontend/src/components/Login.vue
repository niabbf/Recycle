<template>
  <div class="full-screen">
    <div class="header">
      <mu-appbar style="width: 100%" color="primary">
      </mu-appbar>
    </div>
    <mylogo class="margin-top-40"></mylogo>
    <div>
      <mu-container class="margin-top-40">
        <mu-form ref="form" :model="form" class="mu-form">
          <mu-form-item label="用户名" prop="username" :rules="usernameRules">
            <mu-text-field v-model="form.username" prop="username"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="密码" prop="password" :rules="passwordRules" @keyup.enter.native="submit()">
            <mu-text-field v-model="form.password" prop="password" :type="visibility_pwd?'text':'password'" :action-icon="visibility_pwd?':iconfont icon-invisible':':iconfont icon-visible'" :action-click="() => visibility_pwd=!visibility_pwd"></mu-text-field>
          </mu-form-item>
          <mu-form-item>
            <div class="login-btn">
              <mu-button color="primary" @click="submit">
              登录
              </mu-button>
            </div>
          </mu-form-item>
        </mu-form>
        <span>没有账号? &nbsp;&nbsp;|</span>
        <mu-button flat color="primary" @click="toSignUp">
            注册&nbsp;<mu-icon value=":iconfont icon-right-arrow"></mu-icon>
        </mu-button>
        <mu-dialog title="Fail" width="360" :open.sync="showDialog">
          {{dialogText}}
          <mu-button slot="actions" flat color="primary" @click="showDialog=false">Close</mu-button>
        </mu-dialog>
      </mu-container>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      visibility_pwd: false,
      showDialog: false,
      dialogText: '',
      form: {
        username: '',
        password: ''
      },
      usernameRules: [
        { validate: val => !!val, message: '用户名为空' }
      ],
      passwordRules: [
        { validate: val => val.length >= 6, message: '密码长度应大于5' }
      ]
    }
  },
  methods: {
    ...mapActions('user', ['loginUser']),
    submit () {
      this.$refs.form.validate().then(result => {
        if (result === true) {
          this.loginUser({ user: this.form.username, password: this.form.password, callback: this.alertLoginResult })
        }
      })
    },
    alertLoginResult (text) {
      if (text === 'success')
        this.$router.replace('/')
      else {
        this.dialogText = text
        this.showDialog = true
      }
    },
    toSignUp () {
      this.$router.replace('/signup')
    }
  }
};
</script>

<style scoped>
.full-screen {
  height: 100%;
  width: 100%;
  position: 100%;
  top: 0;
  bottom: 0;
}
.header {
  height: 60px;
  text-align: center;
}
.margin-top-40 {
  margin-top: 40px;
}
.mu-form {
  margin-left: 10%;
  text-align: left;
  width: 60%;
  margin: 0 auto;
  max-width:460px;
  white-space: nowrap;
}
.login-btn {
  position: absolute;
  left: 50%;
  transform:translateX(-50%);
  margin-top: 10px;
}
</style>
