<template>
    <div class='box-container'>
      <div class="footer-box">
        Copyright 版权所有
      </div>
    </div>
</template>

<script>
  export default {
     data(){
       return{

       }
     },
     created(){

     },
     methods:{

     }
  }
</script>

<style lang='scss' scoped>

.box-container {
  width: 100%;
  height: 40px;
  background: rgb(61, 61, 61);
  box-sizing: border-box;
}

.footer-box{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: rgb(196, 195, 195);
}

</style>
