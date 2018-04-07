<template>
<div>
  <div class="mycomponent-wrapper " v-for='(myPageComp,index) in components' @click='getSelectedIndex(index)'>
    <div :is='myPageComp.name' class=" mycomponent div1" v-model='myPageComp.data'>
      {{myPageComp.name}}
    </div>
  </div>
</div>
</template>
<script>
// import {
//   mapState
// } from 'vuex' // 不用vuex， 用生成的json文件
import headerBannerImg1 from '../components/header/headerBannerImg1'
import whiteFooter from '../components/footer/blackFooter'
import blackFooter from '../components/footer/whiteFooter'
import paragraph1 from '../components/paragraph/paragraph1'
import picTitle from '../components/title/picTitle'
import title1 from '../components/title/title1'

// 从服务器获取以下json文件
// var myPageComps = {
//   code: '', //活动code
//   pageId: '', //页面埋点
//   title: '测试', //页面标题
//   bodyColor:'#fff',
//   share: {
//     link: '',
//     title: "糖尿病知识百科考试，快来参加！",
//     desc: "来答题，看看你对糖尿病百科了解多少？",
//     content: "来答题，看看你对糖尿病百科了解多少？",
//     imageUrl: ''
//   },
//
//   components: [ //组件
//     {
//       name: 'headerBannerImg1',
//       data: {
//         src: '//static.qa.91jkys.com/index/49bfad6d-cd15-4ce0-8375-6a9511d88575.jpg',
//       }
//     },
//     {
//       name: 'paragraph1',
//       data: {
//         text: '糖尿病是一种代谢紊乱综合征，除血糖高以外，往往还同时伴有血脂代谢异常等，共同构成了糖尿病慢性并发症的高危因素。糖尿病是一种代谢紊乱综合征，除血糖高以外，往往还同时伴有血脂代谢异常等，共同构成了糖尿病慢性并发症的高危因素。',
//       }
//     },
//     {
//       name: 'whiteFooter',
//       data: {
//         backgroundColor: '',
//       }
//     },
//
//   ]
// }



export default {
  props: {
    components: Array
  },

  components: {
    headerBannerImg1,
    blackFooter,
    whiteFooter,
    paragraph1,
    picTitle,
    title1,
  },



}
</script>
<style scoped lang="scss">

</style>
