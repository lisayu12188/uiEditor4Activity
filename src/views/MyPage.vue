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
import paragraph2 from '../components/paragraph/paragraph2'
import picTitle from '../components/title/picTitle'
import title1 from '../components/title/title1'
import img702 from '../components/image/img702'
import space from '../components/trims/space'


export default {
  props: {
    components: Array
  },

  components: {
    headerBannerImg1,
    blackFooter,
    whiteFooter,
    paragraph1,
    paragraph2,
    picTitle,
    title1,
    img702,
    space
  },



}
</script>
<style scoped lang="scss">

</style>
