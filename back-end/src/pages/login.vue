<template>
  <div class="login_container">
    <div class="login_title">后台管理系统</div>
    <div class="login_form">
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from '../api/getData'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const res = await login({username: this.loginForm.username, password: this.loginForm.password})
          console.log(res)
        }
      })
      // this.$router.push('manage')
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
  margin: 260px auto;
  width: 450px;
  padding: 35px 35px 15px 35px;
  background: #d5d5d5;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .login_title{
    font-size: 22px;
    padding: 15px 0px;
  }
}
</style>
