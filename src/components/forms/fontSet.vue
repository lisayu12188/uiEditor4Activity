<template>
  <el-form ref="form" label-width="70px" label-position='left' size="small">
    <el-form-item label-width="70px" label="字体：" >
      <el-input-number v-model="font.fontSize" controls-position="right" @change="setFontSize" :min="1" size="mini" class="box-width num-box">
      </el-input-number>

      <el-color-picker v-model="font.textColor" @change="setColor"  class="color-picker"></el-color-picker>
      <el-checkbox-group v-model="font.fontStyles" >
        <el-checkbox-button v-for="fontStyle in fontStylesOptions" :label="fontStyle"  :key="fontStyle">{{fontStyle}}</el-checkbox-button>
      </el-checkbox-group>
    </el-form-item>
</el-form>
</template>
<script>
  const fontStylesOptions = ['粗体', '斜体', '下划线'];

  export default {
    data() {
      return {
        font:{
          fontSize: '20',
          textColor:'#333',
          background:'',
          fontStyles: [],
        },


        fontStylesOptions: fontStylesOptions,


      }
    },
    methods:{
      setFontSize(){

      },
      setColor(){

      }

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




</style>
