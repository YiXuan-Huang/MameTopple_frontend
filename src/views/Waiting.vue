<template>
  <div class="home">
    <div class="title">Waiting for players....</div>
    <div class="d-flex">
      <div class="col-3 player" v-for="(item, index) in items" :key="index">
        <div class="one d-flex align-items-center flex-column">
          <div class="Avatar text-center">
            <img
              v-bind:src="item.imageSrc"
              alt=""
              class="w-50 bg-white rounded-circle"
            />
          </div>
          <div class="info justify-content-start">
            <span>name：{{ item.name }}</span>
            <!-- <span>{{ Object.keys(item)[1] }}：{{item.name}}</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { LoginPageService } from "../services/LoginPageService";

export default {
  name: "Waiting",
  data() {
    return {
      items: [
        {
          imageSrc: "https://i.imgur.com/OehAKIV.png",
          name: "Annyyyy",
        },
        {
          imageSrc: "https://i.imgur.com/7bFpMtt.png",
          name: "Annyyyy213123",
        },
      ],
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    getUserAllInfo:async function() {
      var getUserAllInfo = await LoginPageService.getUserAllInfo();
      console.log("getUserAllInfo");
      console.log(getUserAllInfo);
      console.log(getUserAllInfo.data.nickName);
      this.items[0].name=getUserAllInfo.data.nickName
    },
  },
  beforeMount(){
    this.getUserAllInfo();
  }
};
</script>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap"); */
.title {
  font-family: "Comic Neue", cursive;
  font-size: 72px;
  text-align: center;
}
.one {
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 5px hsla(0, 95%, 35%, 1);
  padding: 1em;
  line-height: 1.5em;
}

@keyframes example {
  0% {
    margin-top: 0px;
  }

  50% {
    margin-top: 20px;
  }

  100% {
    margin-top: 0px;
  }
}

@keyframes example1 {
  0% {
    margin-top: 20px;
  }

  50% {
    margin-top: 0px;
  }

  100% {
    margin-top: 20px;
  }
}

.player:nth-child(1) {
  display: inline-block;
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.player:nth-child(2) {
  display: inline-block;
  animation-name: example1;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>