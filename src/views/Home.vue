<template>
  <div class="home">
    <div class="title">MAME TOPPLE</div>
    <div>
      <b-modal ref="my-modal" hide-footer centered hide-header no-close-on-backdrop>
        <div class="d-block text-center">
          <!-- <b-card no-body>
          <b-tabs content-class="mt-3" align="center" pills card >
            <b-tab title="First" active><p>I'm the first tab</p></b-tab>
            <b-tab title="Second"><p>I'm the second tab</p></b-tab>
          </b-tabs>
           </b-card> -->
          <b-tabs
            active-nav-item-class="font-weight-bold text-uppercase text-danger"
            active-tab-class="font-weight-bold text-success"
            content-class="mt-3"
          >
            <b-tab title="登入" active>
              <!-- <label for=""> 帳號：</label> -->
              <b-row class="my-3 mx-3">
                <b-form-input
                  v-model="account"
                  placeholder="Enter your email"
                ></b-form-input
              ></b-row>
              <!-- <input type="text" v-model="account" />  -->
              <!-- <label for=""> 密碼：</label> -->
              <b-row class="my-3 mx-3">
                <b-form-input
                  v-model="password"
                  type="password"
                  placeholder="Enter your password"
                ></b-form-input>
                <!-- 這邊是要復原的 -->
                <!-- <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-center"
                >
                  Remember Me
                </b-form-checkbox> -->
                <!-- 這邊是要復原的 -->
              </b-row>
              <b-row class="text-center my-3">
                <b-col>
                  <b-button variant="info" @click="login">登入</b-button>
                </b-col>
              </b-row>
              <!-- 密碼：<input type="text" v-model="password"/> -->
            </b-tab>
            <b-tab title="註冊">
              <!-- 這邊是要復原的 -->
              <b-row class="my-3 mx-3">
                <b-form-input
                  v-model="registeraccount"
                  placeholder="Enter your email"
                ></b-form-input
              ></b-row>
              <b-row class="my-3 mx-3">
                <b-form-input
                  v-model="registerpassword"
                  placeholder="Enter your password"
                ></b-form-input
              ></b-row>
              <b-row class="my-3 mx-3">
                <b-form-input
                  v-model="registernickname"
                  placeholder="Enter your nickname"
                ></b-form-input
              ></b-row>
              <b-row class="text-center my-3">
                <b-col>
                  <b-button variant="info" @click="btnregister">註冊</b-button>
                </b-col>
              </b-row>
              <!-- 這邊是要復原的 -->
            </b-tab>
          </b-tabs>
          <!-- <h3>Hello From My Modal!</h3> -->
        </div>

        <!-- <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
          >Close Me</b-button
        > -->
      </b-modal>
    </div>

    <!-- <button @click="login">登入</button>
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </div> -->
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
      registeraccount: "",
      registerpassword: "",
      registernickname: "",
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
    async btnregister() {
      var payload = {
        account: this.registeraccount,
        password: this.registerpassword,
        nickname: this.registernickname,
        avatar: "avatar123",
        win: 0,
        lose: 0,
      };
      var registerRes = await LoginPageService.register(payload);
      console.log("registerRes");
      console.log(registerRes);
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  mounted() {
    this.showModal();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap");
.title,
.start {
  font-family: "Comic Neue", cursive;
  font-size: 120px;
  color: cornflowerblue;
}
.home {
  background-image: url("https://i.imgur.com/6Md6g05.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height:100vh;
}
</style>