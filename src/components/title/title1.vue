<template>
  <h2  class='title' alt=""
  :style="{
    color:value.color,
  }">
  {{value.text}}
</h2>


</template>


<script>
export default {
  name: 'title1',

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
    font-size: 0.5600rem;
    color: #859db9;
    line-height: 12.8px;
    line-height: 0.8000rem;
    text-align: center;
    line-height: 1.5;
}

</style>
