<template>
  <img :src="value.src" alt="" class="banner">
</template>


<script>

export default {
  name: 'headerBannerImg1',

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
.banner{
  width: 10rem;
}


</style>
