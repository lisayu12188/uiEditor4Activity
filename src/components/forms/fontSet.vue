<template>
  <el-form ref="form" label-width="70px" label-position='left' size="small">
    <el-form-item label-width="70px" label="字体：" >
      <el-input-number v-model="fontSize" controls-position="right" :step='.05' size="mini" class="box-width num-box">
      </el-input-number>

      <el-color-picker v-model="fontColor" class="color-picker"></el-color-picker>
      <el-checkbox-group v-model="fontStyles" >
        <el-checkbox-button v-for="fontStyle in fontStylesOptions" :label="fontStyle.type"  :key="fontStyle.type">{{fontStyle.name}}</el-checkbox-button>
      </el-checkbox-group>
    </el-form-item>
</el-form>
</template>
<script>

const fontStylesOptions = [
  {
    type:'bold',
    name:'粗体'
  },
  {
    type:'italic',
    name:'斜体'
  },
  {
    type:'underline',
    name:'下划线'
  }
];

  export default {
    data() {
      return {

        fontStylesOptions: fontStylesOptions,
        // fontStyles:['underline','italic']


      }
    },
    computed:{


      fontSize:{
        get(){
          let idx = this.$store.state.selectedCompIndex;
          return this.$store.state.myPageComps[idx].data.font.fontSize
        },
        set(value){
          this.$store.commit('changeStyle',{key:'font',subKey:'fontSize',value:value} )
        }
      },
      fontColor:{
        get(){
          let idx = this.$store.state.selectedCompIndex;
          return this.$store.state.myPageComps[idx].data.font.color
        },
        set(value){
          this.$store.commit('changeStyle',{key:'font',subKey:'color',value:value} )
        }
      },

      fontStyles:{
        get(){
          let idx = this.$store.state.selectedCompIndex
          let font = this.$store.state.myPageComps[idx].data.font

          let weight = font.weight
          let fontStyle = font.fontStyle
          let textDecoration = font.textDecoration

          let aa = [weight,fontStyle,textDecoration].filter( (val) => {
            return ['normal', 'unset', 'none'].indexOf(val) === -1

          })
          console.log(aa)

          return aa
        },
        set(value){
          let idx = this.$store.state.selectedCompIndex
          let font = this.$store.state.myPageComps[idx].data.font

          console.log(value)


          let mapValue = ['normal','unset','none'].map( (val,idx) => {
            if (value[idx]!= undefined){
            return  val = value[idx]
          }else{
            return  val
          }

          })
          console.log(mapValue)

          mapValue.forEach(v => {
            var name = ({
              'bold': 'weight',
              'normal':'weight',
              'unset':'fontStyle',
              'italic': 'fontStyle',
              'underline': 'textDecoration',
              'none': 'textDecoration'
            })[v];

            if (name) {
              font[name] = v;
            }




          })

            console.log(font)



          this.$store.commit('changeValue',{key:'font',value:font})



        }

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




</style>
