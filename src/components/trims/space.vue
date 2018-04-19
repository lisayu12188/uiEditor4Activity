<template>
  <div>
    <p class="space"  :style="{height:height+'rem'}"></p>
  </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
  name: 'space',

  data () {
    return {

    }
  },
  props:['value'],
  computed:{

    height(){
      return this.value.height/75 //px换算成rem，除以75
    },



  },




  methods:{




  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space{
  width: 10rem;
}


</style>
