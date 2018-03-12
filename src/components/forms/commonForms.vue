<template>
  <el-form ref="form" label-width="70px" label-position='left' size="small">
  <el-form-item label="排版：">
    <el-radio-group v-model="textPosition">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="middle">居中</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
    </el-radio-group>
  </el-form-item>



  <el-form-item label="外边距：">
    <div>
      上
      <el-input-number v-model="margin.top" controls-position="right" @change="setFontSize" size="mini" class="box-width"></el-input-number>
      下
      <el-input-number v-model="margin.down" controls-position="right" @change="setFontSize" size="mini" class="box-width"></el-input-number>
    </div>


    <div>
      左
      <el-input-number v-model="margin.left" controls-position="right" @change="setFontSize" size="mini" class="box-width"></el-input-number>
      右
      <el-input-number v-model="margin.right" controls-position="right" @change="setFontSize" size="mini" class="box-width"></el-input-number>
    </div>

  </el-form-item>

  <el-form-item label="内边距：" label-suffix='px'>
    <div>
      上
      <el-input-number v-model="padding.top" controls-position="right" @change="setFontSize" size="mini" class="box-width"></el-input-number>

      下
      <el-input-number v-model="padding.down" controls-position="right" @change="setFontSize" size="mini" class="box-width"></el-input-number>
    </div>
    <div>
      左
      <el-input-number v-model="padding.left" controls-position="right" @change="setFontSize" size="mini" class="box-width"></el-input-number>

      右
      <el-input-number v-model="padding.right" controls-position="right" @change="setFontSize" size="mini" class="box-width"></el-input-number>
    </div>
  </el-form-item>

  <el-form-item label="背景：" >
    <el-color-picker v-model="background" @change="setColor"></el-color-picker>
  </el-form-item>

  <el-form-item label="边框：" >
    <el-input-number v-model="border.width" controls-position="right" @change="setFontSize" size="mini" class="box-width num-box" :min="0"></el-input-number>
    <el-select v-model="border.value" clearable placeholder="请选择" size='mini' class="box-width num-box">
     <el-option
       v-for="type in borderTypes"
       :key="type.value"
       :label="type.label"
       :value="type.value">
     </el-option>
   </el-select>

    <el-color-picker v-model="border.color" @change="setColor"></el-color-picker>
  </el-form-item>




</el-form>
</template>
<script>
  const borderTypes = [
    {value:'none',label:'无'},
    {value:'solid',label:'_____'},
    {value:'dashed',label:'-----'}
  ]
  export default {
    data() {
      return {

        textPosition:'left',
        background:'',
        margin:{
          top:20,
          right:0,
          down:0,
          left:0
        },
        padding:{
          top:0,
          right:0,
          down:30,
          left:0
        },
        border:{
          width:'1',
          value:'none',
          color:''
        },

        borderTypes:borderTypes

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
.color-picker{
  margin-bottom:10px;
}



</style>
