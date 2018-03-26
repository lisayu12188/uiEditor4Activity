<template>
  <img :src="value.src" alt="" class="title">
</template>


<script>

export default {
  name: 'picTitle',

  data () {
    return {

    }
  },
  props:['value'],


  methods:{



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  width: 10rem;
  padding-top:.2667rem;//20px
  padding-bottom:0;
  padding-left:.32rem;//24px
  padding-right:.32rem;
}


</style>
