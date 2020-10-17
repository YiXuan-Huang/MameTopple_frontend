<template>
  <div class="home">
    帳號：<input type="text" v-model="account">
    密碼：<input type="text" v-model="password">
    <button @click="login">登入</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LoginPageService from '../services/LoginPageService'

export default {
  name: 'Home',
    data(){
      return{
          account:'',
          password:''
        }
    },
  components: {
    HelloWorld
  },
    methods:{
      async login(){
          var payload={
              account:this.account,
              password:this.password
          }
          var loginRes = await LoginPageService.login(payload);
          console.log('loginRes');
          console.log(loginRes);
      }
    }
}
</script>
