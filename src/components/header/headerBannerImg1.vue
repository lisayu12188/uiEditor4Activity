<template>
  <img :src="imgSrc" alt="" class="banner">
</template>


<script>
import imgSrc from '../../assets/img/banner.jpg'
export default {
  name: 'headerBannerImg1',

  data () {
    return {
      imgSrc: imgSrc,
    }
  },

  methods:{



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  width: 10rem;
}


</style>
