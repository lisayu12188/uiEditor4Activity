<template>
  <el-form ref="form" label-width="70px" label-position='left' size="small">

  <el-form-item label="背景：" >
    <el-color-picker v-model="backgroundColor"></el-color-picker>
  </el-form-item>

</el-form>
</template>

<script>

import { mapState } from 'vuex'

  export default {
    data() {
      return {

      }
    },
    computed:{...mapState([
      'selectedCompIndex',
      'myPageComps'
    ]),


    backgroundColor:{
      get(){
        console.log(this.myPageComps)
        return this.myPageComps[this.selectedCompIndex]['data']['backgroundColor']
      },
      set(value){
        this.$store.commit('changeValue',{key:'backgroundColor',value:value} )
      }
    },





  },
    methods:{
      setMarginTop(value){
        this.$store.commit('changeStyle',{key:'margin',subKey:'top',value:value} )
      },
      setMarginBottom(value){
        this.$store.commit('changeStyle',{key:'margin',subKey:'bottom',value:value} )
      },
      setMarginLeft(value){
        this.$store.commit('changeStyle',{key:'margin',subKey:'left',value:value} )
      },
      setMarginRight(value){
        this.$store.commit('changeStyle',{key:'margin',subKey:'right',value:value} )
      },

      setPaddingTop(value){
        this.$store.commit('changeStyle',{key:'padding',subKey:'top',value:value} )
      },
      setPaddingBottom(value){
        this.$store.commit('changeStyle',{key:'padding',subKey:'bottom',value:value} )
      },
      setPaddingLeft(value){
        this.$store.commit('changeStyle',{key:'padding',subKey:'left',value:value} )
      },
      setPaddingRight(value){
        this.$store.commit('changeStyle',{key:'padding',subKey:'right',value:value} )
      },


    }
  }




</script>
<style scoped="">
.box-width{
  width: 90px;

}
.num-box{
  top: -11px;
}
.color-picker{
  margin-bottom:10px;
}



</style>
