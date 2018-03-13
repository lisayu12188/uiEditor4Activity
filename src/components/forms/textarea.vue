<template>
  <div>
    {{title}}
    <el-input
      type="textarea"
      :autosize="{ minRows: 3}"
      placeholder="请输入内容"
      :value="text"
      @input='changeText'
      >
    </el-input>
  </div>
</template>
<div style="margin: 20px 0;"></div>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      title:'段落：',
    }
  },
  computed:{...mapState({
    selectedCompIndex:'selectedCompIndex',
  }),
  text(){
      return this.$store.state.myPageComps[this.selectedCompIndex]['data']['text'];
   }
},


  methods:{
    changeText(value){
      this.$store.commit('changeValue', {key:'text',value:value})
    }

  }
}
</script>
