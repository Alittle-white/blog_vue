<template>
  <div class="about">
    <div>功能建设中</div>
    <!-- <button @click="send">发送留言</button> -->
  </div>
</template>

<script>
import { index } from '@/api/index1'
import { banner } from "../api/api";
export default {
  data() {
    return {}
  },
  methods: {
    send() {
      // //调用
      // index({ id: 2 }).then((res)=>{

      // })


    banner().then((res) => {
        console.log(res);
      });


      // let url = 'http://120.24.252.91:3000/get'
      // this.axios
      //   .get(url)
      //   .then((res) => {
      //     //请求成功，触发then中的函数
      //     console.log(res)
      //   })
      //   .catch((error) =>
      //     //请求失败，触发catch中的函数 可省略
      //     console.log(error)
      //   )
    },

  },
}
</script>
