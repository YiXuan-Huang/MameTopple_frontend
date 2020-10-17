<template>
  <div class="home">
    帳號：<input type="text" v-model="account" /> 密碼：<input
      type="text"
      v-model="password"
    />
    <button @click="login">登入</button>
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { LoginPageService } from "../services/LoginPageService";

export default {
  name: "Home",
  data() {
    return {
      account: "string",
      password: "string",
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    async login() {
      var payload = {
        account: this.account,
        password: this.password,
      };
      var loginRes = await LoginPageService.login1(payload);
      console.log("loginRes");
      console.log(loginRes);
    },
  },
};
</script>
