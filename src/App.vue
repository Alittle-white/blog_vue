<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <header-bar></header-bar>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from './components/layout/Header'
import FooterBar from './components/layout/Footer'
export default {
  data(){
    return{

    }
  },
  components:{
    HeaderBar,
    FooterBar
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0;
}

#nav {
  /* padding: 30px; */

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
