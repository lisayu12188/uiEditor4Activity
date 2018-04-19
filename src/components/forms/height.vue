<template>
    <div>
      高度(px)
      <el-input-number :value="height" ref="height" label='height' controls-position="right"  @change="setHeight" size="mini" class="box-width" ></el-input-number>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed:{...mapState({
    selectedCompIndex:'selectedCompIndex',
    height:state => state.myPageComps[state.selectedCompIndex]['data']['height'],
    }),

  },
  methods:{
    setHeight(value){
      this.$store.commit('changeValue',{key:'height',value:value} )
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
