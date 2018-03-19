<template>
  <el-form ref="form" label-width="70px" label-position='left' size="small">
  <el-form-item label="排版：">
    <el-radio-group v-model="textAlign">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="center">居中</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
    </el-radio-group>
  </el-form-item>



  <el-form-item label="外边距：">
    <div>
      上
      <el-input-number :value="margin.top" ref="mTop" label='top' controls-position="right"  @change="setMarginTop" size="mini" class="box-width" ></el-input-number>
      下
      <el-input-number :value="margin.bottom" ref="mBottom" label='bottom' controls-position="right" @change="setMarginBottom" size="mini" class="box-width"></el-input-number>
    </div>


    <div>
      左
      <el-input-number :value="margin.left" ref="mLeft" label='left' controls-position="right" @change="setMarginLeft" size="mini" class="box-width"></el-input-number>
      右
      <el-input-number :value="margin.right" ref="mRight" label='right' controls-position="right" @change="setMarginRight" size="mini" class="box-width"></el-input-number>
    </div>

  </el-form-item>

  <el-form-item label="内边距：" label-suffix='px'>
    <div>
      上
      <el-input-number :value="padding.top" controls-position="right" @change="setPaddingTop" size="mini" class="box-width"></el-input-number>

      下
      <el-input-number :value="padding.bottom" controls-position="right" @change="setPaddingBottom" size="mini" class="box-width"></el-input-number>
    </div>
    <div>
      左
      <el-input-number :value="padding.left" controls-position="right" @change="setPaddingLeft" size="mini" class="box-width"></el-input-number>

      右
      <el-input-number :value="padding.right" controls-position="right" @change="setPaddingRight" size="mini" class="box-width"></el-input-number>
    </div>
  </el-form-item>

  <el-form-item label="背景：" >
    <el-color-picker v-model="backgroundColor"></el-color-picker>
  </el-form-item>

  <el-form-item label="边框：" >
    <el-input-number v-model="borderWidth" controls-position="right"  size="mini" class="box-width num-box" :min="0"></el-input-number>
    <el-select v-model="borderStyle"  placeholder="请选择" size='mini' class="box-width num-box">
     <el-option
       v-for="type in borderTypes"
       :key="type.value"
       :label="type.label"
       :value="type.value">
     </el-option>
   </el-select>

    <el-color-picker v-model="borderColor"></el-color-picker>
  </el-form-item>




</el-form>
</template>

<script>

import { mapState } from 'vuex'
const borderTypes = [
  {value:'none',label:'无'},
  {value:'solid',label:'———'},
  {value:'dashed',label:'-----'}
]
  export default {
    data() {
      return {

        // textAlign:'left',
        background:'',

        border:{
          width:'1',
          value:'none',
          color:''
        },

        borderTypes:borderTypes

      }
    },
    computed:{...mapState({
      selectedCompIndex:'selectedCompIndex',
      // textAlign: state => state.myPageComps[state.selectedCompIndex]['data']['textAlign'],
      margin:state => state.myPageComps[state.selectedCompIndex]['data']['margin'],
      padding:state => state.myPageComps[state.selectedCompIndex]['data']['padding'],

    }),

    textAlign:{
      get(){
        return this.$store.state.myPageComps[this.selectedCompIndex]['data']['textAlign']
      },
      set(value){
        this.$store.commit('changeValue',{key:'textAlign',value:value} )
      }

    },
    backgroundColor:{
      get(){
        return this.$store.state.myPageComps[this.selectedCompIndex]['data']['backgroundColor']
      },
      set(value){
        this.$store.commit('changeValue',{key:'backgroundColor',value:value} )
      }
    },

      borderWidth:{
        get(){
          return this.$store.state.myPageComps[this.selectedCompIndex]['data']['border']['width']
        },
        set(value){
          this.$store.commit('changeStyle',{key:'border',subKey:'width',value:value} )
        }
      },

      borderStyle:{
        get(){
          return this.$store.state.myPageComps[this.selectedCompIndex]['data']['border']['style']
        },
        set(value){
          this.$store.commit('changeStyle',{key:'border',subKey:'style',value:value} )
        }
      },

      borderColor:{
        get(){
          return this.$store.state.myPageComps[this.selectedCompIndex]['data']['border']['color']
        },
        set(value){
          this.$store.commit('changeStyle',{key:'border',subKey:'color',value:value} )
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
