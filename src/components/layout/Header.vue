<template>
  <div class="box-container">
    <div class="nav-box">
      <div class="logo">Blog(网站建设中)</div>
      <div class="nav-list">
        <div
          v-for="(item, index) in navList"
          :key="index"
          class="nav-item"
          :class="{ 'nav-item-active': currentRouter === item.path }"
          @click="jump(item.path)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: '首页',
          path: '/',
        },
        {
          title: '关于我',
          path: '/about',
        },
        {
          // title: '技术分享',
          title: '动态',
          path: '/share',
        },
        // {
        //   title: 'Pic',
        //   path: '/about',
        // },
        {
          title: '联系我',
          path: '/contact',
        },
      ],
      currentRouter: '',
    }
  },
  mounted() {
    this.getCurrentRouter()
  },
  methods: {
    getCurrentRouter() {
      let path = window.location.pathname
      console.log('path', path)
      this.currentRouter = path
    },
    jump(path) {
      let currentPath = this.$route.path
      if (currentPath === path) return
      this.$router.push(path)
      this.currentRouter = path
    },
  },
}
</script>

<style lang='scss' scoped>
.box-container {
  width: 100%;
  height: 80px;
  background: #638dff;
  box-sizing: border-box;
  .nav-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    /* border: 1px solid black; */
    font-size: 14px;

    .logo {
      font-size: 24px;
      font-weight: bold;
      color: white;
    }
    .nav-list {
      display: flex;
      align-items: center;
      .nav-item {
        margin-left: 40px;
        cursor: pointer;
        color: white;
      }
      .nav-item:hover {
        color: rgb(72, 51, 187);
      }
      .nav-item:active {
        color: rgb(72, 51, 187);
      }
      .nav-item-active {
        color: rgb(72, 51, 187);
      }
    }
  }
}

@media screen and (max-width:1200px){
  .box-container{
    .nav-box{
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
}
</style>
