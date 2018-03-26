<template>
  <p class="p-text">
    {{value.text}}
  </p>
</template>


<script>
import imgSrc from '../../assets/img/banner.jpg'
import { mapState } from 'vuex'
export default {
  name: 'paragraph1',

  data () {
    return {

    }
  },
  props:['value'],
  // computed:{
  //   ...mapState({
  //     selectedCompIndex:'selectedCompIndex',
  //     myPageComps:'myPageComps',
  //   }),
  //   myData(){
  //     return this.myPageComps[this.selectedCompIndex]['data'];
  //   },
  //
  //
  //
  // },




  methods:{




  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-text{
  width: 10rem;
font-size: 0.4800rem;
color: #333333;
line-height: 0.8533rem;
padding: 0 0.3200rem;
}


</style>
