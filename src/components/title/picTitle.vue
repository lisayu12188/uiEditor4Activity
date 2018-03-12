<template>
  <img :src="imgSrc" alt="" class="title"
  :style="{
    paddingTop: paddingTop+'rem',
    paddingBottom: paddingTop+'rem',
    paddingLeft: paddingLeft+'rem',
    paddingRight: paddingRight+'rem',



  }">
</template>


<script>
import imgSrc from '../../assets/img/pic-title.png'
export default {
  name: 'picTitle',

  data () {
    return {
      imgSrc: imgSrc,
      paddingTop:.2667,//20px
      paddingBottom:0,
      paddingLeft:.32,//24px
      paddingRight:.32,
    }
  },


  methods:{



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  width: 10rem;
}


</style>
