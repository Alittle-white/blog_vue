<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="main">
      <div class="about">
        <div>关于我</div>
      </div>
      <div class="connect">
        <div>联系我</div>
      </div>
      <div class="about">
        <div>动态</div>
      </div>
      <div class="connect">
        <div>最新文章</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background: #f9fafe;

  .main {
    width: 1200px;
    margin: 0 auto;
    .about {
      height: 200px;
      text-align: left;
      background: rgb(241, 240, 240);
      padding: 10px;
    }
    .connect {
      height: 200px;
      text-align: left;
      background: rgb(228, 229, 228);
      padding: 10px;
    }
  }
}

@media screen and (max-width:1200px){
  .home{
    .main{
      width: 100%;
      /* padding: 0 20px; */
      box-sizing: border-box;
    }
  }
}
</style>
